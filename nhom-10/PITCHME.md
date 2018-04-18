---?color=red

# Git<span class="gold">Bitch</span>

#### Markdown Presentations For Everyone on Git
<br>
<br>
<span class="byline">[ GitHub, GitLab, Bitbucket, GitBucket, Gitea, Gogs ]</span>

---

@title[PITCHME.md]

#### GitPitch turns <span class="gold">PITCHME.md</span> into
#### interactive,
#### online and offline slideshows.
<br>
<span class="aside">Just like this one...</span>

+++

#### No more <span class="gray">Keynote</span>.
#### No more <span class="gray">Powerpoint</span>.
<br>
#### Just <span class="gold">Markdown</span>.
#### Then <span class="gold">Git-Commit</span>.

---?code=assets/md/hello.md&title=Step 1. PITCHME.md

<br>
#### Create slideshow content using GitHub Flavored Markdown in your favorite editor.

<span class="aside">It's as easy as README.md with simple slide-delimeters (---)</span>

---

@title[Step 2. Git-Commit]

### <span class="gold">STEP 2. GIT-COMMIT</span>
<br>

---

# THIẾT KẾ CẤP CAO
(HIGH LEVEL DESIGN)
+++?color=rgb(255, 255, 128)

# SỰ TRỪU TƯỢNG
(Abstraction)
+++?color=rgb(255, 255, 128)
### Khái niệm

- sự trừu tượng là một khái niệm căn bản được sử dụng bởi các lập trình viên để quản lý sự phức tạp trong ứng dụng của họ.
+++?color=rgb(255, 255, 128)

### Tính chất

- cho phép lập trình viên tập trung vào các khía cạnh chính của thông tin được yêu cầu bởi một nhiệm vụ và một bên liên quan nhất định
  - =>vì vậy mức độ trừu tượng chúng ta sử dụng sẽ thay đổi theo từng nhiệm vụ và các bên liên quan
  
- Nếu thêm quá nhiều lớp trừu tượng vào hệ thống thì sẽ rất khó hiểu và phát triển
  - =>vì vậy việc cân bằng giữa quá nhiều và quá ít sự trừu tượng là một quá trình cần thời gian phát triển của kỹ sư  hay kiến trúc sư
  - Nhưng nó đóng một vai trò quan trọng trong việc phát triển chung của hệ thống

---?color=rgba(255, 255, 128, .5)

## PHÂN TÍCH
(Decomposition)
+++?color=rgba(255, 255, 128, .5)

### Khái niệm 

- Phân tích (Decomposition) là quá trình phá vỡ một mô tả phứ tạp, cấp cao của một hẹ thống thành nhiều mảnh nhỏ dễ quản lý hơn.
+++?color=rgba(255, 255, 128, .5)

### Mục đính

- làm cho những nhiệm vụ thông thường trở nên đơn giản và những nhiệm vụ đặc biệt vẫn còn khả thi.
- chúng ta muốn đảm bảo những nhiệm vụ bất thường đó vẫn được hỗ trợ bởi hệ thống của chúng ta nhưng không phải mối quan tâm hàng đầu.
+++?color=rgba(255, 255, 128, .5)

### Phân loại

- có 2 loại phân tích chính:

![Top-down decomposition](http://cdn.expertz.me/wp-content/uploads/TopDownAndBottomUpFeatureImage.jpg)
+++?color=rgba(255, 255, 128, .5)

#### Top-down decomposition
  - phân tích từ trên xuống, chúng ta sẽ có một mô tả trừu tượng, mức cao của cái mà chúng ta đang xây dựng rồi thêm các chi tiết cụ thể hơn cho nó 
  - ưu:
    - có thể có một hiểu biết tổng thể về kiến trúc hệ thống
  - nhược:
    - các nút chi tiết thấp thường xung đột với nhau vì bạn thường đưa ra các quyết định xung đột nhau khiến chúng ta phải quay trở lại để sửa
+++?color=rgba(255, 255, 128, .5)

#### Bottom-up composition
- tổng hợp từ dưới lên, chúng ta sẽ nghĩ về những yếu tố cấp thấp rồi chúng ta sẽ xây dựng  từ cấp thấp lên mức cao hơn
  - ưu:
    - giúp chúng ta xây dựng hệ thống từ sớm
    - tập trung vào việc xây dựng mã tái sử dụng được
  - nhược:
    - sau khi xây dựng hệ thống đến cấp cao mới nhận ra chúng ta có thể đã tạo ra những chi tiết cài đặt gây ra sự không nhất quán, gây cản trở

---?color=rgba(255, 255, 128, .5)

## ĐÓNG GÓI
(encapsulation)
+++?color=rgba(255, 255, 128, .5)

### Khái niệm

-  không cho phép người sử dụng các đối tượng thay đổi trạng thái nội tại của một đối tượng. Chỉ có các phương thức nội tại của đối tượng cho phép thay đổi trạng thái của nó

- =>một trong bốn tính chất cơ bản của Lập trình hướng đối tượng

- =>giúp bảo đảm sự toàn vẹn của đối tượng
+++?color=rgba(255, 255, 128, .5)

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
## CHE GIẤU THÔNG TIN
+++?color=hsla(20, 13%, 65%, .5)

### Nguồn gốc

- được  David Parnas đề xuất lần đầu năm 1972.
![David Parnas]
(https://www.ria.ie/sites/default/files/david-parnas.jpg)
+++?color=hsla(20, 13%, 65%, .5)

### Khái niệm
- một chương trình sử dụng một phương thức bạn đã định nghĩa không cần biết chi tiết code bên trong phương thức đó
- giúp đơn giản việc sử dụng phương thức của lập trình viên
- thiết kế một phương thức để sử dụng mà không cần hiểu chi tiết code bên trong gọi là INFORMATION HIDING 
+++?color=hsla(20, 13%, 65%, .5)

### Ví dụ
![example]
(http://images.slideplayer.com/27/8909444/slides/slide_3.jpg)
+++?color=hsla(20, 13%, 65%, .5)
- trong nhiều trường hợp, che giấu thông tin (information hiding) và tính đóng gói (encapsulation) được coi là tương đương nhau
- nhiều người cho rằng che giấu thông tin là về quy tắc còn đóng gói thiên về kỹ thuật

---?color=hsla(20, 13%, 65%, .5)
# BIỂU DIỄN KỸ THUẬT
(Technical Representations)
+++?color=rgb(155, 255, 128)

### Khái niệm

- Những ý tưởng mức cao (tính trừu tượng cao) khi đưa vào hệ thống phần mềm cần được cụ thể hóa trở thành những nhiệm vụ khả thi.
+++?color=rgb(155, 255, 128)

### Các bước

- Đặc tả ý tưởng người dùng
- Thiết kể biểu đồ
- Code
+++?color=rgb(155, 255, 128)

#### Đặc tả ý tưởng

- Điều đầu tiên cần làm là chuyển những ý tưởng, yêu cầu của người dùng thành những đặc tả.

  - Trong suốt quá trình cụ thể hóa, chúng ta sẽ nghiên cứu và quay lại chỉnh sửa ý tưởng gốc. Đó là quá trình lặp đi lặp lại.
+++?color=rgb(155, 255, 128)

#### Thiết kế
- Chuyển đổi từ những đặc tả thành thiết kế khá khó khăn vì đặc tả là những chỉ là những văn bản.Nhưng thiết kế thì cần phải cụ thể hơn nhiều
  - Thiết kế có thể là biểu đồ UML hay một số loại biểu đồ khác
  - Thiết kế cũng là quá trình lặp đi lặp lại
+++?color=rgb(155, 255, 128)

#### Code

- cụ thể hóa thiết kế: code
- Bước này có thể là: thuật toán nào? cấu trúc dữ liệu gì? ...
+++?color=rgb(155, 255, 128)

- Cần nhớ rằng, các quá trình trên là lặp đi lặp lại, chỉnh sửa đến khi đạt kết quả tốt.

- Có thể có nhiều biểu diễn kỹ thuật khác nhau và mỗi biểu diễn kỹ thuật mang lại giá trị khác nhau.Một hệ thống có nhiều lớp biểu diễn kỹ thuật sẽ có sự minh bạch, rõ ràng trong việc xây dựng hệ thống.

---?color=rgba(255, 205, 228, .5) 
## Động và tĩnh
(Dynamic vs Static)
+++

- Một hệ thống không chỉ cần có mã nguồn (source code) mà còn có cách thức hệ thống thi hành.
- Chính sự thi hành mới thực sự tạo ra kết quả.
- Người dùng chỉ quan tâm hệ thống thi hành như thế nào thay vì mã nguồn.
  - => Cần đảm bảo rằng hệ thống hành sử đúng.

- Do đó:
  - Điều chúng ta cần quan tâm không chỉ là cấu trúc (tĩnh) mà còn là hành vi của hệ thống (động).

---
# API

- API là giao diện cho phép các phần tử của chương trình tương tác với nhau.
- API có thể được tái sử dụng giúp tiết kiệm thời gian công sức. giảm số lượng dòng code và giảm chi phí phát triển phần mềm
- Các API sẽ được hỗ trợ lâu dài nên khi thiết kế API phải tuân thủ các nguyên tắc thiết kế API

![Flux Explained]
(images/artist.png)


```shell
$ git add PITCHME.md
$ git commit -m "New slideshow content."
$ git push

Done!
```

@[1](Add your PITCHME.md slideshow content file.)
@[2](Commit PITCHME.md to your local repo.)
@[3](Push PITCHME.md to your public repo and you're done!)
@[5](Supports GitHub, GitLab, Bitbucket, GitBucket, Gitea, and Gogs.)

---

@title[Step 3. Done!]

### <span class="gold">STEP 3. GET THE WORD OUT!</span>
<br>
![GitPitch Slideshow URLs](assets/images/gp-slideshow-urls.png)
<br>
<br>
#### Instantly use your GitPitch slideshow URL to promote, pitch or present absolutely anything.

---

@title[Slide Rich]

### <span class="gold">Slide Rich</span>

#### Code Presenting for Blocks, Files, and GISTs
#### Image, Video, Chart, and Math Slides
#### Multiple Themes with Easy Customization
<br>
#### <span class="gold">Plus collaboration is built-in...</span>
#### Your Slideshow is Part of Your Project
#### Under Git Version Control within Your Git Repo

---

@title[Feature Rich]

### <span class="gold">Feature Rich</span>

#### Present Online or Offline
#### With Speaker Notes Support
#### Print Presentation as PDF
#### Auto-Generated Table-of-Contents
#### Share Presentation on Twitter or LinkedIn

---

### <span class="gold">GitPitch Pro - Now Live!</span>

<br>
<div class="left">
    <i class="fa fa-user-secret fa-5x" aria-hidden="true"> </i><br>
    <a href="https://gitpitch.com/pro-features" class="pro-link">
    More details here.</a>
</div>
<div class="right">
    <ul>
        <li>Private Repos</li>
        <li>Private URLs</li>
        <li>Password-Protection</li>
        <li>Image Opacity</li>
        <li>SVG Image Support</li>
    </ul>
</div>

---

### Go for it.
### Just add <span class="gold">PITCHME.md</span> ;)
<br>
[Click here to learn more @fa[external-link fa-pad-left]](https://github.com/gitpitch/gitpitch/wiki)
