/* =====================================================================
   DOV PHỐ HIẾN — IMAGE MAP (bản đồ ảnh theo section)
   Muốn thay ảnh ở đâu, chỉ cần đổi đường dẫn tương ứng tại đây.
   Có thể dùng đường dẫn nội bộ (assets/img/...) hoặc URL https://...
   Các phần tử HTML khai báo data-img="khóa" sẽ tự nhận ảnh từ map này.
   ===================================================================== */
window.DOV_IMAGES = {
  /* --- Thương hiệu --- */
  "brand.logo":            "assets/img/logo.webp",

  /* --- Hero & truyền cảm hứng đô thị --- */
  "home.hero":             "assets/img/urban-hero.webp",      // aerial đô thị hiện đại
  "home.inspiration":      "assets/img/alluvia-city.webp",    // đô thị ven sông
  "about.hero":            "assets/img/urban-hero.webp",
  "career.hero":           "assets/img/poster-recruit.webp",

  /* --- Dự án (ảnh đại diện + hero chi tiết) --- */
  "project.ocean-park":    "assets/img/ocean-park-masterplan.webp",
  "project.alluvia":       "assets/img/alluvia-city.webp",
  "project.fibonan":       "",                                 // chưa có ảnh -> hiển thị placeholder
  "project.pho-hien-city": "assets/img/pho-hien-city.webp",
  "project.noxh":          "",                                 // chưa có ảnh
  "project.diamond-light": "",                                 // chưa có ảnh

  /* --- Tuyển dụng --- */
  "career.team":           "assets/img/poster-recruit.webp",
  "career.culture":        "assets/img/poster-culture.webp",
  "career.income":         "assets/img/poster-income.webp",
  "career.path":           "assets/img/poster-career-path.webp",
  "career.ceo":            "assets/img/poster-ceo.webp",

  /* --- Đối tác (logo) --- */
  "partner.vinhomes":      "assets/img/partner-vinhomes.webp",
  "partner.ecopark":       "assets/img/partner-ecopark.webp",
  "partner.sun-group":     "assets/img/partner-sun-group.webp",
  "partner.masterise":     "assets/img/partner-masterise.webp",
  "partner.capitaland":    "assets/img/partner-capitaland.webp",
  "partner.nam-long":      "assets/img/partner-nam-long.webp",
  "partner.bim-group":     "assets/img/partner-bim-group.webp",
  "partner.gamuda":        "assets/img/partner-gamuda.webp",
  "partner.meyland":       "assets/img/partner-meyland.webp",
  "partner.flc":           "assets/img/partner-flc.webp"
  /* TNG Holdings, BCG Land, BRG: chưa có file logo -> đang hiển thị ô chữ.
     Khi có logo: thêm khóa "partner.tng": "assets/img/partner-tng.png" và
     đổi ô chữ trong HTML thành <img data-img="partner.tng">           */
};
