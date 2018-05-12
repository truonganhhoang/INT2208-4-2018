import { Component, OnInit, ViewChild, forwardRef } from '@angular/core';
import { element } from 'protractor';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { resolve } from 'dns';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css'],
  providers: [DataService]
})
export class CreateCardComponent implements OnInit {
  newCardCollection: FormGroup;
  context: CanvasRenderingContext2D;
  fileAvatar:File;
  @ViewChild("avatar") avatar;
  readURL(event) {
    let canvas = this.avatar.nativeElement;
    let context = canvas.getContext('2d');
    context.clearRect(0,0,240,300);
    this.fileAvatar=(event.target.files[0].size <= 2000000)?event.target.files[0]:null;
    // console.log(this.fileAvatar);
    var reader = new FileReader();
    reader.onload = function(e:any) {
      if(parseInt(e.total) > 2000000){
          console.log("quá dung lượng");
          window.alert("File bạn tải lên vượt quá dung lượng cho phép, vui lòng chọn hình ảnh dưới 2 MB")
          return;          
      }      
      var img = new Image();
      img.onload = function(){
        context.drawImage(img,0,0,240,300);
      }
      img.src= e.target.result;
    }
    reader.readAsDataURL(event.target.files[0])
  }
  createItem(): FormGroup {
    return this.formBuilder.group({
      frontSide:'',
      backSide:'',
      // typeFront:['img',Validators.required],
      // typeBack: ['text',Validators.required],
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
    console.log(body);
    let input:FormData = new FormData();
    input.append("title",body.title);
    input.append("cards",JSON.stringify(body.cards));
    if(this.fileAvatar != null){
      input.append("avatar",this.fileAvatar,this.fileAvatar.name);
    }
    console.log("input:")
    console.log(input);
    // this.dataService.sendNewCardCollection(input);
  }
  constructor(private formBuilder: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    this.newCardCollection = this.formBuilder.group({
      title: ['',Validators.required],
      cards: this.formBuilder.array([this.createItem()])
    })
  }
}
