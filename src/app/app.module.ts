import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { FormComponent } from './pages/form/form.component';
import { PipeDirectiveComponent } from './pages/pipe-directive/pipe-directive.component';
import { CardMaskPipe } from './pipes/card-mask.pipe';
import { ChangeTextcolorDirective } from './directive/attribute/change-textcolor.directive';
import { RemoveElementDirective } from './directive/structural/remove-element.directive';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PipeDirectiveComponent,
    CardMaskPipe,
    ChangeTextcolorDirective,
    RemoveElementDirective
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
