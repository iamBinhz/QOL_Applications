# BUỔI 25 — DỰ ÁN 3: THỐNG KÊ TINH QUÁI

**Project 3** — Cambridge Stage 6 | **Tuần 12** | **60 phút** | **Kèm 1-1**

---

## 🎯 Mục tiêu bài học

- ✅ Phát hiện các **biểu đồ gây nhầm lẫn**
- ✅ Phân tích các "thủ thuật" làm sai lệch dữ liệu
- ✅ Đánh giá tính trung thực của thông tin

---

## 📚 Từ vựng Anh - Việt

| Tiếng Anh | Tiếng Việt |
|---|---|
| Misleading | Gây nhầm lẫn |
| Scale | Tỉ lệ |
| Bias | Thiên vị / Sai lệch |
| Truncated | Bị cắt cụt |
| Critical thinking | Tư duy phản biện |

---

## ⏱️ TIẾN TRÌNH BUỔI HỌC

### 🔥 1. Khởi động (5 phút)

**Đố:** "Cô có 2 biểu đồ doanh thu. Biểu đồ 1 cho thấy doanh thu **TĂNG MẠNH**. Biểu đồ 2 (cùng dữ liệu) cho thấy doanh thu **GẦN NHƯ KHÔNG ĐỔI**. Tại sao 2 biểu đồ lại khác nhau?"

→ Vì người vẽ dùng **trục tỉ lệ khác nhau** → tạo cảm giác khác.

---

### 🎯 2. Giới thiệu (5 phút)

> "Hôm nay em làm **thám tử dữ liệu**! Em sẽ phân tích các biểu đồ 'tinh quái' — chúng cố tình hoặc vô tình **lừa** người xem. Học xong em sẽ biết cách **bảo vệ mình** trước các quảng cáo, bài báo dùng số liệu sai lệch."

---

### 📖 3. Các "thủ thuật" thường gặp (15 phút)

#### 3.1. Trục Y không bắt đầu từ 0

**Ví dụ:** Doanh thu 2 năm:
- 2024: 95 triệu
- 2025: 100 triệu

| Cách vẽ | Cảm giác |
|---|---|
| Trục từ 0 đến 110 | Doanh thu **tăng nhẹ** (5%) |
| Trục từ 90 đến 105 | Doanh thu **tăng rất mạnh** (cột 2025 cao gấp 3 cột 2024) |

> 🔑 **Bài học:** Luôn kiểm tra trục Y có bắt đầu từ 0 không.

#### 3.2. Tỉ lệ trục bị bóp méo

**Ví dụ:** Một biểu đồ đường có:
- Trục X: thời gian (mỗi đơn vị = 1 tháng)
- Nhưng đoạn từ tháng 1-6 vẽ NGẮN, đoạn từ tháng 7-12 vẽ DÀI

→ Tạo cảm giác **tăng đột biến** ở 6 tháng cuối, nhưng thực tế tăng đều.

#### 3.3. Biểu đồ 3D gây nhầm lẫn

Cột 3D có thể trông cao hơn ở phía trước (do phối cảnh).

#### 3.4. Chọn lọc dữ liệu (Cherry picking)

Chỉ chọn các tháng có lợi:
- "Bán hàng tháng 3, 7, 11 cao nhất → công ty thành công"
- (Quên kể: các tháng còn lại thấp)

#### 3.5. So sánh với cơ sở khác nhau

- "Doanh thu tăng **gấp đôi**" 
- (Thực ra: từ 1 triệu lên 2 triệu — số quá nhỏ để so sánh)

#### 3.6. Đơn vị thay đổi

- Năm 1: doanh thu **triệu đồng**
- Năm 2: doanh thu **nghìn đồng**
- → Cột năm 2 trông cao hơn 1000 lần (vô lý)

---

### ✨ 4. Phân tích thực tế (15 phút)

#### Ví dụ 1: Biểu đồ nhiệt độ

> Một biểu đồ cho thấy "Nhiệt độ trái đất tăng mạnh!". 
> Trục Y: từ 14,5°C đến 15,0°C.
> Trục X: 5 năm gần đây.

**Câu hỏi:**
- a) Trục Y bắt đầu từ đâu? **14,5°C** (KHÔNG phải 0)
- b) Khoảng tăng thực tế: **0,3°C**
- c) Cảm giác từ biểu đồ: tăng mạnh
- d) Đánh giá: Biểu đồ **gây nhầm lẫn** vì trục Y phóng đại sự khác biệt.

#### Ví dụ 2: Doanh thu nhà hàng

| Năm | Doanh thu (triệu) |
|---|---|
| 2020 | 100 |
| 2021 | 102 |
| 2022 | 105 |
| 2023 | 108 |

**Cách vẽ 1 (đúng):** Trục từ 0 → 110. Cột nhìn **gần bằng nhau**, tăng chậm.

**Cách vẽ 2 (sai lệch):** Trục từ 99 → 110. Cột 2023 **cao gấp 4** cột 2020 — tạo cảm giác tăng vọt!

→ Cùng dữ liệu, **2 ấn tượng khác nhau**.

#### Ví dụ 3: Quảng cáo bột giặt

> "Bột giặt X sạch hơn **80%**!"

**Câu hỏi đặt ra:**
- 80% so với cái gì? Bột giặt khác? Khăn không giặt?
- Đo "sạch" bằng cách nào? Trắng hơn? Mùi thơm hơn?

→ Thiếu **cơ sở so sánh** → quảng cáo không trung thực.

#### Ví dụ 4: So sánh 2 trường

> "Trường A: 95% học sinh đậu đại học. Trường B: 90%. → Trường A tốt hơn!"

**Phân tích sâu:**
- Trường A có 100 học sinh → 95 đậu
- Trường B có 1 000 học sinh → 900 đậu

→ Trường B đào tạo được **gấp 10** học sinh đậu! Tỉ lệ không nói tất cả.

---

### ✍️ 5. Bài tập tự phân tích (15 phút)

**Bài 1.** Trong các biểu đồ sau, biểu đồ nào trung thực?

A. Trục Y bắt đầu từ 0
B. Trục Y bắt đầu từ 90% giá trị cao nhất
C. Các cột có chiều rộng khác nhau
D. Trục X có khoảng cách đều

→ **A và D trung thực**.

**Bài 2.** Một công ty quảng cáo: "Doanh thu tăng **300%**!". Doanh thu thực:
- Năm cũ: 1 triệu
- Năm mới: 4 triệu

a) Tăng tuyệt đối: **3 triệu**
b) Tăng phần trăm: 3/1 = **300%** ✓ (đúng số học)
c) Đánh giá: **Đúng** số học, nhưng nếu công ty rất nhỏ, 300% từ 1 triệu vẫn không phải thành tựu lớn.

**Bài 3.** Viết 1 đoạn quảng cáo "tinh quái":
- Doanh thu thực: 100 triệu (cũ) → 102 triệu (mới)
- Em viết quảng cáo phóng đại như thế nào?

→ Ví dụ: "Doanh thu tăng **2 triệu đồng**! Lần đầu vượt mốc **100 triệu**!"

**Bài 4.** Cùng 1 dữ liệu sau, hãy vẽ 2 biểu đồ:
- Số sách đọc trong 4 tháng: 10, 11, 12, 13
- a) Biểu đồ trung thực (trục Y từ 0)
- b) Biểu đồ "lừa" (trục Y từ 9 đến 14)

---

### 📝 6. Tổng kết (5 phút)

**Quy tắc của thám tử dữ liệu:**
1. **Trục Y có từ 0 không?**
2. **Đơn vị có đồng nhất không?**
3. **Có thiếu dữ liệu không?**
4. **So sánh có cơ sở không?**
5. **Tỉ lệ phần trăm tính từ đâu?**

---

## 📝 BÀI TẬP VỀ NHÀ

**Bài A.** Tìm 1 quảng cáo trên TV/báo/internet và phân tích:
- Quảng cáo dùng con số gì?
- Có "tinh quái" không?
- Nếu có, ở chỗ nào?

**Bài B.** (Dữ liệu thật)
Doanh thu nhà hàng 5 năm (triệu đồng):
- 2020: 50
- 2021: 55
- 2022: 60
- 2023: 65
- 2024: 70

a) Tăng trung bình mỗi năm bao nhiêu?
b) Vẽ biểu đồ đường **trung thực**.
c) Bạn em vẽ biểu đồ với trục Y từ 45 đến 75. Bạn ấy có lừa không? Giải thích.

**Bài C.** (Sáng tạo) Em viết một bài quảng cáo cho tiệm bánh của em, dùng số liệu thực để **nói THẬT** một cách hấp dẫn.

### ✅ Đáp án

**Bài A:** Tự phân tích — không có đáp án cố định.

**Bài B:**
- a) Tăng đều 5 triệu/năm
- b) Trục Y từ 0 đến 80, các cột đều nhau, tăng nhẹ.
- c) **Có** "lừa nhẹ" — trục Y không từ 0 làm cột năm cuối trông cao gấp 3 cột năm đầu, nhưng thực ra chỉ tăng 40%.

**Bài C:** Tự sáng tạo, nhưng phải dựa trên số liệu THẬT.

---

## 💡 Mẹo cho giáo viên

- Đây là **kỹ năng sống quan trọng** — tư duy phản biện trước thông tin.
- Cho học sinh xem các **ví dụ quảng cáo thật** (báo, TV, mạng xã hội).
- **Khuyến khích đặt câu hỏi:** "Số này từ đâu ra?" / "Tỉ lệ này so với cái gì?"

---

## 🎁 Bài mở rộng

**Câu chuyện nổi tiếng:** Trong Thế chiến II, các nhà toán học đã giúp Quân Đồng minh quyết định lắp giáp ở đâu trên máy bay bằng cách phân tích các vết đạn trên các máy bay **đã trở về**.

**Suy luận sai (thông thường):** Lắp giáp ở những chỗ có nhiều vết đạn nhất.

**Suy luận đúng (Abraham Wald):** Lắp giáp ở những chỗ KHÔNG có vết đạn — vì máy bay bị bắn ở đó đã KHÔNG trở về (đã rơi).

→ Đây gọi là **"survivorship bias"** (thiên vị người sống sót) — một kiểu thống kê tinh quái nguy hiểm.

---

## 🔗 Kết nối buổi tiếp theo

Buổi 26 — Chuyển sang **Phân số** (Chương 6): hiểu phân số là gì, phân số bằng nhau, rút gọn.
