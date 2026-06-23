# BUỔI 52 — HÌNH KHỐI 3D & LƯỚI (Phần 1)

**Chương 11.1** — Cambridge Stage 6 | **Tuần 24** | **60 phút** | **Kèm 1-1**

---

## 🎯 Mục tiêu bài học

- ✅ Nhận biết các **hình khối 3D** phổ biến
- ✅ Đếm **mặt, cạnh, đỉnh** (vertex)
- ✅ Vẽ và đọc **lưới** (nets) của hình khối

---

## 📚 Từ vựng Anh - Việt

| Tiếng Anh | Tiếng Việt |
|---|---|
| 3D shape / Solid | Hình khối 3D |
| Cube | Khối lập phương |
| Cuboid | Khối hộp chữ nhật |
| Prism | Khối lăng trụ |
| Pyramid | Khối chóp |
| Cylinder | Khối trụ |
| Cone | Khối nón |
| Sphere | Khối cầu |
| Face | Mặt |
| Edge | Cạnh |
| Vertex (plural: Vertices) | Đỉnh |
| Net | Lưới (hình triển khai) |

---

## ⏱️ TIẾN TRÌNH BUỔI HỌC

### 🔥 1. Khởi động (5 phút)

**Tìm xung quanh:**
- Hộp bánh = hình gì? (khối hộp chữ nhật)
- Lon nước ngọt = hình gì? (khối trụ)
- Bóng đá = hình gì? (khối cầu)
- Kim tự tháp = hình gì? (khối chóp)

---

### 🎯 2. Giới thiệu (5 phút)

> "Buổi trước em học hình **phẳng** (2D). Hôm nay học hình **khối** (3D) — có chiều cao thật, có thể cầm được. Mỗi khối có 3 thành phần: **mặt** (phẳng), **cạnh** (đường), **đỉnh** (điểm)."

---

### 📖 3. Lý thuyết (15 phút)

#### 3.1. Bảng các hình khối phổ biến

| Khối | Mặt | Cạnh | Đỉnh | Đặc điểm |
|---|---|---|---|---|
| **Lập phương** | 6 (vuông) | 12 | 8 | Tất cả mặt đều bằng nhau |
| **Hộp chữ nhật** | 6 (CN) | 12 | 8 | 3 cặp mặt đối bằng nhau |
| **Lăng trụ tam giác** | 5 (3 CN + 2 TG) | 9 | 6 | 2 đáy là tam giác |
| **Chóp tứ giác (Kim tự tháp)** | 5 (4 TG + 1 vuông) | 8 | 5 | 1 đỉnh, đáy hình vuông |
| **Chóp tam giác (Tetra)** | 4 (đều TG) | 6 | 4 | Tất cả mặt là TG |
| **Trụ** | 3 (2 tròn + 1 cong) | 2 (vòng tròn) | 0 | 2 đáy là đường tròn |
| **Nón** | 2 (1 tròn + 1 cong) | 1 (vòng tròn) | 1 (đỉnh) | Đáy tròn, 1 đỉnh |
| **Cầu** | 1 (cong) | 0 | 0 | Hoàn toàn cong |

#### 3.2. Công thức Euler

> 🔑 Với mọi đa diện đều: **Mặt + Đỉnh = Cạnh + 2**

**Kiểm tra với lập phương:** 6 + 8 = 12 + 2 = 14 ✓

#### 3.3. Lưới (Nets)

> 🔑 **Lưới** = hình phẳng khi gấp lại tạo thành hình khối.

**Lưới của hình lập phương:**

```
        ┌──┐
        │  │
   ┌──┬─┼──┼──┬──┐
   │  │ │  │  │  │     ← Đây là 1 trong 11 lưới
   └──┴─┴──┴──┴──┘        của hình lập phương!
        │  │
        └──┘
```

Hình lập phương có **11 lưới khác nhau** (Cambridge yêu cầu biết vài lưới phổ biến).

**Lưới của khối hộp:** Tương tự nhưng các mặt là HCN khác kích thước.

---

### ✨ 4. Ví dụ (15 phút)

#### Ví dụ 1: Đếm

> **Đề:** Khối lập phương có:
> a) Bao nhiêu mặt?
> b) Bao nhiêu cạnh?
> c) Bao nhiêu đỉnh?

**Giải:** a) **6** mặt — b) **12** cạnh — c) **8** đỉnh

#### Ví dụ 2: Khối chóp

> **Đề:** Kim tự tháp Ai Cập (chóp tứ giác). Đếm các thành phần.

**Giải:**
- Mặt: **5** (4 mặt tam giác + 1 mặt đáy hình vuông)
- Cạnh: **8** (4 cạnh đáy + 4 cạnh đứng)
- Đỉnh: **5** (4 đỉnh đáy + 1 đỉnh trên)

#### Ví dụ 3: Khối lăng trụ tam giác

> **Đề:** Khối có hình dáng giống lăng kính (lăng trụ tam giác). Đếm.

**Giải:**
- Mặt: **5** (2 tam giác + 3 chữ nhật)
- Cạnh: **9**
- Đỉnh: **6**

**Kiểm tra Euler:** 5 + 6 = 9 + 2 ✓

#### Ví dụ 4: Vẽ lưới

> **Đề:** Vẽ lưới của khối hộp 4 × 3 × 2 cm.

**Hướng dẫn:**

```
   ┌──── 4 ────┐
   │           │ 2
   ├───────────┤
   │           │ 3
   ├───────────┤
   │           │ 2
   ├───────────┤
   │           │ 3
   └───────────┘
   ┌──── 4 ────┐ 
   │           │ ... 
```

(Tổng cộng 6 mặt: 2 mặt 4×3, 2 mặt 4×2, 2 mặt 3×2)

#### Ví dụ 5: Nhận biết khối từ lưới

> **Đề:** Nếu em có 1 hình vuông + 4 tam giác đều xung quanh, gấp lại được khối gì?

**Giải:** **Kim tự tháp** (chóp tứ giác đều).

---

### ✍️ 5. Luyện tập (15 phút)

**Bài 1.** Hoàn thành bảng:

| Khối | Mặt | Cạnh | Đỉnh |
|---|---|---|---|
| Lập phương | | | |
| Hộp chữ nhật | | | |
| Lăng trụ TG | | | |
| Chóp tứ giác | | | |
| Tetra | | | |

**Bài 2.** Đếm mặt, cạnh, đỉnh của **kim cương** (hình lăng trụ đáy lục giác).

**Bài 3.** Vẽ lưới của:
- a) Lập phương cạnh 3 cm
- b) Khối hộp 5 × 3 × 2 cm

**Bài 4.** Nhận diện khối từ lưới:
- a) 6 hình vuông → ?
- b) 1 tam giác + 3 tam giác đều xung quanh → ?
- c) 1 hình tròn + 1 hình tam giác cong → ?

**Bài 5.** (Suy luận) Khối có 6 mặt và tất cả đều là hình vuông. Là khối gì?

---

### 📝 6. Tổng kết (5 phút)

**Tự đánh giá:**
- [ ] Tôi nhận biết các khối 3D
- [ ] Tôi đếm mặt, cạnh, đỉnh
- [ ] Tôi vẽ được lưới của khối hộp/lập phương

---

## 📝 BÀI TẬP VỀ NHÀ

**Bài A.** Tìm 5 vật xung quanh, đặt tên khối:

| Vật | Khối |
|---|---|
| Hộp sữa | |
| Trái cam | |
| Lon Coca | |
| Quả trứng | |
| Cuốn sách | |

**Bài B.** Đếm mặt, cạnh, đỉnh:
1. Lăng trụ ngũ giác (đáy là ngũ giác)
2. Chóp lục giác (đáy là lục giác)

**Bài C.** Vẽ lưới khối hộp **6 × 4 × 3 cm**. Tính:
1. Tổng diện tích lưới (= diện tích bề mặt khối hộp)
2. Có bao nhiêu mặt HCN?

**Bài D.** (Khó) Khối nào có **mặt và đỉnh bằng nhau**?

### ✅ Đáp án

**Bài A:**
- Hộp sữa: hộp chữ nhật
- Trái cam: khối cầu
- Lon Coca: khối trụ
- Quả trứng: gần khối cầu (oval)
- Cuốn sách: hộp chữ nhật

**Bài B:**
1. Lăng trụ ngũ giác: 7 mặt, 15 cạnh, 10 đỉnh
2. Chóp lục giác: 7 mặt, 12 cạnh, 7 đỉnh

**Bài C:**
1. Diện tích = 2(6×4 + 6×3 + 4×3) = 2(24+18+12) = **108 cm²**
2. **6 mặt** (3 cặp đối)

**Bài D:** Chóp tứ giác có 5 mặt, 5 đỉnh ✓. Cũng có khối tứ diện (tetra) có 4 mặt, 4 đỉnh ✓.

---

## 💡 Mẹo cho giáo viên

- **Trực quan tốt nhất:** Mang theo các **hộp giấy** thật để học sinh **đếm tay**.
- **Cắt và gấp:** Cho học sinh tự **cắt và gấp** lưới — hiểu sâu hơn.
- **Lỗi phổ biến:** Nhầm "đỉnh" với "đầu". Sửa: đỉnh = điểm góc.

---

## 🎁 Bài mở rộng

**5 khối đa diện Platonic** (tất cả mặt là đa giác đều):
1. **Tetra** (4 TG) - chóp tam giác đều
2. **Lập phương** (6 vuông)
3. **Octahedron** (8 TG)
4. **Dodecahedron** (12 ngũ giác)
5. **Icosahedron** (20 TG)

→ Chỉ có **5 khối Platonic** — quy luật bí ẩn của hình học!

---

## 🔗 Kết nối buổi tiếp theo

Buổi 53 — Tiếp tục khối 3D: **đặc điểm sâu** và lưới phức tạp.
