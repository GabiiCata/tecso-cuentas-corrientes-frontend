import { Component, OnInit } from '@angular/core';
import { LegalPersonServiceService } from 'src/app/Service/Persona-Juridica/legal-person-service.service';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-list-pj',
  templateUrl: './list-pj.component.html',
  styleUrls: ['./list-pj.component.css']
})
export class ListPjComponent implements OnInit {

  legalPersons :any;


  constructor(private service : LegalPersonServiceService) { 
    
  }
  ngOnInit() {

   this.listPersonas();

  }

  listPersonas(){
    this.service.getLegalPersons().subscribe(data=>
      {
         this.legalPersons = data;
      }
    )
  }
}
