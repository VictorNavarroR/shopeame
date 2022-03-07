import { Component, OnInit } from '@angular/core';
import { HeaderLinks } from './models/header-links';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public headerNavLinks:HeaderLinks[] = [
    {
      name:'Home', 
      routerLink:'/home',
      class: 'header__link--home'
    },
    {
      name:'Prods.', 
      routerLink:'/products',
      class: 'header__link--prods'
    },
    {
      name:'Gestión', 
      routerLink:'/gestion',
      class: 'header__link--gestion'
    }
  ]

  public headerLogo:string = '../../../../assets/logo-shopeame.JPG'
  public homeIcon:string = '../../../../assets/home.svg'
  public prodsIcon:string = '../../../../assets/products.svg'
  public gestionIcon:string = '../../../../assets/gestion.svg'

  constructor() { }

  ngOnInit(): void {
  }

}
