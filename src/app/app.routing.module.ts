import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./app.module').then(
        (m) => m.AppModule
      ),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot([...routes]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
