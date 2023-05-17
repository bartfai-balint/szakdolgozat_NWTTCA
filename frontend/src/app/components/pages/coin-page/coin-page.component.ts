import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CoinService } from 'src/app/services/coin.service';
import { Coins } from 'src/app/shared/models/Coins';

@Component({
  selector: 'app-coin-page',
  templateUrl: './coin-page.component.html',
  styleUrls: ['./coin-page.component.css']
})
export class CoinPageComponent implements OnInit{

  coin!: Coins;

  constructor(activatedRoute:ActivatedRoute, coinService:CoinService, private cartService:CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.id)
      coinService.getCoinById(params.id).subscribe(serverCoin => {
        this.coin = serverCoin;
      });
    })
  }

  ngOnInit(): void {
  }

  addToCart(){
    this.cartService.addToCart(this.coin);
    this.router.navigateByUrl('/cart-page');
  }
}
