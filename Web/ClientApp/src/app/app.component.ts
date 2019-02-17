import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';
import { Title } from '@angular/platform-browser';
import { LoadingService } from './services/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    
  title = 'Biller';
  showSpinner = false;

  constructor(private authService: AuthService, private titleService: Title, public loadingService: LoadingService) {
  }

  ngOnInit() {
    this.authService.setIsLoggedIn();

    this.setTitle("Biller");

    this.checkShowSpinner();
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  checkShowSpinner() {
    this.loadingService.isLoading.subscribe(isLoading => {
      if (isLoading) {
        this.showSpinner = true;
        setTimeout(() => {
          this.showSpinner = false;
        }, 1000)
      }
    })
  }
}
