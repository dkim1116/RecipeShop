import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-time-control',
  templateUrl: './time-control.component.html',
  styleUrls: ['./time-control.component.css']
})
export class TimeControlComponent implements OnInit {
  @Output('firedInterval') intervalFired = new EventEmitter<number>();
  interval;
  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.interval = setInterval(() => {
      this.counter++;
      this.intervalFired.emit(this.counter);
    }, 1000);
  }

  onStop() {
    clearInterval(this.interval);
  }
}
