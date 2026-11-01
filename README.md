# HỆ THỐNG ÔN TẬP TIN HỌC 12 - TRỰC TUYẾN (GDPT 2018)

> **Đơn vị:** Trường THPT Số 2 Trần Cao Vân - Tổ Công nghệ - Tin học  
> **Bộ đề:** Đề cương ôn tập Giữa học kỳ I - Môn Tin học 12 (ICT)  
> **Ngân hàng câu hỏi gốc:** 100 câu Phần I + 20 câu Phần II có sẵn đáp án  
> **Mã đề thi:** Tự động phân bổ thành **5 MÃ ĐỀ KHÔNG TRÙNG LẶP** (Đề 01 đến Đề 05)

---

## 🌟 CẤU TRÚC ĐỀ THI (24 CÂU - 45 PHÚT - THANG ĐIỂM 10.0)

Mỗi đề thi bao gồm đúng **24 câu hỏi** (chuẩn ma trận Giữa HK1 của nhà trường):

| Phần thi | Dạng câu hỏi | Số lượng & Thang điểm | Quy tắc chấm điểm |
| :--- | :--- | :--- | :--- |
| **Phần I** | Trắc nghiệm 4 lựa chọn | **20 câu** $\times$ 0.30đ = **6.0 điểm** | Thí sinh chọn 1 trong 4 phương án A, B, C, D. |
| **Phần II** | Trắc nghiệm Đúng / Sai | **4 câu** $\times$ tối đa 1.0đ = **4.0 điểm** | Mỗi câu gồm 4 ý a, b, c, d. Chấm theo **Barem chuẩn Bộ GD&ĐT**:<br>• Đúng 1 ý: **0.1 điểm**<br>• Đúng 2 ý: **0.25 điểm**<br>• Đúng 3 ý: **0.5 điểm**<br>• Đúng 4 ý: **1.0 điểm** |
| **TỔNG CỘNG** | **24 câu hỏi** | **10.0 điểm tuyệt đối** | **Hệ thống chấm tự động 100%**, học sinh xem ngay điểm và bài làm chi tiết. |

---

## 🎯 PHÂN CHIA 5 MÃ ĐỀ KHÔNG TRÙNG LẶP (ZERO OVERLAP)

| Mã đề thi | Phạm vi câu Phần I (20 câu) | Phạm vi câu Phần II (4 câu) | Tỷ lệ trùng |
| :---: | :--- | :--- | :---: |
| **ĐỀ SỐ 01** | Câu 1 ➔ Câu 20 | Câu 1 ➔ Câu 4 | **0%** |
| **ĐỀ SỐ 02** | Câu 21 ➔ Câu 40 | Câu 5 ➔ Câu 8 | **0%** |
| **ĐỀ SỐ 03** | Câu 41 ➔ Câu 60 | Câu 9 ➔ Câu 12 | **0%** |
| **ĐỀ SỐ 04** | Câu 61 ➔ Câu 80 | Câu 13 ➔ Câu 16 | **0%** |
| **ĐỀ SỐ 05** | Câu 81 ➔ Câu 100 | Câu 17 ➔ Câu 20 | **0%** |

*Khi học sinh bấm **"Làm tiếp Đề tiếp theo"**, hệ thống sẽ tự động chuyển sang mã đề kế tiếp mà vẫn giữ nguyên Họ tên, Lớp học. Học sinh luyện đủ 5 đề sẽ ôn trọn vẹn 100% ngân hàng câu hỏi đề cương!*

---

## 📁 CẤU TRÚC THƯ MỤC DỰ ÁN

```text
OnTapTin12/
├── index.html           # Khung giao diện SPA 3 màn hình tối ưu di động
├── css/
│   └── style.css        # Giao diện responsive, touch-friendly, hỗ trợ in PDF (@media print)
├── js/
│   ├── data.js          # Toàn bộ 100 câu P1 & 20 câu P2 trích xuất từ đề cương Word
│   └── app.js           # Bộ điều khiển: đếm ngược 45 phút, chấm barem 10đ, xoay vòng đề
├── gas/
│   └── Code.gs          # Backend Webhook Google Apps Script nhận dữ liệu vào Google Sheets
└── README.md            # Tài liệu hướng dẫn sử dụng và cập nhật
```

---

## 🚀 HƯỚNG DẪN TRIỂN KHAI VÀ SỬ DỤNG (THEO SKILL.MD)

### Bước 1: Thiết lập Google Sheets nhận điểm (Backend)
1. Mở một Google Sheet mới tại [Google Drive](https://drive.google.com).
2. Vào **Tiện ích mở rộng (Extensions)** ➔ **Apps Script**.
3. Dán toàn bộ mã trong file [`gas/Code.gs`](gas/Code.gs).
4. Bấm **Triển khai (Deploy)** ➔ **Tùy chọn triển khai mới (New deployment)**:
   - Loại: **Ứng dụng web (Web app)**
   - Thực thi dưới dạng: **Tôi (Me)**
   - Ai có quyền truy cập: **Bất kỳ ai (Anyone)**
5. Bấm **Triển khai** và sao chép **URL ứng dụng web** (có đuôi `/exec`).
6. Mở file [`js/data.js`](js/data.js), dán URL vào biến `gasWebhookUrl`.

### Bước 2: Xuất bản miễn phí lên GitHub Pages
1. Đẩy thư mục `OnTapTin12` lên GitHub Repository (Public).
2. Vào **Settings** ➔ **Pages** ➔ Chọn nhánh `main` và thư mục `/ (root)`.
3. Bấm **Save**. Đường link web trực tuyến sẽ sẵn sàng để gửi cho học sinh!
