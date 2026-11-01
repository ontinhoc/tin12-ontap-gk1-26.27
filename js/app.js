/**
 * =========================================================================
 * ON TẬP TIN HỌC 12 - CHUẨN CẤU TRÚC GDPT 2018 (PHẦN I & PHẦN II)
 * js/app.js - Bộ điều khiển luồng hoạt động, tính điểm barem & đồng bộ Webhook
 * =========================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // Trạng thái ứng dụng (Application State)
  const state = {
    currentExamIndex: 0,
    activeQuestions: [], // Danh sách câu hỏi trích xuất cho đề hiện tại (28 câu)
    student: {
      name: "",
      className: ""
    },
    answers: {}, // Lưu câu trả lời: { qId: "A" } hoặc { qId: { a: true, b: false, ... } }
    startTime: null,
    endTime: null,
    timeRemaining: 0,
    timerInterval: null,
    totalPointsPart1: 0,
    totalPointsPart2: 0,
    totalScore: 0
  };

  // DOM Elements
  const screens = {
    start: document.getElementById("screen-start"),
    exam: document.getElementById("screen-exam"),
    result: document.getElementById("screen-result")
  };

  const loginForm = document.getElementById("form-login");
  const studentNameInput = document.getElementById("student-name");
  const studentClassInput = document.getElementById("student-class");
  const selectExam = document.getElementById("select-exam");
  const questionsContainer = document.getElementById("questions-container");
  const timerDisplay = document.getElementById("timer-display");
  const timerBox = document.getElementById("timer-box");
  const progressText = document.getElementById("progress-text");
  const progressBarFill = document.getElementById("progress-bar-fill");
  const btnSubmitExam = document.getElementById("btn-submit-exam");

  // Modal elements
  const modalConfirm = document.getElementById("modal-confirm");
  const modalCancelBtn = document.getElementById("modal-cancel-btn");
  const modalConfirmBtn = document.getElementById("modal-confirm-btn");

  // Khởi chạy ứng dụng
  initApp();

  function initApp() {
    // 1. Phục hồi chỉ số đề thi từ bộ nhớ trình duyệt (nếu có)
    const savedExamIndex = localStorage.getItem("tin12_saved_exam_index");
    if (savedExamIndex !== null && window.EXAM_CONFIG && EXAM_CONFIG.examList) {
      state.currentExamIndex = parseInt(savedExamIndex, 10) % EXAM_CONFIG.examList.length;
    } else {
      state.currentExamIndex = 0;
    }

    // 2. Phục hồi thông tin học sinh
    const savedName = localStorage.getItem("tin12_saved_student_name");
    const savedClass = localStorage.getItem("tin12_saved_student_class");
    if (savedName) studentNameInput.value = savedName;
    if (savedClass) studentClassInput.value = savedClass;

    // 3. Khởi tạo danh sách chọn đề thi từ EXAM_CONFIG
    if (window.EXAM_CONFIG && Array.isArray(EXAM_CONFIG.examList)) {
      selectExam.innerHTML = "";
      EXAM_CONFIG.examList.forEach((exam) => {
        const option = document.createElement("option");
        option.value = exam.id;
        option.textContent = `${exam.code} - ${exam.title}`;
        selectExam.appendChild(option);
      });
    }

    // 4. Cập nhật giao diện ban đầu
    selectExam.value = state.currentExamIndex;
    selectExam.addEventListener("change", (e) => {
      state.currentExamIndex = parseInt(e.target.value, 10);
      localStorage.setItem("tin12_saved_exam_index", state.currentExamIndex);
    });

    if (window.EXAM_CONFIG) {
      document.getElementById("intro-title").textContent = EXAM_CONFIG.title;
      document.getElementById("intro-subject").textContent = EXAM_CONFIG.subject;
      document.getElementById("intro-time").textContent = EXAM_CONFIG.durationMinutes;
      const totalQ = (EXAM_CONFIG.examStructure.part1Count || 24) + (EXAM_CONFIG.examStructure.part2Count || 4);
      document.getElementById("intro-count").textContent = totalQ;
    }

    // Gán sự kiện Form đăng nhập
    loginForm.addEventListener("submit", handleLoginSubmit);

    // Gán sự kiện Nộp bài
    btnSubmitExam.addEventListener("click", handleOpenConfirmModal);
    modalCancelBtn.addEventListener("click", () => modalConfirm.classList.remove("active"));
    modalConfirmBtn.addEventListener("click", () => {
      modalConfirm.classList.remove("active");
      finishExam();
    });

    // Sự kiện nút In kết quả
    document.getElementById("btn-print").addEventListener("click", () => window.print());

    // Sự kiện nút "LÀM TIẾP ĐỀ TIẾP THEO"
    document.getElementById("btn-restart").addEventListener("click", handleNextExam);
  }

  // ==========================================
  // XỬ LÝ CHUYỂN MÀN HÌNH
  // ==========================================
  function showScreen(screenName) {
    Object.values(screens).forEach((screen) => screen.classList.remove("active"));
    screens[screenName].classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ==========================================
  // MÀN HÌNH 1 -> MÀN HÌNH 2: BẮT ĐẦU LÀM BÀI
  // ==========================================
  function handleLoginSubmit(e) {
    e.preventDefault();
    const name = studentNameInput.value.trim();
    const className = studentClassInput.value.trim();

    if (!name || !className) {
      alert("Vui lòng nhập đầy đủ Họ tên và Lớp học!");
      return;
    }

    state.student.name = name;
    state.student.className = className;
    state.startTime = new Date();
    state.answers = {}; // Reset câu trả lời

    // Lưu lại thông tin học sinh
    localStorage.setItem("tin12_saved_student_name", name);
    localStorage.setItem("tin12_saved_student_class", className);

    // Lấy danh sách câu hỏi của đề hiện tại
    const currentExam = EXAM_CONFIG.examList[state.currentExamIndex];
    state.activeQuestions = getQuestionsForExam(state.currentExamIndex);

    // Cập nhật Header bài thi
    document.getElementById("exam-student-name").textContent = name;
    document.getElementById("exam-student-class").textContent = "Lớp: " + className;
    document.getElementById("exam-badge-code").textContent = currentExam.code;

    // Render danh sách câu hỏi
    renderQuestions();

    // Bắt đầu đếm ngược thời gian
    startTimer(EXAM_CONFIG.durationMinutes * 60);

    // Cập nhật tiến độ ban đầu
    updateProgress();

    // Chuyển sang màn hình thi
    showScreen("exam");
  }

  // ==========================================
  // BỘ ĐẾM NGƯỢC THỜI GIAN
  // ==========================================
  function startTimer(durationSeconds) {
    if (state.timerInterval) clearInterval(state.timerInterval);
    state.timeRemaining = durationSeconds;
    updateTimerDisplay();

    state.timerInterval = setInterval(() => {
      state.timeRemaining--;
      updateTimerDisplay();

      // Cảnh báo khi còn dưới 5 phút
      if (state.timeRemaining <= 300) {
        timerBox.classList.add("timer-warning");
      }

      // Hết giờ -> Tự động nộp bài
      if (state.timeRemaining <= 0) {
        clearInterval(state.timerInterval);
        alert("⏱️ Đã hết thời gian làm bài! Hệ thống đang tự động nộp bài của em.");
        finishExam();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const minutes = Math.floor(state.timeRemaining / 60);
    const seconds = state.timeRemaining % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  // ==========================================
  // RENDER DANH SÁCH CÂU HỎI (PHẦN I & PHẦN II)
  // ==========================================
  function renderQuestions() {
    questionsContainer.innerHTML = "";
    let currentSection = "";

    state.activeQuestions.forEach((q, index) => {
      // Tiêu đề phân chia phần thi
      if (q.section && q.section !== currentSection) {
        currentSection = q.section;
        const sectionHeader = document.createElement("div");
        sectionHeader.className = "section-header-banner";
        sectionHeader.innerHTML = `
          <h2>${currentSection}</h2>
          <p class="section-desc">
            ${
              q.type === "multiple_choice"
                ? "Thí sinh chọn một phương án trả lời đúng nhất (A, B, C hoặc D)."
                : "Thí sinh trả lời Đúng hoặc Sai cho mỗi ý a), b), c), d) trong từng câu."
            }
          </p>
        `;
        questionsContainer.appendChild(sectionHeader);
      }

      const qCard = document.createElement("div");
      qCard.className = "question-card";
      qCard.id = `q-card-${q.id}`;

      // DẠNG 1: TRẮC NGHIỆM NHIỀU LỰA CHỌN
      if (q.type === "multiple_choice") {
        let optionsHtml = "";
        q.options.forEach((opt) => {
          optionsHtml += `
            <label class="option-item" for="opt-${q.id}-${opt.key}">
              <input type="radio" 
                     id="opt-${q.id}-${opt.key}" 
                     name="question_${q.id}" 
                     value="${opt.key}" 
                     class="radio-option">
              <span class="option-key">${opt.key}.</span>
              <span class="option-text">${opt.text}</span>
            </label>
          `;
        });

        qCard.innerHTML = `
          <div class="q-header">
            <span class="q-number">Câu ${index + 1}</span>
            <span class="q-points">${q.point ? q.point + ' điểm' : '0.30 điểm'}</span>
          </div>
          <div class="q-content">${q.content}</div>
          <div class="options-group">
            ${optionsHtml}
          </div>
        `;

        // Lắng nghe sự kiện chọn đáp án
        const radios = qCard.querySelectorAll(`input[name="question_${q.id}"]`);
        radios.forEach((radio) => {
          radio.addEventListener("change", (e) => {
            state.answers[q.id] = e.target.value;
            // Highlight lựa chọn
            qCard.querySelectorAll(".option-item").forEach((el) => el.classList.remove("selected"));
            e.target.closest(".option-item").classList.add("selected");
            updateProgress();
          });
        });
      }

      // DẠNG 2: ĐÚNG / SAI (4 Ý a, b, c, d)
      else if (q.type === "true_false") {
        if (!state.answers[q.id]) {
          state.answers[q.id] = {};
        }

        let itemsHtml = "";
        q.items.forEach((item) => {
          itemsHtml += `
            <div class="tf-item-row">
              <div class="tf-text">
                <span class="tf-item-label">${item.id})</span>
                <span>${item.text}</span>
              </div>
              <div class="tf-controls">
                <label class="tf-btn-label">
                  <input type="radio" 
                         name="tf_${q.id}_${item.id}" 
                         value="true" 
                         class="tf-radio">
                  <span class="tf-pill tf-pill-true">Đúng</span>
                </label>
                <label class="tf-btn-label">
                  <input type="radio" 
                         name="tf_${q.id}_${item.id}" 
                         value="false" 
                         class="tf-radio">
                  <span class="tf-pill tf-pill-false">Sai</span>
                </label>
              </div>
            </div>
          `;
        });

        qCard.innerHTML = `
          <div class="q-header">
            <span class="q-number">Câu ${index + 1}</span>
            <span class="q-points">Tối đa 1.0 điểm (4 ý)</span>
          </div>
          <div class="q-content">${q.content}</div>
          <div class="tf-items-wrapper">
            ${itemsHtml}
          </div>
        `;

        // Lắng nghe sự kiện chọn Đúng/Sai
        q.items.forEach((item) => {
          const itemRadios = qCard.querySelectorAll(`input[name="tf_${q.id}_${item.id}"]`);
          itemRadios.forEach((radio) => {
            radio.addEventListener("change", (e) => {
              state.answers[q.id][item.id] = e.target.value === "true";
              updateProgress();
            });
          });
        });
      }

      questionsContainer.appendChild(qCard);
    });
  }

  // ==========================================
  // CẬP NHẬT THANH TIẾN ĐỘ
  // ==========================================
  function updateProgress() {
    let answeredCount = 0;
    const totalCount = state.activeQuestions.length;

    state.activeQuestions.forEach((q) => {
      if (q.type === "multiple_choice") {
        if (state.answers[q.id]) answeredCount++;
      } else if (q.type === "true_false") {
        const subAnswers = state.answers[q.id] || {};
        // Tính là đã làm nếu trả lời đủ 4 ý a, b, c, d
        if (Object.keys(subAnswers).length === q.items.length) {
          answeredCount++;
        }
      }
    });

    const percent = totalCount > 0 ? Math.round((answeredCount / totalCount) * 100) : 0;
    progressText.textContent = `Đã làm: ${answeredCount}/${totalCount}`;
    progressBarFill.style.width = `${percent}%`;
  }

  // ==========================================
  // XÁC NHẬN NỘP BÀI
  // ==========================================
  function handleOpenConfirmModal() {
    let unansweredCount = 0;
    state.activeQuestions.forEach((q) => {
      if (q.type === "multiple_choice") {
        if (!state.answers[q.id]) unansweredCount++;
      } else if (q.type === "true_false") {
        const subAnswers = state.answers[q.id] || {};
        if (Object.keys(subAnswers).length < q.items.length) {
          unansweredCount++;
        }
      }
    });

    const modalMsg = document.getElementById("modal-confirm-msg");
    if (unansweredCount > 0) {
      modalMsg.innerHTML = `⚠️ Em vẫn còn <strong style="color: #ef4444;">${unansweredCount}</strong> câu chưa hoàn thành trọn vẹn.<br>Em có chắc chắn muốn nộp bài ngay bây giờ?`;
    } else {
      modalMsg.innerHTML = `🎉 Tuyệt vời! Em đã hoàn thành đủ tất cả các câu hỏi.<br>Em có chắc chắn muốn nộp bài để xem điểm không?`;
    }

    modalConfirm.classList.add("active");
  }

  // ==========================================
  // CHẤM ĐIỂM & HOÀN THÀNH BÀI THI
  // ==========================================
  function finishExam() {
    if (state.timerInterval) clearInterval(state.timerInterval);
    state.endTime = new Date();

    const durationSeconds = Math.round((state.endTime - state.startTime) / 1000);
    const durationMinutes = Math.max(1, Math.round(durationSeconds / 60));

    let p1Points = 0.0;
    let p2Points = 0.0;
    const evaluationResults = [];

    state.activeQuestions.forEach((q, index) => {
      // 1. Chấm Phần I (Trắc nghiệm nhiều lựa chọn)
      if (q.type === "multiple_choice") {
        const studentChoice = state.answers[q.id] || null;
        const isCorrect = studentChoice === q.correctAnswer;
        const earned = isCorrect ? (q.point !== undefined ? q.point : 0.3) : 0.0;
        p1Points += earned;

        evaluationResults.push({
          index: index + 1,
          id: q.id,
          type: q.type,
          content: q.content,
          options: q.options,
          studentChoice: studentChoice,
          correctAnswer: q.correctAnswer,
          isCorrect: isCorrect,
          earnedPoints: earned,
          maxPoints: q.point !== undefined ? q.point : 0.3,
          explanation: q.explanation || ""
        });
      }

      // 2. Chấm Phần II (Trắc nghiệm Đúng/Sai: barem Bộ GD&ĐT tối đa 1.0đ / câu)
      else if (q.type === "true_false") {
        const studentSubAnswers = state.answers[q.id] || {};
        let correctSubCount = 0;
        const itemsEvaluation = [];

        q.items.forEach((item) => {
          const studentAns = studentSubAnswers[item.id];
          const isItemCorrect = studentAns === item.isCorrect;
          if (isItemCorrect) correctSubCount++;

          itemsEvaluation.push({
            id: item.id,
            text: item.text,
            studentAns: studentAns,
            correctAns: item.isCorrect,
            isCorrect: isItemCorrect
          });
        });

        // Barem chuẩn Bộ GD&ĐT: 0: 0đ | 1: 0.1đ | 2: 0.25đ | 3: 0.5đ | 4: 1.0đ
        const scoringMatrix = EXAM_CONFIG.trueFalseScoringMatrix || {
          0: 0.0,
          1: 0.1,
          2: 0.25,
          3: 0.5,
          4: 1.0
        };
        const earned = scoringMatrix[correctSubCount] || 0.0;
        p2Points += earned;

        evaluationResults.push({
          index: index + 1,
          id: q.id,
          type: q.type,
          content: q.content,
          items: itemsEvaluation,
          correctSubCount: correctSubCount,
          totalSubCount: q.items.length,
          earnedPoints: earned,
          maxPoints: 1.0,
          explanation: q.explanation || ""
        });
      }
    });

    state.totalPointsPart1 = Number(p1Points.toFixed(2));
    state.totalPointsPart2 = Number(p2Points.toFixed(2));
    // Tổng điểm thang 10.0 tuyệt đối (6.0đ Phần I + 4.0đ Phần II)
    state.totalScore = Number((state.totalPointsPart1 + state.totalPointsPart2).toFixed(2));

    // Hiển thị kết quả lên màn hình 3
    renderResultsView(durationMinutes, evaluationResults);

    // Gửi payload ngầm sang Google Apps Script
    syncToGoogleSheets(durationMinutes, evaluationResults);

    // Cập nhật nhãn nút đề tiếp theo
    updateNextExamButtonLabel();

    // Chuyển màn hình
    showScreen("result");
  }

  // Cập nhật nhãn nút "Làm đề tiếp theo"
  function updateNextExamButtonLabel() {
    const nextIdx = (state.currentExamIndex + 1) % EXAM_CONFIG.examList.length;
    const nextExam = EXAM_CONFIG.examList[nextIdx];
    document.getElementById("btn-restart-label").textContent = `Làm tiếp ${nextExam.code} ➔`;
  }

  // ==========================================
  // XỬ LÝ LÀM TIẾP ĐỀ TIẾP THEO
  // ==========================================
  function handleNextExam() {
    state.currentExamIndex = (state.currentExamIndex + 1) % EXAM_CONFIG.examList.length;
    localStorage.setItem("tin12_saved_exam_index", state.currentExamIndex);

    selectExam.value = state.currentExamIndex;
    const nextExam = EXAM_CONFIG.examList[state.currentExamIndex];
    alert(`🎯 Em đã được chuyển sang: ${nextExam.code} (${nextExam.title})!\nNhấn "Bắt đầu làm bài" để tiến hành thi.`);

    showScreen("start");
  }

  // ==========================================
  // RENDER MÀN HÌNH KẾT QUẢ
  // ==========================================
  function renderResultsView(durationMinutes, results) {
    const currentExam = EXAM_CONFIG.examList[state.currentExamIndex];

    document.getElementById("result-student-info").textContent =
      `${state.student.name} - Lớp ${state.student.className}`;
    document.getElementById("result-exam-code").textContent = currentExam.code;

    document.getElementById("score-total-val").textContent = state.totalScore.toFixed(2);
    document.getElementById("score-p1-val").textContent = `${state.totalPointsPart1.toFixed(2)} / 6.0 đ`;
    document.getElementById("score-p2-val").textContent = `${state.totalPointsPart2.toFixed(2)} / 4.0 đ`;
    document.getElementById("score-time-val").textContent = `${durationMinutes} phút`;

    const reviewContainer = document.getElementById("review-container");
    reviewContainer.innerHTML = "";

    results.forEach((res) => {
      const itemEl = document.createElement("div");
      itemEl.className = "review-item";

      // Phần I: Trắc nghiệm 4 lựa chọn
      if (res.type === "multiple_choice") {
        itemEl.classList.add(res.isCorrect ? "status-correct" : "status-wrong");
        itemEl.innerHTML = `
          <div class="review-badge ${res.isCorrect ? "badge-correct" : "badge-wrong"}">
            ${res.isCorrect ? `✓ Đúng (+${res.earnedPoints}đ)` : `✗ Sai (0 đ)`}
          </div>
          <div class="question-title"><strong>Câu ${res.index}:</strong> ${res.content}</div>
          <div class="review-options-summary">
            <div>Lựa chọn của em: <strong>${res.studentChoice || "Chưa chọn"}</strong></div>
            <div>Đáp án đúng: <strong style="color: #10b981;">${res.correctAnswer}</strong></div>
          </div>
          ${res.explanation ? `<div class="explanation-box">💡 <strong>Giải thích:</strong> ${res.explanation}</div>` : ""}
        `;
      }

      // Phần II: Đúng / Sai
      else if (res.type === "true_false") {
        const isPerfect = res.correctSubCount === 4;
        itemEl.classList.add(isPerfect ? "status-correct" : "status-partial");

        let itemsSummaryHtml = "";
        res.items.forEach((it) => {
          const mark = it.isCorrect ? "✓" : "✗";
          const studentAnsStr = it.studentAns === true ? "Đúng" : it.studentAns === false ? "Sai" : "Chưa chọn";
          const correctAnsStr = it.correctAns ? "Đúng" : "Sai";

          itemsSummaryHtml += `
            <div class="review-sub-row ${it.isCorrect ? "sub-correct" : "sub-wrong"}">
              <span><strong>${it.id})</strong> ${it.text}</span>
              <span class="sub-ans-tag">Em chọn: <strong>${studentAnsStr}</strong> | Đáp án: <strong>${correctAnsStr}</strong> (${mark})</span>
            </div>
          `;
        });

        itemEl.innerHTML = `
          <div class="review-badge ${isPerfect ? "badge-correct" : "badge-partial"}">
            Đúng ${res.correctSubCount}/4 ý (+${res.earnedPoints} điểm)
          </div>
          <div class="question-title"><strong>Câu ${res.index}:</strong> ${res.content}</div>
          <div class="review-sub-list">
            ${itemsSummaryHtml}
          </div>
          ${res.explanation ? `<div class="explanation-box">💡 <strong>Giải thích:</strong> ${res.explanation}</div>` : ""}
        `;
      }

      reviewContainer.appendChild(itemEl);
    });
  }

  // ==========================================
  // GỬI KẾT QUẢ SANG GOOGLE APPS SCRIPT
  // ==========================================
  function syncToGoogleSheets(durationMinutes, results) {
    const syncStatus = document.getElementById("sync-status");
    const syncText = document.getElementById("sync-text");

    if (!EXAM_CONFIG.gasWebhookUrl || EXAM_CONFIG.gasWebhookUrl.trim() === "") {
      syncStatus.className = "sync-banner sync-warning";
      syncText.innerHTML = "⚠️ Chưa cấu hình Webhook Google Sheets trong <code>data.js</code>. Điểm được lưu cục bộ trên máy học sinh.";
      return;
    }

    // Tóm tắt kết quả bài làm thành chuỗi văn bản
    let detailsSummary = results
      .map((r) => {
        if (r.type === "multiple_choice") {
          return `C${r.index}: ${r.studentChoice || "Bỏ"}/${r.correctAnswer} (${r.isCorrect ? "Đ" : "S"})`;
        } else if (r.type === "true_false") {
          return `C${r.index}: ${r.correctSubCount}/4 ý (${r.earnedPoints}đ)`;
        }
        return "";
      })
      .join(" | ");

    const currentExam = EXAM_CONFIG.examList[state.currentExamIndex];
    const payload = {
      timestamp: new Date().toLocaleString("vi-VN"),
      studentName: state.student.name,
      studentClass: state.student.className,
      examCode: currentExam.code,
      totalScore: state.totalScore,
      part1Score: state.totalPointsPart1,
      part2Score: state.totalPointsPart2,
      duration: `${durationMinutes} phút`,
      quizDetails: detailsSummary
    };

    syncStatus.className = "sync-banner sync-loading";
    syncText.textContent = "Đang gửi dữ liệu bài làm vào Google Sheets...";

    // Gửi bằng mode: 'no-cors' tránh lỗi kiểm tra miền chéo trình duyệt
    fetch(EXAM_CONFIG.gasWebhookUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(payload)
    })
      .then(() => {
        syncStatus.className = "sync-banner sync-success";
        syncText.textContent = "✅ Đã lưu kết quả bài làm vào Google Sheets thành công!";
      })
      .catch((err) => {
        console.warn("Lỗi khi gửi Google Sheets:", err);
        syncStatus.className = "sync-banner sync-warning";
        syncText.textContent = "⚠️ Không thể kết nối tới Google Sheets. Vui lòng kiểm tra lại đường truyền mạng.";
      });
  }
});
