import { Component, OnInit } from '@angular/core';
import { Song } from '../music';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MusicService } from '../music.service';

@Component({
  selector: 'app-music',
  standalone: false,
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent implements OnInit{

  music: Song[]=[];
  formGroupMusic: FormGroup;

  constructor(private service: MusicService, 
  private formBuilder: FormBuilder
  ){
    this.formGroupMusic = formBuilder.group({
      id:[''],
      title:[''],
      singer:[''],
      gender:['']
    });
  }

  ngOnInit(): void {
    this.service.getSong().subscribe({
      next: json => this.music = json
   });
  }


}
