import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import {Http} from "@angular/http";

@Injectable()
export class ParseJsonCvService {

  file = "/assets/cv.json";

  constructor(private http:Http) {}

  /**
   * @param {string} classname  Classname which will be extract from json.
   *
   * @example
   * extractFromJson('skill')
   *
   * @returns A promise of object(classname) array
   */
  extractFromJson(classname:string): Promise<any>{

    return this.http.get(this.file)
      .toPromise()
      .then(response => {
        return response.json()[classname] as any;
      });

  }

}
