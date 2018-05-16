import { Component, OnInit, ViewChild, forwardRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { getCookie } from '../Cookiee';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css'],
  providers: [DataService]
})
export class CreateCardComponent implements OnInit {
  newCardCollection: FormGroup;
  context: CanvasRenderingContext2D;
  fileAvatar: File;
  @ViewChild("avatar") avatar;

  createItem(): FormGroup {
    return this.formBuilder.group({
      front: ['',Validators.required],
      back: ['',Validators.required],
      typeFront: ['text', Validators.required],
      typeBack: ['text', Validators.required],
    });
  }
  addNewRow() {
    // control refers to your formarray
    const control = <FormArray>this.newCardCollection.controls['cards'];
    // add new formgroup
    control.push(this.createItem());
  }
  deleteRow(index: number) {
    // control refers to your formarray
    const control = <FormArray>this.newCardCollection.controls['cards'];
    // remove the chosen row
    control.removeAt(index);
  }

  sendNewCardCollection() {
    var body = this.newCardCollection.value;
    // console.log(body);
    let input: FormData = new FormData();
    input.append("userName", getCookie("userName"));
    input.append("title", body.title);
    input.append("avatar",body.avatar);
    input.append("typeAvatar",body.typeAvatar);
    input.append("cards", JSON.stringify(body.cards));
    this.dataService.sendNewCardCollection(input)
    .then(r =>{
      if(r){
        window.alert("Tạo bộ thẻ mới thành công, bộ thẻ này sẽ được tự động thêm vào mục yêu thích của bạn");
        this.newCardCollection.reset();
      }
      else{window.alert("Đã có lỗi xảy ra ở phía server, vui lòng thử lại sau");}
    }).catch(e => window.alert("Server không phản hồi, vui lòng thử lại sau"));
  }
  constructor(private formBuilder: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    this.newCardCollection = this.formBuilder.group({
      title: ['', [Validators.required,Validators.maxLength(30)]],
      avatar: ['', Validators.required],
      typeAvatar: ['text', Validators.required],
      cards: this.formBuilder.array([this.createItem()])
    })
  }
}
