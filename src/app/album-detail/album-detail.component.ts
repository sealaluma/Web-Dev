import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})

export class AlbumDetailComponent implements OnInit{
  album!: any;
  photos!: any[];
  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService,
  ) {}

  ngOnInit() {
    const ID = this.route.snapshot.paramMap.get('id');
    this.albumsService.getAlbum(ID).subscribe(album => {
        this.album = album;
      });
  }
  updateTitle() {
    // Code to save the new title to the server
    console.log('New Title:', this.album.title);
  }
}