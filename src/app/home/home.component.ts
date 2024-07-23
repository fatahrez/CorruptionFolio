import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { LeadersService } from '../core/services/leaders.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MatCardModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  // leaders: any = (data as any).default;
  leaders: any[] = [];

  constructor(
    private leadersService: LeadersService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }
  loadData() {
    this.leadersService.getAllLeaders().subscribe(
      data => {
        console.log(data);
        this.leaders = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}
