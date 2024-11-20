import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheaderComponent } from './cheader/cheader.component';
import { CfooterComponent } from './cfooter/cfooter.component';
import { ChistoryComponent } from './chistory/chistory.component';
import { CcourseComponent } from './ccourse/ccourse.component';
import { CteacherComponent } from './cteacher/cteacher.component';
import { CstudentComponent } from './cstudent/cstudent.component';

@NgModule({
  declarations: [
    AppComponent,
    CheaderComponent,
    CfooterComponent,
    ChistoryComponent,
    CcourseComponent,
    CteacherComponent,
    CstudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
