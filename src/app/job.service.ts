import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=4';

  constructor(private http: HttpClient) { }



  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createPost(postData: any): Observable<any> {
    return this.http.post(this.apiUrl, postData);
  }

  updatePost(postId: number, postData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${postId}`, postData);
  }

  deletePost(postId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${postId}`);
  }
}
