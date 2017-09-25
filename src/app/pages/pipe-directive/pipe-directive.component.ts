import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-directive',
  templateUrl: './pipe-directive.component.html',
  styleUrls: ['./pipe-directive.component.css']
})
export class PipeDirectiveComponent implements OnInit {

  creditCardNumber: String = '1234567896564321';
  interval: Number = 1000;

  constructor() { }

  ngOnInit() {
  }

}
