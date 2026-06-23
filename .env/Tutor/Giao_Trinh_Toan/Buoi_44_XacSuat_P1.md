# BUỔI 44 — XÁC SUẤT (Phần 1)

**Chương 9.1** — Cambridge Stage 6 | **Tuần 20** | **60 phút** | **Kèm 1-1**

---

## 🎯 Mục tiêu bài học

- ✅ Hiểu khái niệm **xác suất** (likelihood)
- ✅ Mô tả khả năng xảy ra bằng **lời** (chắc chắn, có thể, không thể, ngang nhau)
- ✅ Đặt sự kiện trên **trục xác suất** từ 0 đến 1

---

## 📚 Từ vựng Anh - Việt

| Tiếng Anh | Tiếng Việt |
|---|---|
| Probability | Xác suất |
| Likelihood | Khả năng |
| Certain | Chắc chắn |
| Likely | Có khả năng |
| Equally likely | Khả năng ngang nhau |
| Unlikely | Khó có khả năng |
| Impossible | Không thể |
| Outcome | Kết quả |
| Event | Sự kiện |

---

## ⏱️ TIẾN TRÌNH BUỔI HỌC

### 🔥 1. Khởi động (5 phút)

**Câu đố:**
- "Ngày mai Mặt Trời mọc ở hướng Đông." → Khả năng?
- "Ngày mai trời mưa ở Hà Nội." → Khả năng?
- "Cô tung đồng xu được mặt ngửa." → Khả năng?
- "Con chó của em biết bay." → Khả năng?

---

### 🎯 2. Giới thiệu (5 phút)

> "Trong đời sống, có những điều **chắc chắn** xảy ra, có những điều **không thể**, và rất nhiều điều ở **giữa**. Xác suất là môn học đo lường **'mức độ chắc chắn'** đó."

---

### 📖 3. Lý thuyết (15 phút)

#### 3.1. Các mức độ khả năng

| Tiếng Việt | Tiếng Anh | Xác suất |
|---|---|---|
| Không thể | Impossible | **0** |
| Khó có khả năng | Unlikely | gần 0 |
| Khả năng ngang nhau | Equally likely | **1/2** |
| Có khả năng | Likely | gần 1 |
| Chắc chắn | Certain | **1** |

#### 3.2. Trục xác suất

```
0 ────── 1/4 ────── 1/2 ────── 3/4 ────── 1
↑          ↑         ↑          ↑          ↑
KHÔNG    Khó có   Ngang     Có khả      CHẮC
THỂ      KN       nhau      năng        CHẮN
```

#### 3.3. Cách tính xác suất

> 🔑 **Xác suất = (Số kết quả thuận lợi) / (Tổng số kết quả có thể)**

**Ví dụ:** Tung đồng xu
- Kết quả có thể: 2 (Sấp hoặc Ngửa)
- Sấp xuất hiện: 1 lần
- P(Sấp) = 1/2

#### 3.4. Tính xác suất với xúc xắc

Xúc xắc 6 mặt: 1, 2, 3, 4, 5, 6.
- Tổng kết quả: 6
- P(ra số 3) = **1/6**
- P(ra số chẵn) = 3/6 = **1/2** (vì có 2, 4, 6)
- P(ra số > 4) = 2/6 = **1/3** (vì có 5, 6)
- P(ra số 7) = 0/6 = **0** (không thể)

#### 3.5. Quy ước viết

P(A) = "Xác suất xảy ra sự kiện A"

Ví dụ: P(mưa) = 0,3 = 30% = xác suất mưa.

---

### ✨ 4. Ví dụ (15 phút)

#### Ví dụ 1: Mô tả bằng lời

> **Đề:** Đặt các sự kiện vào loại: chắc chắn / có khả năng / khả năng ngang nhau / khó có khả năng / không thể.

| Sự kiện | Loại |
|---|---|
| Sau Thứ Hai là Thứ Ba | **Chắc chắn** |
| Trời mưa hôm nay (ở Sài Gòn mùa khô) | **Khó có khả năng** |
| Tung đồng xu được mặt sấp | **Ngang nhau** |
| Em bốc bài tây ra Át | **Khó có khả năng** (4/52 ≈ 7,7%) |
| Bóng đèn bật khi cô nhấn công tắc | **Có khả năng** (nếu không cháy bóng) |
| Em bốc trúng số 13 trong 12 con giáp | **Không thể** |

#### Ví dụ 2: Tung xúc xắc

> **Đề:** Tung xúc xắc 1 lần. Tính P(...):
> a) Ra số 5
> b) Ra số lẻ
> c) Ra số < 7
> d) Ra số = 0

**Giải:**
- a) 1/6
- b) 3/6 = 1/2 (số lẻ: 1, 3, 5)
- c) 6/6 = 1 (chắc chắn — mọi số đều < 7)
- d) 0/6 = 0 (không thể)

#### Ví dụ 3: Rút bài tây

> **Đề:** Bộ bài tây 52 lá có 4 màu (rô, cơ, bích, chuồn). Rút ngẫu nhiên 1 lá. Tính:
> a) P(lá đỏ — rô hoặc cơ)
> b) P(lá Át)
> c) P(lá hình — J, Q, K)

**Giải:**
- a) 26/52 = **1/2**
- b) 4/52 = **1/13**
- c) 12/52 = **3/13**

#### Ví dụ 4: Túi bi

> **Đề:** Túi có 3 bi đỏ, 5 bi xanh, 2 bi vàng. Lấy ngẫu nhiên 1 bi. Tính:
> a) P(bi đỏ)
> b) P(bi xanh)
> c) P(bi tím)

**Giải:**
- Tổng = 3 + 5 + 2 = 10 bi
- a) 3/10
- b) 5/10 = **1/2**
- c) 0 (không có bi tím)

#### Ví dụ 5: Vòng quay may mắn

> **Đề:** Vòng quay chia 8 phần đều: 4 phần đỏ, 2 phần xanh, 1 phần vàng, 1 phần đen. Quay vòng. Tính:
> a) P(đỏ)
> b) P(không phải đỏ)

**Giải:**
- a) 4/8 = **1/2**
- b) 4/8 = **1/2** (vì còn 4 phần không đỏ)

---

### ✍️ 5. Luyện tập (15 phút)

**Bài 1.** Mô tả khả năng (chắc chắn / có khả năng / khó / không thể):
- a) Mặt trời mọc sáng mai
- b) Em bốc trúng át từ bộ bài 52 lá
- c) Tung 2 đồng xu cùng ra sấp
- d) Đi học ngày Chủ Nhật (em nghỉ học)
- e) Tháng 2 có 30 ngày

**Bài 2.** Tung xúc xắc. Tính P(...):
- a) Ra số 4
- b) Ra số chia hết cho 3
- c) Ra số > 2

**Bài 3.** Túi bi: 6 đỏ, 4 xanh, 2 vàng. Tính P(...):
- a) Đỏ
- b) Xanh
- c) Vàng
- d) Không phải đỏ

**Bài 4.** (Đặt sự kiện trên trục) Sắp xếp các sự kiện sau theo thứ tự khả năng (ít → nhiều):
- A: Ngày mai trời mưa (mùa mưa)
- B: Tung xúc xắc ra số 6
- C: Cô gặp người quen trong siêu thị
- D: Cô ngủ đêm nay

**Bài 5.** (Suy luận) Một túi có 10 bi. P(bi đỏ) = 1/5. Có bao nhiêu bi đỏ?

---

### 📝 6. Tổng kết (5 phút)

**Tự đánh giá:**
- [ ] Tôi mô tả được khả năng bằng lời
- [ ] Tôi tính xác suất bằng công thức
- [ ] Tôi đặt được sự kiện trên trục 0 → 1

---

## 📝 BÀI TẬP VỀ NHÀ

**Bài A.** Tính xác suất:
1. Tung xúc xắc ra số 1: P = ?
2. Tung xúc xắc ra số chẵn: P = ?
3. Tung 2 đồng xu ra 2 sấp: P = ? (gợi ý: 1/4)

**Bài B.** Túi có 4 đỏ, 6 xanh, 5 trắng. Tính P:
1. Đỏ
2. Xanh
3. Không phải trắng
4. Đỏ hoặc xanh

**Bài C.** (Mô tả) Sắp 5 sự kiện sau theo trục xác suất:
- Em thi đậu (đã ôn kỹ)
- Em rút bài 9 cơ từ bộ bài
- Em thắng giải xổ số
- Em uống nước hôm nay
- Em bay bằng đôi cánh

**Bài D.** (Khó) Một hộp có 12 viên kẹo: 4 cam, 3 chanh, 5 dâu.
- a) P(cam)?
- b) Bạn thấy bạn em rút 5 viên dâu rồi. P(rút tiếp 1 cam) = ?

### ✅ Đáp án

**Bài A:**
1. 1/6
2. 3/6 = 1/2
3. 1/4

**Bài B (tổng 15 bi):**
1. 4/15
2. 6/15 = 2/5
3. 10/15 = 2/3
4. 10/15 = 2/3

**Bài C:** (sắp xếp ít → nhiều khả năng)
- Bay bằng cánh (0) → Trúng xổ số (gần 0) → Rút 9 cơ (1/52 ≈ 0,019) → Thi đậu (cao) → Uống nước (gần 1)

**Bài D:**
- a) 4/12 = 1/3
- b) Sau khi rút 5 dâu, còn 7 viên (4 cam, 3 chanh, 0 dâu). P(cam) = **4/7**

---

## 💡 Mẹo cho giáo viên

- **Trực quan:** Mang 1 xúc xắc, 1 đồng xu, 1 bộ bài để **thí nghiệm thật** với học sinh.
- **Lỗi phổ biến:** Học sinh nghĩ tung 2 đồng xu, kết quả có 3: 2 sấp, 2 ngửa, hoặc 1-1. Sửa: Có 4 kết quả: SS, SN, NS, NN — vì hai đồng xu khác nhau.

---

## 🎁 Bài mở rộng

**Câu đố:** Sinh nhật cùng ngày — Trong 1 lớp 30 học sinh, xác suất có **ít nhất 2 bạn** cùng ngày sinh là bao nhiêu?

**Đáp án:** Khoảng **70%** — rất cao! Đây gọi là **"Birthday Paradox"** (Nghịch lý sinh nhật) — phản trực giác.

---

## 🔗 Kết nối buổi tiếp theo

Buổi 45 — Tiếp tục xác suất: **thí nghiệm, dự đoán, ghi nhận**.
