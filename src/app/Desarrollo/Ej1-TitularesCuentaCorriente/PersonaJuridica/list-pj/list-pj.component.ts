import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-list-pj',
  templateUrl: './list-pj.component.html',
  styleUrls: ['./list-pj.component.css']
})
export class ListPjComponent implements OnInit {

  legalPersons :any;


  constructor(private service : ServiceService) { 
    
  }
  ngOnInit() {

   this.listPersonas();

  }

  listPersonas(){
    this.service.getLegalPerson().subscribe(data=>
      {
        console.log ( data );
        this.legalPersons = data;
      }
    )
  }
}
