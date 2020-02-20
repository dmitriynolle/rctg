import {Component, OnInit} from '@angular/core';
import {Repository} from '../data/repository';
import {Router} from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  password: any;
  private secret: { password: string };
  path = true;

  constructor(private repository: Repository, private router: Router) {
  }

  ngOnInit() {
    this.repository.getSecret().subscribe((rec: { password: string }) => {
      this.secret = rec;
    });
  }

  enter() {
    if (this.password == this.secret.password) {
      this.router.navigate(['mainmenu']);
    } else {
      this.password = '';
    }
  }
}
