import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flower',
  templateUrl: './flower.component.html',
  styleUrls: ['./flower.component.css']
})
export class FlowerComponent implements OnInit {

  showDialog3_0:any;
  showDialog31:any;
  showDialog32:any;
  showDialog33:any;
  showDialog34:any;
  showDialog35:any;
  showDialog36:any;
  showDialog37:any;
  showDialog38:any;
  showDialog39:any;
  showDialog3_10:any;
  showDialog3_11:any;
 

  edit:boolean =true;

  filteredString: string = '' ;

  items = [
    {
      url: "assets/flower/cflower1.1.jpg",
      title:'Cupid Bows',
      price:'fds',
      age:23,
  },
  {
    url: "assets/flower/cflower2.jpg",
    title:"Ixora Pink Draff",
    price:'dfsfsdf'
  },
  {
    url: "assets/flower/cflower3.jpg",
    title:"Peace Lily Golden Touch",
    price:'dsfsdfsdf'
  },
  {
    url: "assets/flower/CFLOWER4.jpg",
    title:"Hibiscus Plant",
    price:'dsfsdfsdfsd'
  },
  {
    url: "assets/flower/cflower5.jpg",
    title:"Ixora Flowering Plant",
    price:'fsdfsdfs'
  },
  {
    url: "assets/flower/cflower6.jpg",
    title:"White Rose Plant",
    price:'dfsfsdf'
  },
  {
    url: "assets/flower/cflower7.jpg",
    title:"Silver Aglaonema Plant",
    price:'dfsdfs'
  },
  {
    url: "assets/flower/cflower8.jpg",
    title:"Flowery Murraya Bonsai",
    price:'dfsdfsdfe'
  },
  {
    url: "assets/flower/cflower9.jpg",
    title:"Kalenchoe Plant",
    price:'dfsdfsdfe'
  },
  {
    url: "assets/flower/cflower10.jpg",
    title:"Moon Cactus Blooming Plant",
    price:'dfsdfsdfe'
  },
  {
    url: "assets/flower/cflower11.jpg",
    title:"Blooming Adenium Plant",
    price:'dfsdfsdfe'
  },
  {
    url: "assets/flower/cflower12.jpg",
    title:"Double Layer Bamboo",
    price:'dfsdfsdfe'
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
