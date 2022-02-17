import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProvideServiceDataService {

  constructor() { }


    data(){
      let cars=["bmw","benz","audi","ferrari"]
      return cars
    }
    price(){
      let price=[100000,200000,300000,400000]
      return price
    }

}
