import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {AppComponent} from './app.component'
import {HeaderComponent} from './components/dumb/header.component'
import {DashboardComponent} from './components/crypto-list/dashboard.component'
import {ApiService} from './api.service'
import {HttpClientModule} from '@angular/common/http'
import {CryptoDetailComponent} from './components/crypto-list/crypto-detail.component'
import {FormatDatePipe} from './format-date.pipe'
import {FormsModule} from '@angular/forms'
import {FilterPipe} from './filter.pipe'
import {WalletDashBoardComponent} from './components/wallet/wallet-dash-board.component'
import {SellingPageComponent} from './components/wallet/selling-page.component'
import {BuyingPageComponent} from './components/wallet/buying-page.component'

//Create the routes and import them in the module

const appRoutes = []

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    CryptoDetailComponent,
    FormatDatePipe,
    FilterPipe,
    WalletDashBoardComponent,
    SellingPageComponent,
    BuyingPageComponent,
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
