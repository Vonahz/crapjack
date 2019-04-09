import { Card } from './card.interface';

export interface Deck {
    deck_id: string,
    success: boolean
    shuffled: boolean
    remaining: number,
    cards?: Card[]
}