import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { AppComponent } from './base/app.component';
import { HomeComponent } from './home/home.component';
import { router } from './routers';
import { LoginComponent } from './login/login.component';
import { RegistrerComponent } from './registrer/registrer.component'
import { AuthServices } from './services/auth.services';
import { AuthGuards } from './guards/auth.guard.services';
import { UserServices } from './services/user.services';
import { ListCreatorComponent } from './creator/list.creator.component';
import { FormsModule } from '@angular/forms';
import { ListCreatorComponent2 } from './creator2/listcreator2.component';
import { ListServices } from './services/list.services';
import { ListComponent} from './creator/list/list.compopnent';
import { TodoCreatorComponent } from './todo/creator/todos.creator.componet';
import { TodoService } from './services/todos.services';
import { TodoCardComponent } from './todo/card/todo.card.componet';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistrerComponent,
    ListCreatorComponent,
    ListCreatorComponent2,
    ListComponent,
    TodoCreatorComponent,
    TodoCardComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    RouterModule.forRoot(router),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    TransferHttpCacheModule,
    FormsModule,
    BrowserAnimationsModule

  ],
  providers: [AuthServices, AuthGuards, UserServices, ListServices, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
