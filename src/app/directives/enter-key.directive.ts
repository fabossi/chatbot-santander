import { Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appEnterKey]'
})
export class EnterKeyDirective implements OnInit {

  ngOnInit() {
    return (scope, element, attrs) => {
      element.bind('keydown keypress', (event) => {
        if (event.keyCode === 13) {
          scope.$apply(() => {
            scope.$eval(attrs.EnterKey);
          });
          event.preventDefault();
        }
      });
    };
  }
}
