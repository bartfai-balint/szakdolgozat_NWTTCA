const BASE_URL = 'http://localhost:5000';

export const COINS_URL = BASE_URL + '/api/coins';
export const COINS_TAGS_URL = COINS_URL + '/tags';
export const COINS_BY_SEARCH_URL = COINS_URL + '/search/';
export const COINS_BY_TAG_URL = COINS_URL + '/tag/';
export const COINS_BY_ID_URL = COINS_URL + '/';

export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_REGISTER_URL = BASE_URL + '/api/users/register';


export const ORDER_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDER_URL + '/create';
export const ORDER_NEW_FOR_CURRENT_USER_URL = ORDER_URL + '/newOrderForCurrentUser';
