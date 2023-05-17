import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CoinService } from 'src/app/services/coin.service';
import { Coins } from 'src/app/shared/models/Coins';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  coins:Coins[] = [];

  constructor(private coinService:CoinService, activatedRoute:ActivatedRoute) {

    let coinsObservable: Observable<Coins[]>;

    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
        coinsObservable = this.coinService.getAllCoinsBySearchTerm(params.searchTerm);
      else if(params.tag)
        coinsObservable = this.coinService.getAllCoinsByTag(params.tag);
      else
        coinsObservable = this.coinService.getAll();

        coinsObservable.subscribe((serverCoins) => {
          this.coins = serverCoins;
        })
    })
  }

  ngOnInit(): void {

  }
}
