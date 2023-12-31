import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserEntity } from '../../model/user/user-entity';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  findAll(): Observable<UserEntity[]>{
    return this.http.get<UserEntity[]>('http://localhost:8090/usuario/all');
  }

  add(user:UserEntity): Observable<UserEntity>{
    return this.http.post<UserEntity>("http://localhost:8090/usuario/add", user);
  }

  login(user:UserEntity):Observable<String>{
    return this.http.post("http://localhost:8090/usuario/login",user,
      {
        responseType: 'text'
      }
    );
  }

  home():Observable<UserEntity>{
    return this.http.get<UserEntity>("http://localhost:8090/usuario/details");
  }
}