---?image=http://www.simdols.com/media/files/2016/08/it-background-5.jpg
# THIẾT KẾ CẤP CAO
(HIGH LEVEL DESIGN)
+++?image=http://longwallpapers.com/Desktop-Wallpaper/hello-kitty-wallpaper-photo-For-Desktop-Wallpaper.png

# SỰ TRỪU TƯỢNG
(Abstraction)
+++?image=http://longwallpapers.com/Desktop-Wallpaper/hello-kitty-wallpaper-photo-For-Desktop-Wallpaper.png
### Khái niệm

- sự trừu tượng là một khái niệm căn bản được sử dụng bởi các lập trình viên để quản lý sự phức tạp trong ứng dụng của họ.

+++?
![Logo](image=http://longwallpapers.com/Desktop-Wallpaper/hello-kitty-wallpaper-photo-For-Desktop-Wallpaper.png)

### Tính chất

- cho phép lập trình viên tập trung vào các khía cạnh chính của thông tin được yêu cầu
  - =>vì vậy mức độ trừu tượng chúng ta sử dụng sẽ thay đổi theo từng nhiệm vụ và các bên liên quan
  
- Nếu thêm quá nhiều lớp trừu tượng vào hệ thống thì sẽ rất khó hiểu và phát triển
  - =>vì vậy việc cân bằng giữa quá nhiều và quá ít sự trừu tượng là một quá trình cần thời gian phát triển
  - Nhưng nó đóng một vai trò quan trọng trong việc phát triển chung của hệ thống

---?image=https://i.pinimg.com/originals/b3/60/fb/b360fb44b4ced18c2b19eb9458026a1c.jpg

## PHÂN TÍCH
(Decomposition)
+++?image=https://i.pinimg.com/originals/b3/60/fb/b360fb44b4ced18c2b19eb9458026a1c.jpg

### Khái niệm 

- Phân tích (Decomposition) là quá trình phá vỡ một mô tả phứ tạp, cấp cao của một hẹ thống thành nhiều mảnh nhỏ dễ quản lý hơn.
+++?image=https://i.pinimg.com/originals/b3/60/fb/b360fb44b4ced18c2b19eb9458026a1c.jpg

### Mục đính

- làm cho những nhiệm vụ thông thường trở nên đơn giản và những nhiệm vụ đặc biệt vẫn còn khả thi.
- chúng ta muốn đảm bảo những nhiệm vụ bất thường đó vẫn được hỗ trợ bởi hệ thống của chúng ta nhưng không phải mối quan tâm hàng đầu.
+++?image=https://i.pinimg.com/originals/b3/60/fb/b360fb44b4ced18c2b19eb9458026a1c.jpg

### Phân loại

- có 2 loại phân tích chính:

![Top-down decomposition](http://cdn.expertz.me/wp-content/uploads/TopDownAndBottomUpFeatureImage.jpg)
+++?image=https://i.pinimg.com/originals/b3/60/fb/b360fb44b4ced18c2b19eb9458026a1c.jpg

#### Top-down decomposition
  - phân tích từ trên xuống, chúng ta sẽ có một mô tả trừu tượng, mức cao của cái mà chúng ta đang xây dựng rồi thêm các chi tiết cụ thể hơn cho nó 
  - ưu:
    - có thể có một hiểu biết tổng thể về kiến trúc hệ thống
  - nhược:
    - các nút chi tiết thấp thường xung đột với nhau vì bạn thường đưa ra các quyết định xung đột nhau khiến chúng ta phải quay trở lại để sửa
+++?image=https://i.pinimg.com/originals/b3/60/fb/b360fb44b4ced18c2b19eb9458026a1c.jpg

#### Bottom-up composition
- tổng hợp từ dưới lên, chúng ta sẽ nghĩ về những yếu tố cấp thấp rồi chúng ta sẽ xây dựng  từ cấp thấp lên mức cao hơn
  - ưu:
    - giúp chúng ta xây dựng hệ thống từ sớm
    - tập trung vào việc xây dựng mã tái sử dụng được
  - nhược:
    - sau khi xây dựng hệ thống đến cấp cao mới nhận ra chúng ta có thể đã tạo ra những chi tiết cài đặt gây ra sự không nhất quán, gây cản trở

---?image=https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Blue-hello-kitty-background-HD-PIC-WPB001428.jpg

## ĐÓNG GÓI
(encapsulation)
+++?image=https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Blue-hello-kitty-background-HD-PIC-WPB001428.jpg

### Khái niệm

-  không cho phép người sử dụng các đối tượng thay đổi trạng thái nội tại của một đối tượng. Chỉ có các phương thức nội tại của đối tượng cho phép thay đổi trạng thái của nó

- =>một trong bốn tính chất cơ bản của Lập trình hướng đối tượng

- =>giúp bảo đảm sự toàn vẹn của đối tượng
+++?image=https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Blue-hello-kitty-background-HD-PIC-WPB001428.jpg

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

---?image=https://cdn.wallpapersafari.com/91/51/xysYwK.jpg
## CHE GIẤU THÔNG TIN
+++?image=https://cdn.wallpapersafari.com/91/51/xysYwK.jpg

### Nguồn gốc

- được  David Parnas đề xuất lần đầu năm 1972.
![David Parnas](https://www.ria.ie/sites/default/files/david-parnas.jpg)
+++?image=https://cdn.wallpapersafari.com/91/51/xysYwK.jpg

### Khái niệm
- một chương trình sử dụng một phương thức bạn đã định nghĩa không cần biết chi tiết code bên trong phương thức đó
- giúp đơn giản việc sử dụng phương thức của lập trình viên
- thiết kế một phương thức để sử dụng mà không cần hiểu chi tiết code bên trong gọi là INFORMATION HIDING 
+++?image=https://cdn.wallpapersafari.com/91/51/xysYwK.jpg

### Ví dụ
![example](http://images.slideplayer.com/27/8909444/slides/slide_3.jpg)
+++?image=https://cdn.wallpapersafari.com/91/51/xysYwK.jpg
- trong nhiều trường hợp, che giấu thông tin (information hiding) và tính đóng gói (encapsulation) được coi là tương đương nhau
- nhiều người cho rằng che giấu thông tin là về quy tắc còn đóng gói thiên về kỹ thuật

---?color=hsla(250, 100%, 8%, 1)
## Biểu diễn kỹ thuật
Technical Representations

+++?color=hsla(250, 100%, 8%, 1)
### Khái niệm
Những ý tưởng mức cao (trừu tượng) khi triển khai vào hệ thống phần mềm cần được cụ-thể-hóa thành những công việc.

+++?color=hsla(250, 100%, 8%, 1)
### Quy trình
- Đưa ra các đặc tả (specification)

- Thiết kế các sơ đồ (diagram)

- Xây dựng mã nguồn (code)

+++?color=hsla(250, 100%, 8%, 1)
### Đưa ra các đặc tả
- Chuyển những ý tưởng, yêu cầu của người dùng thành những đặc tả cụ thể.

- Trong khi cụ-thể-hóa, chúng ta sẽ nghiên cứu và có thể quay lại chỉnh sửa ý tưởng ban đầu.

- Là quá trình lặp-đi-lặp-lại để đạt kết quả tốt nhất.

+++?color=hsla(250, 100%, 8%, 1)
### Sơ đồ thiết kế
- Là công cụ trực quan để các bên (stakeholder) thảo luận, trao đổi.

- Là biểu đồ UML hoặc một số loại sơ đồ khác.

- Chính xác, cụ thể, không mơ hồ.

+++?color=hsla(250, 100%, 8%, 1)
### Thiết kế các sơ đồ
- Chuyển đổi những đặc tả thành các biểu đồ thiết kế.

- Khó khăn:
  - Đặc tả chỉ là những dòng văn bản.
  - Sơ đồ thì cần phải cụ thể, trực quan hơn nhiều.

- (Có thể) là một quá trình lặp lại để tạo ra kết quả tốt nhất.

+++?color=hsla(20, 13%, 65%, 0.5)
### Xây dựng mã nguồn

- Là bước cụ-thể-hóa các sơ đồ thiết kế.

- Ngôn ngữ sử dụng? Thuật toán nào? Cấu trúc dữ liệu gì? ...

+++?color=hsla(250, 100%, 8%, 1)
### Lưu ý
- Các quá trình trên lặp-đi-lặp-lại, chỉnh sửa đến khi đạt kết quả tốt nhất.

- Có nhiều biểu diễn kỹ thuật khác nhau và mỗi biểu diễn kỹ thuật mang lại giá trị khác nhau.

- Một hệ thống có nhiều lớp biểu diễn kỹ thuật sẽ có sự minh bạch, rõ ràng trong việc xây dựng hệ thống.

+++?color=hsla(250, 100%, 8%, 1)
### Động và tĩnh
##### Dynamic & Static

+++?color=hsla(250, 100%, 8%, 1)
- Thêm, xóa, sửa code (yếu tố tĩnh) có thể làm thay đổi cách hệ thống thi hành (yếu tố động).

- Người dùng chỉ quan tâm cách hệ thống làm việc, KHÔNG quan tâm mã nguồn trông ra sao.

- Do đó, cần đảm bảo hệ thống luôn làm việc đúng và đưa ra kết quả chính xác

+++?color=hsla(250, 100%, 8%, 1)
### Trình gỡ lỗi
##### Debugger
- Không chỉ giúp loại bỏ lỗi (error) mà còn giúp ta hiểu rõ sự thực thi của chương trình.

- Là công cụ tốt để giám sát, đảm bảo hệ thống hoạt động chính xác.

+++?color=hsla(250, 100%, 8%, 1)
### Sơ đồ triển khai
##### Deployment Diagrams
- Bổ sung thông tin cho biểu đồ lớp (class diagrams).

- Thể hiện sự xuất hiện của các lớp, các thành phần (module) khi thực thi chương trình và mối quan hệ giữa chúng.

- Hữu dụng trong các ứng-dụng-đám-mây (cloud-based application).

+++?
### Ví dụ về sơ đồ triển khai
![Deployment Diagram](https://d2slcw3kip6qmk.cloudfront.net/marketing/pages/chart/uml/deployment-diagram/deployment-diagram-example-700x412@2x.jpeg)

+++?color=hsla(250, 100%, 8%, 1)
### Sơ đồ trạng thái
##### State Machine Diagrams
- Mô tả các thông tin về các trạng thái khác nhau của đối tượng.

- Thể hiện cách đối tượng chuyển từ trạng thái, hoạt động tại mỗi trạng thái.

+++?
### Ví dụ về sơ đồ trạng thái
![State Machine Diagram](http://voer.edu.vn/file/29920)

---?image=http://hd-wallpapersfd.info/wp-content/uploads/HTML/Dark-Colors-Computer/Dark-Colors-Computer1.jpg
## API
##### Application Programming Interface
##### Giao diện lập trình ứng dụng

+++?image=http://hd-wallpapersfd.info/wp-content/uploads/HTML/Dark-Colors-Computer/Dark-Colors-Computer1.jpg
### Tổng quan về API
- Là giao diện cho phép các phần tử của chương trình tương tác với nhau.

- Có thể được tái sử dụng giúp tiết kiệm thời gian công sức, chi phí phát triển phần mềm.

+++?image=http://hd-wallpapersfd.info/wp-content/uploads/HTML/Dark-Colors-Computer/Dark-Colors-Computer1.jpg
### Thiết kế API mức cao

##### Nguyên tắc thiết kế
- Hữu dụng

- Chỉ làm một việc, và phải làm thật tốt

- Nhỏ gọn nhất có thể

- Có tính đóng gói cao

+++?image=http://hd-wallpapersfd.info/wp-content/uploads/HTML/Dark-Colors-Computer/Dark-Colors-Computer1.jpg
### Thiết kế API mức thấp

Cụ thể hóa các mục tiêu của API

+++?image=http://hd-wallpapersfd.info/wp-content/uploads/HTML/Dark-Colors-Computer/Dark-Colors-Computer1.jpg
### Một số quy tắc thiết kế API ở mức thấp

+++?image=http://hd-wallpapersfd.info/wp-content/uploads/HTML/Dark-Colors-Computer/Dark-Colors-Computer1.jpg
#### Hạn chế số lượng tham số

##### KHÔNG nên
```Javascript
addUser(lastname: String, firstname: String, email: String);
```

##### Nên
```Javascript
addUser(user: User);
```

+++?image=http://hd-wallpapersfd.info/wp-content/uploads/HTML/Dark-Colors-Computer/Dark-Colors-Computer1.jpg
#### Kiểu trả về là một đối tượng cụ thể

##### Đừng thế này
```Javascript
getUserData(): String;
// return string firstname + lastname + email
```

##### Mà hãy
```Javascript
getUserData(): User;
```
+++?image=http://hd-wallpapersfd.info/wp-content/uploads/HTML/Dark-Colors-Computer/Dark-Colors-Computer1.jpg
#### Che giấu mã nguồn
- Để đảm bảo rằng người dùng không sử dụng API không đúng cách.

+++?image=http://hd-wallpapersfd.info/wp-content/uploads/HTML/Dark-Colors-Computer/Dark-Colors-Computer1.jpg
### Quy trình thiết kế API

+++?image=http://hd-wallpapersfd.info/wp-content/uploads/HTML/Dark-Colors-Computer/Dark-Colors-Computer1.jpg
#### 1. Trả lời các câu hỏi:
- Mục đích của API?
  - Ngôn ngữ sử dụng
  - Giao thức
  - Nền tảng hỗ trợ
  
- Đối tượng sử dụng?
  - Quản lý phiên bản (versioning)
  - Giấy phép sử dụng (lisence)
  - ...

+++?image=http://hd-wallpapersfd.info/wp-content/uploads/HTML/Dark-Colors-Computer/Dark-Colors-Computer1.jpg
#### 2. Thu thập phản hồi
- Về nhu cầu sử dụng, hỗ trợ, hướng phát triển

- Để đảm bảo API đáp ứng tốt nhu cầu của người sử dụng

+++?image=http://hd-wallpapersfd.info/wp-content/uploads/HTML/Dark-Colors-Computer/Dark-Colors-Computer1.jpg
#### 3. Tạo nguyên mẫu (prototype) ban đầu

- Tạo ra NHIỀU nguyên mẫu khác nhau của API

- Tìm ra nguyên mẫu tốt nhất

+++?image=http://hd-wallpapersfd.info/wp-content/uploads/HTML/Dark-Colors-Computer/Dark-Colors-Computer1.jpg
#### Lưu ý
- API khi được công bố, sẽ không thay đổi theo thời gian.

- Do đó, các quá bước trên lặp đi lặp lại để tạo ra kết quả tốt nhất

+++?image=http://hd-wallpapersfd.info/wp-content/uploads/HTML/Dark-Colors-Computer/Dark-Colors-Computer1.jpg
#### 4. Viết tài liệu
- Là hướng-dẫn-sử-dụng của API.

- Viết tài liệu theo kiểu xử-lý-công-việc để người dùng tra cứu dễ dàng.

+++?image=http://hd-wallpapersfd.info/wp-content/uploads/HTML/Dark-Colors-Computer/Dark-Colors-Computer1.jpg
### Tính hữu dụng của API
Cần quan tâm tới các vấn đề:
- Trực quan (visibility)
- Mô hình sử dụng (model)
- Tính gợi nhớ (mapping)
- Phản hồi với người dùng (feedback)

+++?image=http://hd-wallpapersfd.info/wp-content/uploads/HTML/Dark-Colors-Computer/Dark-Colors-Computer1.jpg
#### Trực quan
- Người dùng chỉ cần nhìn là biết tác dụng.
- Dễ dàng tìm kiếm, tra cứu.

Thay vì
```Javascript
items.sort('clearance');
```
Hãy code thế này
```Javascript
items.sort(Filter.CLEARANCE);
```

+++?image=http://hd-wallpapersfd.info/wp-content/uploads/HTML/Dark-Colors-Computer/Dark-Colors-Computer1.jpg
### Mô hình sử dụng
Hình dung trước cách thức sử dụng API của người dùng để đưa ra API ngắn gọn, dễ dùng.

```Javascript
bookshop.getPrice("Wuthering Heights");
```

thay vì

```Javascript
bookshop.getAuthor("Emily Bronte").getBook("Wuthering Heights").getPrice();
```

+++?image=http://hd-wallpapersfd.info/wp-content/uploads/HTML/Dark-Colors-Computer/Dark-Colors-Computer1.jpg
### Tính gợi nhớ
Giúp người dùng dễ dàng nhận ra được kiểu trả về, kiểu đầu vào.
```Javascript
store.getProduct(productID: string): Product;
```

+++?image=http://hd-wallpapersfd.info/wp-content/uploads/HTML/Dark-Colors-Computer/Dark-Colors-Computer1.jpg
### Phản hồi tới người dùng
- Luôn đưa ra những thông báo, cảnh báo khi có thể xảy ra lỗi.
