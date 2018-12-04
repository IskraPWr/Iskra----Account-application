import { PathService } from './../../service';
import { FormGroup, FormControl} from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

declare var window: any;
declare var FB: any;


@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements AfterViewInit {
  formModel = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  constructor (private Service: PathService, private titleService: Title, private _router: Router ) {
    this.Service.updateFlag('Logowanie');
    this.titleService.setTitle('Logowanie');

  }

  onSubmit() {
    const number = Math.floor(Math.random() * 2);
    let link;
    number ? link = 'konto/dane' : link = 'admin/dane';
    this._router.navigate([link]);
  }


  ngAfterViewInit () {
  }
}

