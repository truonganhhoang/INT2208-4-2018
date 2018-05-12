import { Component, OnInit, Output, EventEmitter, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrls: ['./card-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CardInputComponent),
      multi: true
    }
  ]
})
export class CardInputComponent implements OnInit {

  @Input() theSide: FormGroup;


  data:any={};
  constructor(private _fb : FormBuilder) {}

  ngOnInit() {
    this.theSide = this._fb.group({
      content:'',
      type:'img'
    })
  }

}
