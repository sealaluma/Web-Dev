import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Ialbums } from '../albums/albums.component';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})

export class AlbumPhotosComponent implements OnInit{
  photos: any;
  album!: Ialbums;
  showPhotos = false;
  constructor(
    private albumsService: AlbumsService,
    private route: ActivatedRoute,
  ) { }
  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    this.albumsService.getAlbum(id).subscribe(album => {
      this.album = album;
    });
    this.albumsService.getPhotos(id).subscribe(photos => {
      this.photos = photos;
    });
  }
}