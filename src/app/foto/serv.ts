import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class Serv {
  host:string =`http://localhost:3000/foto`;
  constructor(private hhtp: HttpClient){}

  getFoto(foto: any){
      return this.hhtp.post(this.host, foto);
  }
}
