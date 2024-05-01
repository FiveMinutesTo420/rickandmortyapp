import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CharacterInfoComponent } from './components/character-info/character-info.component';

export const routes: Routes = [
    {path: '',component:HomeComponent},
    {path: 'character/:id',component:CharacterInfoComponent},
    {path: '**',component:NotFoundComponent},

];
