import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MoreOptions } from './more-options/more-options.component';
import { FeedComponent } from './feed/feed.component';
import { SearchComponent } from './search/search.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FullnameComponent } from './full-name/full-name.component';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';

const routes: Routes = [
  { 
    path: '',
    component: FeedComponent
  },

  { path: 'search',
    component: SearchComponent 
  },

  { path: 'text-editor',
    component: TextEditorComponent 
  },

  { path: 'more-options',
    component: MoreOptions 
  },

  { path: 'sign-in',
    component: SignInComponent 
  },

  { path: 'sign-up',
    component: SignUpComponent 
  },

  { path: 'full-name',
    component: FullnameComponent 
  },

  { path: 'image-viewer',
    component: ImageViewerComponent 
  }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
