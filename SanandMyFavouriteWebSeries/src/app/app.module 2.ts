import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentCardComponent } from './content-card/content-card.component';

import { SeriesTypePipe } from './series-type.pipe';
import { BorderPipePipe } from './border-pipe.pipe';
import { HighlightImportantDataDirective } from './directives/highlight-important-data.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    ContentCardComponent,
    SeriesTypePipe,
    BorderPipePipe,
    HighlightImportantDataDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
