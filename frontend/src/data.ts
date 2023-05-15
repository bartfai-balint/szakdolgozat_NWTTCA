import { Coins } from "./app/shared/models/Coins";
import { Tag } from "./app/shared/models/Tag";

export const sample_coins: Coins[] = [
  {
    id:'1',
    name:'2 pengő',
    price: 3600,
    favorite: false,
    origins: ['Hungary', 'Kingdom'],
    stars: 3.0,
    imageUrl: 'assets/coin-1.jpg',
    tags: ['Pengő', 'two', 'silver'],
  },
  {
    id:'2',
    name:'1 Korona',
    price: 500000,
    favorite: true,
    origins: ['Austro-Hungary', 'Kingdom'],
    stars: 5.0,
    imageUrl: 'assets/coin-2.jpg',
    tags: ['Korona', 'one', 'gold'],
  },
  {
    id:'3',
    name:'10 Marka',
    price: 2500,
    favorite: true,
    origins: ['NDK'],
    stars: 2.0,
    imageUrl: 'assets/coin-3.jpg',
    tags: ['Marka', 'ten', 'aluminium'],
  },
  {
    id:'4',
    name:'200 forint',
    price: 3000,
    favorite: false,
    origins: ['Hungary', 'republic'],
    stars: 2.0,
    imageUrl: 'assets/coin-4.jpg',
    tags: ['Forint', 'two-hundred', 'silver'],
  },
]

export const sample_tags:Tag[] = [
  {name: 'All', count: 4},
  {name: 'Pengő', count: 1},
  {name: 'Forint', count: 1},
  {name: 'Marka', count: 1},
  {name: 'Korona', count: 1},
  {name: 'one', count: 1},
  {name: 'ten', count: 1},
  {name: 'two', count: 1},
  {name: 'two-hundred', count: 1},
  {name: 'silver', count: 2},
  {name: 'gold', count: 1},
  {name: 'aluminium', count: 1}
]
