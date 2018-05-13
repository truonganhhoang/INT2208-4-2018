### THIẾT KẾ MỨC CAO
### (HIGH LEVEL DESIGN) (Tiếp)
---

#### SỰ PHÁT TRIỂN CỦA REST
#### GHÉP NỐI (COUPLING)
#### LIÊN KẾT (COHESION)
#### NGUYÊN TẮC THIẾT KẾ: RẮN (SOLID)
---

### sau vô số lần gọi, nó vẫn trả về kết quả như nhau
- Khoảng những năm 1970 xuất hiện 1 giải pháp truyền tin hướng có tên là RPC
- RPC viết tắt của cụm từ Remote Procedure Calls (tạm dịch là các cuộc gọi thủ tục từ xa)
---

### Một số vấn đề của RPC


 1) Không linh hoạt thay đổi kể từ khi nó giả định một mối quan hệ tĩnh giữa máy khách và máy chủ tại thời gian chạy, điều này gây ra các mã số máy khách và máy chủ được kết chặt với nhau
 
 2) RPC được dựa trên mô hình lập trình thủ tục/ cấu trúc, nó đã lỗi thời với các mô hình hướng đối tượng
 
 3) RPC thiếu minh bạch vị trí, bảo mật lời gọi RPC cần mã hóa, chữ kí,... phức tạp khiến độ trễ cao hơn
 
---

### REST Development
**Mô hình RPC(Remote Procedure Calls)**
![alt](http://pubs.opengroup.org/onlinepubs/9629399/c7060601.gif)

---

### Giới thiệu về REST
- REST (Representational State Transfer) là một kiến trúc phần mềm cho các ứng dụng hypermedia phân tán
- REST được Roy Fielding phát minh vào những năm 1990
- Là một cách cung cấp khả năng tương tác giữa các hệ thống trên mạng Internet
---

### Thiết kế cốt lõi quyết định REST

 1) Được lựa chọn để giải quyết nhiều thách thức cơ bản mà hệ thống phần mềm dựa trên web gặp phải

 2) Cung cấp một giao diện thống nhất để truy cập các hệ thống độc lập đơn giản, đáng tin cậy, có khả năng mở rộng

 3) Tất cả những thuộc tính này vẫn giữ đúng đối với các hệ thống mà chúng ta hiện đang thiết kế
---

### Hạn chế kiến trúc của REST
- Hệ thống REST hoạt động theo mô hình client- server, trong đó server là tập hợp các service nhỏ lắng nghe các request từ client
- Với từng yêu cầu khác nhau thì có thể một hoặc nhiều service xử lý
- Các hệ thống dựa trên REST có nhiều mức độ về hạn chế kiến trúc
---

### Hạn chế kiến trúc của REST
**1) Về việc thực hiện yêu cầu của người dùng**
- URI (định dạng tài nguyên thông nhất) cung cấp một cơ chế đơn giản và minh bạch để đặt tên các dịch vụ REST từ xa
- Các dịch vụ dựa trên REST đều sử dụng phương pháp truy cập chuẩn để tham số hóa các yêu cầu được thực hiện từ client đến REST server
---

### REST Development
- Khi client yêu cầu URI từ xa sử dụng phương thức truy cập, server sẽ trả về mô tả của điều người dùng yêu cầu
- Nhưng nếu họ đưa ra yêu cầu đến cùng một URI với phương pháp truy cập xóa, server sẽ chạy và xóa tài nguyên đó
- Vì vậy bản chất của phương pháp truy cập mà người dùng chỉ định cùng với yêu cầu của họ là vô cùng có ý nghĩa
---

### Hạn chế kiến trúc của REST
**2) Về việc sử dụng đại diện trung gian**
- Khó khăn kiến trúc tiếp theo là các server dựa trên REST giao tiếp sử dụng các đại diện trung gian
- Khi REST muốn trả lời phản hồi,  nó sẽ tạo ra một đại diện của dữ liệu nội bộ của nó đó là amenable cho client sử dụng
-> Client chỉ có thể nhìn thấy định dạng của các tài liệu đang được gửi lại cho client trong đại diện trung gian này
---

### Hạn chế kiến trúc của REST
**3) Về văn bản tự mô tả**
- Rào cản kiến trúc cuối cùng là REST dựa trên tài liệu văn bản tự mô tả
- phản hồi từ một server, ngoài dữ liệu cũng gửi các link chuyển tiếp khác giúp bạn hiểu các hành động khác bạn có thể làm với kiểu dữ liệu phản hồi này
-> chúng ta phải làm các dịch vụ REST trở thành “no state”, làm tăng khả năng mở rộng của chúng

### Các phương thức chủ yếu trong REST

 1) Phương thức GET: chỉ dành cho truy cập dữ liệu, không thay đổi giá trị của resource
 
 2) Phương thức DELETE: dùng để xóa resource bởi URI
 
---

###  Các phương thức chủ yếu trong REST

 3) Phương thức PUT: Sử dụng để cập nhật dữ liệu của resource. Dữ liệu được cập nhật bằng cách xác định resource bằng URI. Nếu không tồn tại resource sẽ tạo ra một resource mới
 
 4) Phương thức POST: tạo ra một resource mới
---


### Idempotent
- Hầu hết các yêu cầu REST nên là idempotent (sau nhiều lần gọi, nó vẫn trả về kết quả như nhau)
- Điều này có nghĩa là nếu người dùng thực hiện cùng một yêu cầu nhiều lần, cùng một hành động sẽ diễn ra

---

### Dữ liệu phản hồi
- Khi một phản hồi được trả về từ một dịch vụ **REST** chứa hai thành phần chính: header và thân
- Header chứa tất cả các loại siêu dữ liệu khác nhau, nhưng một phần quan trọng là mã trạng thái
- Một danh sách sô là các mã trạng thái chuẩn được sử dụng phổ biến. VD:  số 200 cho yêu cầu thành công, 404 cho việc không thấy tài nguyên,...
---

### REST Development
- Phần dữ liệu phản hồi cũng có thể được trả về dưới nhiều dạng khác nhau
- Phổ biến nhất là JSON, XML và HTML
- HTML thường được sử dụng trong những tình huống mà ta muốn phản hồi được hiển thị trong một trình duyệt web trực quan
---

### REST Development
- XML là một định dạng giao hoán cũ hơn, cho phép các đối tượng phức tạp được mô tả trong một trường hợp cực phức tạp
- JSON được sử dụng trong trường hợp bạn muốn đối tượng phản hồi được phân tích cú pháp trực tiếp trong một trình duyệt web hoặc trong nút, (vì mọi đối tượng JSON cũng là một đối tượng JavaScript)
---

### Giao tiếp phi trạng thái (stateless communication)
- REST ám chỉ rằng hoặc là chuyển về trạng thái nguồn (resource state), hoặc lưu giữ trên client
- Server và client không lưu trạng thái của nhau
-> Mỗi yêu cầu (request) lên server thì client phải đóng gói thông tin đầy đủ để server hiểu được
---

### Giao tiếp phi trạng thái (stateless communication)
- Lý do: số lượng client tương tác sẽ ảnh hưởng nghiêm trọng tới server nếu phải giữ trạng thái cho client (về khả năng mở rộng)
-> Stateless giúp hệ thống dễ phát triển,bảo trì, mở rộng
---

### Giao tiếp phi trạng thái (stateless communication)
- Khuyết điểm: gia tăng lượng thông tin cần truyền tải giữa client và server
- Khía cạnh quan trọng khác: Hạn chế stateless cô lập các client đối với những thay đổi trên server 
---



### Chuẩn hóa các interface
- Đây là một trong những đặc tính quan trọng của hệ thống REST 
- Tạo ra các quy ước chuẩn để giao tiếp giữa các thành phần trong hệ thống, bạn đã đơn giản hóa việc client có thể tương tác với server
---

### Chuẩn hóa các interface
- Các quy ước này áp dụng cho toàn bộ các service giúp cho người sử dụng hệ thống của bạn dễ dùng hơn
- VD: hệ thống bạn đặt ra 1 chuẩn API để người dùng dù là mobile, web đều có thể kết nối vào được
- Hệ thống REST có yếu điểm ở đây vì khi chuẩn hóa rồi ta không thế tối ưu từng kết nối
---

### Chú ý
- API REST nên nhỏ để không rò rỉ chi tiết thực hiện nội bộ
- Ngoài ra, nên xem xét khả năng sử dụng của chúng để khách hàng có thể sử dụng hiệu quả
- Với việc thiết kế một API linh hoạt, API của bạn có thể được sử dụng bởi nhiều client khác nhau bằng nhiều cách khác nhau
-> Tăng tính linh hoạt cho client.
---

### GHÉP NỐI (COUPLING)
- Ghép nối là độ đo của độ phụ thuộc lẫn nhau giữa các lớp trong chương trình máy tính
- Ghép nối thực sự là vấn đề trong thực tế bởi vì có một ảnh hưởng mạnh mẽ đến cách duy trì và cải tiến hệ thống
- Lý do: Với một lớp chương trình chặt chẽ cùng với một lớp khác, thực hiện thay đổi lớp đó có thể gây ra lỗi trong các lớp khác
---

### GHÉP NỐI (COUPLING)
- Hơn nữa, nếu sửa lỗi hoặc thêm một tính năng mới vào hệ thống, cần phải sửa mã ở nhiều nơi khác nhau
-> Có thể gây ra lỗi ở nhiều nơi khác nhau, khó khăn để quản lý hệ thống 
- Điều này cũng cho thấy một thách thức về sử dụng lại
- Các lớp độc lập nhỏ hơn thì sẽ tốt hơn nhiều so với các lớp kết hợp với nhau quá chặt chẽ
---

### GHÉP NỐI (COUPLING)
- Và giảm thiểu càng nhiều càng tốt các ràng buộc kiểm soát dòng tồn tại giữa các mô-đun.
- Tóm lại, một thiết kế tốt sẽ cho các ghép nối thiếu chặt chẽ (loose coupling), ghép nối là điều cần giảm thiểu
---

### SỰ GẮN KẾT (CONHESION)
- Sự gắn kết nói về nhiệm vụ của từng lớp 
- Sự gắn kết là biện pháp để đánh giá mức độ liên kết chặt chẽ trách nhiệm của các trường trong một đơn vị thực hiện (lớp)
- Vì vậy, các biện pháp gắn kết là làm thế nào tập trung tốt các phương pháp và các trường trong một lớp
---

### SỰ GẮN KẾT (CONHESION)

- Các lớp có độ gắn kết thấp, chịu trách nhiệm cho một loạt các hành động đa dạng
-> Khó khăn cho một nhà phát triển khi nhìn vào một lớp và thực sự hiểu những gì đang thực hiện
- Cản trở việc duy trì và phát triển phần mềm
- Nhiệm vụ của từng lớp càng rõ ràng và tách biệt thì cohesion càng cao (high cohesion), đó là mục tiêu cần đạt tới khi thiết kế
---

### SỰ GẮN KẾT (CONHESION)
- Các lớp gắn kết thường có một tập nhỏ các trường private, các methord trong lớp sẽ hoạt động trên những mảng đó
- Nếu một nhiệm vụ sử dụng nhiều hơn một mảng thì sẽ có thể liên kết chặt chẽ với các mục tiêu tổng thể của lớp
---

### SỰ GẮN KẾT (CONHESION)
- Ngược lại, nếu một nhiệm vụ không sử dụng bất kỳ mảng nào trong lớp thì không liên quan với các mục tiêu tổng thể của lớp, nên được di chuyển
-> Với các lớp nhỏ ,nhà phát triển có thể di chuyển nhanh chóng trong các lớp họ quan tâm, cô lập các thay đổi, bảo trì và cải tiến dễ dàng hơn
---

#### Yêu cầu của hệ thống phần mềm 
-	Tính linh hoạt của hệ thống phần mềm là có thể thiết kế theo nhiều cách khác nhau
Một số yêu cầu về hệ thống phần mềm: 
-	Cần dễ hiểu
-	Cần chuẩn đoán và sửa lỗi một cách dễ dàng và nhanh chóng
-	Đáp ứng được các thay đổi và cải tiến trong tương lai
---

#### NHỮNG THIẾT KẾ PHẦN MỀM KÉM
**1)Thiết kế cứng nhắc (rigid designing)**
-	Là thiết kế chống lại sự thay đổi
-	Là thách thức trong thực tế vì mất nhiều nỗ lực để thay đổi
-	Xác định các rủi ro trong tương lai khó khăn
---

####  NHỮNG THIẾT KẾ PHẦN MỀM KÉM
**2)Thiết kế mong manh (design fragility)**
-	Phát sinh khi có một thiết kế dễ bị phá vỡ
-	Tạo ra nhiều giả định khi chạy chương trình
---

####  NHỮNG THIẾT KẾ PHẦN MỀM KÉM
**3)Thiết kế bất động (immobility design)**
-	Các dòng code không độc đáo
-	Thường được tìm kiếm và sao chép vào trong các hệ thống
-	Tiềm ẩn nhiều rủi ro
---

####  NHỮNG THIẾT KẾ PHẦN MỀM KÉM
**4)Thiết kế nhớt (viscous design)**
-	Dễ vi phạm hơn là tuân tủ các quy tắc thiết kế
-	Dễ bị hacker tấn công vào hệ thống
---


#### NGUYÊN TẮC THIẾT KẾ: RẮN (SOLID)
**SOLID**
- (**S**)**Nguyên tắc đơn nhiệm (Simple responcibility princibles)**
- (**O**)**Nguyên tắc Đóng và Mở (Open / Closed principle (OCP) )**
- (**L**)**Nguyên tắc khả dĩ thay thế (Liskov substitution principle (LSP) )**
- (**I**)**Nguyên tắc chia nhỏ Interface (Interface segregation principle (ISP) )**
- (**D**)**Nguyên tắc tương thích động (Dependency Inversion principle (DIP) )**
---

#### NGUYÊN TẮC THIẾT KẾ: RẮN (SOLID)
- Tính linh hoạt của các hệ thống phần mềm nghĩa là chúng có thể được thiết kế theo nhiều cách khác nhau.
- Hệ thống cần dễ hiểu, nhanh chóng chẩn đoán và sửa chữa, và chịu trách nhiệm cho sự thay đổi trong tương lai, khi muốn thêm các tính năng mới.
---

#### NGUYÊN TẮC THIẾT KẾ: RẮN (SOLID)
- Tất cả các hệ thống bắt đầu theo cách này khi chỉ có một dòng mã, nó rất dễ hiểu, dễ sửa chữa,Và phù hợp với những thay đổi trong tương lai.
- Nhưng theo thời gian, khi thêm các tính năng mới, sẽ mở rộng thiết kế, vi phạm thiết kế, làm rõ các tính năng đã có trong đó.
- Và điều này làm cho mã khó hơn và khó hơn để duy trì.
---

#### Nguyên tắc đơn nhiệm (Simple responcibility princibles)

![alt](https://image.slidesharecdn.com/2013aprilmsfagmte-singleresponsibilityprinciple-130427022920-phpapp01/95/the-single-responsibility-principle-3-638.jpg?cb=1367029949)

---

#### Nguyên tắc đơn nhiệm (Simple responcibility princibles)
- Nguyên tắc duy nhất về trách nhiệm nói là một mô-đun phần mềm nên làm một việc và nên làm tốt.
- Điều này nghe có vẻ đơn giản, nhưng trên thực tế thường cám dỗ để thêm chức năng mới vào các mô-đun hiện có thay vì tạo các mô-đun mới từ đầu.
---

#### Nguyên tắc đơn nhiệm (Simple responcibility princibles)

- Có một số mẫu thiết kế thực sựgiúp chúng tôi thực thi hoặc cải thiện khả năng mã của chúng tôi tuân theo nguyên tắc trách nhiệm duy nhất.
- Thứ nhất là mô hình chiến lược, điều này thúc đẩy chúng ta hướng tới các thuật toán nhỏ, độc lập.
---

#### Nguyên tắc đơn nhiệm (Simple responcibility princibles)
- Các mô hình lệnh giúp chúng tôi để trừu tượng các hành động một đối tượng mất từ việc thực hiện nội bộ.
- Giúp trừu tượng đi hành động của đối tượng ở các trạng thái khác nhau có thể thay đổi tự động khi chạy.
---

#### Nguyên tắc Đóng và Mở (Open / Closed principle (OCP) )

![alt](https://image.slidesharecdn.com/ppt-120429111617-phpapp01/95/principles-of-object-oriented-class-design-15-728.jpg?cb=1348987975)

---

#### Nguyên tắc Đóng và Mở (Open / Closed principle (OCP) )
-  Nên hạn chế việc chỉnh sửa bên trong một Class hoặc Module có sẵn, thay vào đó hãy xem xét mở rộng chúng.
-> Các tính năng mới có thể dễ dàng thêm vào một hệ thống mà không thay đổi thực hiện hiện có.
---

#### Nguyên tắc Đóng và Mở (Open / Closed principle (OCP) )
- **Hạn chế sửa đổi**: Ta không nên chỉnh sửa source code của một module hoặc class có sẵn, vì sẽ ảnh hưởng tới tính đúng đắn của chương trình.
- **Ưu tiên mở rộng**: Khi cần thêm tính năng mới, ta nên kế thừa và mở rộng các module/class có sẵn thành các module con lớn hơn.
- Các module/class con vừa có các đặc tính của lớp cha (đã được kiểm chứng), vừa được bổ sung tính năng mới phù hợp với yêu cầu.
---

#### Nguyên tắc khả dĩ thay thế (Liskov substitution principle (LSP) )

![alt](https://image.slidesharecdn.com/oodesignprinciplesheuristics-140808094222-phpapp02/95/oo-design-principles-heuristics-21-638.jpg?cb=1407490990)

---

#### Nguyên tắc khả dĩ thay thế (Liskov substitution principle (LSP) )
- Các instance của lớp con thay thế được instance lớp cha mà vẫn đảm bảo tính đúng đắn của chương trình.
- Đảm bảo các instance của lớp con có thể thay thế instance của lớp cha mà chương trình vẫn chạy ổn định khi mở rộng phần mềm bằng các lớp con kế thừa
- Đảm bảo rằng các lớp con có thể chạy được đúng những functions lớp cha đã cung cấp 
---

#### Nguyên tắc chia nhỏ Interface (ISP)
![alt](https://image.slidesharecdn.com/oodesignprinciplesslideshare-140515053613-phpapp01/95/objectoriented-design-principles-13-638.jpg?cb=1402624393)

- Nếu Interface quá lớn thì nên tách thành các interface nhỏ hơn, với nhiều mục đích cụ thể.
---

#### Nguyên tắc tương thích động (DIP)
![alt](http://slideplayer.com/slide/9027270/27/images/7/Dependency+inversion+principle.jpg)

---

#### Nguyên tắc tương thích động (DIP)
- Mỗi thành phần hệ thống (class, module, …) chỉ nên phụ thuộc vào các abstractions
- Không nên phụ thuộc vào các concretions hoặc implementations cụ thể.