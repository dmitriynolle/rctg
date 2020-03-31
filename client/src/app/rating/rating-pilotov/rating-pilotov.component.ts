import { Component, OnInit } from '@angular/core';
import {RatingPilotov} from '../../data/user.model';
import {Repository} from '../../data/repository';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-rating-pilotov',
  templateUrl: './rating-pilotov.component.html',
  styleUrls: ['./rating-pilotov.component.scss']
})
export class RatingPilotovComponent implements OnInit {
  ratingPilotov: Array<RatingPilotov> = [];
  ratingPilota: Array<RatingPilotov> = [];
  private subscription: Subscription;
  memberID: string;
  rating: string;


  constructor(private repository: Repository, private route: ActivatedRoute) {
    this.subscription = route.params.subscribe(rec => {
      this.memberID = rec.memberID;
      this.rating = rec.rating;
    });
  }

  ngOnInit(): void {
    this.repository.getRatingPilotov().subscribe((rec: any) => {
      this.ratingPilotov = rec;
      this.ratingPilota = this.ratingPilotov.filter(rec => rec.MemberID == this.memberID);
      console.log(this.ratingPilota);
    });
  }
}
