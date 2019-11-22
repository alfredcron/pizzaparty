import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { AuthorComponent } from './author/author.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { MenuComponent } from './menu/menu.component';
import { MessageComponent } from './message/message.component';
import { AgePipe } from './pipes/age.pipe';
import { TvaPipe } from './pipes/tva.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { PizzaListComponent } from './pizza-list/pizza-list.component';
import { HomeComponent } from './home/home.component';
import { PizzaSingleComponent } from './pizza-single/pizza-single.component';
import { TestDirective } from './directives/test.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { ClearOnDbClickDirective } from './directives/clear-on-db-click.directive';
import { DropdownToggleDirective } from './directives/dropdown-toggle.directive';
import { CardComponent } from './card/card.component';
import { FakeApi } from './services/fake-api.service';
import { AppRoutingModule } from './app-routing.module';
import { PizzaFormComponent } from './pizza-form/pizza-form.component';
import { IngredientFormComponent } from './ingredient-form/ingredient-form.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { environment } from 'src/environments/environment';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    AuthorComponent,
    IngredientListComponent,
    MenuComponent,
    MessageComponent,
    AgePipe,
    TvaPipe,
    SortPipe,
    PizzaListComponent,
    HomeComponent,
    PizzaSingleComponent,
    TestDirective,
    HighlightDirective,
    ClearOnDbClickDirective,
    DropdownToggleDirective,
    CardComponent,
    IngredientFormComponent,
    ContactFormComponent,
    RegisterFormComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
        FormsModule,
        HttpClientModule,
        //HttpClientInMemoryWebApiModule.forRoot(FakeApi),
        AppRoutingModule,
        ReactiveFormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
