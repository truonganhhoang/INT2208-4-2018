import { Component, OnInit, ViewChild, forwardRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';
import { DataService } from '../data.service';

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
    console.log(body);
    let input: FormData = new FormData();
    input.append("title", body.title);
    input.append("avatar",body.avatar);
    input.append("typeAvatar",body.typeAvatar);
    input.append("cards", JSON.stringify(body.cards));
    this.dataService.sendNewCardCollection(input);
  }
  constructor(private formBuilder: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    this.newCardCollection = this.formBuilder.group({
      title: ['', Validators.required],
      avatar: ['', Validators.required],
      typeAvatar: ['text', Validators.required],
      cards: this.formBuilder.array([this.createItem()])
    })
  }
}
