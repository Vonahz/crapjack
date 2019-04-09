import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './views/main/main.component';
import { RulesComponent } from './views/rules/rules.component';
import { CrapjackComponent } from './views/crapjack/crapjack.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MainComponent,
        pathMatch: 'full',
      },
      {
        path: 'crapjack',
        component: CrapjackComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
