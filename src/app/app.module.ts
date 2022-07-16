import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { LoginLabelComponent } from './components/login-label/login-label.component';
import { InputBoxComponent } from './components/input-box/input-box.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    LoginLabelComponent,
    InputBoxComponent,
    LoginButtonComponent  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
