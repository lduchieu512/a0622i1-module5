import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontSizeEditorComponent } from './ss3/font-size-editor/font-size-editor.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Ss3ThBai2Component } from './ss3/ss3-th-bai2/ss3-th-bai2.component';
import { Ss3ThBai3Component } from './ss3/ss3-th-bai3/ss3-th-bai3.component';
import { Ss3BtBai3Component } from './ss3/ss3-bt-bai3/ss3-bt-bai3.component';
import { Ss4ThBai1Component } from './ss4/thuchanh/ss4-th-bai1/ss4-th-bai1.component';
import { Ss4BtBai1Component } from './ss4/ss4-bt-bai1/ss4-bt-bai1.component';
import { LikeComponent } from './ss4/thuchanh/like/like.component';
import { Ss5ThBai1Component } from './ss5/ss5-th-bai1/ss5-th-bai1.component';
import { Ss5ThBai2Component } from './ss5/ss5-th-bai2/ss5-th-bai2.component';
import { Ss6ThBai1Component } from './ss6/ss6-th-bai1/ss6-th-bai1.component';
import { Ss3BtBai2Component } from './ss3/ss3-bt-bai2/ss3-bt-bai2.component';

@NgModule({
  declarations: [
    AppComponent,
    FontSizeEditorComponent,
    Ss3ThBai2Component,
    Ss3ThBai3Component,
    Ss3BtBai3Component,
    Ss4ThBai1Component,
    Ss4BtBai1Component,
    LikeComponent,
    Ss5ThBai1Component,
    Ss5ThBai2Component,
    Ss6ThBai1Component,
    Ss3BtBai2Component
  ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }