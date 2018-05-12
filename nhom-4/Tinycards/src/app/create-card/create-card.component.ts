import { Component, OnInit, ViewChild } from '@angular/core';
import { element } from 'protractor';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';
import { DataService } from '../data.service';
import { resolve } from 'dns';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css'],
  providers: [DataService]
})
export class CreateCardComponent implements OnInit {
  items: any[] = [];
  newCardCollection: FormGroup;
  current: number = 0;
  avartarCard: string='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/NYCS-bull-trans-F.svg/2000px-NYCS-bull-trans-F.svg.png';
  context: CanvasRenderingContext2D;
  @ViewChild("avatar") avatar
  readURL(event) {
    let canvas = this.avatar.nativeElement;
    let context = canvas.getContext('2d');
    context.clearRect(0,0,250,300);

    var reader = new FileReader();
    reader.onload= function(e){
      if(parseInt(e.total) > 1000000){
          console.log("quá dung lượng");
          window.alert("File bạn tải lên vượt quá dung lượng cho phép, vui lòng chọn hình ảnh dưới 1 MB")
          return;
      }
      var img = new Image();
      img.onload = function(){
        context.drawImage(img,0,0,250,300);
      }
      img.src= e.target.result;
    }
    reader.readAsDataURL(event.target.files[0])
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      front: '',
      back: '',
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
    this.dataService.sendNewCardCollection(body);
  }
  constructor(private formBuilder: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    this.newCardCollection = this.formBuilder.group({
      title: '',
      avartar: '',
      cards: this.formBuilder.array([this.createItem()])
    })

  }

}
