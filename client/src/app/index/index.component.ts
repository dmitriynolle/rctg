import {Component, OnInit} from '@angular/core';
import {Repository} from "../data/repository";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  password: any;
  private secret: { password: string };
  path = true;

  constructor(private repository: Repository) {
  }

  ngOnInit() {
    this.repository.getSecret().subscribe((rec: { password: string }) => {
      this.secret = rec;
    });
  }

  enter() {
    if (this.password == this.secret.password) {
      this.path = false;
    } else {
      this.path = true;
    }
  }
}
