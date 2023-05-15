import { Coins } from "./Coins";

export class CartItem{
  constructor(public coin:Coins){}
  quantity:number=1;
  price: number = this.coin.price;
}
