import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div>
        <h1>Error 404</h1>
        <p>Page not found<p>
    </div>
    `
})
export class NotFoundComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
