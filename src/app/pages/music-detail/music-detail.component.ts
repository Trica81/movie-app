import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Music } from 'src/app/classes/music';

@Component({
  selector: 'app-music-detail',
  templateUrl: './music-detail.component.html',
  styleUrls: ['./music-detail.component.sass']
})
export class MusicDetailComponent implements OnInit {

  musicDetail: Music;
  constructor(private musicService: MusicService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

  }

}
