import { Component, OnInit } from '@angular/core';
import { ServiceProvideService } from '../service-provide.service';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css']
})
export class HttpTestComponent implements OnInit {
  data:any;
  constructor(service:ServiceProvideService) {
    service.getComments().subscribe((info)=>{
      this.data=info;
    });
   }

  ngOnInit(): void {
  }

}
