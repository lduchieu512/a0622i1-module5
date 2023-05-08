import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DictionayPageComponent} from "./conponent/dictionay-page/dictionay-page.component";
import {DictionaryDetailComponent} from "./conponent/dictionary-detail/dictionary-detail.component";


const routes: Routes = [
  {
    path: '',
    component: DictionayPageComponent
  },
  {
    path:'',
    component:DictionaryDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
