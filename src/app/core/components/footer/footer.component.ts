import { Component, OnInit } from '@angular/core';
import { FooterLinks } from './models/footer-links';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public footerLinks: FooterLinks[] = [
    {
      name:'Twitter', 
      url:'http://twitter.com/'
    },
    {
      name:'Facebook', 
      url:'http://facebook.com/'
    },
    {
      name:'Instagram', 
      url:'http://instagram.com/'
    },
    {
      name:'TikTok', 
      url:'http://tiktok.com/'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
