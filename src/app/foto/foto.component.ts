import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/internal/operators';
import {HttpClient} from '@angular/common/http';
import {Serv} from './serv';

@Component({
  selector: 'app-foto',
  templateUrl: './foto.component.html',
  styleUrls: ['./foto.component.css']
})
export class FotoComponent {
  files: any;
  constructor(public http: Serv) {
  }

  addPhoto(event) {
    let target = event.target || event.srcElement;
    this.files = target.files;
  }

}
