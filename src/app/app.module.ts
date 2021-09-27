import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { AttributesSearchComponent } from './components/attributes-search/attributes-search.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuDropdownComponent } from './components/menu-dropdown/menu-dropdown.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { MyCarComponent } from './components/my-car/my-car.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPassswordComponent } from './components/forgot-passsword/forgot-passsword.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardProductComponent,
    ProductSearchComponent,
    SearchResultComponent,
    AttributesSearchComponent,
    ProductListComponent,
    MenuComponent,
    MenuDropdownComponent,
    UserMenuComponent,
    FooterComponent,
    ProductDetailComponent,
    MyCarComponent,
    LoginComponent,
    ForgotPassswordComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
