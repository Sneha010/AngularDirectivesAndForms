import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardMask'
})
export class CardMaskPipe implements PipeTransform {

  // visit for regex here..https://www.w3schools.com/jsref/jsref_obj_regexp.asp
  transform(value: any, visibleChars?: any): any {

    let maskedSection = value.slice(0, -visibleChars);
    let visibleSection = value.slice(-visibleChars);
    return maskedSection.replace(/./g, '*') + visibleSection;
  }

}
