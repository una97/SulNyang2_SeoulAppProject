import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'chat-view/:you', loadChildren: './chat-view/chat-view.module#ChatViewPageModule' },
  { path: 'cinform', loadChildren: './cinform/cinform.module#CinformPageModule' },
  { path: 'create-post', loadChildren: './create-post/create-post.module#CreatePostPageModule' },
  { path: 'hospital', loadChildren: './hospital/hospital.module#HospitalPageModule' },
  { path: 'inform', loadChildren: './inform/inform.module#InformPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'mypostlist', loadChildren: './mypostlist/mypostlist.module#MypostlistPageModule' },
  { path: 'post/:code/:writer', loadChildren: './post/post.module#PostPageModule' },
  { path: 'progress', loadChildren: './progress/progress.module#ProgressPageModule' },
  { path: 're-develop', loadChildren: './re-develop/re-develop.module#ReDevelopPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'showinform/:code/:writer', loadChildren: './showinform/showinform.module#ShowinformPageModule' }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
