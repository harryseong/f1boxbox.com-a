import { Pipe, PipeTransform } from '@angular/core';
import {Constants} from '../../constants/constants';

@Pipe({
  name: 'nationality'
})
export class NationalityPipe implements PipeTransform {

  transform(input: string, inputAttribute: string, outputAttribute: string): any {
    const country: any = Constants.COUNTRIES.find((c: any) => c[inputAttribute] === input);
    return country ? country[outputAttribute] : null;
  }
}
