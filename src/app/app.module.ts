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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardProductComponent,
    ProductSearchComponent,
    SearchResultComponent,
    AttributesSearchComponent,
    ProductListComponent
],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
