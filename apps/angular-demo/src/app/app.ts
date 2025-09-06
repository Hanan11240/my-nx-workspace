import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeroTest } from '@angular-demo/ui'

@Component({
  imports: [RouterModule,HeroTest],
  selector: 'app-root',
   template: `
    <lib-hero
      title="Welcmoe demo"
      subtitle="Build something amazing today"
      cta="Get Started"
    ></lib-hero>
  `,
  styleUrl: './app.css',
})
export class App {
  protected title = 'angular-demo';
}
