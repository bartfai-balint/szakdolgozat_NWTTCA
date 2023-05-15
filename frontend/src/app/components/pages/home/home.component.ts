import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      this.coins = this.coinService.getAllCoinsBySearchTerm(params.searchTerm);
      else if(params.tag)
      this.coins = this.coinService.getAllCoinsByTag(params.tag);
      else
      this.coins = this.coinService.getAll();
    })
  }

  ngOnInit(): void {

  }
}
