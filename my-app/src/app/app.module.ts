import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './views/main/main.component';

import {ButtonModule} from 'primeng/button';
import { RulesComponent } from './views/rules/rules.component';
import { CrapjackComponent } from './views/crapjack/crapjack.component';
import { DeckComponent } from './views/crapjack/deck/deck.component';
import { PlayerComponent } from './views/crapjack/player/player.component';
import { HttpClientModule } from '@angular/common/http';
import { CardToPointsPipe } from './pipes/card-to-points';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    RulesComponent,
    CrapjackComponent,
    DeckComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule
  ],
  providers: [
    CardToPointsPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
