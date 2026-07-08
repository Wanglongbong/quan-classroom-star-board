# Classroom Star Board

Website bảng thưởng lớp học phong cách pixel, dùng để cộng/trừ sao hoặc táo đỏ cho học sinh.

## Link sử dụng

- Bản online: https://quan-classroom-star-board-20260609.vercel.app/
- Bản local: http://localhost:7310

## Tính năng chính

- Cộng hoặc trừ điểm thưởng cho từng học sinh.
- Chọn biểu tượng thưởng: ngôi sao, táo đỏ, pizza, kẹo mút hoặc đùi gà rán.
- Hiệu ứng motion khi cộng/trừ, hiển thị tổng điểm mới.
- Mốc 10 đến 100 điểm có huy hiệu và hiệu ứng nổi bật tăng dần.
- Thêm, sửa tên, xóa học sinh và reset điểm.
- Tự lưu dữ liệu bằng `localStorage` (bộ nhớ trong trình duyệt), tải lại trang không mất dữ liệu.

## Chạy trên máy cá nhân

```bash
npm install
npm run dev
```

Website dùng cổng cố định `7310` để tránh trùng với các dự án local khác.

Trên macOS, có thể bấm đúp vào `Mo-Bang-Sao.command` để khởi động nhanh. Giữ cửa sổ Terminal đang chạy trong lúc sử dụng website.

## Build kiểm tra

```bash
npm run build
```

## Ghi chú dữ liệu

Dữ liệu học sinh không được gửi lên server. Mỗi trình duyệt có dữ liệu riêng, vì vậy nếu đổi máy hoặc xóa dữ liệu website trong trình duyệt thì danh sách và điểm thưởng sẽ thay đổi theo.
