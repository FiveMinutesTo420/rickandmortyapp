import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CharacterComponent } from '../character/character.component';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../../services/character.service';
import { IApiResponse } from '../../models/character';
import { Title } from '@angular/platform-browser';
import { PaginationComponent } from '../pagination/pagination.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,CharacterComponent,CommonModule, PaginationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  characters:IApiResponse
  constructor(private characterService:CharacterService, private titleService:Title ){}
  ngOnInit():void{
    this.titleService.setTitle("Home");
    this.loadCharacters()

  }
  loadCharacters(url?:string):void{
    this.characterService.getAll(url).subscribe(
      data => {
        this.characters = data;
      },
      error =>{
        console.error(error)
      }
    )
  }
  onPageChange(url:string):void{
    this.loadCharacters(url)
  }

}
