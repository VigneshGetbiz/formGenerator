import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { CommonModule } from './shared/modules/common.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { TextFieldComponent } from './formControls/text-field/text-field.component';
import { CheckBoxComponent } from './formControls/check-box/check-box.component';
import { RadioComponent } from './formControls/radio/radio.component';
import { SelectComponent } from './formControls/select/select.component';
import { DateComponent } from './formControls/date/date.component';
import { EmailComponent } from './formControls/email/email.component';


@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    TextFieldComponent,
    CheckBoxComponent,
    RadioComponent,
    SelectComponent,
    DateComponent,
    EmailComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormlyModule,
    FormlyMaterialModule,
    FormlyModule.forRoot({
      types: [
        { name: 'repeat', component: TextFieldComponent },
      ],
      // validationMessages: [
      //   { name: 'required', message: 'This field is required' },
      // ],
    }),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
