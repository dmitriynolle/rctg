import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nnrctg';
  private active: Array<string> = [];
  fon = 'fon_big';

  ngOnInit(): void {
    this.active[0] = 'test';
  }

  serActive(num: number) {
    for (let i = 0; i < this.active.length; i++) {
      this.active[i] = null;
    }
    this.active[num] = 'test';
    if (num == 1 || num == 2) {
      this.fon = 'fon';
    }
    else {
      this.fon = 'fon_big';
    }
  }
}
