import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public authService: AuthService) {}
  }

