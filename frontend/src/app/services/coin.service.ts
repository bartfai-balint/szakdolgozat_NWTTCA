import { Injectable } from '@angular/core';
import { Coins } from '../shared/models/Coins';
import { sample_coins, sample_tags } from 'src/data';
import { retry, sample } from 'rxjs';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class CoinService {

  constructor() { }

  getAll():Coins[]{
    return sample_coins;
  }

  getAllCoinsBySearchTerm(searchTerm:string ){
    return this.getAll().filter(coin => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags():Tag[]{
    return sample_tags;
  }

  getAllCoinsByTag(tag:string):Coins[]{
    return tag == "All"?
    this.getAll():
    this.getAll().filter(coin => coin.tags?.includes(tag));
  }

  getCoinById(coinId:string):Coins{
    return this.getAll().find(coin => coin.id == coinId) ?? new Coins();
  }
}
