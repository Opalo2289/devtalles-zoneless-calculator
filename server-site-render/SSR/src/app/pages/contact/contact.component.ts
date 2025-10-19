import { Component, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  private title = inject(Title)
  private meta = inject(Meta)

  ngOnInit(): void {
    this.title.setTitle('Contact Page');
    this.meta.updateTag({ name: 'description', content: 'Sobre DevTalles SSR: Esta aplicación web ofrece informacion sobre SSR' });
    this.meta.updateTag({ name: 'og:title', content: 'Sobre DevTalles SSR: Esta aplicación web ofrece informacion sobre SSR' }); //el og:title se usa para las redes sociales
    this.meta.updateTag({ name: 'keywords', content: 'Curso SSR' });
  }

}
