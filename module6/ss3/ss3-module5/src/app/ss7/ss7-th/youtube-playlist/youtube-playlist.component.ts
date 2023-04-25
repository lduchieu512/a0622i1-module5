import { Component, OnInit } from '@angular/core';
import {Song} from "../song";
import {ServiceSongService} from "../service-song.service";

@Component({
  selector: 'app-youtube-playlist',
  templateUrl: './youtube-playlist.component.html',
  styleUrls: ['./youtube-playlist.component.css']
})
export class YoutubePlaylistComponent implements OnInit {

  playlist: Song[] = [];

  constructor(private songService: ServiceSongService) {
  }


  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.playlist = this.songService.playlist;
  }



}
