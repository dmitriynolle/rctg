import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  password: any;

  constructor() {
  }

  ngOnInit() {
  }

  enter() {
    if (this.password == '241783') {
      document.location.href = "/main";
    }
    this.password = '';
  }
}
