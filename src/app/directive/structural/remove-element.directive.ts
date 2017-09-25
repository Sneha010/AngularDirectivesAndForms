import { Directive, OnInit, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appRemoveElement]'
})
export class RemoveElementDirective implements OnInit {


  @Input() appRemoveElement: any;

  constructor(private _templateRef: TemplateRef<any>, private _viewContainer: ViewContainerRef) { }

  ngOnInit() {
    this._viewContainer.createEmbeddedView(this._templateRef);

    setInterval(() => {

      this._viewContainer.clear();
      console.log('calll', 'calll');

    }, this.appRemoveElement);

  }

}
