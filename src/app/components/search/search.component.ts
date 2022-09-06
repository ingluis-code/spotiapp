import { Component} from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent{

  artists: any[] = [];
  loading: boolean;
  
  constructor(private spotifyService: SpotifyService) {
    
   }

  searchArtist(termino: string){
     if(termino.length > 0 ){
      this.loading = true;
      this.spotifyService.searchArtist(termino)
      .subscribe((data: any) => {
         //this.artists = data.artists.items;//Sin map
         this.artists = data; //Con map
         this.loading = false;
      });
     }else{
      this.loading = false;
     }
  }

}
