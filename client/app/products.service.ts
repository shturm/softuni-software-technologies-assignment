import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {AuthService} from './auth.service';

import { Http, Response, RequestOptionsArgs, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

import { Product } from './product.model';

@Injectable()
export class ProductsService {
    static products: Product[] = [
            {sku: 'w42', name: 'wheel', price:42},
            {sku: 'w43', name: 'wheelster', price: 54},
        ];

    constructor(private router: Router,
                private http: Http,
                private auth: AuthService) { }
    
    findProduct(sku: string): Observable<Product> {
        let headers = new Headers();
        this.auth.authorizeHeaders(headers);
        let opts: RequestOptionsArgs = {headers: headers};

        let result = new Observable<Product>((sub: Subscriber<Product>) => {
            this.http.get('http://localhost:8080/api/product?sku='+encodeURIComponent(sku), opts).subscribe(
                r => {
                    sub.next(r.json());
                }
            );
        });
        
        return result;
    }

    getProducts(term?: string): Observable<Product[]> {
        let result = new Observable<Product[]>((sub: Subscriber<Product[]>) => {
            let headers = new Headers();
            this.auth.authorizeHeaders(headers);
            let opts: RequestOptionsArgs = {headers: headers};

            this.http.get('http://localhost:8080/api/product?'+encodeURIComponent(term), opts).subscribe(r => {
               sub.next(r.json()); 
            }, e => {
                console.log(e);
            });
        });
        
        return result;
    }

    createProduct(p: Product): Observable<any> {
        let headers = new Headers();
        this.auth.authorizeHeaders(headers);
        headers.append('Content-Type', 'application/json');
        let opts: RequestOptionsArgs = {headers: headers};
        // let data = this.objectToQueryString(p);
        let data = p;
        return this.http.post("http://localhost:8080/api/product", data, opts);
    }

    updateProduct(p: Product): Observable<any> {

        let result = new Observable<any>((sub: Subscriber<any>) => {
            let headers = new Headers();
            this.auth.authorizeHeaders(headers);
            let opts: RequestOptionsArgs = {headers: headers};

            this.http.put('http://localhost:8080/api/product', p, opts).subscribe(r => {
               sub.next(r);
            }, e => {
               sub.error(e);
               console.log(e);
            });
        });

        return result;
    }

    private objectToQueryString(obj: any) {
        let parts: any[] = [];
        for (let i in obj) {
            if (obj.hasOwnProperty(i)) {
                parts.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]));
            }
        }
        return parts.join('&');
    }
}