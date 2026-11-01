/**
 * =========================================================================
 * ON TẬP GIỮA HỌC KỲ I - TIN HỌC 12 (ICT) - NĂM HỌC 2026 - 2027
 * TRƯỜNG THPT SỐ 2 TRẦN CAO VÂN - TỔ CÔNG NGHỆ - TIN HỌC
 * Ngân hàng đề cương: 100 câu Phần I + 20 câu Phần II
 * Tự động chia thành 5 MÃ ĐỀ KHÔNG TRÙNG LẶP (Đề 01 -> Đề 05)
 * Mỗi đề gồm 24 câu: 20 câu Phần I (6.0đ) + 4 câu Phần II (4.0đ) = 10.0đ (45 phút)
 * =========================================================================
 */

const EXAM_CONFIG = {
  title: "ĐỀ CƯƠNG ÔN TẬP GIỮA HỌC KỲ I - TIN HỌC 12",
  subject: "Tin học 12 (ICT) - Trường THPT Số 2 Trần Cao Vân",
  durationMinutes: 45,
  gasWebhookUrl: "https://script.google.com/macros/s/AKfycbwwEkrjXNBQgZqWTB3NVOCXKwoKgrcD3cgoVaPtaWtDcDrGTUxZ5xPVxkAgc0Bi1Fs/exec", // Dán URL Web App Google Apps Script vào đây
  examStructure: {
    part1Count: 20, // 20 câu x 0.30đ = 6.0 điểm
    part2Count: 4,  // 4 câu x 1.0đ = 4.0 điểm
    part3Count: 0   // Không có tự luận
  },
  examList: [
    { id: 0, code: "ĐỀ SỐ 01", title: "Mã đề 101 (Câu 1-20 P1 & Câu 1-4 P2)" },
    { id: 1, code: "ĐỀ SỐ 02", title: "Mã đề 102 (Câu 21-40 P1 & Câu 5-8 P2)" },
    { id: 2, code: "ĐỀ SỐ 03", title: "Mã đề 103 (Câu 41-60 P1 & Câu 9-12 P2)" },
    { id: 3, code: "ĐỀ SỐ 04", title: "Mã đề 104 (Câu 61-80 P1 & Câu 13-16 P2)" },
    { id: 4, code: "ĐỀ SỐ 05", title: "Mã đề 105 (Câu 81-100 P1 & Câu 17-20 P2)" }
  ],
  trueFalseScoringMatrix: {
    0: 0.0,
    1: 0.1,  // Đúng 1 ý: 0.1đ
    2: 0.25, // Đúng 2 ý: 0.25đ
    3: 0.5,  // Đúng 3 ý: 0.5đ
    4: 1.0   // Đúng cả 4 ý: 1.0đ
  }
};

const QUESTION_BANK = {
  // =========================================================================
  // PHẦN I: 100 CÂU TRẮC NGHIỆM 4 LỰA CHỌN (0.3 điểm / câu)
  // =========================================================================
  part1: [
    {
      id: "p1_1",
      content: "Trí tuệ nhân tạo (AI) là một lĩnh vực nghiên cứu thuộc ngành nào?",
      options: [
        { key: "A", text: "Kĩ thuật điện tử." },
        { key: "B", text: "" },
        { key: "C", text: "Khoa học máy tính." },
        { key: "D", text: "Kĩ thuật điều khiển." }
      ],
      correctAnswer: "C",
      point: 0.3,
      lesson: "Bài 1. Làm quen với Trí tuệ nhân tạo  (SGK tr. 5–8)"
    },
    {
      id: "p1_2",
      content: "Dấu hiệu nào dưới đây phù hợp nhất với một hệ thống có ứng dụng AI?",
      options: [
        { key: "A", text: "Thực hiện nhiệm vụ cần đến khả năng trí tuệ như nhận dạng hoặc suy luận." },
        { key: "B", text: "Tự bật thiết bị đúng giờ đã cài trước." },
        { key: "C", text: "Lưu được nhiều tệp trên ổ cứng." },
        { key: "D", text: "Thực hiện một lệnh mỗi khi người dùng nhấn nút." }
      ],
      correctAnswer: "A",
      point: 0.3,
      lesson: "Bài 1. Làm quen với Trí tuệ nhân tạo  (SGK tr. 5–8)"
    },
    {
      id: "p1_3",
      content: "Biểu hiện nào cho thấy một hệ thống AI có khả năng học?",
      options: [
        { key: "A", text: "" },
        { key: "B", text: "Hoạt động nhanh hơn sau khi thay bộ xử lí." },
        { key: "C", text: "" },
        { key: "D", text: "" }
      ],
      correctAnswer: "D",
      point: 0.3,
      lesson: "Bài 1. Làm quen với Trí tuệ nhân tạo  (SGK tr. 5–8)"
    },
    {
      id: "p1_4",
      content: "Trường hợp nào là tự động hóa theo lịch đặt sẵn, chưa đủ cơ sở khẳng định có AI?",
      options: [
        { key: "A", text: "Phần mềm dịch một đoạn văn dựa vào ngữ cảnh." },
        { key: "B", text: "Ứng dụng chuyển lời nói thành văn bản." },
        { key: "C", text: "" },
        { key: "D", text: "Ứng dụng gợi ý bài học dựa trên kết quả học tập." }
      ],
      correctAnswer: "C",
      point: 0.3,
      lesson: "Bài 1. Làm quen với Trí tuệ nhân tạo  (SGK tr. 5–8)"
    },
    {
      id: "p1_5",
      content: "Google Dịch chủ yếu hỗ trợ người dùng thực hiện việc nào?",
      options: [
        { key: "A", text: "Nhận dạng khuôn mặt để mở khóa điện thoại." },
        { key: "B", text: "" },
        { key: "C", text: "Phân phối dữ liệu giữa các mạng máy tính." },
        { key: "D", text: "Phát hiện thiết bị lưu trữ bị hỏng." }
      ],
      correctAnswer: "B",
      point: 0.3,
      lesson: "Bài 1. Làm quen với Trí tuệ nhân tạo  (SGK tr. 5–8)"
    },
    {
      id: "p1_6",
      content: "Ứng dụng nào sử dụng AI để hiểu câu hỏi bằng lời nói và phản hồi người dùng?",
      options: [
        { key: "A", text: "Phần mềm sao lưu tệp theo lịch." },
        { key: "B", text: "" },
        { key: "C", text: "" },
        { key: "D", text: "Trợ lí ảo điều khiển bằng giọng nói." }
      ],
      correctAnswer: "D",
      point: 0.3,
      lesson: "Bài 1. Làm quen với Trí tuệ nhân tạo  (SGK tr. 5–8)"
    },
    {
      id: "p1_7",
      content: "Đặc điểm nào đúng với AI hẹp?",
      options: [
        { key: "A", text: "" },
        { key: "B", text: "" },
        { key: "C", text: "Được thiết kế cho một hoặc một số nhiệm vụ cụ thể." },
        { key: "D", text: "Không thể sử dụng dữ liệu để cải thiện kết quả." }
      ],
      correctAnswer: "C",
      point: 0.3,
      lesson: "Bài 1. Làm quen với Trí tuệ nhân tạo  (SGK tr. 5–8)"
    },
    {
      id: "p1_8",
      content: "Nhận định nào đúng về AI tổng quát ở thời điểm hiện nay?",
      options: [
        { key: "A", text: "Đã được sử dụng phổ biến trong mọi điện thoại." },
        { key: "B", text: "Vẫn là mục tiêu nghiên cứu; chưa có hệ thống đạt trí tuệ đa năng như con người." },
        { key: "C", text: "" },
        { key: "D", text: "" }
      ],
      correctAnswer: "B",
      point: 0.3,
      lesson: "Bài 1. Làm quen với Trí tuệ nhân tạo  (SGK tr. 5–8)"
    },
    {
      id: "p1_9",
      content: "Ứng dụng chuyển lời nói thành văn bản thể hiện rõ nhất khả năng nào của AI?",
      options: [
        { key: "A", text: "Nhận dạng tiếng nói và xử lí ngôn ngữ." },
        { key: "B", text: "Nhận dạng hình ảnh và phân loại vật thể." },
        { key: "C", text: "" },
        { key: "D", text: "Đề xuất đường đi dựa trên vị trí." }
      ],
      correctAnswer: "A",
      point: 0.3,
      lesson: "Bài 1. Làm quen với Trí tuệ nhân tạo  (SGK tr. 5–8)"
    },
    {
      id: "p1_10",
      content: "Đặc trưng nào của AI giúp mô hình dự báo cải thiện kết quả sau khi được huấn luyện bằng dữ liệu phù hợp?",
      options: [
        { key: "A", text: "Khả năng lưu lại toàn bộ dữ liệu đầu vào." },
        { key: "B", text: "Khả năng rút ra kết luận từ các quy tắc cố định." },
        { key: "C", text: "Khả năng trả lời bằng ngôn ngữ tự nhiên." },
        { key: "D", text: "Khả năng học từ dữ liệu để điều chỉnh mô hình." }
      ],
      correctAnswer: "D",
      point: 0.3,
      lesson: "Bài 1. Làm quen với Trí tuệ nhân tạo  (SGK tr. 5–8)"
    },
    {
      id: "p1_11",
      content: "Sự khác nhau cơ bản giữa AI hẹp và AI tổng quát là gì?",
      options: [
        { key: "A", text: "" },
        { key: "B", text: "" },
        { key: "C", text: "" },
        { key: "D", text: "" }
      ],
      correctAnswer: "C",
      point: 0.3,
      lesson: "Bài 1. Làm quen với Trí tuệ nhân tạo  (SGK tr. 5–8)"
    },
    {
      id: "p1_12",
      content: "Điểm khác biệt giữa dịch tự động có sử dụng AI và dịch từng từ theo bảng tra là gì?",
      options: [
        { key: "A", text: "" },
        { key: "B", text: "" },
        { key: "C", text: "" },
        { key: "D", text: "" }
      ],
      correctAnswer: "A",
      point: 0.3,
      lesson: "Bài 1. Làm quen với Trí tuệ nhân tạo  (SGK tr. 5–8)"
    },
    {
      id: "p1_13",
      content: "Hệ thống tưới cây bật theo giờ cố định khác hệ thống tưới có khả năng học của AI ở điểm nào?",
      options: [
        { key: "A", text: "Hệ thống dùng" },
        { key: "B", text: "Hệ thống dùng" },
        { key: "C", text: "Hệ thống dùng" },
        { key: "D", text: "Hệ thống dùng" }
      ],
      correctAnswer: "B",
      point: 0.3,
      lesson: "Bài 1. Làm quen với Trí tuệ nhân tạo  (SGK tr. 5–8)"
    },
    {
      id: "p1_14",
      content: "Một ứng dụng nghe câu tiếng Việt rồi tạo bản dịch tiếng Anh cần kết hợp chủ yếu những khả năng nào của AI?",
      options: [
        { key: "A", text: "Nhận dạng tiếng nói và xử lí ngôn ngữ tự nhiên." },
        { key: "B", text: "Nhận dạng khuôn mặt và suy luận từ hình ảnh." },
        { key: "C", text: "Phân loại ảnh và điều khiển robot." },
        { key: "D", text: "Nhận biết vị trí và tìm đường đi." }
      ],
      correctAnswer: "A",
      point: 0.3,
      lesson: "Bài 1. Làm quen với Trí tuệ nhân tạo  (SGK tr. 5–8)"
    },
    {
      id: "p1_15",
      content: "Một robot có ứng dụng AI dùng cảm biến để nhận biết vật cản rồi tự chọn hướng tránh phù hợp. Hoạt động nào thể hiện rõ nhất việc xử lí thông tin của AI?",
      options: [
        { key: "A", text: "" },
        { key: "B", text: "Phân tích thông tin môi trường và lựa chọn hành động phù hợp." },
        { key: "C", text: "" },
        { key: "D", text: "Hiển thị hình ảnh vật cản cho người dùng điều khiển từ xa." }
      ],
      correctAnswer: "B",
      point: 0.3,
      lesson: "Bài 1. Làm quen với Trí tuệ nhân tạo  (SGK tr. 5–8)"
    },
    {
      id: "p1_16",
      content: "Trong y tế, AI có thể hỗ trợ bác sĩ thực hiện công việc nào?",
      options: [
        { key: "A", text: "Tự kê đơn cho mọi bệnh nhân mà không cần kiểm tra." },
        { key: "B", text: "Thay thế mọi bước thăm khám trực tiếp." },
        { key: "C", text: "" },
        { key: "D", text: "Phân tích ảnh y khoa và thông tin bệnh án để gợi ý chẩn đoán." }
      ],
      correctAnswer: "D",
      point: 0.3,
      lesson: "Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống  (SGK tr. 9–13)"
    },
    {
      id: "p1_17",
      content: "Ứng dụng nào sau đây cho thấy AI được sử dụng trong giao thông?",
      options: [
        { key: "A", text: "Đèn giao thông đổi màu theo chu kì cố định." },
        { key: "B", text: "Xe có hệ thống nhận diện làn đường, vật cản và hỗ trợ điều khiển." },
        { key: "C", text: "" },
        { key: "D", text: "Thiết bị GPS hiển thị vị trí hiện tại trên bản đồ." }
      ],
      correctAnswer: "B",
      point: 0.3,
      lesson: "Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống  (SGK tr. 9–13)"
    },
    {
      id: "p1_18",
      content: "Ví dụ nào thể hiện ứng dụng AI trong giáo dục?",
      options: [
        { key: "A", text: "Gợi ý nội dung học dựa trên kết quả và nhu cầu của từng học sinh." },
        { key: "B", text: "Gửi cùng một bài tập cho mọi học sinh theo danh sách cố định." },
        { key: "C", text: "" },
        { key: "D", text: "Sắp xếp tên học sinh theo thứ tự chữ cái." }
      ],
      correctAnswer: "A",
      point: 0.3,
      lesson: "Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống  (SGK tr. 9–13)"
    },
    {
      id: "p1_19",
      content: "Quan sát hình robot trong dây chuyền sản xuất. Khi được tích hợp AI, hệ thống có thể hỗ trợ công việc nào?",
      options: [
        { key: "A", text: "Lắp ráp hoàn toàn không cần kiểm tra chất lượng." },
        { key: "B", text: "" },
        { key: "C", text: "Nhận biết bất thường và điều chỉnh thao tác dựa trên dữ liệu." },
        { key: "D", text: "Thay thế toàn bộ việc bảo trì thiết bị cơ khí." }
      ],
      correctAnswer: "C",
      point: 0.3,
      lesson: "Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống  (SGK tr. 9–13)"
    },
    {
      id: "p1_20",
      content: "Khả năng có tri thức của AI được thể hiện rõ nhất khi hệ thống làm gì?",
      options: [
        { key: "A", text: "" },
        { key: "B", text: "" },
        { key: "C", text: "" },
        { key: "D", text: "Sử dụng thông tin, kiến thức đã có để giải quyết nhiệm vụ." }
      ],
      correctAnswer: "D",
      point: 0.3,
      lesson: "Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống  (SGK tr. 9–13)"
    },
    {
      id: "p1_21",
      content: "Hoạt động nào thể hiện khả năng suy luận của AI?",
      options: [
        { key: "A", text: "Ghi lại câu trả lời của người dùng." },
        { key: "B", text: "Lưu trữ thông tin theo thời gian." },
        { key: "C", text: "" },
        { key: "D", text: "Sao chép một tệp từ thư mục này sang thư mục khác." }
      ],
      correctAnswer: "C",
      point: 0.3,
      lesson: "Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống  (SGK tr. 9–13)"
    },
    {
      id: "p1_22",
      content: "Trường hợp nào thể hiện khả năng học của AI?",
      options: [
        { key: "A", text: "Mô hình nhận dạng được cải thiện sau khi huấn luyện bằng dữ liệu phù hợp." },
        { key: "B", text: "Máy tính mở cùng một tệp mỗi khi khởi động." },
        { key: "C", text: "Người dùng tự sửa từng quy tắc cho từng trường hợp." },
        { key: "D", text: "" }
      ],
      correctAnswer: "A",
      point: 0.3,
      lesson: "Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống  (SGK tr. 9–13)"
    },
    {
      id: "p1_23",
      content: "Khả năng nổi bật của ChatGPT trong bài học là gì?",
      options: [
        { key: "A", text: "Truyền tín hiệu mạng qua dây cáp." },
        { key: "B", text: "" },
        { key: "C", text: "Thay thế phần cứng của máy tính." },
        { key: "D", text: "Hiểu yêu cầu và tạo phản hồi bằng ngôn ngữ tự nhiên." }
      ],
      correctAnswer: "D",
      point: 0.3,
      lesson: "Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống  (SGK tr. 9–13)"
    },
    {
      id: "p1_24",
      content: "Nguy cơ nào liên quan trực tiếp đến khả năng tạo nội dung của AI?",
      options: [
        { key: "A", text: "Mất kết nối mạng do lỗi cáp." },
        { key: "B", text: "Tạo hình ảnh, giọng nói hoặc video giả mạo có sức thuyết phục." },
        { key: "C", text: "Ổ cứng có thể đầy khi lưu quá nhiều tệp." },
        { key: "D", text: "Máy tính không thể đọc tệp văn bản." }
      ],
      correctAnswer: "B",
      point: 0.3,
      lesson: "Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống  (SGK tr. 9–13)"
    },
    {
      id: "p1_25",
      content: "Điều gì có thể xảy ra khi đưa dữ liệu cá nhân lên một công cụ AI trực tuyến?",
      options: [
        { key: "A", text: "Thông tin có nguy cơ được lưu lại hoặc sử dụng ngoài mong muốn." },
        { key: "B", text: "" },
        { key: "C", text: "Thông tin luôn bị xóa ngay sau mỗi câu hỏi." },
        { key: "D", text: "Mọi công cụ đều mặc nhiên được phép sử dụng dữ liệu của người khác." }
      ],
      correctAnswer: "A",
      point: 0.3,
      lesson: "Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống  (SGK tr. 9–13)"
    },
    {
      id: "p1_26",
      content: "Một hệ thống hỗ trợ bác sĩ xem xét bệnh án và kết quả xét nghiệm để gợi ý chẩn đoán. Hệ thống đang kết hợp chủ yếu những khả năng nào?",
      options: [
        { key: "A", text: "" },
        { key: "B", text: "" },
        { key: "C", text: "Sử dụng tri thức và suy luận từ dữ liệu." },
        { key: "D", text: "Lưu dữ liệu mà không cần phân tích." }
      ],
      correctAnswer: "C",
      point: 0.3,
      lesson: "Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống  (SGK tr. 9–13)"
    },
    {
      id: "p1_27",
      content: "Phân biệt khả năng có tri thức và khả năng suy luận của AI như thế nào cho đúng?",
      options: [
        { key: "A", text: "" },
        { key: "B", text: "" },
        { key: "C", text: "" },
        { key: "D", text: "" }
      ],
      correctAnswer: "B",
      point: 0.3,
      lesson: "Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống  (SGK tr. 9–13)"
    },
    {
      id: "p1_28",
      content: "Vì sao không nên sử dụng ngay mọi thông tin do ChatGPT cung cấp?",
      options: [
        { key: "A", text: "Vì" },
        { key: "B", text: "Vì câu trả lời luôn được lấy nguyên văn từ một trang web." },
        { key: "C", text: "Vì mỗi câu trả lời đều đã có chuyên gia xác nhận." },
        { key: "D", text: "Vì câu trả lời có thể trôi chảy nhưng vẫn chứa thông tin chưa đúng." }
      ],
      correctAnswer: "D",
      point: 0.3,
      lesson: "Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống  (SGK tr. 9–13)"
    },
    {
      id: "p1_29",
      content: "Một chatbot có thể đưa ra lời giải hợp lí nhưng đôi khi sai số liệu. Nhận xét nào phù hợp nhất?",
      options: [
        { key: "A", text: "" },
        { key: "B", text: "" },
        { key: "C", text: "" },
        { key: "D", text: "" }
      ],
      correctAnswer: "C",
      point: 0.3,
      lesson: "Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống  (SGK tr. 9–13)"
    },
    {
      id: "p1_30",
      content: "Vì sao con người vẫn cần kiểm tra những quyết định được AI đề xuất?",
      options: [
        { key: "A", text: "Vì" },
        { key: "B", text: "Vì dữ liệu và cách xử lí của" },
        { key: "C", text: "Vì" },
        { key: "D", text: "Vì kết quả" }
      ],
      correctAnswer: "B",
      point: 0.3,
      lesson: "Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống  (SGK tr. 9–13)"
    },
    {
      id: "p1_31",
      content: "Một số liệu do AI đưa ra khác với tài liệu học tập đáng tin cậy. Em nên làm gì trước khi sử dụng số liệu đó?",
      options: [
        { key: "A", text: "Đối chiếu với nguồn đáng tin cậy và xác minh sự khác biệt." },
        { key: "B", text: "" },
        { key: "C", text: "" },
        { key: "D", text: "Giữ cả hai số liệu mà không cần kiểm tra nguồn." }
      ],
      correctAnswer: "A",
      point: 0.3,
      lesson: "Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống  (SGK tr. 9–13)"
    },
    {
      id: "p1_32",
      content: "Em dùng AI để tham khảo cách giải một bài tập. Cách sử dụng nào phù hợp nhất?",
      options: [
        { key: "A", text: "Nộp nguyên câu trả lời do" },
        { key: "B", text: "" },
        { key: "C", text: "Đưa mật khẩu tài khoản học tập cho" },
        { key: "D", text: "Đọc gợi ý, kiểm tra kiến thức và tự trình bày bài làm của mình." }
      ],
      correctAnswer: "D",
      point: 0.3,
      lesson: "Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống  (SGK tr. 9–13)"
    },
    {
      id: "p1_33",
      content: "Một đoạn ghi âm được cho là giọng giáo viên yêu cầu học sinh chuyển tiền gấp. Em nên làm gì?",
      options: [
        { key: "A", text: "" },
        { key: "B", text: "Liên hệ giáo viên qua kênh chính thức để xác minh trước khi làm theo." },
        { key: "C", text: "Nhắn số tài khoản cá nhân vào nhóm để mọi người kiểm tra." },
        { key: "D", text: "" }
      ],
      correctAnswer: "B",
      point: 0.3,
      lesson: "Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống  (SGK tr. 9–13)"
    },
    {
      id: "p1_34",
      content: "Một bạn đề nghị tải danh sách số điện thoại của lớp lên chatbot để tiện tìm thông tin. Em nên làm gì?",
      options: [
        { key: "A", text: "Tải lên rồi yêu cầu chatbot không lưu dữ liệu." },
        { key: "B", text: "" },
        { key: "C", text: "Không cung cấp số điện thoại của người khác khi chưa được phép." },
        { key: "D", text: "Gửi danh sách cho nhiều chatbot để so sánh kết quả." }
      ],
      correctAnswer: "C",
      point: 0.3,
      lesson: "Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống  (SGK tr. 9–13)"
    },
    {
      id: "p1_35",
      content: "Trường dùng AI gợi ý danh sách học sinh nhận học bổng. Cách nào giúp hạn chế quyết định thiếu công bằng?",
      options: [
        { key: "A", text: "Đối chiếu tiêu chí, dữ liệu và kết quả gợi ý trước khi quyết định." },
        { key: "B", text: "" },
        { key: "C", text: "" },
        { key: "D", text: "" }
      ],
      correctAnswer: "A",
      point: 0.3,
      lesson: "Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống  (SGK tr. 9–13)"
    },
    {
      id: "p1_36",
      content: "Phòng máy dùng cáp mạng để nối nhiều máy tính trong một LAN. Thiết bị nào giúp chuyển dữ liệu đến cổng phù hợp?",
      options: [
        { key: "A", text: "Hub." },
        { key: "B", text: "Router." },
        { key: "C", text: "Modem." },
        { key: "D", text: "Switch." }
      ],
      correctAnswer: "D",
      point: 0.3,
      lesson: "Bài 3. Một số thiết bị mạng thông dụng  (SGK tr. 14–20)"
    },
    {
      id: "p1_37",
      content: "Điểm khác nhau về cách chuyển dữ liệu giữa Switch và Hub là gì?",
      options: [
        { key: "A", text: "Hub xác định cổng nhận, còn Switch phát đến mọi cổng." },
        { key: "B", text: "Switch có thể chuyển dữ liệu đến cổng phù hợp, còn Hub thường phát đến các cổng khác." },
        { key: "C", text: "Switch chỉ dùng cho mạng không dây, còn Hub chỉ dùng cho mạng có dây." },
        { key: "D", text: "Hub định tuyến giữa các mạng, còn Switch cấp địa chỉ IP." }
      ],
      correctAnswer: "B",
      point: 0.3,
      lesson: "Bài 3. Một số thiết bị mạng thông dụng  (SGK tr. 14–20)"
    },
    {
      id: "p1_38",
      content: "Quan sát Hình 3.1. Thành phần nào là môi trường truyền dẫn có dây giữa các thiết bị mạng?",
      options: [
        { key: "A", text: "" },
        { key: "B", text: "Hub." },
        { key: "C", text: "Router." },
        { key: "D", text: "Switch." }
      ],
      correctAnswer: "A",
      point: 0.3,
      lesson: "Bài 3. Một số thiết bị mạng thông dụng  (SGK tr. 14–20)"
    },
    {
      id: "p1_39",
      content: "Thiết bị nào cho phép điện thoại kết nối mạng LAN thông qua Wi-Fi?",
      options: [
        { key: "A", text: "Modem chỉ có cổng mạng có dây." },
        { key: "B", text: "Hub kết nối các cổng Ethernet." },
        { key: "C", text: "Wireless" },
        { key: "D", text: "Switch dùng để kết nối cáp mạng." }
      ],
      correctAnswer: "C",
      point: 0.3,
      lesson: "Bài 3. Một số thiết bị mạng thông dụng  (SGK tr. 14–20)"
    },
    {
      id: "p1_40",
      content: "Khi điện thoại kết nối với WAP, dữ liệu từ điện thoại đến WAP được truyền chủ yếu bằng gì?",
      options: [
        { key: "A", text: "Tín hiệu qua cáp H" },
        { key: "B", text: "Tín hiệu qua cáp mạng đồng." },
        { key: "C", text: "Tín hiệu qua cáp quang." },
        { key: "D", text: "Sóng Wi-Fi." }
      ],
      correctAnswer: "D",
      point: 0.3,
      lesson: "Bài 3. Một số thiết bị mạng thông dụng  (SGK tr. 14–20)"
    },
    {
      id: "p1_41",
      content: "Trong mạng máy tính, nhiệm vụ chính của Router là gì?",
      options: [
        { key: "A", text: "Phát Wi-Fi cho tất cả thiết bị trong mọi trường hợp." },
        { key: "B", text: "" },
        { key: "C", text: "Kết nối các mạng và chọn hướng chuyển dữ liệu đến mạng đích." },
        { key: "D", text: "" }
      ],
      correctAnswer: "C",
      point: 0.3,
      lesson: "Bài 3. Một số thiết bị mạng thông dụng  (SGK tr. 14–20)"
    },
    {
      id: "p1_42",
      content: "Modem có chức năng cơ bản nào?",
      options: [
        { key: "A", text: "" },
        { key: "B", text: "" },
        { key: "C", text: "" },
        { key: "D", text: "" }
      ],
      correctAnswer: "A",
      point: 0.3,
      lesson: "Bài 3. Một số thiết bị mạng thông dụng  (SGK tr. 14–20)"
    },
    {
      id: "p1_43",
      content: "Trong Hình 3.8, giắc cắm nào dùng với cổng mạng Ethernet của máy tính?",
      options: [
        { key: "A", text: "US" },
        { key: "C", text: "H" },
        { key: "B", text: "RJ11." },
        { key: "D", text: "RJ45." }
      ],
      correctAnswer: "D",
      point: 0.3,
      lesson: "Bài 3. Một số thiết bị mạng thông dụng  (SGK tr. 14–20)"
    },
    {
      id: "p1_44",
      content: "Để điện thoại tham gia mạng LAN qua Wi-Fi, thiết bị nào đóng vai trò điểm truy cập không dây?",
      options: [
        { key: "A", text: "Switch." },
        { key: "B", text: "Wireless" },
        { key: "C", text: "Hub." },
        { key: "D", text: "Modem chỉ có kết nối cáp." }
      ],
      correctAnswer: "B",
      point: 0.3,
      lesson: "Bài 3. Một số thiết bị mạng thông dụng  (SGK tr. 14–20)"
    },
    {
      id: "p1_45",
      content: "Để nối cổng RJ45 của máy tính với Switch, em cần dùng loại cáp nào?",
      options: [
        { key: "A", text: "" },
        { key: "B", text: "" },
        { key: "C", text: "" },
        { key: "D", text: "" }
      ],
      correctAnswer: "A",
      point: 0.3,
      lesson: "Bài 3. Một số thiết bị mạng thông dụng  (SGK tr. 14–20)"
    },
    {
      id: "p1_46",
      content: "Phòng máy đang dùng Hub. Khi nhiều máy truyền đồng thời, nhà trường muốn chuyển dữ liệu đến đúng cổng nhận và hạn chế xung đột. Nên thay Hub bằng thiết bị nào?",
      options: [
        { key: "A", text: "Modem." },
        { key: "B", text: "Wireless" },
        { key: "C", text: "Switch." },
        { key: "D", text: "Router dùng để nối mạng khác." }
      ],
      correctAnswer: "C",
      point: 0.3,
      lesson: "Bài 3. Một số thiết bị mạng thông dụng  (SGK tr. 14–20)"
    },
    {
      id: "p1_47",
      content: "Máy tính có cổng RJ45 cần kết nối với Switch trong phòng máy. Em thực hiện cách nào?",
      options: [
        { key: "A", text: "Ghép đôi" },
        { key: "B", text: "Nối hai thiết bị bằng dây H" },
        { key: "C", text: "" },
        { key: "D", text: "" }
      ],
      correctAnswer: "D",
      point: 0.3,
      lesson: "Bài 3. Một số thiết bị mạng thông dụng  (SGK tr. 14–20)"
    },
    {
      id: "p1_48",
      content: "Phòng máy đã nối 20 máy bằng cáp qua Switch. Muốn học sinh dùng điện thoại tham gia cùng LAN qua Wi-Fi, nên bổ sung gì?",
      options: [
        { key: "A", text: "Một Hub để mở rộng số cổng mạng có dây." },
        { key: "B", text: "Một W" },
        { key: "C", text: "Một modem thay cho toàn bộ Switch." },
        { key: "D", text: "Một bộ chuyển US" }
      ],
      correctAnswer: "B",
      point: 0.3,
      lesson: "Bài 3. Một số thiết bị mạng thông dụng  (SGK tr. 14–20)"
    },
    {
      id: "p1_49",
      content: "Hai phòng máy thuộc hai mạng LAN khác nhau cần trao đổi dữ liệu qua mạng trung gian. Nên dùng thiết bị nào để kết nối các mạng?",
      options: [
        { key: "A", text: "Hub nối nhiều máy trong cùng L" },
        { key: "B", text: "Switch chuyển dữ liệu trong một L" },
        { key: "C", text: "Router." },
        { key: "D", text: "W" }
      ],
      correctAnswer: "C",
      point: 0.3,
      lesson: "Bài 3. Một số thiết bị mạng thông dụng  (SGK tr. 14–20)"
    },
    {
      id: "p1_50",
      content: "Quan sát Hình 3.7. Phòng máy sử dụng đường Internet cáp quang. Loại modem nào phù hợp với đường truyền này?",
      options: [
        { key: "A", text: "Modem dùng đường điện thoại" },
        { key: "B", text: "Modem quang." },
        { key: "C", text: "Modem sử dụng mạng di động qua SIM." },
        { key: "D", text: "Modem dùng đường truyền cáp đồng trục." }
      ],
      correctAnswer: "B",
      point: 0.3,
      lesson: "Bài 3. Một số thiết bị mạng thông dụng  (SGK tr. 14–20)"
    },
    {
      id: "p1_51",
      content: "Giao thức mạng là gì?",
      options: [
        { key: "A", text: "" },
        { key: "B", text: "Thiết bị chuyển gói tin từ mạng này sang mạng khác." },
        { key: "C", text: "Loại cáp nối máy tính vào mạng L" },
        { key: "D", text: "Phần mềm quản lí quyền truy cập tệp." }
      ],
      correctAnswer: "A",
      point: 0.3,
      lesson: "Bài 4. Giao thức mạng  (SGK tr. 21–25)"
    },
    {
      id: "p1_52",
      content: "Bộ giao thức nào là nền tảng truyền dữ liệu của Internet?",
      options: [
        { key: "A", text: "HTTP và HTML." },
        { key: "B", text: "" },
        { key: "C", text: "US" },
        { key: "D", text: "T" }
      ],
      correctAnswer: "D",
      point: 0.3,
      lesson: "Bài 4. Giao thức mạng  (SGK tr. 21–25)"
    },
    {
      id: "p1_53",
      content: "Trong bộ TCP/IP, giao thức nào phụ trách đánh địa chỉ và định tuyến gói tin?",
      options: [
        { key: "A", text: "T" },
        { key: "B", text: "IP." },
        { key: "C", text: "HTTP." },
        { key: "D", text: "SMTP." }
      ],
      correctAnswer: "B",
      point: 0.3,
      lesson: "Bài 4. Giao thức mạng  (SGK tr. 21–25)"
    },
    {
      id: "p1_54",
      content: "Giao thức nào giúp truyền dữ liệu tin cậy và có cơ chế truyền lại khi cần?",
      options: [
        { key: "A", text: "IP." },
        { key: "B", text: "" },
        { key: "C", text: "T" },
        { key: "D", text: "HTTP." }
      ],
      correctAnswer: "C",
      point: 0.3,
      lesson: "Bài 4. Giao thức mạng  (SGK tr. 21–25)"
    },
    {
      id: "p1_55",
      content: "Router sử dụng thông tin nào để xác định hướng đi của gói tin IP?",
      options: [
        { key: "A", text: "Địa chỉ IP đích." },
        { key: "B", text: "Địa chỉ email của người gửi." },
        { key: "C", text: "Tên tệp đính kèm." },
        { key: "D", text: "Tên máy tính ghi trong nội dung tệp." }
      ],
      correctAnswer: "A",
      point: 0.3,
      lesson: "Bài 4. Giao thức mạng  (SGK tr. 21–25)"
    },
    {
      id: "p1_56",
      content: "Vì sao máy tính của những hãng khác nhau vẫn có thể truyền dữ liệu qua Internet?",
      options: [
        { key: "A", text: "Vì chúng có cùng dung lượng bộ nhớ." },
        { key: "B", text: "Vì chúng sử dụng cùng một hệ điều hành." },
        { key: "C", text: "Vì mọi máy tính đều có cùng địa chỉ IP." },
        { key: "D", text: "Vì chúng cùng tuân theo các giao thức mạng tương thích." }
      ],
      correctAnswer: "D",
      point: 0.3,
      lesson: "Bài 4. Giao thức mạng  (SGK tr. 21–25)"
    },
    {
      id: "p1_57",
      content: "Vì sao TCP hỗ trợ truyền dữ liệu tin cậy hơn khi có phần dữ liệu bị thất lạc?",
      options: [
        { key: "A", text: "Vì T" },
        { key: "B", text: "Vì T" },
        { key: "C", text: "Vì T" },
        { key: "D", text: "Vì T" }
      ],
      correctAnswer: "C",
      point: 0.3,
      lesson: "Bài 4. Giao thức mạng  (SGK tr. 21–25)"
    },
    {
      id: "p1_58",
      content: "Nhận định nào phân biệt đúng nhiệm vụ của IP và TCP?",
      options: [
        { key: "A", text: "IP truyền lại phần dữ liệu thiếu, còn T" },
        { key: "B", text: "IP hỗ trợ đánh địa chỉ và định tuyến; T" },
        { key: "C", text: "IP đặt quyền truy cập tệp, còn T" },
        { key: "D", text: "IP chỉ kết nối mạng không dây, còn T" }
      ],
      correctAnswer: "B",
      point: 0.3,
      lesson: "Bài 4. Giao thức mạng  (SGK tr. 21–25)"
    },
    {
      id: "p1_59",
      content: "Router cần dựa vào thông tin nào khi chọn hướng chuyển gói tin sang mạng khác?",
      options: [
        { key: "A", text: "Địa chỉ IP đích và thông tin trong bảng định tuyến." },
        { key: "B", text: "Địa chỉ email của người gửi." },
        { key: "C", text: "Tên thư mục chứa tệp đang truyền." },
        { key: "D", text: "Loại trình duyệt web của máy nhận." }
      ],
      correctAnswer: "A",
      point: 0.3,
      lesson: "Bài 4. Giao thức mạng  (SGK tr. 21–25)"
    },
    {
      id: "p1_60",
      content: "Vì sao gói tin có thể đi qua nhiều Router trước khi đến máy đích?",
      options: [
        { key: "A", text: "Vì gói tin luôn phải quay lại máy gửi." },
        { key: "B", text: "Vì mỗi Router chỉ xử lí một tệp dữ liệu." },
        { key: "C", text: "Vì T" },
        { key: "D", text: "Vì máy gửi và máy nhận có thể nằm ở các mạng khác nhau, qua nhiều mạng trung gian." }
      ],
      correctAnswer: "D",
      point: 0.3,
      lesson: "Bài 4. Giao thức mạng  (SGK tr. 21–25)"
    },
    {
      id: "p1_61",
      content: "Máy A cần gửi dữ liệu đến máy B thuộc mạng khác. Router phải xem thông tin nào để chọn hướng chuyển gói tin?",
      options: [
        { key: "A", text: "Địa chỉ IP đích của máy" },
        { key: "B", text: "Tên tài khoản dùng đăng nhập máy" },
        { key: "C", text: "Tên tệp mà máy" },
        { key: "D", text: "Địa chỉ M" }
      ],
      correctAnswer: "A",
      point: 0.3,
      lesson: "Bài 4. Giao thức mạng  (SGK tr. 21–25)"
    },
    {
      id: "p1_62",
      content: "Một gói tin đi từ mạng của trường sang mạng của đơn vị khác. Thiết bị nào chọn hướng chuyển tiếp giữa các mạng?",
      options: [
        { key: "A", text: "Switch dựa vào địa chỉ M" },
        { key: "B", text: "W" },
        { key: "C", text: "Router dựa vào bảng định tuyến." },
        { key: "D", text: "Modem dựa vào tên tệp đang truyền." }
      ],
      correctAnswer: "C",
      point: 0.3,
      lesson: "Bài 4. Giao thức mạng  (SGK tr. 21–25)"
    },
    {
      id: "p1_63",
      content: "Máy B cần kiểm tra khả năng liên lạc qua mạng với máy A có địa chỉ 192.168.1.25. Nên thực hiện lệnh nào?",
      options: [
        { key: "A", text: "ping 192.168.1.25." },
        { key: "B", text: "ipconfig 192.168.1.25." },
        { key: "C", text: "net share 192.168.1.25." },
        { key: "D", text: "\\192.168.1.25." }
      ],
      correctAnswer: "A",
      point: 0.3,
      lesson: "Bài 4. Giao thức mạng  (SGK tr. 21–25)"
    },
    {
      id: "p1_64",
      content: "Khi tải một tệp qua mạng, một số phần dữ liệu bị thất lạc. Thành phần nào hỗ trợ yêu cầu truyền lại phần còn thiếu để tệp được nhận đầy đủ?",
      options: [
        { key: "A", text: "IP – dùng để đánh địa chỉ và định tuyến." },
        { key: "B", text: "" },
        { key: "C", text: "HTTP – quy định cách trao đổi dữ liệu web." },
        { key: "D", text: "T" }
      ],
      correctAnswer: "D",
      point: 0.3,
      lesson: "Bài 4. Giao thức mạng  (SGK tr. 21–25)"
    },
    {
      id: "p1_65",
      content: "Máy ở mạng 192.168.1.0/24 cần gửi gói tin đến máy 10.0.0.8 thuộc mạng khác. Router phải căn cứ vào thông tin nào để chọn hướng chuyển gói tin?",
      options: [
        { key: "A", text: "Địa chỉ email của người nhận." },
        { key: "B", text: "Mạng đích 10.0.0.0/24 và bảng định tuyến." },
        { key: "C", text: "Tên tệp cần gửi." },
        { key: "D", text: "Địa chỉ M" }
      ],
      correctAnswer: "B",
      point: 0.3,
      lesson: "Bài 4. Giao thức mạng  (SGK tr. 21–25)"
    },
    {
      id: "p1_66",
      content: "Muốn máy B truy cập được thư mục do máy A chia sẻ trong cùng LAN, điều kiện cơ bản nào cần có?",
      options: [
        { key: "A", text: "Hai máy phải cùng hãng sản xuất." },
        { key: "B", text: "Hai máy phải đăng nhập cùng tài khoản Windows." },
        { key: "C", text: "Hai máy có kết nối mạng và thư mục được thiết lập chia sẻ, cấp quyền phù hợp." },
        { key: "D", text: "Hai máy phải sử dụng cùng một địa chỉ IP." }
      ],
      correctAnswer: "C",
      point: 0.3,
      lesson: "Bài 5. Thực hành chia sẻ tài nguyên trên mạng  (SGK tr. 26–33)"
    },
    {
      id: "p1_67",
      content: "Trong Windows, thiết lập nào giúp máy tính có thể được phát hiện trong mạng LAN?",
      options: [
        { key: "A", text: "Password protected sharing." },
        { key: "B", text: "Network discovery." },
        { key: "C", text: "Read/Write permission." },
        { key: "D", text: "" }
      ],
      correctAnswer: "B",
      point: 0.3,
      lesson: "Bài 5. Thực hành chia sẻ tài nguyên trên mạng  (SGK tr. 26–33)"
    },
    {
      id: "p1_68",
      content: "Người được cấp quyền Read đối với thư mục chia sẻ thường có thể làm gì?",
      options: [
        { key: "A", text: "Thay đổi quyền của những người dùng khác." },
        { key: "B", text: "Sửa rồi lưu đè tệp trong thư mục." },
        { key: "C", text: "Xóa toàn bộ thư mục trên máy chia sẻ." },
        { key: "D", text: "Mở xem và sao chép tệp, nhưng không sửa tệp gốc tại nơi chia sẻ." }
      ],
      correctAnswer: "D",
      point: 0.3,
      lesson: "Bài 5. Thực hành chia sẻ tài nguyên trên mạng  (SGK tr. 26–33)"
    },
    {
      id: "p1_69",
      content: "Trong Advanced Sharing, thao tác nào dùng để ngừng chia sẻ một thư mục?",
      options: [
        { key: "A", text: "Đổi tên thư mục." },
        { key: "B", text: "" },
        { key: "C", text: "" },
        { key: "D", text: "" }
      ],
      correctAnswer: "C",
      point: 0.3,
      lesson: "Bài 5. Thực hành chia sẻ tài nguyên trên mạng  (SGK tr. 26–33)"
    },
    {
      id: "p1_70",
      content: "Ngoài thư mục và tệp, tài nguyên nào thường được chia sẻ giữa các máy trong LAN?",
      options: [
        { key: "A", text: "" },
        { key: "B", text: "Máy in." },
        { key: "C", text: "" },
        { key: "D", text: "Màn hình đăng nhập Windows." }
      ],
      correctAnswer: "B",
      point: 0.3,
      lesson: "Bài 5. Thực hành chia sẻ tài nguyên trên mạng  (SGK tr. 26–33)"
    },
    {
      id: "p1_71",
      content: "Giáo viên muốn học sinh đọc tài liệu nhưng không sửa bản gốc. Phân biệt quyền Read và Read/Write như thế nào là đúng?",
      options: [
        { key: "A", text: "Read cho phép xem; Read/Write còn cho phép ghi hoặc sửa khi được cấp quyền." },
        { key: "B", text: "Read cho phép sửa, còn Read/Write chỉ cho xem." },
        { key: "C", text: "Read chỉ áp dụng cho máy in, còn Read/Write chỉ áp dụng cho thư mục." },
        { key: "D", text: "Read và Read/Write có quyền giống nhau." }
      ],
      correctAnswer: "A",
      point: 0.3,
      lesson: "Bài 5. Thực hành chia sẻ tài nguyên trên mạng  (SGK tr. 26–33)"
    },
    {
      id: "p1_72",
      content: "Vì sao khi bật Network discovery, các máy tính cùng LAN dễ tìm thấy nhau hơn trong File Explorer?",
      options: [
        { key: "A", text: "Vì có thể nhìn thấy các máy được phát hiện trong mục Network." },
        { key: "B", text: "Vì mọi thư mục cá nhân tự động có quyền Read/Write." },
        { key: "C", text: "Vì mỗi máy tự đổi sang cùng địa chỉ IP." },
        { key: "D", text: "Vì kết nối mạng không còn yêu cầu quyền truy cập." }
      ],
      correctAnswer: "A",
      point: 0.3,
      lesson: "Bài 5. Thực hành chia sẻ tài nguyên trên mạng  (SGK tr. 26–33)"
    },
    {
      id: "p1_73",
      content: "Giáo viên chia sẻ một thư mục để học sinh tải tài liệu về nhưng không sửa bản gốc. Nên cấp quyền nào?",
      options: [
        { key: "A", text: "Read/Write." },
        { key: "B", text: "Full" },
        { key: "C", text: "" },
        { key: "D", text: "Read." }
      ],
      correctAnswer: "D",
      point: 0.3,
      lesson: "Bài 5. Thực hành chia sẻ tài nguyên trên mạng  (SGK tr. 26–33)"
    },
    {
      id: "p1_74",
      content: "Khi cần thiết lập chia sẻ một thư mục trong Windows, lựa chọn nào đưa em đến các thiết lập phù hợp?",
      options: [
        { key: "A", text: "Mở Properties rồi chọn General." },
        { key: "B", text: "Mở Properties rồi chọn Sharing." },
        { key: "C", text: "Mở Properties rồi chọn" },
        { key: "D", text: "Mở Properties rồi chọn Previous Versions." }
      ],
      correctAnswer: "B",
      point: 0.3,
      lesson: "Bài 5. Thực hành chia sẻ tài nguyên trên mạng  (SGK tr. 26–33)"
    },
    {
      id: "p1_75",
      content: "Học sinh mở được tệp trong thư mục chia sẻ nhưng không lưu được thay đổi vào đó. Nguyên nhân nào phù hợp nhất?",
      options: [
        { key: "A", text: "Máy đang được phát hiện trong Network." },
        { key: "B", text: "Máy dùng cáp mạng thay vì Wi-Fi." },
        { key: "C", text: "Tài khoản chỉ được cấp quyền đọc, chưa được cấp quyền ghi." },
        { key: "D", text: "Tệp được mở thông qua File Explorer." }
      ],
      correctAnswer: "C",
      point: 0.3,
      lesson: "Bài 5. Thực hành chia sẻ tài nguyên trên mạng  (SGK tr. 26–33)"
    },
    {
      id: "p1_76",
      content: "Giáo viên muốn giữ nguyên dữ liệu nhưng ngừng cho máy khác truy cập thư mục đã chia sẻ. Nên làm gì?",
      options: [
        { key: "A", text: "Xóa các tệp trong thư mục chia sẻ." },
        { key: "B", text: "" },
        { key: "C", text: "" },
        { key: "D", text: "Đổi tên thư mục nhưng vẫn giữ thiết lập chia sẻ." }
      ],
      correctAnswer: "B",
      point: 0.3,
      lesson: "Bài 5. Thực hành chia sẻ tài nguyên trên mạng  (SGK tr. 26–33)"
    },
    {
      id: "p1_77",
      content: "Một nhóm cần vừa đọc vừa chỉnh sửa nội dung tệp trong thư mục chia sẻ. Nên cấp quyền nào?",
      options: [
        { key: "A", text: "Read." },
        { key: "B", text: "Guest read-only." },
        { key: "C", text: "View only." },
        { key: "D", text: "Read/Write." }
      ],
      correctAnswer: "D",
      point: 0.3,
      lesson: "Bài 5. Thực hành chia sẻ tài nguyên trên mạng  (SGK tr. 26–33)"
    },
    {
      id: "p1_78",
      content: "Máy B nhìn thấy máy A trong Network nhưng khi mở thư mục BAITAP thì xuất hiện thông báo không có quyền truy cập. Nên kiểm tra điều gì trước?",
      options: [
        { key: "A", text: "Quyền chia sẻ và quyền truy cập của tài khoản đang dùng." },
        { key: "B", text: "Địa chỉ IP của máy" },
        { key: "C", text: "Tên hiển thị của máy" },
        { key: "D", text: "Thư mục" }
      ],
      correctAnswer: "A",
      point: 0.3,
      lesson: "Bài 5. Thực hành chia sẻ tài nguyên trên mạng  (SGK tr. 26–33)"
    },
    {
      id: "p1_79",
      content: "Máy in nối với máy A đã được chia sẻ trong LAN. Để in từ máy B, thao tác phù hợp nhất là gì?",
      options: [
        { key: "A", text: "" },
        { key: "B", text: "" },
        { key: "C", text: "Thêm máy in được chia sẻ qua mạng và gửi lệnh in." },
        { key: "D", text: "Đổi quyền của thư mục chia sẻ sang Read/Write." }
      ],
      correctAnswer: "C",
      point: 0.3,
      lesson: "Bài 5. Thực hành chia sẻ tài nguyên trên mạng  (SGK tr. 26–33)"
    },
    {
      id: "p1_80",
      content: "Máy A có địa chỉ 192.168.1.25 và đã chia sẻ thư mục. Để xem tài nguyên của máy A từ thanh địa chỉ File Explorer trên máy B, nên nhập gì?",
      options: [
        { key: "A", text: "http://192.168.1.25." },
        { key: "B", text: "ping 192.168.1.25." },
        { key: "C", text: "ipconfig 192.168.1.25." },
        { key: "D", text: "\\192.168.1.25." }
      ],
      correctAnswer: "D",
      point: 0.3,
      lesson: "Bài 5. Thực hành chia sẻ tài nguyên trên mạng  (SGK tr. 26–33)"
    },
    {
      id: "p1_81",
      content: "Giao tiếp trong không gian mạng là gì?",
      options: [
        { key: "A", text: "Trao đổi thông tin khi gặp mặt trực tiếp." },
        { key: "B", text: "Trao đổi thông tin qua điện thoại không kết nối mạng." },
        { key: "C", text: "Trao đổi thông tin thông qua mạng máy tính và các dịch vụ trực tuyến." },
        { key: "D", text: "Trao đổi thông tin qua thư giấy." }
      ],
      correctAnswer: "C",
      point: 0.3,
      lesson: "Bài 6. Giao tiếp và ứng xử trong không gian mạng  (SGK tr. 34–38)"
    },
    {
      id: "p1_82",
      content: "Ưu điểm nào thường có khi trao đổi qua mạng?",
      options: [
        { key: "A", text: "" },
        { key: "B", text: "Mọi thông tin gửi qua mạng đều được giữ bí mật." },
        { key: "C", text: "Nội dung trao đổi luôn được hai bên hiểu giống nhau." },
        { key: "D", text: "Người dùng không cần chú ý bảo vệ thông tin cá nhân." }
      ],
      correctAnswer: "A",
      point: 0.3,
      lesson: "Bài 6. Giao tiếp và ứng xử trong không gian mạng  (SGK tr. 34–38)"
    },
    {
      id: "p1_83",
      content: "Hạn chế nào dễ gặp khi chỉ trao đổi bằng tin nhắn văn bản?",
      options: [
        { key: "A", text: "Không thể chuyển tệp tài liệu kèm tin nhắn." },
        { key: "B", text: "Không thể trao đổi giữa những người ở xa." },
        { key: "C", text: "Không thể trả lời khi đang dùng thiết bị di động." },
        { key: "D", text: "Thiếu giọng điệu, nét mặt nên nội dung có thể bị hiểu nhầm." }
      ],
      correctAnswer: "D",
      point: 0.3,
      lesson: "Bài 6. Giao tiếp và ứng xử trong không gian mạng  (SGK tr. 34–38)"
    },
    {
      id: "p1_84",
      content: "Hành vi nào thể hiện sự tôn trọng người khác trong không gian mạng?",
      options: [
        { key: "A", text: "" },
        { key: "B", text: "Góp ý lịch sự và hỗ trợ người gặp khó khăn." },
        { key: "C", text: "" },
        { key: "D", text: "Đăng lại tin nhắn riêng mà chưa được đồng ý." }
      ],
      correctAnswer: "B",
      point: 0.3,
      lesson: "Bài 6. Giao tiếp và ứng xử trong không gian mạng  (SGK tr. 34–38)"
    },
    {
      id: "p1_85",
      content: "Nhận được tin trường sẽ nghỉ học ngày mai nhưng chưa có thông báo chính thức. Em nên làm gì?",
      options: [
        { key: "A", text: "Kiểm tra kênh thông tin của trường trước khi tin hoặc chia sẻ." },
        { key: "B", text: "" },
        { key: "C", text: "Hỏi người gửi có nhiều người theo dõi hay không." },
        { key: "D", text: "Đăng lại kèm chữ “chưa rõ” để mọi người tự quyết định." }
      ],
      correctAnswer: "A",
      point: 0.3,
      lesson: "Bài 6. Giao tiếp và ứng xử trong không gian mạng  (SGK tr. 34–38)"
    },
    {
      id: "p1_86",
      content: "Vì sao giao tiếp qua mạng có thể giúp tiết kiệm thời gian di chuyển?",
      options: [
        { key: "A", text: "Vì nội dung trao đổi không cần chuẩn bị." },
        { key: "B", text: "Vì giao tiếp trực tuyến luôn tốt hơn gặp trực tiếp." },
        { key: "C", text: "Vì những người ở xa vẫn có thể trao đổi mà không phải đến cùng một địa điểm." },
        { key: "D", text: "Vì mọi người đều sử dụng đường truyền có cùng tốc độ." }
      ],
      correctAnswer: "C",
      point: 0.3,
      lesson: "Bài 6. Giao tiếp và ứng xử trong không gian mạng  (SGK tr. 34–38)"
    },
    {
      id: "p1_87",
      content: "Vì sao tin nhắn văn bản đôi khi dễ bị hiểu sai hơn lời nói khi gặp trực tiếp?",
      options: [
        { key: "A", text: "Vì người nhận không được phép trả lời ngay." },
        { key: "B", text: "Vì mọi tin nhắn đều tự thay đổi nội dung." },
        { key: "C", text: "Vì tin nhắn thường thiếu giọng điệu và nét mặt để hiểu đúng ý người gửi." },
        { key: "D", text: "Vì tin nhắn không thể chứa câu giải thích." }
      ],
      correctAnswer: "C",
      point: 0.3,
      lesson: "Bài 6. Giao tiếp và ứng xử trong không gian mạng  (SGK tr. 34–38)"
    },
    {
      id: "p1_88",
      content: "Một tin nhắn ngắn khiến bạn trong nhóm học tập hiểu nhầm ý em. Em nên phản hồi như thế nào?",
      options: [
        { key: "A", text: "Trả lời ngắn hơn để kết thúc cuộc trao đổi." },
        { key: "B", text: "Giải thích rõ ý bằng lời lịch sự và hỏi lại để hai bên hiểu nhau." },
        { key: "C", text: "" },
        { key: "D", text: "Không trả lời và cho rằng bạn đã cố tình hiểu sai." }
      ],
      correctAnswer: "B",
      point: 0.3,
      lesson: "Bài 6. Giao tiếp và ứng xử trong không gian mạng  (SGK tr. 34–38)"
    },
    {
      id: "p1_89",
      content: "Vì sao không nên chia sẻ tiếp bức ảnh cắt ghép dùng để chế giễu một bạn học?",
      options: [
        { key: "A", text: "Vì ảnh có thể mất chất lượng khi chia sẻ nhiều lần." },
        { key: "B", text: "Vì ảnh sẽ tự biến mất khỏi nhóm ban đầu." },
        { key: "C", text: "Vì chỉ người trong nhóm ban đầu mới nhìn thấy nội dung ảnh." },
        { key: "D", text: "Vì việc chia sẻ lại có thể làm tăng số người thấy ảnh và gây tổn thương cho bạn." }
      ],
      correctAnswer: "D",
      point: 0.3,
      lesson: "Bài 6. Giao tiếp và ứng xử trong không gian mạng  (SGK tr. 34–38)"
    },
    {
      id: "p1_90",
      content: "Khi tranh luận trên diễn đàn học tập, cách phản hồi nào phù hợp nhất?",
      options: [
        { key: "A", text: "" },
        { key: "B", text: "Trao đổi bằng lí lẽ, tôn trọng quan điểm khác và không công kích cá nhân." },
        { key: "C", text: "Đăng thông tin riêng tư của người bất đồng để tăng sức thuyết phục." },
        { key: "D", text: "" }
      ],
      correctAnswer: "B",
      point: 0.3,
      lesson: "Bài 6. Giao tiếp và ứng xử trong không gian mạng  (SGK tr. 34–38)"
    },
    {
      id: "p1_91",
      content: "HTML là tên viết tắt của cụm từ nào?",
      options: [
        { key: "A", text: "HyperText Markup Language." },
        { key: "B", text: "HyperText Transfer Protocol." },
        { key: "C", text: "Hyperlink Management Language." },
        { key: "D", text: "High-level Text Machine Language." }
      ],
      correctAnswer: "A",
      point: 0.3,
      lesson: "Bài 7. HTML và cấu trúc trang web  (SGK tr. 39–42 (nội dung cơ bản tiết 14))"
    },
    {
      id: "p1_92",
      content: "Trình duyệt dựa vào thành phần nào để đọc và hiển thị một trang HTML?",
      options: [
        { key: "A", text: "Một tệp ảnh chụp toàn bộ trang." },
        { key: "B", text: "" },
        { key: "C", text: "Tệp cấu hình địa chỉ IP của thiết bị." },
        { key: "D", text: "Mã nguồn HTML gồm văn bản và các thẻ đánh dấu." }
      ],
      correctAnswer: "D",
      point: 0.3,
      lesson: "Bài 7. HTML và cấu trúc trang web  (SGK tr. 39–42 (nội dung cơ bản tiết 14))"
    },
    {
      id: "p1_93",
      content: "Phần tử nào bao bọc toàn bộ tài liệu HTML?",
      options: [
        { key: "A", text: "<head>." },
        { key: "B", text: "<html>." },
        { key: "C", text: "<body>." },
        { key: "D", text: "<title>." }
      ],
      correctAnswer: "B",
      point: 0.3,
      lesson: "Bài 7. HTML và cấu trúc trang web  (SGK tr. 39–42 (nội dung cơ bản tiết 14))"
    },
    {
      id: "p1_94",
      content: "Trong một trang HTML, nội dung chính hiển thị cho người đọc thường nằm trong phần tử nào?",
      options: [
        { key: "A", text: "<title>." },
        { key: "B", text: "<meta>." },
        { key: "C", text: "<body>." },
        { key: "D", text: "<head>." }
      ],
      correctAnswer: "C",
      point: 0.3,
      lesson: "Bài 7. HTML và cấu trúc trang web  (SGK tr. 39–42 (nội dung cơ bản tiết 14))"
    },
    {
      id: "p1_95",
      content: "Thẻ nào xác định tiêu đề thường hiển thị trên tab trình duyệt?",
      options: [
        { key: "A", text: "<title>." },
        { key: "B", text: "<p>." },
        { key: "C", text: "<h1>." },
        { key: "D", text: "<body>." }
      ],
      correctAnswer: "A",
      point: 0.3,
      lesson: "Bài 7. HTML và cấu trúc trang web  (SGK tr. 39–42 (nội dung cơ bản tiết 14))"
    },
    {
      id: "p1_96",
      content: "Một trang HTML có dòng <title>Góc học tập</title>. Khi mở trang bằng trình duyệt, chữ “Góc học tập” thường xuất hiện ở đâu?",
      options: [
        { key: "A", text: "Trong đoạn văn đầu tiên của trang." },
        { key: "B", text: "Trên tab trình duyệt." },
        { key: "C", text: "Ở dòng tiêu đề <h1> trong phần thân trang." },
        { key: "D", text: "Trong mọi đường liên kết của trang." }
      ],
      correctAnswer: "B",
      point: 0.3,
      lesson: "Bài 7. HTML và cấu trúc trang web  (SGK tr. 39–42 (nội dung cơ bản tiết 14))"
    },
    {
      id: "p1_97",
      content: "Cho đoạn mã HTML bên dưới. Khi mở trang bằng trình duyệt, nội dung văn bản nào xuất hiện trong vùng hiển thị chính?",
      options: [
        { key: "A", text: "Xin chào." },
        { key: "B", text: "Nguyễn Văn" },
        { key: "C", text: "Xin chào Nguyễn Văn" },
        { key: "D", text: "Không có nội dung văn bản." }
      ],
      correctAnswer: "A",
      point: 0.3,
      lesson: "Bài 7. HTML và cấu trúc trang web  (SGK tr. 39–42 (nội dung cơ bản tiết 14))"
    },
    {
      id: "p1_98",
      content: "Quan sát cấu trúc mã HTML ở Hình 7.2. Muốn sửa nội dung đoạn văn người đọc nhìn thấy trên trang, em cần sửa chủ yếu trong phần nào?",
      options: [
        { key: "A", text: "<!" },
        { key: "B", text: "<head> ... </head>." },
        { key: "C", text: "<title> ... </title>." },
        { key: "D", text: "<body> ... </body>." }
      ],
      correctAnswer: "D",
      point: 0.3,
      lesson: "Bài 7. HTML và cấu trúc trang web  (SGK tr. 39–42 (nội dung cơ bản tiết 14))"
    },
    {
      id: "p1_99",
      content: "Để hiển thị đoạn văn “Xin chào” trong phần thân trang HTML, cách viết nào đúng?",
      options: [
        { key: "A", text: "<head><p>Xin chào</p></head>." },
        { key: "B", text: "<title><p>Xin chào</p></title>." },
        { key: "C", text: "<body><p>Xin chào</p></body>." },
        { key: "D", text: "<html><title>Xin chào</title></html>." }
      ],
      correctAnswer: "C",
      point: 0.3,
      lesson: "Bài 7. HTML và cấu trúc trang web  (SGK tr. 39–42 (nội dung cơ bản tiết 14))"
    },
    {
      id: "p1_100",
      content: "Tệp HTML đã có cấu trúc <html><head>...</head><body>...</body></html>. Muốn thêm đoạn văn mới để hiển thị trong trang, em đặt thẻ <p> ở đâu?",
      options: [
        { key: "A", text: "Trong <head>." },
        { key: "B", text: "Trong <title>." },
        { key: "C", text: "Sau </html>." },
        { key: "D", text: "" }
      ],
      correctAnswer: "D",
      point: 0.3,
      lesson: "Bài 7. HTML và cấu trúc trang web  (SGK tr. 39–42 (nội dung cơ bản tiết 14))"
    }
  ],

  // =========================================================================
  // PHẦN II: 20 CÂU TRẮC NGHIỆM ĐÚNG / SAI (Tối đa 1.0 điểm / câu)
  // =========================================================================
  part2: [
    {
      id: "p2_1",
      content: "Nhóm học sinh trao đổi về các khả năng có tri thức, suy luận và học của AI.",
      items: [
        { id: "a", text: "(NB) Chỉ lưu trữ nhiều tệp mà không biết khai thác thông tin chưa đủ để chứng tỏ khả năng có tri thức của AI là sai.", isCorrect: false },
        { id: "b", text: "(TH) Từ dữ kiện đã có, AI có thể suy luận để đưa ra một kết luận mới.", isCorrect: true },
        { id: "c", text: "(TH) Hệ thống chỉ ghi nhớ dữ liệu thì chắc chắn suy luận được như một hệ thống AI.", isCorrect: false },
        { id: "d", text: "(VD) Nếu câu giải thích của AI chưa rõ, học sinh nên hỏi tiếp và đối chiếu với tài liệu học tập.", isCorrect: true }
      ],
      lesson: "Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống  (SGK tr. 9–13)"
    },
    {
      id: "p2_2",
      content: "Nhóm học sinh thảo luận về việc sử dụng AI trong y tế và giáo dục.",
      items: [
        { id: "a", text: "(NB) Trong y tế, đề xuất chẩn đoán của AI có thể dùng thay hoàn toàn kết luận của bác sĩ.", isCorrect: false },
        { id: "b", text: "(TH) Ứng dụng giao cùng một bài tập cố định cho tất cả học sinh mà không xét dữ liệu học tập đã thể hiện việc cá nhân hóa học tập.", isCorrect: false },
        { id: "c", text: "(TH) Khi có gợi ý của AI, bác sĩ không cần kiểm tra lại hồ sơ và kết quả xét nghiệm.", isCorrect: false },
        { id: "d", text: "(VD) Nếu công cụ AI cho kết quả khác nhận định chuyên môn, người sử dụng cần kiểm tra lại trước khi quyết định.", isCorrect: true }
      ],
      lesson: "Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống  (SGK tr. 9–13)"
    },
    {
      id: "p2_3",
      content: "Một học sinh dùng ChatGPT để tham khảo khi làm bài tập.",
      items: [
        { id: "a", text: "(NB) ChatGPT là ví dụ về hệ thống AI có thể trao đổi bằng ngôn ngữ tự nhiên.", isCorrect: true },
        { id: "b", text: "(TH) Câu trả lời trình bày mạch lạc vẫn có thể chứa thông tin không chính xác.", isCorrect: true },
        { id: "c", text: "(TH) Chỉ cần ChatGPT nêu tên một nguồn tài liệu thì số liệu trong câu trả lời chắc chắn đúng.", isCorrect: false },
        { id: "d", text: "(VD) Khi AI đưa ra số liệu lạ, học sinh nên đối chiếu với nguồn đáng tin cậy trước khi sử dụng.", isCorrect: true }
      ],
      lesson: "Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống  (SGK tr. 9–13)"
    },
    {
      id: "p2_4",
      content: "Lớp thảo luận về hình ảnh giả mạo và trách nhiệm sử dụng AI.",
      items: [
        { id: "a", text: "(NB) Hình ảnh do AI tạo ra luôn có dấu hiệu giả rõ ràng nên dễ nhận biết bằng mắt thường.", isCorrect: false },
        { id: "b", text: "(TH) Một hình ảnh trông chân thực vẫn có thể được tạo hoặc chỉnh sửa bằng AI.", isCorrect: true },
        { id: "c", text: "(TH) Video có giọng nói giống người quen là bằng chứng đủ để xác nhận họ đã nói những lời trong video.", isCorrect: false },
        { id: "d", text: "(VD) Khi nhận video nghi giả mạo để yêu cầu chuyển tiền, nên xác minh bằng kênh liên hệ đáng tin cậy.", isCorrect: true }
      ],
      lesson: "Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống  (SGK tr. 9–13)"
    },
    {
      id: "p2_5",
      content: "Nhóm học sinh đánh giá lợi ích và giới hạn khi dùng AI hỗ trợ ra quyết định.",
      items: [
        { id: "a", text: "(NB) AI hiện nay chỉ có ứng dụng trong ngành khoa học máy tính, chưa được dùng trong y tế.", isCorrect: false },
        { id: "b", text: "(TH) Dữ liệu huấn luyện có nhiều ví dụ thì hệ thống AI chắc chắn không còn sai lệch.", isCorrect: false },
        { id: "c", text: "(TH) Nếu AI xử lí được nhiều hồ sơ thì đề xuất của nó đương nhiên công bằng với mọi học sinh.", isCorrect: false },
        { id: "d", text: "(VD) Khi xét học bổng bằng công cụ AI, nhà trường cần rà soát tiêu chí và kết quả trước khi quyết định.", isCorrect: true }
      ],
      lesson: "Bài 2. Trí tuệ nhân tạo trong khoa học và đời sống  (SGK tr. 9–13)"
    },
    {
      id: "p2_6",
      content: "Học sinh nhận xét về giao thức mạng và việc gửi dữ liệu qua các mạng khác nhau.",
      items: [
        { id: "a", text: "(NB) Giao thức mạng quy định cách các thiết bị trao đổi dữ liệu.", isCorrect: true },
        { id: "b", text: "(TH) IP hỗ trợ việc đánh địa chỉ và định tuyến gói tin.", isCorrect: true },
        { id: "c", text: "(VD) Khi gửi gói tin đến mạng khác, router có thể dựa vào địa chỉ IP đích để chọn hướng chuyển tiếp.", isCorrect: true },
        { id: "d", text: "(VD) Nếu hai thiết bị dùng giao thức không tương thích, đổi tên tệp đang gửi là đủ để chúng giao tiếp đúng.", isCorrect: false }
      ],
      lesson: "Bài 4. Giao thức mạng  (SGK tr. 21–25)"
    },
    {
      id: "p2_7",
      content: "Nhóm học sinh so sánh vai trò của IP và TCP.",
      items: [
        { id: "a", text: "(NB) IP và TCP đều thuộc bộ giao thức TCP/IP.", isCorrect: true },
        { id: "b", text: "(TH) TCP định tuyến theo địa chỉ IP đích, còn IP kiểm tra và yêu cầu truyền lại phần dữ liệu thiếu.", isCorrect: false },
        { id: "c", text: "(VD) Khi truyền một tệp bị thiếu dữ liệu, cơ chế TCP có thể hỗ trợ truyền lại phần thiếu.", isCorrect: true },
        { id: "d", text: "(VD) Khi gửi dữ liệu sang mạng khác, TCP có thể thay hoàn toàn vai trò định tuyến của IP.", isCorrect: false }
      ],
      lesson: "Bài 4. Giao thức mạng  (SGK tr. 21–25)"
    },
    {
      id: "p2_8",
      content: "Quan sát sơ đồ gồm các LAN và những router trung gian, học sinh nhận xét.",
      items: [
        { id: "a", text: "(NB) Router là thiết bị có thể kết nối các mạng khác nhau.", isCorrect: true },
        { id: "b", text: "(TH) Switch thường kết nối thiết bị trong LAN, còn Router có thể chuyển dữ liệu giữa các mạng.", isCorrect: true },
        { id: "c", text: "(VD) Trong sơ đồ, dữ liệu từ máy ở LAN bên trái đến máy ở LAN bên phải có thể đi qua các router trung gian.", isCorrect: true },
        { id: "d", text: "(VD) Muốn cho các LAN trong sơ đồ liên lạc với nhau, chỉ cần thay mọi router bằng một WAP mà không đổi cấu hình mạng.", isCorrect: false }
      ],
      lesson: "Bài 4. Giao thức mạng  (SGK tr. 21–25)"
    },
    {
      id: "p2_9",
      content: "Máy tính ở một LAN cần gửi dữ liệu đến máy tính thuộc LAN khác.",
      items: [
        { id: "a", text: "(NB) Địa chỉ IP của thiết bị tự động cho biết họ tên thật của người đang dùng máy.", isCorrect: false },
        { id: "b", text: "(TH) Router chỉ cần biết địa chỉ IP nguồn, không cần xét IP đích để quyết định hướng chuyển gói tin.", isCorrect: false },
        { id: "c", text: "(VD) Khi chuyển gói tin sang mạng khác, router cần xem thông tin mạng đích để chọn đường đi.", isCorrect: true },
        { id: "d", text: "(VD) Nếu hai máy thuộc hai LAN khác nhau, chỉ cần nối chúng qua một Hub là Hub sẽ định tuyến gói tin giữa hai mạng.", isCorrect: false }
      ],
      lesson: "Bài 4. Giao thức mạng  (SGK tr. 21–25)"
    },
    {
      id: "p2_10",
      content: "Nhóm học sinh dùng lệnh ping để kiểm tra khả năng liên lạc qua mạng.",
      items: [
        { id: "a", text: "(NB) TCP và IP đảm nhiệm những vai trò khác nhau trong truyền dữ liệu.", isCorrect: true },
        { id: "b", text: "(TH) Lệnh ping có thể giúp kiểm tra khả năng nhận phản hồi qua mạng từ một địa chỉ.", isCorrect: true },
        { id: "c", text: "(VD) Muốn thử máy 192.168.1.25 có phản hồi, có thể dùng lệnh ping 192.168.1.25.", isCorrect: true },
        { id: "d", text: "(VD) Nếu ping không nhận được phản hồi thì chắc chắn máy đích đã tắt, không cần kiểm tra tường lửa.", isCorrect: false }
      ],
      lesson: "Bài 4. Giao thức mạng  (SGK tr. 21–25)"
    },
    {
      id: "p2_11",
      content: "Máy A chia sẻ thư mục học tập cho máy B qua mạng LAN.",
      items: [
        { id: "a", text: "(NB) Chỉ cần đổi tên thư mục thành BAITAP là mọi máy trong LAN đều được phép mở thư mục đó.", isCorrect: false },
        { id: "b", text: "(TH) Người chỉ có quyền Read thường có thể đọc tệp nhưng không sửa bản gốc ở nơi chia sẻ.", isCorrect: true },
        { id: "c", text: "(TH) Khi một thư mục đã được chia sẻ, tất cả tài khoản trong LAN đều được quyền xóa tệp bên trong.", isCorrect: false },
        { id: "d", text: "(VD) Giáo viên chỉ muốn học sinh đọc tài liệu thì nên chọn quyền Read thay vì Read/Write.", isCorrect: true }
      ],
      lesson: "Bài 5. Thực hành chia sẻ tài nguyên trên mạng  (SGK tr. 26–33)"
    },
    {
      id: "p2_12",
      content: "Khi thực hành chia sẻ thư mục trong mạng LAN, học sinh đưa ra các nhận định sau:",
      items: [
        { id: "a", text: "(NB) Network discovery giúp máy tính có thể được các máy khác trong mạng LAN phát hiện.", isCorrect: true },
        { id: "b", text: "(TH) Khi bật File and printer sharing, các thư mục trên máy tính sẽ tự động được chia sẻ mà không cần thiết lập riêng.", isCorrect: false },
        { id: "c", text: "(TH) Người được cấp quyền Read có thể mở và chỉnh sửa trực tiếp các tệp trong thư mục chia sẻ.", isCorrect: false },
        { id: "d", text: "(VD) Máy B nhìn thấy máy A trong mục Network nhưng nhận được thông báo không có quyền mở thư mục. Khi đó, cần kiểm tra quyền truy cập của thư mục được chia sẻ.", isCorrect: true }
      ],
      lesson: "Bài 5. Thực hành chia sẻ tài nguyên trên mạng  (SGK tr. 26–33)"
    },
    {
      id: "p2_13",
      content: "Học sinh dùng File Explorer truy cập tài nguyên của một máy khác qua LAN.",
      items: [
        { id: "a", text: "(NB) Mục Network chỉ liệt kê các thư mục trên máy đang sử dụng, không thể hiện máy khác.", isCorrect: false },
        { id: "b", text: "(TH) Người được cấp quyền Read không thể lưu đè tệp vào vị trí chia sẻ nếu không được cấp quyền ghi.", isCorrect: true },
        { id: "c", text: "(TH) Trong File Explorer, đường dẫn truy cập tài nguyên chia sẻ theo địa chỉ máy thường có dạng http://192.168.1.25.", isCorrect: false },
        { id: "d", text: "(VD) Chỉ cần biết IP của máy chia sẻ là người dùng có thể sửa mọi tệp trên máy đó dù chưa được cấp quyền.", isCorrect: false }
      ],
      lesson: "Bài 5. Thực hành chia sẻ tài nguyên trên mạng  (SGK tr. 26–33)"
    },
    {
      id: "p2_14",
      content: "Sau khi hoàn thành việc chia sẻ tài liệu, giáo viên muốn ngừng chia sẻ nhưng vẫn giữ tệp gốc.",
      items: [
        { id: "a", text: "(NB) Muốn ngừng chia sẻ thư mục thì nhất thiết phải xóa các tệp bên trong.", isCorrect: false },
        { id: "b", text: "(TH) Có thể bỏ chọn Share this folder trong Advanced Sharing để ngừng chia sẻ thư mục.", isCorrect: true },
        { id: "c", text: "(TH) Chỉ đổi tên thư mục trên máy thì chắc chắn tất cả quyền chia sẻ cũ đều tự động bị hủy.", isCorrect: false },
        { id: "d", text: "(VD) Ngừng chia sẻ khi không còn nhu cầu giúp giảm nguy cơ người khác truy cập ngoài ý muốn.", isCorrect: true }
      ],
      lesson: "Bài 5. Thực hành chia sẻ tài nguyên trên mạng  (SGK tr. 26–33)"
    },
    {
      id: "p2_15",
      content: "Máy in nối với máy giáo viên được chia sẻ cho máy học sinh trong LAN.",
      items: [
        { id: "a", text: "(NB) Một máy in có thể được thiết lập để nhiều máy trong LAN cùng sử dụng.", isCorrect: true },
        { id: "b", text: "(TH) Máy muốn dùng máy in được chia sẻ cần có kết nối mạng và quyền phù hợp.", isCorrect: true },
        { id: "c", text: "(TH) Máy học sinh không kết nối vào mạng LAN vẫn có thể gửi lệnh in qua máy in chỉ được chia sẻ trên LAN đó.", isCorrect: false },
        { id: "d", text: "(VD) Nếu máy B không tìm thấy máy in chia sẻ, nên kiểm tra kết nối mạng và thiết lập chia sẻ máy in.", isCorrect: true }
      ],
      lesson: "Bài 5. Thực hành chia sẻ tài nguyên trên mạng  (SGK tr. 26–33)"
    },
    {
      id: "p2_16",
      content: "Lớp trao đổi về ưu điểm và hạn chế của giao tiếp trực tuyến.",
      items: [
        { id: "a", text: "(NB) Giao tiếp trực tuyến chỉ có thể trao đổi văn bản, không hỗ trợ âm thanh hay hình ảnh.", isCorrect: false },
        { id: "b", text: "(TH) Thiếu nét mặt và giọng điệu trong tin nhắn văn bản có thể gây hiểu nhầm.", isCorrect: true },
        { id: "c", text: "(VD) Khi cần thảo luận giữa nhiều bạn ở xa, cuộc gọi trực tuyến có thể phù hợp hơn việc chỉ nhắn tin.", isCorrect: true },
        { id: "d", text: "(VD) Khi trao đổi thông tin cá nhân qua cuộc họp trực tuyến, có thể bỏ qua việc bảo vệ dữ liệu vì các bạn đã quen nhau.", isCorrect: false }
      ],
      lesson: "Bài 6. Giao tiếp và ứng xử trong không gian mạng  (SGK tr. 34–38)"
    },
    {
      id: "p2_17",
      content: "Hai bạn hiểu nhầm nhau khi nhắn tin trong nhóm học tập.",
      items: [
        { id: "a", text: "(NB) Tin nhắn văn bản thường thiếu một số tín hiệu phi ngôn ngữ so với gặp trực tiếp.", isCorrect: true },
        { id: "b", text: "(TH) Một lời nói đùa trong tin nhắn có thể bị hiểu sai khi thiếu ngữ cảnh.", isCorrect: true },
        { id: "c", text: "(VD) Nếu bạn hiểu nhầm lời nhắn, nên đáp lại bằng lời mỉa mai để bạn hiểu mình khó chịu.", isCorrect: false },
        { id: "d", text: "(VD) Nếu hiểu nhầm tiếp diễn, hai bạn có thể trao đổi trực tiếp hoặc gọi điện để làm rõ ý định.", isCorrect: true }
      ],
      lesson: "Bài 6. Giao tiếp và ứng xử trong không gian mạng  (SGK tr. 34–38)"
    },
    {
      id: "p2_18",
      content: "Một tin chưa được xác minh về việc nghỉ học xuất hiện trong nhóm lớp.",
      items: [
        { id: "a", text: "(NB) Người đăng thông tin trên mạng cần chú ý tính chính xác của nội dung.", isCorrect: true },
        { id: "b", text: "(TH) Một tin được nhiều người chia sẻ thì mặc nhiên được coi là thông báo chính thức.", isCorrect: false },
        { id: "c", text: "(VD) Nếu chưa có thông báo của trường, học sinh nên kiểm tra thông tin trước khi chia sẻ tin nghỉ học.", isCorrect: true },
        { id: "d", text: "(VD) Có thể chia sẻ tin chưa kiểm chứng ngay rồi xóa bài nếu sau đó phát hiện tin sai.", isCorrect: false }
      ],
      lesson: "Bài 6. Giao tiếp và ứng xử trong không gian mạng  (SGK tr. 34–38)"
    },
    {
      id: "p2_19",
      content: "Một bạn bị chế giễu bằng hình ảnh cắt ghép trong nhóm trực tuyến.",
      items: [
        { id: "a", text: "(NB) Tôn trọng danh dự và quyền riêng tư của người khác là một nguyên tắc ứng xử trên mạng.", isCorrect: true },
        { id: "b", text: "(TH) Ảnh cắt ghép dùng để chế giễu có thể gây tổn thương cho người bị nhắm đến.", isCorrect: true },
        { id: "c", text: "(VD) Để giúp bạn bị chế giễu, nên đăng lại ảnh đó sang các nhóm khác kèm lời yêu cầu mọi người bình luận.", isCorrect: false },
        { id: "d", text: "(VD) Khi gặp trường hợp này, nên động viên bạn, không phát tán ảnh và báo người quản lí nhóm khi cần.", isCorrect: true }
      ],
      lesson: "Bài 6. Giao tiếp và ứng xử trong không gian mạng  (SGK tr. 34–38)"
    },
    {
      id: "p2_20",
      content: "Học sinh thảo luận về việc bình luận và phản biện trên diễn đàn học tập.",
      items: [
        { id: "a", text: "(NB) Vì trao đổi qua mạng không gặp trực tiếp nên người viết có thể dùng lời xúc phạm mà không ảnh hưởng ai.", isCorrect: false },
        { id: "b", text: "(TH) Một bình luận thiếu lịch sự có thể gây xung đột dù người viết không gặp người đọc.", isCorrect: true },
        { id: "c", text: "(VD) Khi phản biện, nên tập trung vào lí lẽ thay vì công kích cá nhân người có ý kiến khác.", isCorrect: true },
        { id: "d", text: "(VD) Sử dụng tài khoản ẩn danh có nghĩa người viết không còn trách nhiệm về nội dung đã đăng.", isCorrect: false }
      ],
      lesson: "Bài 6. Giao tiếp và ứng xử trong không gian mạng  (SGK tr. 34–38)"
    }
  ]
};

/**
 * Thuật toán trích xuất đề thi: 5 Đề hoàn toàn không trùng lặp câu hỏi
 */
function getQuestionsForExam(examIndex) {
  const p1Count = EXAM_CONFIG.examStructure.part1Count || 20;
  const p2Count = EXAM_CONFIG.examStructure.part2Count || 4;
  const totalP1 = QUESTION_BANK.part1.length;
  const totalP2 = QUESTION_BANK.part2.length;
  const resultQuestions = [];

  // Trích xuất 20 câu Phần I liên tiếp không trùng lặp
  for (let i = 0; i < p1Count; i++) {
    const dataIndex = (examIndex * p1Count + i) % totalP1;
    const q = QUESTION_BANK.part1[dataIndex];
    if (q) {
      resultQuestions.push({
        ...q,
        type: "multiple_choice",
        section: "Phần I. Trắc nghiệm 4 lựa chọn (20 câu - 6.0 điểm)"
      });
    }
  }

  // Trích xuất 4 câu Phần II liên tiếp không trùng lặp
  for (let i = 0; i < p2Count; i++) {
    const dataIndex = (examIndex * p2Count + i) % totalP2;
    const q = QUESTION_BANK.part2[dataIndex];
    if (q) {
      resultQuestions.push({
        ...q,
        type: "true_false",
        section: "Phần II. Trắc nghiệm Đúng / Sai (4 câu - 4.0 điểm)"
      });
    }
  }

  return resultQuestions;
}
