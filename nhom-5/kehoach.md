- ##hàm sinh câu hỏi, đáp án: 
	+ trong 1 chủ đề, với mỗi từ sẽ có 1 câu hỏi
	+ có 3 đáp án cho mỗi câu hỏi: 
	đáp án đúng là nghĩa của từ, đáp án sai lấy ngẫu nhiên từ nghĩa của các từ khác. hoặc ngược lại, sẽ làm theo nghĩa
- ##lưu dữ liệu
	+ chức năng thêm thẻ: tương ứng với chủ đề nào, hoặc thêm chủ đề mới. Thêm dữ liệu thì tự động sinh câu hỏi
	
- ##cấu trúc dữ liệu
	+ kiểu dữ liệu: Theme(chủ đề), Word{word,mean}(từ gồm từ và nghĩa)
	+ themes <Theme>[]{
		theme: words <Word>[]
	}

- ##cong nghệ lưu dữ liệu