import { Component } from '@angular/core';

import { form } from 'src/app/utils/form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = 'Angular Login Form';
  form = form;

}
