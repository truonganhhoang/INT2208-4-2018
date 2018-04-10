# THIẾT KẾ CẤP CAO
- (HIGH LEVEL DESIGN)
+++

# SỰ TRỪU TƯỢNG
- (Abstraction)

![Abstraction image](https://previews.123rf.com/images/sylverarts/sylverarts1710/sylverarts171000027/87383661-mechanical-engineering-technology-vector-abstract-background-cybernetic-abstraction-with-innovative-.jpg)
+++

## GIỚI THIỆU VỀ SỰ TRỪU TƯỢNG
- (Introduction to Abstraction)
+++
### Khái niệm

- sự trừu tượng là một khái niệm căn bản được sử dụng bởi các lập trình viên để quản lý sự phức tạp trong ứng dụng của họ.
+++

### Tính chất

- cho phép lập trình viên tập trung vào các khía cạnh chính của thông tin được yêu cầu bởi một nhiệm vụ và một bên liên quan nhất định
  - =>vì vậy mức độ trừu tượng chúng ta sử dụng sẽ thay đổi theo từng nhiệm vụ và các bên liên quan
  
- Nếu thêm quá nhiều lớp trừu tượng vào hệ thống thì sẽ rất khó hiểu và phát triển
  - =>vì vậy việc cân bằng giữa quá nhiều và quá ít sự trừu tượng là một quá trình cần thời gian phát triển của kỹ sư  hay kiến trúc sư
  - Nhưng nó đóng một vai trò quan trọng trong việc phát triển chung của hệ thống
---

## PHÂN TÍCH
- (Decomposition)
+++

### Khái niệm 

- Phân tích (Decomposition) là quá trình phá vỡ một mô tả phức tạp, cấp cao của một hệ thống thành nhiều mảnh nhỏ dễ quản lý hơn.
+++

### Mục đính

- làm cho những nhiệm vụ thông thường trở nên đơn giản và những nhiệm vụ đặc biệt vẫn còn khả thi.
- chúng ta muốn đảm bảo những nhiệm vụ bất thường đó vẫn được hỗ trợ bởi hệ thống của chúng ta nhưng không phải mối quan tâm hàng đầu.
+++

### Phân loại

- có 2 loại phân tích chính:

![Top-down decomposition](http://cdn.expertz.me/wp-content/uploads/TopDownAndBottomUpFeatureImage.jpg)
+++

#### Top-down decomposition
  - phân tích từ trên xuống, chúng ta sẽ có một mô tả trừu tượng, mức cao của cái mà chúng ta đang xây dựng rồi thêm các chi tiết cụ thể hơn cho nó 
  - ưu:
    - có thể có một hiểu biết tổng thể về kiến trúc hệ thống
  - nhược:
    - các nút chi tiết thấp thường xung đột với nhau vì bạn thường đưa ra các quyết định xung đột nhau khiến chúng ta phải quay trở lại để sửa
+++

#### Bottom-up composition
- tổng hợp từ dưới lên, chúng ta sẽ nghĩ về những yếu tố cấp thấp rồi chúng ta sẽ xây dựng  từ cấp thấp lên mức cao hơn
- ưu:
  - giúp chúng ta xây dựng hệ thống từ sớm
  - tập trung vào việc xây dựng mã tái sử dụng được
- nhược:
  - sau khi xây dựng hệ thống đến cấp cao mới nhận ra chúng ta có thể đã tạo ra những chi tiết cài đặt gây ra sự không nhất quán, gây cản trở
---

## ĐÓNG GÓI
- (encapsulation)
+++

### Khái niệm

-  không cho phép người sử dụng các đối tượng thay đổi trạng thái nội tại của một đối tượng. Chỉ có các phương thức nội tại của đối tượng cho phép thay đổi trạng thái của nó

- =>một trong bốn tính chất cơ bản của Lập trình hướng đối tượng

- =>giúp bảo đảm sự toàn vẹn của đối tượng
+++

- ví dụ về Tính đóng gói

```Java
class SinhVien{
    private String hoten, diachi, masv;
    private int tuoi;

    public setTuoi(int t){
        //ngăn việc người dùng đặt tuổi nhỏ hơn 0
        if(t >=0){
            this.tuoi = t;
        }
    }
}
```
---

# BIỂU DIỄN KỸ THUẬT
- (Technical Representations)
+++
### Khái niệm

- Những ý tưởng mức cao (tính trừu tượng cao) khi đưa vào hệ thống phần mềm cần được cụ thể hóa trở thành những nhiệm vụ khả thi.
+++
### Các bước

- Đặc tả ý tưởng người dùng
- Thiết kể biểu đồ
- Code
+++

#### Đặc tả ý tưởng

- Điều đầu tiên cần làm là chuyển những ý tưởng, yêu cầu của người dùng thành những đặc tả.

  - Trong suốt quá trình cụ thể hóa, chúng ta sẽ nghiên cứu và quay lại chỉnh sửa ý tưởng gốc. Đó là quá trình lặp đi lặp lại.
+++
#### Thiết kế
- Chuyển đổi từ những đặc tả thành thiết kế khá khó khăn vì đặc tả là những chỉ là những văn bản.Nhưng thiết kế thì cần phải cụ thể hơn nhiều
  - Thiết kế có thể là biểu đồ UML hay một số loại biểu đồ khác
  - Thiết kế cũng là quá trình lặp đi lặp lại
+++
#### Code

- cụ thể hóa thiết kế: code
- Bước này có thể là: thuật toán nào? cấu trúc dữ liệu gì? ...
+++

- Cần nhớ rằng, các quá trình trên là lặp đi lặp lại, chỉnh sửa đến khi đạt kết quả tốt.

- Có thể có nhiều biểu diễn kỹ thuật khác nhau và mỗi biểu diễn kỹ thuật mang lại giá trị khác nhau.Một hệ thống có nhiều lớp biểu diễn kỹ thuật sẽ có sự minh bạch, rõ ràng trong việc xây dựng hệ thống.
--- 

# API

- API là giao diện cho phép các phần tử của chương trình tương tác với nhau.
- API có thể được tái sử dụng giúp tiết kiệm thời gian công sức. giảm số lượng dòng code và giảm chi phí phát triển phần mềm
- Các API sẽ được hỗ trợ lâu dài nên khi thiết kế API phải tuân thủ các nguyên tắc thiết kế API

