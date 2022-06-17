import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
  {
    path: '', redirectTo:'login', pathMatch:'full'
  },
  {
    path: 'users', component: PostsComponent,
  },
  {
    path: 'login', component: LoginComponent,
  },

  {
    path: 'signup', component: SignupComponent,
  },
  {
    path: 'detail', component: UserDetailsComponent,
  },
  // {
  //   path: '**', redirectTo: '',
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
