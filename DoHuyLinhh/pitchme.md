# Công nghệ phần mềm: Giới thiệu
## Quy trình
*  Tổng quan module
*  Why process?
*  Quy trình cổ điển

---
## Tổng quan module
### Tổng quan
- Trong module này, chúng ta sẽ khám phá quy trình phát triển phần mềm có thể giúp tạo ra đa dạng các hoạt động phức tạp để xây dựng hệ thống hiện đại như thế nào. Sử dụng trong công nghiệp, chúng tôi sẽ thảo luận về những lợi ích và hạn chế của từng phương pháp, cũng như cách chọn quy trình tốt nhất cho nhóm và dự án cụ thể của bạn.

---
### Mục tiêu
1. Tìm hiểu về các bên liên quan và các loại tài liệu họ sử dụng để liên lạc trong quá trình phát triển phần mềm.
2. Tìm hiểu về quy trình phần mềm truyền thống, bao gồm cả phương thức thác nước và xoắn ốc.
3. Tìm hiểu về quy trình phầm mềm linh hoạt hiện đại, lập trình cực hạn, hướng phát triển thử nghiệm, và phương pháp scrum.

--- 
## Quy trình phần mềm

### Why Process ?
---

### Quá trình 
- Xây dựng quy trình chính là trả lời các câu hỏi:
    - Chúng ta đang cố gắng xây dựng cái gì ?
    - Ai là người tham gia vào toàn bộ quá trình phát triển phần mềm?
    - Các nhóm sẽ phối hợp với nhau như thế nào ? Họ sẽ thực sự xây dựng hệ thống như thế nào ?
    - Khi nào tất cả sẽ được hoàn thành ?

---
### Các bên liên quan

- Xây dựng hệ thống phần mềm liên quan đến sự hợp tác của nhiều dự án của các bên liên quan.
    - Nhà phát triển (Developers) 
    - Đội kiểm định chất lượng (QA team)
    - Quản lý (Management)
    - Đội tiếp thị và bán hàng  (Sales and marketing team)
    - Người dùng (Users)
    - Đội hỗ trợ (Support team)

---
### Các bên liên quan

- Nhà phát triển (Developers):
    - Biến ý tưởng, tài liệu thành sản phẩm 
- Đội kiểm định chất lượng (QA team): 
    - Xác nhận sản phẩm hoạt động, đảm bảo rằng sản phẩm có thể chạy trong thực tế và có thể triển khai
- Quản lý (Management): 
    - Tham gia để giúp phối hợp giữa các nhóm khác nhau.

---
### Các bên liên quan

- Đội tiếp thị và bán hàng  (Sales and marketing team):
    - Bán sản phẩm cho khách hàng
- Người dùng (Users): 
    - Người sử dụng sản phẩm. Chúng ta hy vọng họ sẽ gửi lại những phản hồi về sản phẩm.
- Đội hỗ trợ (Support team):
    - Đội hỗ trợ người dùng liên tục, cung cấp phản hồi của người dùng cho đội kỹ thuật.

---
### Các bên liên quan
- Các bên liên quan phải giao tiếp hiệu quả và có sự đồng thuận về cách xây dựng hệ thống phần mềm.

    - => Cần những tài liệu và quy trình khác nhau để giúp mọi người hiểu rõ việc cần làm và chúng sẽ được thay đổi tùy theo nền tảng và kinh nghiệm của các stakeholders

---
### Tài liệu

- Specification : tài liệu đặc tả hệ thống
- Development : tài liệu về phong cách phát triển
- Vacidation : tài liệu xác nhận
- Deployment / Evolution : Các tài liệu triển khai và nâng cấp.

--- 
### Tài liệu

- Specification (Tài liệu đặc tả):
    - Đưa ra nhiệm vụ, mục tiêu kinh doanh, và yêu cầu bản thân.
    - Chủ yếu dành cho bên quản lý, người dùng, bán hàng ( những bên xác định hệ thống cần chức năng gì ) 
--- 
### Tài liệu
- Development (Tài liệu phát triển):

    - Kế hoạch kiến trúc hệ thống, kế hoạch thiết kế, kế hoạch thực hiện
    - Chủ yếu dành cho bên quản lý, đội phát triển và đội kiểm định chất lượng

---
### Tài liệu

- Vacidation (Tài liệu xác nhận):
    - Kế hoạch kiểm tra sản phẩm, đánh giá rủi ro
    - Đặc biệt quan trọng cho đội kiểm định chất lượng
   
- Deployment / Evolution (Tài liệu triển khai và nâng cấp):
    - Bao gồm kế hoạch phát triển và chiến lược bảo trì

---
### Tài liệu

- => Tài liệu là một cơ chế chủ chốt để giảm thiểu rủi ro liên quan đến việc xây dựng các sản phẩm phần mềm bằng cách đảm bảo rằng tất cả mọi người làm việc trên cùng một kế hoạch và hiểu rõ những gì đang được xây dựng, điều gì sẽ xảy ra và khi nào được thực hiện.



---
## Quy trình cổ điển: Thác nước và xoắn ốc
---
### Mô hình thác nước
* Đặc tả yêu cầu
* Thiết kế
* Cài đặt
* Tích hợp
* Bảo trì

---
### Mô hình thác nước
#### 1. Đặc tả yêu cầu:
- Xác định các đơn vị mà hệ thống phải cung cấp các ràng buộc trong quá trình vận hành và phát triển
- xác định mục tiêu đặt ra với hệ thống là gì qua việc bàn với khách hàng, sau đó tư liệu hóa các yêu cầu thu được trong tài liệu.

---
### Mô hình thác nước
#### 2. Thiết kế:
- Phân chia các yêu cầu cho hệ thống phần mềm, phần cứng, thiết lập nên các kiến trúc hệ thống phần mềm.
- Tiến hành thiết kế phần mềm bằng cách xây dựng và mô tả hệ thống phần mềm con cấu thành nên phầm mềm được xây dựng, và quan hệ giữa các hệ thống.

---
### Mô hình thác nước
#### 3. Cài đặt:
Chuyển bản thiết kế thành một tập hợp các chương trình hoặc các đơn vị chương trình.

---
### Mô hình thác nước
#### 4. Tích hợp:
Các đơn vị chương trình được tích hợp lại với nhau tạo thành hệ thống hoàn chỉnh.


---
### Mô hình thác nước
#### 5. Bảo trì:
Đưa phần mềm vao tiến hành sử dụng trong thực tế và tiến hành các sửa đổi cầ thiết nếu người dùng phát hiện ra khiếm khuyết.

---
### Mô hình thác nước
* Là mô hình cổ điển
* Phương pháp áp dụng một lần
* Điều khiển hiệu quả
* Phạm vi giới hạn của vòng lặp
* Vòng đời dài
---
### Mô hình thác nước
* Không thích hợp với các hệ thống không rõ ràng
* Trong mô hình thác nước, năm pha trên phải thực hiện một cách tuần tự, kết thúc pha trước rồi mới thực hiện pha tiếp theo.
* Mô hình này chỉ thích hợp khi yêu cầu đã đuợc làm rõ ràng và những thay đổi sẽ được giớ hạn một cách rõ ràng trong quá trình thiết kế.


---
### Mô hình thác nước
#### Ưu điểm:
* Phù hợp với các dự án nhỏ và có yêu cầu xác định.
* Dễ phân công công việc.
* kiến trúc ổn định.

#### Nhược điểm:
* Không phù hợp với dự án lớn.
* Thời gian thực hiện lâu.

---
### Phương pháp xoắn ốc 

- Phương pháp xoắn ốc xuất hiện trong những năm 1980 như là một sự cải tiến đối với những thiếu sót của các chiến lược phát triển thác nước truyền thống.
- Sẽ tạo ra sản phẩm nhiều lần, có thể xác nhận với khách hàng trước khi chúng ta tiếp tục phát triển và mở rộng sản phẩm.

---
### Phương pháp xoắn ốc

1. Lên kế hoạch: 
    - Lên kế hoạch hởi đầu khi phát triển dự án theo phương pháp xoắn ốc. Tìm ra những yêu cầu cho phiên bản, cho nguyên mẫu trong tương lai.
    
--- 
### Phương pháp xoắn ốc
2. Phân tích rủi ro Tiếp theo: 
    - Tìm ra những gì có thể sai, các nguồn rủi ro.
    
---
### Phương pháp xoắn ốc
3. Kỹ thuật:
    - Kỹ thuật về cơ bản là quá trình phát triển phần mềm, là nơi  triển khai hệ thống và xây dựng phần mềm.
    
---
### Phương pháp xoắn ốc
4. Xác nhận:
    - Lấy nguyên mẫu và kiểm tra với khách hàng để chắc chắn rằng nó thực sự xây dựng và cung cấp chức năng mà họ thực sự muốn. 
    - Chủ động thu thập phản hồi của khách hàng.

---
### Phương pháp xoắn ốc
- Ưu điểm:
    - Xây dựng một sản phẩm sai có lẽ là nguyên nhân phổ biến nhất khiến các hệ thống thất bại trong thực tế. Mô hình xoắn ốc cố gắng giải quyết rủi ro này bằng cách kết nối với khách hàng cuối mỗi phiên bản thiết kế để chắc chắn rằng sản phẩm đáp ứng nhu cầu của họ.

---
### Phương pháp xoắn ốc
- Nhược điểm: 
    - Chờ phản hồi của khách hàng cũng có thể thực sự làm chậm quá trình phát triển phần mềm. Khách hàng có thể trì hoãn hoặc đưa ra phản hồi ngay lập tức.

