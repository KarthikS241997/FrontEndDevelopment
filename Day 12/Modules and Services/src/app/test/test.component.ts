import { Component, OnInit } from '@angular/core';
import { ProvideServiceDataService } from '../provide-service-data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(service:ProvideServiceDataService) { 
    this.getcars=service.data();
    this.getprice=service.price();
  
  }

  ngOnInit(): void {
  }
  getcars:any;
  getprice:any;
}
