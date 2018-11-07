import {Injectable} from '@angular/core';
import {RestDatasource} from './rest.datasource';

@Injectable()
export class AuthService {
  constructor(private datasource: RestDatasource){}

  authenticate(username: string, password: string) {
    return this.datasource.authenticate(username, password);
  }

  get authenticated(): boolean {
    return this.datasource.auth_token != null;
  }
  clear() {
    this.datasource.auth_token = null;
  }


}
