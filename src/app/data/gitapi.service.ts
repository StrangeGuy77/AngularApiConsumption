import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitapiService {

  constructor(private http: HttpClient) { }

  client_secret = environment.client_secret;
  client_id = environment.client_id;

  getGithubProfile (github: string) {
    const response = this.http.get(`http://api.github.com/users/${github}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    console.log(response);
    return response;
  }
}
