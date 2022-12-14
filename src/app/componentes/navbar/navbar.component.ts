import { Component, OnInit } from '@angular/core';
import { PorfolioService } from '../servicios/porfolio.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  miPorfolio:any;

  constructor(private datosPorfolio:PorfolioService){ }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
    console.log(data);
    this.miPorfolio=data;
    })
  }

}
