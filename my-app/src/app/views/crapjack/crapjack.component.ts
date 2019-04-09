import { Component, OnInit } from '@angular/core';
import { Player } from './player/player.model';
import { Deck } from 'src/app/sevices/deck/deck.interface';
import { DeckService } from 'src/app/sevices/deck/deck.service';
import { first } from 'rxjs/operators';
import { Card } from 'src/app/sevices/deck/card.interface';
import { CardToPointsPipe } from 'src/app/pipes/card-to-points';

@Component({
  selector: 'app-crapjack',
  templateUrl: './crapjack.component.html',
  styleUrls: ['./crapjack.component.scss']
})
export class CrapjackComponent implements OnInit {
  dealer: Player;
  player1: Player;
  deck: Deck;
  gameHasFinished: boolean = false;
  winnerName = "No one";
  dealerPoints: number = 0;
  player1Points: number = 0;
  handWasDrawn: boolean = false;

  constructor(
    private deckService: DeckService,
    private cardToPoints: CardToPointsPipe
  ) {
    this.dealer = new Player('Dealer', true);
    this.player1 = new Player('Player 1');
  }

  ngOnInit() {
    this.getDeck();
  }

  getDeck(): void {
    this.deckService.getNewDeck()
      .pipe(
        first((res: Deck) => res.success = true)
      )
      .subscribe(
        (response: Deck) => {
          this.deck = response;
        },
        error => console.error(error)
      );
  }

  getHands(): void {
    this.deckService.getHand(this.deck, 6)
      .pipe(
        first((res: Deck) => res.success = true)
      )
      .subscribe(
        (response: Deck) => {
          this.dealer.assignHand(response.cards.slice(0, 3));
          this.player1.assignHand(response.cards.slice(3, 6));

          this.handWasDrawn = true;
        },
        error => {
          this.handWasDrawn = false;
          console.error(error)
        }
      )
  }

  onReveal(revealed: boolean) {
    if (revealed) {
      this.getWinner();
      this.gameHasFinished = true;
    }
  }

  calculateHand(hand: Card[]): number {
    let sumOfPoints = 0;
    hand.forEach(
      (card: Card) => {
        sumOfPoints += this.cardToPoints.transform(card.value);
      }
    )

    return sumOfPoints;
  }

  getWinner(): void {
    this.dealerPoints = this.calculateHand(this.dealer.hand);
    this.player1Points = this.calculateHand(this.player1.hand);


    if (this.dealerPoints > 21 && this.player1Points <= 21) {
      this.winnerName = this.player1.name;
    }

    if (this.player1Points > 21 && this.dealerPoints <= 21) {
      this.winnerName = this.dealer.name;
    }

    if (this.dealerPoints <= 21 && this.player1Points <= 21) {
      if (this.dealerPoints > this.player1Points) {
        this.winnerName = this.dealer.name;
      }
      else if (this.dealerPoints < this.player1Points) {
        this.winnerName = this.player1.name;
      }
      else {
        this.winnerName = 'Game is draw! No one';
      }
    }
  }

  refresh() {
    this.winnerName = 'No one';
    this.dealerPoints = 0;
    this.player1Points = 0;
    this.dealer.isDealer = true;
    this.gameHasFinished = false;
    this.getDeck();
    this.getHands();
  }

}
