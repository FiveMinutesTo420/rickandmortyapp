import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { ICharacter } from '../../models/character';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IEpisode } from '../../models/episode';
@Component({
  selector: 'app-character-info',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './character-info.component.html',
  styleUrl: './character-info.component.scss'
})
export class CharacterInfoComponent {
  constructor(private route:ActivatedRoute, private characterService:CharacterService,private titleService:Title){}
  character: ICharacter
  episodes: IEpisode[] = []
  ids:string[] = []

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    this.characterService.getOne(String(id)).subscribe(
      (data) => {
        this.character = data;
        this.titleService.setTitle(this.character.name + " info");
        data.episode.forEach((value)=>{
          this.ids.push(value.replace(/\D/g,""))
        })
        this.characterService.getMultipleEpisodes(this.ids).subscribe((response)=>{
          this.episodes = response
        })
      },
      error =>{
        console.error(error)
      }
    )
  }
}
