import { Component} from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent{

  newReleases: any[] = [];
  loading: boolean;

  constructor(private spotifyService: SpotifyService) { 
    this.loading = true;
    this.getNewReleases();
  }

  getNewReleases(){
    this.spotifyService.getNewReleases()
      .subscribe((data: any) => {
      this.newReleases = data;
      this.loading = false;
    })
  }

  

 
}
