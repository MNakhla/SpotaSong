import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { Observable, observable } from "rxjs";
declare function require(name: string);
var config = require("../../../config.json");

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  private searchUrl: string;
  private headers = new HttpHeaders({
    Accept: "application/json",
    "Content-Type": "application/json",
    // tslint:disable-next-line:max-line-length
    Authorization:
      // tslint:disable-next-line:max-line-length
      config.spotifyToken
  });
  options = { headers: this.headers };
  constructor(private http: HttpClient) { }

  searchMusic(genre: string): Observable<any> {
    this.searchUrl =
      "https://api.spotify.com/v1/recommendations?seed_genres=" + genre;
    return this.http
      .get<any>(this.searchUrl, this.options)
      .pipe(map((data: any) => data));
  }

  getAllGenres(): Observable<any> {
    this.searchUrl =
      "https://api.spotify.com/v1/recommendations/available-genre-seeds";
    return this.http
      .get<any>(this.searchUrl, this.options)
      .pipe(map((data: any) => data));
  }

  getGenreImages(playlistName: string): Observable<[]> {
    this.searchUrl =
      "https://api.spotify.com/v1/search?q=" + playlistName + "&type=playlist";
    return this.http
      .get<string[]>(this.searchUrl, this.options)
      .pipe(map((data: []) => data));
  }

  getTrack(id: string): Observable<[]> {
    this.searchUrl = "https://api.spotify.com/v1/tracks/" + id;
    return this.http
      .get<any>(this.searchUrl, this.options)
      .pipe(map((data: []) => data));
  }

  //database

  handleServerError(error: any) {
    // console.log(error.error || error.json() || error);
    return Observable.throw(
      error.error || error.json() || error || "Server error"
    );
  }

  getFavouritListt(): Observable<any> {
    return this.http
      .get(config.dbURL)
      .pipe(
        map(data => {
          console.log(data);
          return data;
        }),
        map(data => data),
        catchError(err => {
          return this.handleServerError(err);
        })
      );
  }

  addFavouritList(id: any[], name: string): Observable<any> {
    let bodyrequest = { [name]: id };

    return this.http
      .patch(config.dbURL,
        bodyrequest
      )
      .pipe(
        map(data => {
          console.log(data);
          return data;
        }),
        map(data => data),
        catchError(err => {
          return this.handleServerError(err);
        })
      );
  }

  // deleteFavouritList(arr: any[]): Observable<any> {
  //   const options = {
  //     headers: new HttpHeaders({
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     }),
  //     body: {
  //       ids: arr
  //     }
  //   };

  //   return this.http
  //     .delete("https://spotahome-51144.firebaseio.com/Favorites/ids.json", options)
  //     .pipe(
  //       map(data => data),
  //       catchError(err => {
  //         return this.handleServerError(err);
  //       })
  //     );
  // }
}