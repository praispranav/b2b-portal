import { Injectable } from "@angular/core";

interface ProductConstants {
  productInformation: string;
  productDetail: string;
  shippingDetail: string;
  tradeInformation: string;
}

@Injectable({
  providedIn: "root",
})
export class ProviderStorageService {
  static readonly productConstants: ProductConstants = {
    productInformation: "productInformation",
    productDetail: "productDetail",
    shippingDetail: "shippingDetail",
    tradeInformation: "tradeInformation",
  };
  constructor() {}

  setFormValuesToSession(key:string, value: any) {
    const string = JSON.stringify(value)
    sessionStorage.setItem(key, string);
  }

  getFormValuesFromSession(key: string) {
    // const result = sessionStorage.getItem(key);
    // if(result) return JSON.parse(result)
    return null
  }

  removeItems(obj: any){
    const values = Object.values(obj);
    values.forEach((key:string)=> {
      sessionStorage.removeItem(key)
    })
  }
}
