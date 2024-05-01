import { Component, Input } from '@angular/core';
import { IApiResponse, ICharacter } from '../../models/character';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-character',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent {
  @Input() character:ICharacter
  imageLoaded:boolean = false 
  onImageLoad():void{
    console.log("Loaded")
    this.imageLoaded = true
  }

}
