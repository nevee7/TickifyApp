import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,  // Mark it as standalone
  imports: [CommonModule],  // Import required Angular modules like CommonModule
  template: `<h1>Hello, {{ title }}</h1>`,
})
export class AppComponent {
  title = 'tickifyApp';
}
