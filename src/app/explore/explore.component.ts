import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  showDialog4_0:any;
  showDialog41:any;
  showDialog42:any;
  showDialog43:any;
  showDialog44:any;
  showDialog45:any;
  showDialog46:any;
  showDialog47:any;
  showDialog48:any;
  showDialog49:any;
  showDialog4_10:any;
  showDialog4_11:any;
  showDialog4_12:any;
  showDialog4_13:any;
  showDialog4_14:any;
  showDialog4_15:any;

  edit:boolean =true;

  filteredString: string = '' ;

  items = [
    {
      url: "assets/plant/Air Purifying Syngonium.png" ,
      title:'Air Purifying Syngonium',
      price:'fds',
      age:23,
  },
  {
    url: "assets/flower/cflower1.1.jpg",
    title:'Cupid Bows',
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
    url: "assets/flower/cflower3.jpg",
    title:"Peace Lily Golden Touch",
    price:'fsdfsdfs'
  },
  {
    url: "../../assets/vegetables/v2.jpg",
    title:"Radish",
    price:'dfsfsdf'
  },
  {
    url: "assets/plant/Jade.png",
    title:"Jade Terrarium",
    price:'dfsdfs'
  },
  {
    url: "assets/flower/cflower2.jpg",
    title:"Ixora Pink Draff",
    price:'dfsdfsdfe'
  },
  {
    url: "assets/flower/cflower11.jpg",
    title:"Blooming Adenium Plant",
    price:'dfsdfsdfe'
  },
  {
    url: "assets/fruits/fr1_1.jpg",
    title:"Orange Tree",
    price:'dfsdfsdfe'
  },
  {
    url: "../../assets/vegetables/v3.jpg",
    title:"Potato",
    price:'dfsdfsdfe'
  },
  {
    url: "assets/plant/Chamaedorea.png",
    title:" Chamaedorea ",
    price:'dfsdfsdfe'
  },
  {
    url: "../../assets/vegetables/v4.jpg",
    title:"Tomato ",
    price:'dfsdfsdfe'
  },
  {
    url: "assets/plant/Bonsai.png",
    title:" Ficus Bonsai",
    price:'dfsdfsdfe'
  },
  {
    url: "assets/flower/CFLOWER4.jpg",
    title:" Hibiscus Plant",
    price:'dfsdfsdfe'
  },
  {
    url: "assets/fruits/fr6.jpg",
    title:"Mango Tree ",
    price:'dfsdfsdfe'
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
