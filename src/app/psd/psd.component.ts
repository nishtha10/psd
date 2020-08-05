import { Component} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';


export class Information{
  id:number;
  title:string;
  subtitle:string;
  price:string;
  rating:number;
}

const Data:Information[]=[
{id:1,title:'Boots',subtitle:'Trainers in blue',price:'$45',rating:4.6},
{id:2,title:'Boots',subtitle:'Trainers in blue',price:'$45',rating:4.6},
{id:5,title:'Boots',subtitle:'Trainers in blue',price:'$50',rating:3.6},
{id:4,title:'Boots',subtitle:'Trainers in blue',price:'$45',rating:4.6},
{id:12,title:'Boots',subtitle:'Trainers in blue',price:'$45',rating:4.6},
{id:6,title:'Boots',subtitle:'Trainers in blue',price:'$45',rating:4.6},
{id:22,title:'Boots',subtitle:'Trainers in blue',price:'$45',rating:4.6},
{id:8,title:'Boots',subtitle:'Trainers in blue',price:'$45',rating:4.6},
{id:3,title:'Boots',subtitle:'Trainers in blue',price:'$45',rating:4.6},
{id:29,title:'Boots',subtitle:'Trainers in blue',price:'$45',rating:4.6},
]

@Component({
  selector: 'app-psd',
  templateUrl: './psd.component.html',
  styleUrls: ['./psd.component.scss']
})
export class PsdComponent  {
  displayedColumns:string[]=['id','title','subtitle','price','rating','action'];
  dataSource=new MatTableDataSource(Data);
  constructor() { }
}
