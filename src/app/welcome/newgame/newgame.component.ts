import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newgame',
  templateUrl: './newgame.component.html',
  styleUrls: ['./newgame.component.scss']
})
export class NewgameComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<NewgameComponent>, private router: Router) { }

  ngOnInit(): void {
  }


  game() {

  }

  login() {
    
  }
}
