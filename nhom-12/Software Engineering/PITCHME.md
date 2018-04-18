# Low level design(Thiết kế cấp thấp)
---

## Giới thiệu
- Gồm 3 quy tắc để vận hành
1) Gói gọn những thay đổi 
 	- Áp dụng các quy tắc thiết kế trong thực hành
 	- Thiết kế hệ thống để nó có thể dễ dàng mở rộng,phù hợp với những yêu cầu trong tương lai 

2) Đảm bảo việc thiết kế các giao diện
 	- Có thể tái sử dụng các phần trong hệ thống 
 	- Thu gọn hệ thống và dễ dàng sử dụng trong tương lai

3) Ưu tiên các thành phần thừa kế
	- Các thành phần dễ phát triển hơn trong tương lai
	- Cho phép mềm dẻo, linh hoạt hơn tại runtime
---

## Khái quát các mẫu thiết kế
- Cung cấp 1 bộ quy tắc để hệ thống tránh được những vấn đề có thể tiến triển
- Đưa ra 1 từ vựng chung để phổ biến giữa các nhà phát triển
- Mỗi khi thêm một mẫu thiết kế tức là thêm một trừu tượng
- Các mẫu thiết kế có 3 phần chính:
1) Đều có 1 bộ ưu, nhược điểm chung liên kết với chúng
	Phải chắc chắn có thể giải quyết các nhược điểm
2) Có 1 từ vựng chung giữa các nhà phát triển, tránh việc rườm rà khi thảo luậ về các mẫu thiết kết
3) Không nên áp dụng chúng 1 cách máy móc
- Các mô hình nên được áp dụng trong các ngôn ngữ hướng đối tượng
- Các mẫu thiết kế có 3 loại:
	- Mẫu thiết kế khởi tạo: xây dựng object bằng cách mở rộng (extend)
	- Mẫu thiết kế cấu trúc: tránh được những vấn đề tiến triển trong tương lai
	- Mẫu thiết kế hành vi: giúp dễ dàng hơn trong việc thêm các hành vi vào hệ thống tại runtime
---

## Mẫu thiết kế singleton
![alt](https://allaravel.com/wp-content/uploads/2017/07/singleton-pattern-uml.png)
- Là mẫu thiết kế đơn giản nhất
- là một mô hình thiết kế khởi tạo
- Để sử dụng rộng rãi một đối tượng (object) trong hệ thống nhưng không truyền thể hiện (instance) của object tới nơi muốn sử dụng, hoặc chỉ muốn có một thể hiện duy nhất của object
- Không thể gọi constructor vì nó được xây dựng riêng biệt (private), mà phải gọi phương thức tĩnh getInstance để trả về thể hiện của đối tượng
- Nếu đối tượng chưa được gắn, hoặc các trường (field) là null, nó sẽ gọi hàm khởi tạo riêng
- Sẽ phát sinh một số phức tạp nếu sử dụng nó với ngôn ngữ đa luồng  
- Thường được sử dụng trong các mẫu thiết kế khác
- Là một biến toàn cục, cần xem xét nếu muốn phổ biến trong toàn bộ thiết kế vì chúng tỏ ra yếu kém trong việc theo dõi tình trạng của hệ thống
- Vai trò của phương thức tĩnh khá hạn chế và cố định
- Khiến việc kiểm tra code khó hơn 
---

## Mẫu thiết kế chiến lược (Strategy)
![alt](https://allaravel.com/wp-content/uploads/2017/07/Strategy-pattern-uml.png)
- Có thể thay đổi cơ chế hoạt động của một ứng dụng dựa trên những nhu cầu mới
- Cung cấp cơ chế cho việc tóm lược các thuật toán để cho phép mở rộng trong tương lai
- Cung cấp một giao diện chiến lược mới để có thể tiến hành bổ sung các chức năng mới cho hệ thống
- Chỉ phụ thuộc vào giao diện nên nó không tương tác với các trường hợp cụ thể
- Những gì mà mẫu thiết kế làm là ẩn các thông tin cụ thể của triển khai thuật toán khỏi client
- Tách rời các client ra khỏi những thay đổi của thuật toán trong hệ thống
- Khi muốn bỏ sung thuật toán mới, chỉ cần triển khai các giao diện và thêm chúng
- Các mãu thiết kế chiến lược có thể thay đổi để bổ sung đặc tính mới, chứ không phải thay đổi chúng
- Bao gồm các mô hình chiến lược, các giao diện cấp cao (high-level) khai báo cấu trúc của các thuật toán sẽ được thực hiện theo mô hình
- Khi đóng mô hình để sửa đổi, cần thông qua một ngữ cảnh. Đối tượng ngữ cảnh sẽ tham chiếu đến chiến lược di chuyển, và trường này sẽ không thay đổi tại runtime
- Khi có yêu cầu từ client, các trường sẽ được chuyển tiếp vào chiến lược (strategy) thích hợp
- Cần có một kỹ thuật để che dấu bối cảnh (context) và client khỏi các chiến lược mới để không vi phạm phần sửa đổi mở rộng
---

## Mẫu thiết kế trạng thái (State)
![alt](https://i2.wp.com/www.dofactory.com/images/diagrams/net/proxy.gif)
- Thay đổi hành vi của chương trình theo cơ chế động
- Đóng gói trạng thái bên trong các đối tượng trạng thái và cho phép chúng quản lý sự chuyển đổi giữa các trạng thái khác nhau
- Không phải sửa đổi các client khác nhau phụ thuộc vào trạng thái đã tồn tại trước đó
- Dễ dàng mở rộng các tiện ích, bổ sung các trạng thái
- Phản ứng đến sự thay đổi trạng thái tại runtime
- Mang lại một cơ chế làm các trạng thái độc lập hơn và có thể tự chứa chính nó
- Có thể nắm bắt các trạng thái chuyển của hệ thống tại runtime với một sơ đồ trạng thái
- Đem lại sự linh hoạt trong việc quản lý chuyển đổi trạng thái của hệ thống
---

## Mẫu thiết kế trạng thái và chiến lược
- Giống nhau:
	- Về cấu trúc là cơ bản giống nhau, cả 2 cùng sử dụng thừa kế
	- Tách riêng client khỏi những thay đổi trong tương lai
- Khác nhau:
1)
	- Mẫu thiết kế chiến lược sử dụng giao diện để gói gọn các thuật toán, có thể mở rộng chúng bằng cách triển khai các thuật toán mới
  	- Mẫu thiết kế trạng thái sử dụng giao diện trạng thái để nắm bắt chúng
2) 
	- Mẫu thiết kế trạng thái cho phép các trạng thái tự động thay đổi tại runtime. Nó sử dụng tham chiếu ngữ cảnh để gọi trạng thái thiết lập
	- Mẫu thiết kế chiến lược với các thuật toán được thiết lập khi bắt đầu và được sử dụng trong suốt quá trình thực hiện của hệ thống
- Khi bạn muốn chuyển tiếp nhiều, hãy sử dụng mẫu thiết kế trạng thái. Còn khi muốn sử dụng cùng một chiến lược (strategy) trong suốt quá trình thực hiện, hãy sử dụng mẫu thiết kế chiến lược.
---

## Mẫu thiết kế mặt ngoài (Facade)
![alt](http://aptech.fpt.edu.vn/images/CongNghe07-04-06_pic1_large.gif)
- Là mô hình cấu trúc giúp client sử dụng hệ thống con dễ dàng hơn bằng cách làm giảm sự phức tạp của nó
- Client không cần học cách sử dụng các kiểu khai báo một cách độc lập, mà chỉ cần tương tác với mặt ngoài của chính nó
- Lấy các giao diện (interface) làm tham số (parameter) và trả lại các loaị giao diện trong kết quả, để sử dụng lại client mà không cần dùng toàn bộ hệ thống con
- Việc tái sử dụng mã (code) cũng dễ dàng hơn
- Về nguyên tắc thiết kế cấp thấp, nó khuyến khích sự kết hợp giữa client và hệ thống con
- Về nguyên tắc thiết kế chắc chắn, nó vi phạm nguyên tắc trách nhiệm đơn lẻ, nên cần cân nhắc các loại hình hỗ trợ muốn có trong tương lai
---

## Mẫu thiết kế trang trí (Decorator)
![alt](https://allaravel.com/wp-content/uploads/2017/07/decorator-pattern-uml.png)
- Cho phép thêm các kết hợp tùy ý của các hành vi vào các thể hiện riêng của đối tượng
- Kết hợp các hành vi có thể có mà không cần biên soạn trước
- Mục đích là gói các hành vi mới vào một thể hiện của đối tượng
- Có khả năng tạo ra các hành vi mới tại runtime
- Có sự phụ thuộc vào các thành phần, sử dụng chúng để mở rộng hệ thống
- Cách gói các thành phần là tạo một decorator mới và truyền nó vào đối tượng đã tồn tại trong hàm khởi tạo (constructor)
- Gói gọn và sắp xếp các hành vi một cách độc lập, mà không phải tạo ra các lớp phụ độc lập khác
- Có thể thay đổi tại runtime
- Hỗ trợ nguyên tắc mở/đóng (open/close)
- Việc gỡ lỗi cũng cần đòi hỏi sự khéo léo, vì khó có thể thấy sự lớp đối tượng bên trong nó
---

## Mẫu thiết kế MVC (Model View Controller)
![alt](https://i.stack.imgur.com/E5ynk.png)




