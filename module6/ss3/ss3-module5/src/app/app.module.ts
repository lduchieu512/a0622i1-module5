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
import { ArticleComponent } from './ss4/ss4-bt-bai1/article/article.component';
import { FooterComponent } from './ss4/ss4-bt-bai1/footer/footer.component';
import { HeaderComponent } from './ss4/ss4-bt-bai1/header/header.component';
import { NavbarComponent } from './ss4/ss4-bt-bai1/navbar/navbar.component';
import { LikesComponent } from './ss4/ss4-bt-bai1/likes/likes.component';
import { Ss5BtBai1Component } from './ss5/ss5-bt-bai1/ss5-bt-bai1.component';
import { CountdownTimerComponent } from './ss5/ss5-bt-bai1/countdown-timer/countdown-timer.component';
import { RatingBarComponent } from './ss5/ss5-bt-bai1/rating-bar/rating-bar.component';
import { Ss7ThBai1Component } from './ss7/ss7-th-bai1/ss7-th-bai1.component';
import {AppRoutingModule} from "./app-routing.module";
import { YoutubePlaylistComponent } from './ss7/ss7-th/youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './ss7/ss7-th/youtube-player/youtube-player.component';
import { ProductListComponent } from './ss7/ss7-th-bai3/product/product-list/product-list.component';
import { ProductCreateComponent } from './ss7/ss7-th-bai3/product/product-create/product-create.component';
import { Ss6BtBai1Component } from './ss6/ss6-bt-bai1/ss6-bt-bai1.component';
import { Ss7BtBai1Component } from './ss7/ss7-bt-bai1/ss7-bt-bai1.component';
import { Ss7BtBai2Component } from './ss7/ss7-bt-bai2/ss7-bt-bai2.component';
import { ProductUpdateComponent } from './ss7/ss7-bt-bai2/product-update/product-update.component';
import { ProductDeleteComponent } from './ss7/ss7-bt-bai2/product-delete/product-delete.component';

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
    Ss3BtBai2Component,
    ArticleComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    LikesComponent,
    Ss5BtBai1Component,
    CountdownTimerComponent,
    RatingBarComponent,
    Ss7ThBai1Component,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    ProductListComponent,
    ProductCreateComponent,
    Ss6BtBai1Component,
    Ss7BtBai1Component,
    Ss7BtBai2Component,
    ProductUpdateComponent,
    ProductDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
