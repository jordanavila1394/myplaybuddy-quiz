
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Store } from '@ngrx/store';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  isAuthenticated !: boolean;
  reqHeader!:HttpHeaders;
  constructor(
    private http: HttpClient,

    ) {
  }

  public getCategoryById(request: any): Observable<any> {

    return this.http.get<any[]>(`${environment.apiUrl}categoryProducts?id_category=${request.id}&page=1&with_all_images=1&image_size=home_default`);
  }


  public getCategoryByUrl(url: any): Observable<any> {

    return this.http.get<any[]>(`${url}`);
  }

}
