import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ialbums } from './albums/albums.component';
  
@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(
    private http: HttpClient
  ){}

  getAlbums() {
    return this.http.get<Ialbums[]>('https://jsonplaceholder.typicode.com/albums');
  }
  getAlbum(id: any){
    return this.http.get<Ialbums>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
  getPhotos(id: any) {
    return this.http.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }
}
