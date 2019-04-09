import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Deck } from './deck.interface';

@Injectable({
  providedIn: 'root'
})
export class DeckService {

  constructor(
    private http: HttpClient
  ) { }

  getNewDeck() {
    return this.http.get('https://deckofcardsapi.com/api/deck/new/shuffle/');
  }

  getHand(deck: Deck, cardsQuantity : number) {
    return this.http.get(`https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=${cardsQuantity}`);
  }
}
