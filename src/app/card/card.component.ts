import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../Auth/login/login.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  showDialog:any;
  showDialog1:any;
  showDialog2:any;
  showDialog3:any;
  showDialog4:any;
  showDialog5:any;
  showDialog6:any;
  showDialog7:any;
  showDialog8:any;
  showDialog9:any;
  showDialog10:any;
  showDialog11:any;
  showDialog12:any;


  edit:boolean =true;

  filteredString: string = '' ;

  items = [
    {
      url: "assets/plant/Air Purifying Syngonium.png",
      title:'Air Purifying Syngonium',
      price:'fds',
      age:23,
  },
  {
    url: "assets/plant/Jade.png",
    title:"Jade Terrarium",
    price:'dfsfsdf'
  },
  {
    url: "assets/plant/Syngonium.png",
    title:"Syngonium",
    price:'dsfsdfsdf'
  },
  {
    url: "assets/plant/Oxycardium.png",
    title:"Oxycardium",
    price:'dsfsdfsdfsd'
  },
  {
    url: "assets/plant/Chamaedorea.png",
    title:"Chamaedorea",
    price:'fsdfsdfs'
  },
  {
    url: "assets/plant/Bonsai.png",
    title:"Ficus Bonsai",
    price:'dfsfsdf'
  },
  {
    url: "assets/plant/Compacta.png",
    title:"Ficus Compacta",
    price:'dfsdfs'
  },
  {
    url: "assets/plant/Kamini.png",
    title:"Kamini",
    price:'dfsdfsdfe'
  },
  {
    url: "assets/plant/Sansvieria.png",
    title:"Sansvieria Green",
    price:'dfsdfsdfe'
  },
  {
    url: "assets/plant/Red philondendron.png",
    title:"Red Philondendron",
    price:'dfsdfsdfe'
  },
  {
    url: "assets/plant/Lucky bamboo.png",
    title:"Lucky Bamboo",
    price:'dfsdfsdfe'
  },
  {
    url: "assets/plant/Tropical Hibiscus.png",
    title:"Tropical Hibiscus",
    price:'dfsdfsdfe'
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
