import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './src/app/Components/form/form.component';
import { ViewComponent } from './src/app/Components/view/view.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'view', component: ViewComponent },
  { path: '', redirectTo: '/form', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
