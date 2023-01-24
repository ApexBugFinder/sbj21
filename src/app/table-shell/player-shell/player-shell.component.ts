import { Component, Input, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/user/services/player.service';

@Component({
  selector: 'app-player-shell',
  templateUrl: './player-shell.component.html',
  styleUrls: ['./player-shell.component.scss']
})
export class PlayerShellComponent implements OnInit {
  @Input() username: String|null='';
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
  }

}
