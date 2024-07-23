import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LeadersService } from '../core/services/leaders.service';

@Component({
  selector: 'app-leader',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './leader.component.html',
  styleUrl: './leader.component.scss'
})
export class LeaderComponent implements OnInit {

  leaderId: number = 0;
  leader: any = {};

  constructor(
    private route: ActivatedRoute,
    private leaderService: LeadersService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.leaderId = +params.get("id")!;
      this.fetchLeaderDetails(this.leaderId);
    });
  }

  fetchLeaderDetails(id: number) {
    this.leaderService.getLeaderById(id).subscribe((leader) => {
      this.leader = leader;
    });
  }
}
