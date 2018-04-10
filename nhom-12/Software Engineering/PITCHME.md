
### Low level design
# Thiết kế cấp thấp

---

## Giới thiệu về mức thiết kế cấp thấp
- Trước khi triển khai các thiết kế vững chắc, chúng ta cần suy nghĩ về những thiết kế ở mức độ thấp hơn. Các thiết kế sẽ được triển khai như thế nào khi được mã hóa bởi các nhà phát triển
- Có 3 quy tắc phải luôn nhớ: 
+ Gói gọn những thay đổi
+ Đảm bảo việc lập trình giao diện
+ Ưu tiên các thành phần thừa kế 


---
### Gói gọn những thay đổi 
-Thiết kế hệ thống sao cho nó dễ dàng được mở rộng trong tương lai và do có các lỗi bên trong hệ thống, hồi quy được đưa ra để giải quyết chúng trong không gian bán cục bộ
<br>
-Để hệ thống có thể tồn tại lâu dài,chúng phải phù hợp với nhu cầu trong tương lai. Vì vậy, nên xây dựng các trừu tượng để có thể dễ dàng cải tiến hệ thống sau này
<br>
	+Rất khó khăn để xác định các nhu cầu trong tương lai.
	<br>
	+Không nên xây dựng hệ thống để hoàn thành mọi như cầu, vì nó khiến hệ thống khó hiểu
	<br>
	+Thêm quá nhiều trừu tượng gây ra những kết quả không mong muốn, nên cần xem xét những loại thay đổi trong tương lai bạn muốn hỗ trợ mà không cần thực hiện quá nhiều việc
	
---
### Đảm bảo việc lập trình giao diện
-Thiết kế giao diện giúp tách riêng việc thực hiện với thiết kế, và đây là mục tiêu cốt lõi cho hệ thống.
<br>
+Có thể tái sử dụng các bộ phận trong hệ thống mà không phải lo lắng về việc triển khai thực hiện các bộ phận đó.
<br>
+Nếu mã hóa, có thể tái sử dụng các gói giao diện mỏng mà không cần lo lắng về các chi tiết triển khai.
<br>
-Các giao diện định nghĩa cho hệ thống một từ vựng cấp cao, giúp ta có thể hiểu sự kết hợp diễn ra trong hệ thống, và cao hơn là hiểu được cả hệ thống đó bằng cách nhìn vào nó
<br>
-Các giao diện giúp thu gọn hệ thống 1 cách gọn gàng và dễ dàng sử dụng lại trong tương lai.
 
---
### Ưu tiên các thành phần thừa kế
-Giúp việc mã hóa tự dộng hơn tại runtime và dễ dàng thêm các tính năng mới.
<br>
+Trái ngược hơn so với các mẫu thiết kế khác khi tận dụng các thừa kế. 
<br>
+Các thành phần này dễ phát triển hơn trong tương lai vì mã hóa dựa trên thành phần mềm dẻo hơn mã hóa dựa trên thừa kế.
<br>
-Cách hoạt động của thành phần là thông qua sự ủy thác
<br>
+Gọi 1 phương thức của đối tượng được cung cấp bởi 1 tham số, 1 trường trong 1 lớp. Và các phương thức ấy sẽ hoàn thành công việc cho bạn.
<br>
-Các thành phần hướng bạn tới việc có nhiều lớp nhỏ hơn, các lớp có ràng buộc chặt chẽ hơn với bộ chức năng cụ thể
<br>
-Cho phép mềm dẻo, linh hoạt hơn tại runtime bằng cách gọi các phương thức

---
## Khái quát các mẫu thiết kế
# Những vấn đề của các mẫu thiết kế
-Các mẫu thiết kế cung cấp 1 bộ hướng dẫn giúp hệ thống tránh được những vấn đề có thể tiến triển trong tương lai
<br>
-Tận dụng những hiểu biết về các mẫu thiết kế trước đó
<br>
-Các mẫu thiết kế cũng giúp chúng ta xây dựng hệ thống với tính linh hoạt bằng nhiều cách khác nhau tùy vào tình hình
<br>
-Đưa ra từ vựng chung và phổ biến nó giữa các nhà phát triển
<br>
-Nhấn mạnh đến cấu trúc hệ thống sao cho chúng có thể được sử dụng lại nhiều hơn, điều này thường bị bỏ qua khi xây dựng hệ thống trong thực tế

---
-Trong nhiều trường hợp, các mẫu thiết kế không có ý nghĩa
<br>
-Mỗi khi thêm vào mẫu thiết kế mới, cũng có nghĩa là thêm 1 trừu tượng mới
<br>
+Các trừu tượng làm hệ thống khó hiểu hơn với các nhà phát triển
<br>
+Những trừu tượng cho phép mở rộng một số khả năng. Nhưng nếu việc sử dụng chúng không bao giờ kết thúc, sẽ rất khó khăn để có thể hiểu và gỡ lỗi hệ thống
<br>
-Tất cả các mẫu thiết kế đều có 3 phần chính, và chúng đang cố gắng giải quyết một vấn đề mang tính đặc thù, giúp cải thiện vấn đề ấy.
<br>
-Tất cả các mẫu thiết kế đều dựa trên kinh nghiệm cũ của các nhà phát triển, nên chúng đều có 1 bộ ưu và nhược điểm riêng
<br>
+Nghĩ về các ưu điểm và xem chúng có đem lại lợi ích mà bạn quan tâm hay không
<br>
+Xem xét có đủ khả năng giải quyết những bất lợi xảy ra, vì mọi mô hình đều có những khuyết điểm
<br>
+Một trong những ưu điểm của các mẫu thiết kế là có 1 từ vựng chung, các nhà thiết kế có thể tập trung vào thiết kế của chính họ. Vì họ có thể làm rõ vai trò của từng lớp đặc thù trong mô hình của chính nó.
<br>
+Làm cho các cuộc thảo luận về việc thiết kế bớt rườm rà

---
-Không nên áp dụng các mẫu thiết kế 1 cách máy móc
<br>
-Khi thêm 1 mẫu thiết kế vào hệ thống, nên tiến hành thiết kế nó trước hoặc tái cấu trúc nó 1 cách cẩn thận vào hệ thống hiện có
<br>
-Phải hiểu được bạn đang cố gắng làm gì
<br>
-Các mẫu thiết kế là một ngôn ngữ độc lập, chúng nên được ứng dụng cho các ngôn ngữ hướng đối tượng.
<br>
-Các mẫu thiết kế chi làm 3 loại cấp cao:
<br>
+Các mẫu thiết kế sáng tạo, giúp xây dựng các vật thể bằng cách mở rộng
<br>
+Các mấu thiết kế cấu trúc, giúp cấu trúc của hệ thống tránh được những vấn đề sau này
<br>
+Các mẫu thiết kế hành vi, giúp dễ dàng hơn trong việc thêm các hành vi vào hệ thống tại runtime


