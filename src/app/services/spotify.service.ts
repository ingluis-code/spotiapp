import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'; //Para hacer uso de map

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  /* getNewReleases(){
      Se necesita exportar HttpHeaders para mandar los 
      paramentros necesarios para autenticacion con la api//
      const headers = new HttpHeaders({
        'Authorization': 'Bearer BQBCwbWFtwV_4_C0oIKPvCZ5SlXplKEBeuneZa8DDxp29EX6kCaF3kDByriJpYEIcBb6gyNgxtAQCrggob0SyReoP6m6H0WdXs5OSwersX_z3x8ru2zdXjkDBTNCTkRyQvlffxvA5WVnqDGUyOBWItn8XQ3CNsH1yjQ"'
      });
      
      this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers})
        .subscribe(data => {
         console.log(data);
      })
  }*/

  //Esta  funcion se usa en los demas  funciones para reutilizar codigo
  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDd3zz79lJ8g99pcN5h1VFIawsAbP3v3QJKaPWCkYIW6ep5eKjWPg05U8Vn1iBEFgIl2TFCxrZKfwlS7i_OTkoXeoZZ-Ep1wjmL1a_UyQSaxVnFptU"'
    });
    return this.http.get(url,{headers});
  }

  //Los pipes se usan para darle formato a la informacion que quiero enviar a la vista
  //Para no enviar toda esa informacion que no necesitamos con ayuda de map
  getNewReleases(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDd3zz79lJ8g99pcN5h1VFIawsAbP3v3QJKaPWCkYIW6ep5eKjWPg05U8Vn1iBEFgIl2TFCxrZKfwlS7i_OTkoXeoZZ-Ep1wjmL1a_UyQSaxVnFptU"'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers})
     .pipe(map( data =>{
        return data['albums'].items;
     }));
  }


  /*
  searchArtist(termino: string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQAChiM6Osvw-eAsFSO9DSZ6TlHMTE-Wi3Xhab7D2mFQXE3uFtjx1VPgS0_RRhjy9XFd4ozgHXXNaJhkAqM"'
    });
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist&limit=15`, { headers})
      .pipe(map( data =>data['artists'].items));
  }*/
 
  searchArtist(termino: string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe(map( data =>data['artists'].items));
  }



}
