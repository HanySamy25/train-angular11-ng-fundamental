import { Injectable } from '@angular/core';

declare let toastr:any
@Injectable({
  providedIn: 'root'
})
export class ToastrService {

  constructor() { }

  toastrMsgSuccesss(message:string,title?:string){

    toastr.success(message,title)

  }

  toastrMsgError(message:string,title?:string){

    toastr.error(message,title)

  }

  toastrMsgInfo(message:string,title?:string){

    toastr.info(message,title)

  }

  toastrMsgWarning(message:string,title?:string){

    toastr.warning(message,title)

  }
}
