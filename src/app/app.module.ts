import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './components/modal/modal.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { ForgotPassswordComponent } from './components/forgot-passsword/forgot-passsword.component';


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
    ForgotPassswordComponent,
    ModalComponent,
    PaginationComponent,
    RecoverPasswordComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
