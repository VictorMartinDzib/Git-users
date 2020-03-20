import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { InfoUsuario } from '../interfaces/info.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  public values: any;
  constructor(private http:HttpClient) { 
    this.cargarInfo();
  }

  public cargarInfo()
  {
    /*this.http.get('https://jsonplaceholder.typicode.com/comments')
          .subscribe((resp: any) => {
            
            
            this.values = resp;
            console.log(this.values);
    });*/
    try {
      this.values = this.http.get('https://jsonplaceholder.typicode.com/comments').pipe(tap(console.log));

    } catch (error) {
      alert("No se encontro el usuario: " + error);
    }
  }
  getRepositories(url)
  {
    
    try {
      return this.http.get(url)
          .pipe(tap(posts => {
            console.log(posts);
          }));
    } catch (error) {
      return null;
    }
  }
  getInfo(url)
  {

    return this.http.get(url);
    /*try {
      return this.http.get<InfoUsuario>(url)
          .pipe(tap(user => {
            console.log(user);
          }));
    } catch (error) {
      return null;
    }*/
  }
}
