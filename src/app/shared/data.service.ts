import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data;

  constructor(private http: HttpClient) {
  }

  postData(data) {
    return this.http.post('https://printman.am/api/auth', data, {responseType: 'text'});
  }

  getData() {
    const headers = new HttpHeaders()
      .set('x-auth-token', this.data);

    return this.http.get('https://printman.am/api/partners', {headers});
  }
}
