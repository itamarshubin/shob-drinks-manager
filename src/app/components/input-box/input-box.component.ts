import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.css']
})
export class InputBoxComponent implements OnInit {
  @Input() text:string;
  @Input() type:string;
  constructor() {
    this.text = "Label text";
    this.type = "text";
   }

  ngOnInit(): void {
  }

}
