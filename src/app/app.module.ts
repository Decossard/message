import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoreOptions } from './more-options/more-options.component';
import { FeedComponent } from './feed/feed.component';
import { SearchComponent } from './search/search.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FullnameComponent } from './full-name/full-name.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { AppRoutingModule } from './/app-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    MoreOptions,
    FeedComponent,
    SearchComponent,
    TextEditorComponent,
    SignInComponent,
    FullnameComponent,
    ImageViewerComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
