import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store/reducers/post';

import { AppComponent } from './app.component';

import { ListComponent } from './list/list.component';
import { GraphQLModule } from './graphql.module';
import { PostService } from './post.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    StoreModule.forRoot({reducer})
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule {}
