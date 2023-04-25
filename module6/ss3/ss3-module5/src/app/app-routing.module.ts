import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Ss7ThBai1Component} from "./ss7/ss7-th-bai1/ss7-th-bai1.component";
import {YoutubePlaylistComponent} from "./ss7/ss7-th/youtube-playlist/youtube-playlist.component";
import {YoutubePlayerComponent} from "./ss7/ss7-th/youtube-player/youtube-player.component";
import {ProductListComponent} from "./ss7/ss7-th-bai3/product/product-list/product-list.component";
import {ProductCreateComponent} from "./ss7/ss7-th-bai3/product/product-create/product-create.component";


const routes: Routes = [
  {
    path: 'timelines',
    component: Ss7ThBai1Component
  },
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  },
  {
    path: 'product/list',
    component: ProductListComponent
  },
  {
    path: 'product/create',
    component: ProductCreateComponent
  }
];

@NgModule(
  {
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule {
}
