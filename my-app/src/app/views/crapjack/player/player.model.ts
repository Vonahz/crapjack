
import { Card } from 'src/app/sevices/deck/card.interface';

export class Player {
    name: string;
    hand: Card[];
    isDealer: boolean;

    constructor(name: string, isDealer?: boolean) {
        this.name = name;
        this.isDealer = isDealer || false;
    }

    assignHand(hand: Card[]) {
        this.hand = hand;
    }
}