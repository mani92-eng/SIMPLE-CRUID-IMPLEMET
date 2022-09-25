import { Component ,OnInit} from '@angular/core';
import { map } from 'rxjs';
import { MobileService } from './mobile.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cruid';

  constructor(private ms:MobileService) { }
  mobiles:any='';

  mobile:any;
  Ram:any;
  Price:any;
  Storage:any;
  
  

  ngOnInit() {
    this.getmobile();
  }


 getmobile(){
  this.ms.fetchmobiles().subscribe(
    (data) => {
      this.mobiles=data
    },Error=>{
      console.log(Error)
    }
  )
 }

  deleteMobile(id:any){
    this.ms.deleteMobiles(id).subscribe(
      (res)=>{
        this.getmobile();

      }
    )
  }

  
editMobile(data:any=''){
  if(data){
    this.mobile=data.mobile;
  this.Ram=data.Ram;
  this.Price=data.Price;
  this.Storage=data.Storage;
  }
 

 
}
}
