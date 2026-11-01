/**
 * =========================================================================
 * GOOGLE APPS SCRIPT - BACKEND NHẬN VÀ LƯU KẾT QUẢ ÔN TẬP TIN HỌC 12
 * Cấu trúc: 2 phần (Phần I: Trắc nghiệm 4 lựa chọn + Phần II: Đúng/Sai)
 * Thang điểm 10.0 tuyệt đối theo định dạng Đề thi Tốt nghiệp THPT mới (GDPT 2018)
 * =========================================================================
 */

function doPost(e) {
  try {
    var rawContents = e.postData.contents;
    var data = JSON.parse(rawContents);

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheetName = "KetQua_TinHoc12";
    var sheet = ss.getSheetByName(sheetName);

    // Nếu chưa có trang tính, tự động tạo mới và tạo hàng tiêu đề chuẩn đẹp
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
      
      var headers = [
        "Thời gian nộp",
        "Họ và tên",
        "Lớp",
        "Mã đề thi",
        "Tổng điểm (Tối đa 10.0đ)",
        "Điểm Phần I (6.0đ)",
        "Điểm Phần II (4.0đ)",
        "Thời gian làm bài",
        "Chi tiết bài làm (Phần I & II)"
      ];

      var headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setValues([headers]);
      
      // Định dạng giao diện tiêu đề
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#2563eb");
      headerRange.setFontColor("#ffffff");
      headerRange.setHorizontalAlignment("center");
      headerRange.setVerticalAlignment("middle");
      sheet.setRowHeight(1, 35);
      sheet.setFrozenRows(1);
    }

    // Ghi dòng dữ liệu mới của học sinh kèm Mã Đề
    var newRow = [
      data.timestamp || new Date().toLocaleString("vi-VN"),
      data.studentName || "Ẩn danh",
      data.studentClass || "Chưa rõ",
      data.examCode || "ĐỀ SỐ 01",
      Number(data.totalScore) || 0,
      Number(data.part1Score) || 0,
      Number(data.part2Score) || 0,
      data.duration || "N/A",
      data.quizDetails || ""
    ];

    sheet.appendRow(newRow);

    // Căn giữa các cột thông tin chính (Cột 1 đến Cột 8)
    var lastRow = sheet.getLastRow();
    sheet.getRange(lastRow, 1, 1, 8).setHorizontalAlignment("center");
    
    // Tự động ngắt dòng cột Chi tiết bài làm (Cột 9)
    sheet.getRange(lastRow, 9, 1, 1).setWrap(true);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", row: lastRow }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput("✅ Webhook Tin học 12 đang hoạt động bình thường!");
}
