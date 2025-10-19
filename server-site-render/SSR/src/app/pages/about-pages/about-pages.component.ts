import { isPlatformServer } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about-pages',
  standalone: true,
  imports: [],
  templateUrl: './about-pages.component.html',
  styleUrl: './about-pages.component.css'
})
export class AboutPagesComponent implements OnInit {

  private title = inject(Title)
  private meta = inject(Meta)
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    //esto es para saber si estamos en el server o en el cliente
    // if (isPlatformServer(this.platformId)) {
      console.log('Estamos en el servidor');
      this.title.setTitle('pricin Page');
      this.meta.updateTag({ name: 'description', content: 'Sobre DevTalles SSR: Esta aplicación web ofrece informacion sobre SSR' });
      this.meta.updateTag({ name: 'og:title', content: 'Sobre DevTalles SSR: Esta aplicación web ofrece informacion sobre SSR' }); //el og:title se usa para las redes sociales
      this.meta.updateTag({ name: 'keywords', content: 'Curso SSR' });
    // } else {
    //   console.log('Estamos en el cliente');
    // }
  }



}
