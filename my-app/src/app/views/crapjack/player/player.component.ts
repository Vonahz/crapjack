import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Player } from './player.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() player: Player;
  @Output() onDealerReveal: EventEmitter<boolean> = new EventEmitter(false);
  constructor() { }

  ngOnInit() {
  }

  reveal() {
    this.player.isDealer = false;
    this.onDealerReveal.emit(true);
  }
}
