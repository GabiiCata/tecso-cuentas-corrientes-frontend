import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

   constructor(){}

   todayDate(){
     return new Date().getFullYear;
   }
   

}
