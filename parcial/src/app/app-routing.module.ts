import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{
    path: 'grupo-a',
    children: [
        {
            path: 'grupo-a',
            loadChildren:'./grupo-a/grupo-a.module#GrupoAModule'
        }
    ]
},
{
  path: 'grupo-b',
  children: [
      {
          path: 'grupo-b',
          loadChildren:'./grupo-b/grupo-b.module#GrupoBModule'
      }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
