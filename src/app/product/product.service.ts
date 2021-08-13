import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { productDTO } from './product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }
  private apiURL = environment.apiURL + '/products';

  get(): Observable<productDTO[]> {
    return this.http.get<productDTO[]>(this.apiURL);
  }
}
