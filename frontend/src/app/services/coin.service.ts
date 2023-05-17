import { Injectable } from '@angular/core';
import { Coins } from '../shared/models/Coins';
import { sample_coins, sample_tags } from 'src/data';
import { Observable, retry, sample } from 'rxjs';
import { Tag } from '../shared/models/Tag';
import { HttpClient } from '@angular/common/http';
import { COINS_BY_ID_URL, COINS_BY_SEARCH_URL, COINS_BY_TAG_URL, COINS_TAGS_URL, COINS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor(private http:HttpClient) { }

  getAll(): Observable <Coins[]>{
    return this.http.get<Coins[]>(COINS_URL);
  }

  getAllCoinsBySearchTerm(searchTerm:string ){
    return this.http.get<Coins[]>(COINS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]>{
    return this.http.get<Tag[]>(COINS_TAGS_URL);
  }

  getAllCoinsByTag(tag:string):Observable<Coins[]>{
    return tag === "All"?
    this.getAll():
    this.http.get<Coins[]>(COINS_BY_TAG_URL + tag);
  }

  getCoinById(coinId:string): Observable<Coins>{
    return this.http.get<Coins>(COINS_BY_ID_URL + coinId);
  }
}
