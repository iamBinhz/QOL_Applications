# BUỔI 14 — DỰ ÁN 2: DÃY SỐ LẺ

**Project 2** — Cambridge Stage 6 | **Tuần 7** | **60 phút** | **Kèm 1-1**

---

## 🎯 Mục tiêu bài học

- ✅ Phát hiện **quy luật trong dãy số lẻ liên tiếp**
- ✅ Liên hệ giữa tổng các số lẻ và số bình phương
- ✅ Sử dụng **mô hình hình ảnh** để chứng minh quy luật

---

## 📚 Từ vựng Anh - Việt

| Tiếng Anh | Tiếng Việt |
|---|---|
| Odd number | Số lẻ |
| Consecutive | Liên tiếp |
| Pattern | Quy luật / Hoa văn |
| Conjecture | Phỏng đoán |
| Investigate | Điều tra / khảo sát |

---

## ⏱️ TIẾN TRÌNH BUỔI HỌC

### 🔥 1. Khởi động (5 phút)

**Câu đố nhanh:**
- Số lẻ là số gì? Cho 5 ví dụ.
- Số 0 là số chẵn hay lẻ? (Đáp án: **chẵn**, vì chia hết cho 2)
- Liệt kê 10 số lẻ đầu tiên: **1, 3, 5, 7, 9, 11, 13, 15, 17, 19**

---

### 🎯 2. Giới thiệu (5 phút)

> "Hôm nay em sẽ trở thành **nhà phát minh toán học**! Cô sẽ cho em một bài toán đơn giản về **dãy số lẻ**, và em phải tự tìm ra **một quy luật bí mật**. Bài này không có công thức trước — em phải **mò ra**!"

---

### 📖 3. Lý thuyết nền (10 phút) — Ôn lại

#### Số lẻ là gì?

> 🔑 **Số lẻ** = số KHÔNG chia hết cho 2 (có dư).

Cách viết tổng quát: số lẻ có dạng **2n − 1** (với n = 1, 2, 3, ...).

| n | 2n−1 | Số lẻ |
|---|---|---|
| 1 | 2×1−1 = 1 | 1 |
| 2 | 2×2−1 = 3 | 3 |
| 3 | 2×3−1 = 5 | 5 |
| 4 | 2×4−1 = 7 | 7 |
| 5 | 2×5−1 = 9 | 9 |

---

### ✨ 4. Dự án chính (30 phút)

#### Phần A: Tổng các số lẻ liên tiếp bắt đầu từ 1

**Học sinh tự tính và điền bảng:**

| Số lượng | Dãy | Tổng |
|---|---|---|
| 1 số | 1 | **1** |
| 2 số | 1 + 3 | **4** |
| 3 số | 1 + 3 + 5 | **9** |
| 4 số | 1 + 3 + 5 + 7 | **16** |
| 5 số | 1 + 3 + 5 + 7 + 9 | **25** |
| 6 số | 1 + 3 + 5 + 7 + 9 + 11 | **36** |
| 7 số | 1 + 3 + 5 + 7 + 9 + 11 + 13 | **49** |
| 8 số | ? | **64** |
| 9 số | ? | **81** |
| 10 số | ? | **100** |

#### Phần B: Phát hiện quy luật

> **Câu hỏi cho học sinh:**
> "Em thấy các tổng này có gì đặc biệt? Hãy viết tổng theo dạng khác nếu có thể."

**Quy luật:** Tổng các số lẻ liên tiếp bắt đầu từ 1 = **số bình phương**!

| Tổng | Cách viết | n² |
|---|---|---|
| 1 | 1×1 | 1² |
| 4 | 2×2 | 2² |
| 9 | 3×3 | 3² |
| 16 | 4×4 | 4² |
| 25 | 5×5 | 5² |
| ... | ... | ... |
| 100 | 10×10 | 10² |

#### Phần C: Chứng minh trực quan

Vẽ trên giấy carô:

```
■                        ← 1 (1²)

■ ▢                      
■ ▢                      ← 1 + 3 = 4 (2²)

■ ▢ ▣
■ ▢ ▣                    ← 1 + 3 + 5 = 9 (3²)
■ ▢ ▣

■ ▢ ▣ ▦                  
■ ▢ ▣ ▦                  ← 1 + 3 + 5 + 7 = 16 (4²)
■ ▢ ▣ ▦
■ ▢ ▣ ▦
```

Mỗi "lớp L-shape" thêm vào = 1 số lẻ. Tổng tạo thành **hình vuông**!

#### Phần D: Phỏng đoán (Conjecture)

> "Tổng của **n số lẻ liên tiếp đầu tiên** = **n²**"

**Kiểm tra với n = 20:**
- Tổng từ 1 đến số lẻ thứ 20 (số 39) = ?
- Theo phỏng đoán: 20² = **400**
- Kiểm tra: (1+3+5+...+39) = 400 ✓

---

### ✍️ 5. Thử thách (5 phút)

**Bài 1.** Tổng 15 số lẻ đầu tiên là bao nhiêu?
> **Đáp án:** 15² = **225**

**Bài 2.** Tổng 1 + 3 + 5 + 7 + ... + 99 là bao nhiêu?
> **Đáp án:** Có 50 số lẻ từ 1 đến 99 (vì 99 = 2×50 − 1). Tổng = 50² = **2 500**.

**Bài 3.** (Mở rộng) Tổng các số lẻ từ 1 đến 199 = ?
> **Đáp án:** 100 số lẻ → 100² = **10 000**

---

### 📝 6. Tổng kết (5 phút)

**Học sinh ghi vào sổ:**
- Quy luật em đã phát hiện: ___________________
- Quy luật này đúng với **mọi n** không? __________
- Em có thể chứng minh quy luật bằng cách nào? __________

---

## 📝 BÀI TẬP VỀ NHÀ

**Bài A.** Tính (dùng quy luật vừa học):
1. Tổng 8 số lẻ đầu tiên
2. Tổng 12 số lẻ đầu tiên
3. Tổng 25 số lẻ đầu tiên

**Bài B.** Tổng 1 + 3 + 5 + 7 + ... + 49 = ?

**Bài C.** Một dãy có tổng = 169. Em đoán đó là tổng của bao nhiêu số lẻ đầu tiên?

**Bài D.** (Khám phá thêm) Tính các tổng sau và tìm quy luật:
1. 2 + 4 + 6 = ?
2. 2 + 4 + 6 + 8 = ?
3. 2 + 4 + 6 + 8 + 10 = ?

Em thấy quy luật gì?

### ✅ Đáp án

**Bài A:** 1) 8² = **64** — 2) 12² = **144** — 3) 25² = **625**

**Bài B:** Từ 1 đến 49 có (49+1)÷2 = 25 số lẻ. Tổng = 25² = **625**.

**Bài C:** Tổng = n² = 169 → n = √169 = **13 số lẻ** (từ 1 đến 25).

**Bài D:**
- 2+4+6 = 12 = 3×4
- 2+4+6+8 = 20 = 4×5
- 2+4+6+8+10 = 30 = 5×6
- **Quy luật:** Tổng n số chẵn liên tiếp bắt đầu từ 2 = **n × (n+1)**.

---

## 💡 Mẹo cho giáo viên

- **Đây là buổi DỰ ÁN** — không nói trước đáp án! Hãy để học sinh tự khám phá ra "Aha, đây là số bình phương!"
- Khuyến khích học sinh nói lên suy nghĩ trong khi tính.
- **Câu hỏi gợi mở:** "Em có thể đoán tổng tiếp theo trước khi tính không?" — kích hoạt **dự đoán → kiểm tra**.

---

## 🎁 Bài mở rộng

**Tổng quát:** Tính tổng các số lẻ từ a đến b (không bắt đầu từ 1).

Ví dụ: 7 + 9 + 11 + 13 + 15 = ?

**Mẹo:** Tổng từ 1 đến 15 trừ tổng từ 1 đến 5.
- Số lẻ từ 1-15: 8 số (1,3,5,7,9,11,13,15) → tổng = 8² = 64
- Số lẻ từ 1-5: 3 số (1,3,5) → tổng = 3² = 9
- ⇒ 7+9+11+13+15 = 64 − 9 = **55**

Kiểm tra: 7+9+11+13+15 = 55 ✓

---

## 🔗 Kết nối buổi tiếp theo

Buổi 15 — **Số nguyên âm và dương** (Chương 4): học về **trục số** có cả số âm, ứng dụng nhiệt độ.
