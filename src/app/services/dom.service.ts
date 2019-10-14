import {
  Injectable,
  Injector,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ApplicationRef
} from '@angular/core';

@Injectable()
export class DomService {

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }


  async checkElementExistanceByIdDelayed(selectorId: string) {
    if (selectorId !== null) {
      let maxInterval = 0;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const interval = setInterval(function () {
            const e = document.getElementById(selectorId);
            if (document.getElementById(selectorId)) {
              console.log('element found: ' + selectorId);
              clearInterval(interval);
              resolve(true);
            } else if (maxInterval > 50) {
              console.log('element ' + selectorId + ' could not be found...');
              clearInterval(interval);
              reject(false);
            } else {
              maxInterval++;
            }
          }, 1500);
        }, 3000);
      });
    } else {
      console.log('Cannot check null element!');
    }
  }

  async checkElementExistanceByClassDelayed(selectorId: string) {
    if (selectorId !== null) {
      let maxInterval = 0;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const interval = setInterval(function () {
            if (document.getElementsByClassName(selectorId)) {
              console.log('element found: ' + selectorId);
              clearInterval(interval);
              resolve(true);
            } else if (maxInterval > 15) {
              console.log('element ' + selectorId + 'could not be found...');
              clearInterval(interval);
              reject(false);
            } else {
              maxInterval++;
            }
          }, 1500);
        }, 3000);
      });
    } else {
      console.log('Cannot check null element!');
    }
  }
}
