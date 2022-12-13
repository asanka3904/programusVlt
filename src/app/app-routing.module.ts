import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './components/item/item.component';
import { TaskComponent } from './components/task/task.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/item',
  },
  {
    path: 'item',
    component: ItemComponent,
  },
  {
    path: 'task',
    component: TaskComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
