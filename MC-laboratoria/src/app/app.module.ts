import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeMCComponent } from './home-mc/home-mc.component';
import { DetailComponent } from './detail/detail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaginatedComponent } from './paginated/paginated.component';
import { CleanButtonComponent } from './clean-button/clean-button.component';
import { HomeButtonComponent } from './home-button/home-button.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { OrderByComponent } from './order-by/order-by.component';
import { BackButtonComponent } from './back-button/back-button.component';
import { SearchButtonComponent } from './search-button/search-button.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeMCComponent },
  { path: 'detail', component: DetailComponent },
  // Puedes agregar más rutas según tus necesidades
];

@NgModule({
  declarations: [
    AppComponent,
    HomeMCComponent,
    DetailComponent,
    HeaderComponent,
    FooterComponent,
    PaginatedComponent,
    CleanButtonComponent,
    HomeButtonComponent,
    CategoryFilterComponent,
    OrderByComponent,
    BackButtonComponent,
    SearchButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
