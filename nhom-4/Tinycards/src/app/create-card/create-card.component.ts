import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { FormGroup, FormControl, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {
  items: any[] = [];
  newCardCollection: FormGroup;
  current: number = 0;

  createItem(): FormGroup {
    return this.formBuilder.group({
      front: '',
      back: '',
    });
  }
  addNewRow() {
    // control refers to your formarray
    const control = <FormArray>this.newCardCollection.controls['itemRows'];
    // add new formgroup
    control.push(this.createItem());
  }

  deleteRow(index: number) {
    // control refers to your formarray
    const control = <FormArray>this.newCardCollection.controls['itemRows'];
    // remove the chosen row
    control.removeAt(index);
  }

  sendNewCardCollection() {
    console.log(this.newCardCollection.value)
  }
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.newCardCollection = this.formBuilder.group({
      title: '',
      cards: this.formBuilder.array([this.createItem()])
    })

  }

}
