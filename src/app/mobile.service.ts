import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MobileService {

  constructor(private http:HttpClient) { }
  url="http://localhost:3000/mobiles";
  fetchmobiles(){
   
   return this.http.get(this.url)
}
deleteMobiles(id:any){
 return this.http.delete(this.url+ "/"+id)

}
editMobiles(id:any){
  return this.http.get(this.url+ "/"+id)
}
}