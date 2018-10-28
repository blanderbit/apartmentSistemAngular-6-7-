import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { MatModule } from '../material-module'

@NgModule({
  declarations: [
    // NavbarComponent
  ],
  imports: [
    MatModule
  ],
  providers: [],
  bootstrap: [],
})

export class Common { }
export const CommonComponents = [ NavbarComponent]
