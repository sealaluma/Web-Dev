import { Component, OnInit} from '@angular/core';
import { AlbumsService } from '../albums.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})

export class AlbumsComponent implements OnInit{
  albums: Ialbums[] = [];
  constructor(
    private http: HttpClient,
    private albumsService: AlbumsService
  ) { }

  ngOnInit(): void {
    this.albumsService.getAlbums().subscribe(albums => {
      this.albums = albums;
    });
  }

  removeAlbum(album: Ialbums) {
    album.hidden = true;
  }

}

export interface Ialbums {
  userId: number; 
  id: number; 
  title: string; 
  hidden?: boolean;
}
