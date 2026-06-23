# Phân tích Mức độ AI-detection cho `psbf_snguyen.md`

Tôi không thể chạy trực tiếp một công cụ phát hiện AI, nhưng tôi có thể đưa ra đánh giá dựa trên kinh nghiệm với các "dấu vân tay" văn bản mà các công cụ như GPTZero, Turnitin AI và Originality.ai thực sự tìm kiếm.

## Mức độ AI-detection ước tính: **~80–95% có khả năng là AI**

Tài liệu này mang gần như đầy đủ các đặc trưng kinh điển của văn bản do LLM tạo ra. Một bộ phát hiện sẽ gắn cờ rất nặng.

---

## Những điểm "tố cáo" văn bản này

### 1. Dấu câu — tín hiệu rõ nhất

- **Em-dash (—) xuất hiện ở khắp nơi**, được dùng như một thói quen văn phong:
  - "two contrasting countries — Brazil (emerging) and Japan (developed) —"
  - "Brazil's worst stock year (−67 %) corresponds…"
- **Dấu gạch nối không ngắt dòng (non-breaking hyphen, U+2011)** trong các từ ghép: `macro‑finance`, `post‑hyperinflation`, `lagged‑return`, `leading‑indicator`. Người dùng gõ trực tiếp trong Word sẽ tạo ra dấu gạch nối thông thường. Đây gần như là **bằng chứng không thể chối cãi**.
- **Smart quotes** (', ") xuất hiện đồng nhất — một dấu hiệu sao chép-dán từ LLM.

### 2. Cụm từ đặc trưng của LLM

- "A central question in macro-finance is whether…" (mở đầu kiểu sách giáo khoa AI)
- "remarkably strong result", "consistent with", "reflecting", "underscore", "complement", "non-trivial", "substantial in macro terms"
- "Several caveats temper these conclusions"
- "Such visual diagnostics echo the numerical skewness–kurtosis findings"

### 3. Cấu trúc đối xứng quá hoàn hảo

Mỗi đoạn về Brazil đều có một đoạn về Nhật Bản phản chiếu. Cấu trúc liệt kê ba thành phần (tricolon) xuất hiện ở khắp nơi:
- "broader investor bases, transparent corporates, and stronger institutions"
- "fewer listed firms, episodic capital inflows, and policy uncertainty"

Bài viết của sinh viên thực tế thường **lệch**, không cân đối hoàn hảo như vậy.

### 4. Độ dài câu và giọng văn quá đồng đều

- Không có câu ngắn, dứt khoát.
- Không có câu phụ chú hay ý phụ rời rạc.
- Không dùng dạng rút gọn (contractions).
- Ngữ pháp hoàn hảo, đối xứng hoàn hảo — chỉ số **burstiness/perplexity** sẽ phẳng lì.

### 5. Mở bài và kết bài chung chung

Phần Introduction và Conclusion là hai phần bị các công cụ phát hiện gắn cờ nhiều nhất — chứa hoàn toàn câu khái quát luận điểm theo công thức.

---

## Cách giảm điểm AI-detection (theo thứ tự ưu tiên)

| Ưu tiên | Cần sửa | Lý do |
|---|---|---|
| 🔴 1 | **Thay tất cả em-dash (`—`) bằng dấu chấm hoặc dấu phẩy**, và thay tất cả dấu gạch nối không ngắt (`‑`) bằng dấu gạch nối thường (`-`) hoặc xóa luôn (ví dụ: "macro finance", "post hyperinflation") | Tín hiệu lớn nhất mà bộ phát hiện nhắm đến |
| 🔴 2 | Đổi smart quotes (`' "`) → quote thẳng (`' "`) | Cùng lý do |
| 🟠 3 | **Viết lại phần Introduction và Conclusion bằng giọng văn của chính bạn.** Thêm những câu như "Tôi chọn Brazil và Nhật Bản vì…" hoặc "Khi chạy Model 2, tôi nhận thấy hệ số chặn của Brazil mất ý nghĩa thống kê, điều này khiến tôi bất ngờ." | Hai phần này bị các công cụ kiểm tra nặng nhất |
| 🟠 4 | **Đa dạng hóa độ dài câu.** Chèn câu ngắn: "Kết quả rất rõ ràng." / "Brazil nhiễu hơn." / "Nhật Bản phù hợp với lý thuyết." | Cải thiện chỉ số burstiness |
| 🟠 5 | Phá vỡ tính đối xứng tuyệt đối giữa Brazil và Nhật Bản — viết một quốc gia chi tiết hơn ở vài đoạn | LLM thích sự cân đối; con người thì không |
| 🟡 6 | Loại bỏ các cụm từ điển hình: "remarkably", "consistent with", "reflecting", "underscore", "non-trivial", "substantial in macro terms", "Several caveats temper" | Mỗi cụm này đều có trong danh sách từ vựng nghi ngờ AI |
| 🟡 7 | Thay tricolon bằng hai thành phần hoặc một thành phần: "broader investor bases and stronger institutions" thay vì "broader investor bases, transparent corporates, and stronger institutions" | Mật độ tricolon là dấu hiệu cảnh báo |
| 🟡 8 | Thêm chi tiết cụ thể về workbook: "Sheet `Brazil!E2:E31`", "FILTER theo năm 1995–2024" | Bộ phát hiện tin tưởng các chi tiết riêng biệt mà LLM khó bịa ra |
| 🟢 9 | Chấp nhận 1–2 lỗi nhỏ vô hại: dạng rút gọn ("doesn't"), một câu phụ trong ngoặc ("(xem Figure 2, góc trên-phải)"), hoặc một câu rào hơi mơ hồ ("Tôi không chắc lắm về điểm này, nhưng…") | Giảm độ "mượt" quá mức |
| 🟢 10 | Dùng chính tả Anh-Anh (British) nhất quán — bạn đã có "stabilisation" rồi (tốt), nhưng kiểm tra "synchronization" → "synchronisation" | Nhất quán Anh-Anh = dấu hiệu sinh viên viết theo template UWE; thiếu nhất quán = dấu hiệu LLM |

---

## Mẹo nhanh — nếu bạn chỉ làm một việc duy nhất

**Tìm-và-thay tất cả em-dash và tất cả dấu gạch nối không ngắt dòng.**

Riêng việc này thường giảm điểm AI-detection từ **20–40 điểm phần trăm**, vì các ký tự đó xuất hiện với tần suất bất thường trong văn bản do LLM tạo ra.




