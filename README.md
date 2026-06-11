# DOV PHỐ HIẾN — Website hoàn chỉnh (14 trang)

Website tĩnh đa trang: HTML + CSS + JS thuần, không cần build, không phụ thuộc framework.

## 1. Chạy ngay
Mở **`index.html`** bằng trình duyệt. Toàn bộ trang dùng đường dẫn tương đối nên cần giữ nguyên cấu trúc thư mục:

```
dov-website/
├── index.html              Trang chủ
├── gioi-thieu.html         Giới thiệu (tầm nhìn, sứ mệnh, giá trị)
├── doi-tac.html            Đối tác chiến lược (lưới logo)
├── du-an.html              Danh sách dự án (có bộ lọc)
├── du-an-*.html            6 trang chi tiết dự án
├── tuyen-dung.html         Tuyển dụng (quyền lợi, lộ trình, form CV)
├── tin-tuc.html            Tin tức
├── van-phong.html          Hệ thống 4 văn phòng (kèm nút bản đồ)
├── lien-he.html            Liên hệ (hotline, Zalo, form, bản đồ nhúng)
└── assets/
    ├── css/style.css       Toàn bộ giao diện (đổi màu tại :root)
    ├── js/main.js          Menu, hiệu ứng, form gửi Google Sheet
    ├── js/images-map.js    ⭐ BẢN ĐỒ ẢNH — thay ảnh toàn site tại đây
    └── img/                Ảnh đã tối ưu WebP
```

## 2. ⭐ Thay / thêm ảnh (quan trọng nhất)
Mở **`assets/js/images-map.js`** — mỗi vị trí ảnh có một "khóa", ví dụ:
```js
"home.hero":          "assets/img/urban-hero.webp",
"project.fibonan":    "",     // đang trống -> hiện placeholder
```
- Muốn thay ảnh: bỏ file mới vào `assets/img/` rồi đổi đường dẫn (hoặc dán URL https://... trực tiếp).
- Muốn thêm ảnh cho The Fibonan / NOXH / Diamond Light: điền đường dẫn vào khóa tương ứng — placeholder tự biến mất.
- Logo TNG Holdings / BCG Land / BRG: hiện là ô chữ; khi có file logo, thêm khóa mới và đổi ô chữ trong HTML thành `<img data-img="partner.tng">` (hướng dẫn ngay trong file map).

## 3. Form & Google Sheet
Cả form **Liên hệ/Tư vấn dự án** lẫn form **Ứng tuyển** đều gửi về Google Sheet của bạn
(link `/exec` đã cấu hình sẵn trong `assets/js/main.js`, biến `SHEET_ENDPOINT`).
Cột "Vị trí ứng tuyển" trong Sheet sẽ ghi loại form (vd: "Tư vấn Vinhomes Ocean Park 2 & 3") để bạn phân loại lead.

## 4. Đổi màu, hotline, nội dung
- **Màu sắc**: sửa khối `:root{}` đầu file `assets/css/style.css` (navy `#10305f`, xanh lá `#1e8e4f`, gold `#d4af37`).
- **Hotline/Zalo**: tìm-thay `0924891111`, `0977418222`, `zalo.me/0977418222` trong các file HTML.
- **Nội dung**: tiếng Việt nằm trực tiếp trong từng file HTML, đặt theo section rõ ràng.
- **Dự án mới**: nhân bản 1 file `du-an-*.html`, đổi tên + nội dung, thêm card vào `du-an.html` và khóa ảnh vào images-map.

## 5. Deploy miễn phí
- **Netlify**: kéo–thả CẢ THƯ MỤC `dov-website` vào netlify.com → có link ngay.
- **GitHub Pages**: upload toàn bộ thư mục → Settings › Pages.
- **Hosting cPanel**: upload vào `public_html/`.

## 6. Đã có sẵn
Responsive đầy đủ · Sticky header · Mobile sticky CTA (gọi + tư vấn) · Nút nổi Gọi/Zalo ·
Marquee logo đối tác chạy vô tận (dừng khi hover) · Bộ lọc dự án · Hiệu ứng reveal ·
SEO meta title/description + Open Graph từng trang · Bản đồ Google nhúng · Form validate + gửi Sheet.

© 2026 DOV PHỐ HIẾN.
