# THIẾT KẾ CẤP CAO (HIGH LEVEL DESIGN) (Tiếp)
---

## REST Development
- **Reid Holmes** là viết tắt của từ Research, Extension and Irrigation Division Holmes
- Khoảng những năm 1970 xuất hiện 1 giải pháp truyền tin hướng có tên là RPC, nó là viết tắt của cụm từ Remote Procedure Calls (tạm dịch là các cuộc gọi thủ tục từ xa).
- Nhưng nó lại tồn tại rất nhiều vấn đề như:
 + Cần phải tìm ra làm thế nào để đặt tên cho điều bạn sẽ gọi.
 + ...để định dạng các thông số mà bạn muốn vượt qua điều đó
 + ...cách định dạng thẻ *return*- giá trị của nó sẽ trở lại từ *remote host*...
---

## REST Development
### Mô hình RPC(Remote Procedure Calls)
![alt](http://pubs.opengroup.org/onlinepubs/9629399/c7060601.gif)
---

## REST Development
- Vì vậy, ở high level design, những gì muốn làm là local machine gửi yêu cầu tới remote service
- Và khi yêu cầu được tính toán, nó sẽ gửi đi và gửi phản hồi trở lại local service mà sau đó có thể đi và hành động để đáp ứng thích hợp
- **REST**( Representational State Transfer) là một kiến trúc phần mềm cho các ứng dụng hypermedia phân tán.
- **REST** được Roy Fielding phát minh vào những năm 1990
---

## REST Development
- Thiết kế cốt lõi quyết định **REST** là:

 1) Được lựa chọn để giải quyết nhiều thách thức cơ bản mà hệ thống phần mềm dựa trên web gặp phải.

 2) Cung cấp một giao diện thống nhất để truy cập các hệ thống độc lập đơn giản, đáng tin cậy, có khả năng mở rộng

 3) Tất cả những thuộc tính này vẫn giữ đúng đối với các hệ thống mà chúng ta hiện đang thiết kế.
---

## REST Development
- Các hệ thống dựa trên REST có nhiều mức độ về hạn chế kiến trúc.
- URI cung cấp một cơ chế thực sự đơn giản và minh bạch để đặt tên các dịch vụ REST từ xa
- Các dịch vụ dựa trên REST đều sử dụng phương pháp truy cập chuẩn để tham số hóa các yêu cầu được thực hiện từ máy khách đến  REST server
- Và các phương pháp truy cập được sử dụng phổ biến nhất nhận được, đặt, đăng và xóa...
![alt](https://cdn-images-1.medium.com/max/599/1*uHzooF1EtgcKn9_XiSST4w.png)
---

## REST Development

- Các danh từ trong một hệ thống REST tương ứng với các nguồn mà hệ thống cho phép truy cập và thao tác.
- Đây là một trong những danh từ trong hệ thống, người sử dụng.
- Động từ trong các hệ thống rest tương ứng với hành động mà chúng ta có thể thực hiện trên một nguồn.
- Ngoài ra, chúng ta có thể nói xóa người dùng/ alice, điều đó có nghĩa là chúng ta muốn **xóa** người dùng Alice. Các hành động khác bao gồm **khởi tạo** để tạo người dùng mới hoặc **đặt để cập nhật** một người dùng hiện có.
---

## REST Development
- Thêm siêu dữ liệu cũng có thể được gắn vào các yêu cầu được gửi đến máy chủ sử dụng header yêu cầu đi dọc theo bất kỳ **network based payload** nào.
- Vì vậy, trong các header yêu cầu, có thể đặt thêm metadata như chỉ định loại định dạng phản hồi bạn muốn lấy lại hoặc chỉ định thông tin về người dùng thực hiện yêu cầu hoặc một số loại token ủy quyền.
- Hầu hết các yêu cầu **REST** nên là idempotent. Điều này có nghĩa là nếu bạn thực hiện cùng một yêu cầu nhiều lần, cùng một hành động nên diễn ra. Ngoại lệ cho điều này sẽ được post.
---

## REST Development
- Khi thực hiện một yêu cầu nhận được để có được người dùng, nếu bạn yêu cầu nhiều lần, nó
sẽ cho kết quả trong cùng một hành động xảy ra.
Và không nên có sự thay đổi trên máy chủ
- Khi một phản hồi được trả về từ một dịch vụ REST lại cho khách hàng, nó chứa hai thành phần chính, phần tiêu đề và phần thân.
- Tiêu đề chứa tất cả các loại siêu dữ liệu khác nhau, nhưng một phần quan trọng là mã trạng thái.
Một danh sách các mã trạng thái chuẩn được sử dụng phổ biến.
---

## COUPLING
- REID HOLMES: Kết nối nắm bắt được cách mạnh mẽ kết nối các lớp chương trình khác nhau. Khớp nối (coupling) thực sự là vấn đề trong thực tế bởi vì nó có một ảnh hưởng mạnh mẽ đến cách duy trì và tiến hóa được hệ thống của chúng ta.
- Bởi vì nếu bạn có một lớp chương trình chặt chẽ cùng với một lớp khác, thực hiện thay đổi đối với lớp đó thường có thể gây ra lỗi trong các lớp khác.
- Ngoài ra, nếu chúng ta đi sửa lỗi hoặc thêm một tính năng mới vào hệ thống của chúng ta, điều này thường có nghĩa là chúng ta cần phải sửa mã ở nhiều nơi khác nhau, cũng có thể gây ra lỗi ở nhiều nơi khác nhau.
- Điều này cũng cho thấy một thách thức về sử dụng lại.
---

## COUPLING
- Các lớp độc lập nhỏ hơn thì tốt hơn nhiều so với các lớp mà tất cả đều kết hợp với nhau chặt chẽ. Vì vậy, nếu bạn đang xem xét một lớp, và bạn nhận ra bạn cũng cần phải nhìn vào nhiều lớp 1 lúc.
- Đột nhiên, bạn có cả một loạt các trình biên tập mã mở mà làm cho nó thực sự khó khăn để quản lý hệ thống của bạn.
- Chúng ta muốn giảm thiểu các giao diện tồn tại giữa các yếu tố chương trình khác nhau, giảm thiểu sự phức tạp của các giao diện, để họ chỉ tiết lộ bề mặt tối thiểu đó là yêu cầu cung cấp các chức năng cần thiết.
- Cuối cùng, chúng tôi cũng muốn giảm thiểu càng nhiều càng tốt các ràng buộc kiểm soát dòng tồn tại giữa các mô-đun.
---

## COHESION
- Sự gắn kết, mà chúng ta đã thấy trước đây, là một các biện pháp chủ yếu để đánh giá mức độ tập trung chặt chẽ trách nhiệm của một đơn vị thực hiện (các lớp)
- Vì vậy, các biện pháp gắn kết là làm thế nào tập trung tốt các phương pháp và các trường trong một lớp.
- Các lớp có độ gắn kết thấp, kết thúc là tương đối lớn, và chịu trách nhiệm cho một loạt các hành động đa dạng. Điều này có thể làm cho nó thực sự khó khăn cho một nhà phát triển để nhìn vào một lớp và thực sự hiểu những gì đang thực hiện. Nó cũng cản trở việc duy trì và phát triển phần mềm.
---

## COHESION
- Các lớp gắn kết thường có một tập nhỏ các trường private, và các methord trong lớp sẽ hoạt động trên những mảng đó. Nếu một phương pháp sử dụng nhiều hơn một hoặc thậm chí tất cả các mảng, nó có thể liên kết chặt chẽ với các mục tiêu tổng thể của lớp.
- Ngược lại, nếu có một phương pháp mà không sử dụng bất kỳ lĩnh vực nào cả, nó có lẽ không liên quan với các mục tiêu tổng thể của lớp, và có lẽ nên được di chuyển ở một nơi khác.
---

## COHESION
- Điều này dẫn chúng ta đến một số lượng lớn các lớp học nhỏ hơn, mà thực sự là tuyệt vời bởi vì nó có nghĩa là nhà phát triển có thể di chuyển nhanh chóng trong các lớp họ quan tâm, và giúp cô lập các thay đổi, mà làm cho nó bảo trì và tiến hóa dễ dàng hơn.
---

## Design Principles: SOLID
- **Nguyên tắc đơn nhiệm (Simple responcibility princibles)**

- **Nguyên tắc Đóng và Mở (Open / Closed principle (OCP) )**

- **Nguyên tắc khả dĩ thay thế (Liskov substitution principle (LSP) )**

- **Nguyên tắc chia nhỏ Interface (Interface segregation principle (ISP) )**

- **Nguyên tắc tương thích động (Dependency Inversion principle (DIP) )**

![alt](https://howtodoinjava.com/wp-content/uploads/solid_class_design_principles.png)
---

## Design Principles: SOLID
- REID HOLMES: Tính linh hoạt của các hệ thống phần mềm có nghĩa là chúng có thể được thiết kế theo nhiều cách khác nhau.
- Nhưng muốn hệ thống dễ hiểu,nhanh chóng chẩn đoán và sửa chữa, và chịu trách nhiệm cho sự thay đổi trong tương lai,Khi muốn thêm các tính năng mới.Tất cả các hệ thống bắt đầu theo cách nàyKhi chỉ có một dòng mã, nó rất dễ hiểu, dễ sửa chữa,Và phù hợp với những thay đổi trong tương lai.
- Nhưng theo thời gian, khi thêm các tính năng mới, sẽ mở rộng thiết kế,Vi phạm thiết kế, làm rõ các tính năng đã có trong đó.
---

## Design Principles: SOLID
- Và điều này làm cho mã khó hơn và khó hơn để duy trì.
- Vì vậy, thực sự muốn suy nghĩ về thiết kế .Trong một lên phía trước một cách có chủ ý.Cuối cùng, những gì chúng tôi muốn làm là tìm ra một bộ nguyên tắc thiết kế. Để giúp hướng dẫn chúng tôi đưa ra các quyết định đúng đắn.
---

## Design Principles: SOLID
**Nguyên tắc đơn nhiệm (Simple responcibility princibles)**

![alt](https://image.slidesharecdn.com/2013aprilmsfagmte-singleresponsibilityprinciple-130427022920-phpapp01/95/the-single-responsibility-principle-3-638.jpg?cb=1367029949)

- Nguyên tắc duy nhất về trách nhiệm nói là một mô-đun phần mềm nên làm một việc và nên làm tốt.
- Điều này nghe có vẻ đơn giản, nhưng trên thực tế thường cám dỗ để thêm chức năng mới vào các mô-đun hiện có thay vì tạo các mô-đun mới từ đầu.
- Có một số mẫu thiết kế thực sựgiúp chúng tôi thực thi hoặc cải thiện khả năng mã của chúng tôi tuân theo nguyên tắc trách nhiệm duy nhất.
---

## Design Principles: SOLID
**Nguyên tắc đơn nhiệm (Simple responcibility princibles)**

- Thứ nhất là mô hình chiến lược, điều này thúc đẩy chúng tahướng tới các thuật toán nhỏ, độc lập.
- Các mô hình lệnh giúp chúng tôi để trừu tượng các hành động một đối tượng mất từ việc thực hiện nội bộ.
- Cuối cùng, mô hình nhà nước giúp chúng ta trừu tượng đicách một vật thể cư xử ở các trạng thái khác nhaucó thể thay đổi tự động khi chạy.
---

## Design Principles: SOLID
**Nguyên tắc Đóng và Mở (Open / Closed principle (OCP) )**

![alt](https://image.slidesharecdn.com/ppt-120429111617-phpapp01/95/principles-of-object-oriented-class-design-15-728.jpg?cb=1348987975)

- Chúng ta nên hạn chế việc chỉnh sửa bên trong một Class hoặc Module có sẵn, thay vào đó hãy xem xét mở rộng chúng.
- Điều này có nghĩa là các tính năng mới có thể dễ dàng thêm vào một hệ thống mà không thay đổi thực hiện hiện có.
- **Hạn chế sửa đổi**: Ta không nên chỉnh sửa source code của một module hoặc class có sẵn, vì sẽ ảnh hưởng tới tính đúng đắn của chương trình.
- **Ưu tiên mở rộng**: Khi cần thêm tính năng mới, ta nên kế thừa và mở rộng các module/class có sẵn thành các module con lớn hơn.
Các module/class con vừa có các đặc tính của lớp cha (đã được kiểm chứng đúng đắn), vừa được bổ sung tính năng mới phù hợp với yêu cầu.
---

## Design Principles: SOLID
**Nguyên tắc khả dĩ thay thế (Liskov substitution principle (LSP) )**

![alt](https://image.slidesharecdn.com/oodesignprinciplesheuristics-140808094222-phpapp02/95/oo-design-principles-heuristics-21-638.jpg?cb=1407490990)

- Các instance của lớp con có thể thay thế được instance lớp cha mà vẫn đảm bảo tính đúng đắn của chương trình.

- Như đã nói ở trên, nguyên tắc này đảm bảo các instance của lớp con có thể thay thế instance của lớp cha mà chương trình vẫn chạy ổn định, khi mở rộng phần mềm của mình bằng các lớp con kế thừa, chúng ta cần đảm bảo rằng các lớp con này có thể chạy được và chạy đúng những functions mà lớp cha đã cung cấp trước đó.
---

## Design Principles: SOLID
**Nguyên tắc chia nhỏ Interface (Interface segregation principle (ISP) )**

![alt](https://image.slidesharecdn.com/oodesignprinciplesslideshare-140515053613-phpapp01/95/objectoriented-design-principles-13-638.jpg?cb=1402624393)

- Nếu Interface quá lớn thì nên tách thành các interface nhỏ hơn, với nhiều mục đích cụ thể.
---

## Design Principles: SOLID
**Nguyên tắc tương thích động (Dependency Inversion principle (DIP) )**

![alt](http://slideplayer.com/slide/9027270/27/images/7/Dependency+inversion+principle.jpg)

- Mỗi thành phần hệ thống (class, module, …) chỉ nên phụ thuộc vào các abstractions, không nên phụ thuộc vào các concretions hoặc implementations cụ thể.