import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    "path": "contact",
    "loadComponent": () => import("./pages/contact/contact.component").then(c => c.ContactComponent)
  },
  {
    "path": "pricin-page",
    "loadComponent": () => import("./pages/pricin-page/pricin-page.component").then(c => c.PricinPageComponent)
  },
  {
    "path": "about",
    "loadComponent": () => import("./pages/about-pages/about-pages.component").then(c => c.AboutPagesComponent)
  },
  {
    "path": "pokemons",
    loadComponent: () => import("./pages/pokemons/pokemons-pages.component")
  },
  {
    "path": "pokemons-detail/:id",
    loadComponent: () => import("./pages/pokemon-page-detail/pokemon-page-detail.component")
  },
  {
    "path": "",
    "redirectTo": "about",
    "pathMatch": "full"
  }
];
