import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    
  title = 'Biller';

  constructor(private service: AuthService, private titleService: Title) {
  }

  ngOnInit() {
    this.service.setIsLoggedIn();

    this.setTitle("Biller");
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
