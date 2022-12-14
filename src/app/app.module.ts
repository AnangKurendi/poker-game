import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { IconsModule } from 'src/assets/icons/icons.module'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, IconsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
