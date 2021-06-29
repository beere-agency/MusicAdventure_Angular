import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products: any;

  ngOnInit(): void {
    this.products = [1];
  }
  title = 'musicapp';
}
