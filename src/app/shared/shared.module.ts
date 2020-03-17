import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavComponent } from "./nav/nav.component";
import { FormsModule } from "@angular/forms";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [NavComponent, FooterComponent],
  imports: [CommonModule, FormsModule],
  exports: [FooterComponent, NavComponent]
})
export class SharedModule { }
