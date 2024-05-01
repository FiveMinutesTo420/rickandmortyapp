import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { IApiResponse, ICharacter } from '../models/character';
import { IEpisode } from '../models/episode';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor(private http:HttpClient) { }
  url = 'https://rickandmortyapi.com/api/character/'
  getAll(url:string = 'https://rickandmortyapi.com/api/character'):Observable<IApiResponse>{
    return this.http.get<IApiResponse>(url);
  }
  getOne(id:string):Observable<ICharacter>{
    return this.http.get<ICharacter>(this.url+id);
  }
  getMultipleEpisodes(ids:string[]):Observable<IEpisode[]>{
    if(ids.length == 1){
      return this.http.get<IEpisode[]>('https://rickandmortyapi.com/api/episode/'+ids.join() ).pipe(map((response:any)=>[response]))
    }
    return this.http.get<IEpisode[]>('https://rickandmortyapi.com/api/episode/'+ids.join() )
  }
}
