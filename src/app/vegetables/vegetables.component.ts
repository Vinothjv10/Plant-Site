import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css']
})
export class VegetablesComponent implements OnInit {

  showDialog21:any;
  showDialog22:any;
  showDialog23:any;
  showDialog24:any;
  showDialog25:any;
  showDialog26:any;
  showDialog27:any;
  showDialog28:any;
  showDialog29:any;
  showDialog210:any;
  showDialog211:any;
  showDialog212:any;


  edit:boolean =true;

  filteredString: string = '' ;

  items = [
    {
      url: "../../assets/vegetables/v1.jpg",
      title:' Carrot',
      price:'fds',
      age:23,
  },
  {
    url: "../../assets/vegetables/v2.jpg",
    title:"Radish",
    price:'dfsfsdf'
  },
  {
    url: "../../assets/vegetables/v3.jpg",
    title:"Potato",
    price:'dsfsdfsdf'
  },
  {
    url: "../../assets/vegetables/v4.jpg",
    title:"Tomato",
    price:'dsfsdfsdfsd'
  },
  {
    url: "../../assets/vegetables/v5.jpg",
    title:"Lady's finger",
    price:'fsdfsdfs'
  },
  {
    url: "../../assets/vegetables/v6.jpg",
    title:"Chili",
    price:'dfsfsdf'
  },
  {
    url: "../../assets/vegetables/v7.jpg",
    title:"Brinjal",
    price:'dfsdfs'
  },
  {
    url: "../../assets/vegetables/v8.jpg",
    title:"Pumpkin",
    price:'dfsdfsdfe'
  },
  {
    url: "../../assets/vegetables/v9.jpg",
    title:"Ginger",
    price:'dfsdfsdfe'
  },
  {
    url: "../../assets/vegetables/v10.jpg",
    title:"Cabage",
    price:'dfsdfsdfe'
  },
  {
    url: "../../assets/vegetables/v11.jpg",
    title:"Bitter gourd",
    price:'dfsdfsdfe'
  },
  {
    url: "../../assets/vegetables/v12.jpg",
    title:"Cucumber",
    price:'dfsdfsdfe'
  },
]
  constructor() { }

  ngOnInit(): void {
  }

}
