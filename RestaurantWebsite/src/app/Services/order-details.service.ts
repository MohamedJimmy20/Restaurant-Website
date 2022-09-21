import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }
    foodDetails= [
      {
        id: "1",
        foodName: "Panner Grilled Sandwitch",
        foodDetails: "pan-fried masla paneer",
        foodPrice: 200,
        foodImg: "https://images.unsplash.com/photo-1580959375944-abd7e991f971?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
      },
      {
        id: "2",
        foodName: "veggie Supeme",
        foodDetails: "Onion| Green Capsicum| Mushroom| Black Oliver",
        foodPrice: 369,
        foodImg: "https://media.istockphoto.com/photos/the-cheesy-beef-crunch-wrap-supreme-picture-id1301430552?s=612x612",

      },
      {
        id: "3",
        foodName: "Panner Burger",
        foodDetails: "Panner",
        foodPrice: 149,
        foodImg:"https://media.istockphoto.com/photos/closeup-of-a-veggie-burger-with-copy-space-picture-id1331109186?b=1&k=20&m=1331109186&s=170667a&w=0&h=CWqc2DNV-frmE_aqiQu4Q-SfCUmqJIp362drb4cSMZU=",

      },
      {
        id: "4",
        foodName: "Veg Masla Roll In Naan",
        foodDetails: "A Homely Mix Of marshed potato and veggies",
        foodPrice: 140,
        foodImg:"https://img.search.brave.com/y5grl4Po66k26lqfGRcSpa3gGZZV-Z_Sjl7g0CeeFt8/rs:fit:600:640:1/g:ce/aHR0cHM6Ly8xLmJw/LmJsb2dzcG90LmNv/bS8tT1doSGJsRE9x/VUUvWFN5TFVZRlpK/VUkvQUFBQUFBQUFP/UkUvMHIyTUR0akow/WVVLT3BVY19sRnZ0/QXJrSm5mUW45WlZR/Q0xjQkdBcy9zMTYw/MC9OYWFuJTJCV3Jh/cCUyQi5KUEc",
      },
      {
        id: "5",
        foodName: "Indulgence Brownie",
        foodDetails: "(Eggles) undulge in richly decadent chocolate browne",
        foodPrice: 105,
        foodImg:"https://img.search.brave.com/ClqClTdt6_GVe2fq6sNOv9gjGX4u3kIJ2Lqbz3-c8L0/rs:fit:577:577:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzA3Lzk3/LzA0LzA3OTcwNGNk/ZTExOGNmYTBmMWJh/OWZjNTMwN2MxOTE0/LmpwZw",
      },
      {
        id: "6",
        foodName: "Oreo Cheesecake Ice Cream",
        foodDetails: "Oreo Ice Cream",
        foodPrice: 219,
        foodImg:"https://img.search.brave.com/sKUWtd1mceVPobrB_vX4adj3Iy0pJn1ESrM24aX_F0o/rs:fit:1200:1184:1/g:ce/aHR0cDovL3d3dy50/aGUtZ2lybC13aG8t/YXRlLWV2ZXJ5dGhp/bmcuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy9ibG9nZ2VyL19B/MzljZ3hvSE42NC9T/cGs3NU05RW5iSS9B/QUFBQUFBQUR2Zy9h/U2NuSjFGQnkyby9z/MTYwMC9JTUdfMzMx/OC5KUEc",

      },
    ]


}

