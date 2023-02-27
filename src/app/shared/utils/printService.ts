import { HttpHeaders } from "@angular/common/http";

export class PrintServiceInfo {
  public static printServiceInfo(
    action: string,
    address: string,
    payload: any,
    httpHrd: HttpHeaders
  ) {
    console.log('Action', action);
    console.log('urlAddress: ', address);
    console.log('HEADERS:', httpHrd);
    console.log('payload: ', JSON.stringify(payload));
  }
}



