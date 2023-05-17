import { Component, OnInit } from '@angular/core';
import { CoinService } from 'src/app/services/coin.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit{

  tags?:Tag[];

  constructor(coinService:CoinService) {
    coinService.getAllTags().subscribe(serverTags => {
      this.tags = serverTags;
    });
  }

  ngOnInit(): void {
  }
}
