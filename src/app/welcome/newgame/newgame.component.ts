import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable, ReplaySubject, map } from 'rxjs';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/models/game';
import { Player, defaultPlayer } from 'src/app/user/models/player';
import { PlayerService } from 'src/app/user/services/player.service';
import { DeckService } from 'src/app/deck/services/deck.service';
import { HandService } from 'src/app/hand/services/hand.service';
import { Hand } from 'src/app/hand/models/hand';

@Component({
  selector: 'app-newgame',
  templateUrl: './newgame.component.html',
  styleUrls: ['./newgame.component.scss'],
})
export class NewgameComponent implements OnInit {
  newGame: Game;
  dealerName: string = 'dealer';
  visitorplayerName: string = 'test_player';
  gamePlayers:Player[] = []
  private player_new_hand_id = 0;
  private dealer_new_hand_id = 0;
  dealer$: Observable<Player>;
  vPlayer$: Observable<Player>;
  dealer: Player;
  dealerHand: Hand;
  player: Player;
  playerHand: Hand;

  constructor(
    private dialogRef: MatDialogRef<NewgameComponent>,
    private playerService: PlayerService,
    private deckService: DeckService,
    private gameService: GameService,
    private handService: HandService,
    private router: Router
  ) {

  }

  ngOnInit(): void {

    // this.dealer = defaultPlayer;
    // this.player = defaultPlayer;

  }
  login() {

  }

  // GET PLAYERs
  // CREATE GAME
  // CREATE HANDS FOR EACH PLAYER
  game() {
    this.dealerName = 'dealer';
    this.visitorplayerName = 'test_player';

    this.getPlayers().then((players) => {
      console.log('Final Count of players retrieved: ', players.length);
      console.log('Players: ', players);
      players.forEach((i) => {
        if (i.name === 'dealer') {
          this.dealer = i;
        } else {
          this.player = i;
        }
      });
      this.gamePlayers = players;
      // GET GAME PROMISE

      this.gameServe(this.player, this.dealer).then((returnedGame: Game) => {
        console.log('ReturnedGame to NEW GAME COMP: ', returnedGame);
        this.newGame = returnedGame;



          this.createHandServe(this.player.id, returnedGame.id)
            .then((handReturned: Hand) => {
              console.log('Hand Returned to NEW GAME COMPONENT: ', handReturned);
              this.player.hand = handReturned;
            }).then(() => {
                    this.createHandServe(this.dealer.id, returnedGame.id).then(
                      (handReturned2: Hand) => {
                        console.log(
                          'Hand Returned to NEW GAME COMPONENT: ',
                          handReturned2
                        );
                        this.dealer.hand = handReturned2;
                        this.closeDialog();
                        this.dialogRef.close();
                        this.router.navigate([
                          '/casino',
                          {
                            gameId: this.newGame.id,
                            player: this.player.name,
                            player_hand_id: this.player.hand.id,
                            dealer: this.dealer.name,
                            dealer_hand_id: this.dealer.hand.id,
                          },
                        ]);



                      }
                    );
            }).finally(() => {
              //  this.router.navigate([
              //           '/casino',
              //           {
              //             gameId: this.newGame.id,
              //             player: this.player.name,
              //             player_hand_id: this.player.hand.id,
              //             dealer: this.dealer.name,
              //             dealer_hand_id: this.dealer.hand.id,
              //           },
              //         ]);
              //         this.dialogRef.close();
            })
            .catch((err) =>
              console.log(`ERRor while getting player hand: `, err)
            );


      });
    });

}

//  PLAYER METHODS
  getPlayers():Promise<Player[]>{
    let emptyPromise: Promise<Player[]> = new Promise<Player[]>((resolve, reject) => {
      this.playerServe(this.visitorplayerName).then((player: Player) => {
        console.log('Player returned to the NEW GAME Component', player);
        this.gamePlayers.push(player);
      }).then(() => {
        this.playerServe(this.dealerName).then((dealer: Player) => {
          console.log('2nd Player returned to the NEW GAME Component', dealer);
          this.gamePlayers.push(dealer);
          let gamePlyrs = this.gamePlayers;
          resolve(gamePlyrs)
        })
      });
    });
  return emptyPromise
}


  playerServe(username: string): Promise<Player>{
    let promisePlayer: Promise<Player> = new Promise<Player>((resolve, reject) => {
      if (username === undefined) {
        reject('the username was undefined');
      } else {
        this.playerService.getPlayerByName(username).subscribe((result: Player) => {
          resolve(result);
        });
      }

    });

return promisePlayer
}

// =======================================================================
// =======================================================================
  // =======================================================================
//  GAME METHOS

  gameServe(player:Player, dealer: Player): Promise<Game> {

    let gamePromise = new Promise<Game>((resolve, reject) => {
      // if (this.player && this.dealer && this.player.name != undefined && this.dealer.name != undefined) {


        this.gameService.create(player, dealer).subscribe((newGame: Game) => {
          this.newGame = newGame;
          resolve(newGame);
        });
      // }
      // else {
      //   reject('Your players are not defined properyly');
      // }

    });
    return gamePromise;


  }





// HAND FUNCTIONS








  createHandServe(playerid: number, game_id: number): Promise<Hand> {
    let handPromise: Promise<Hand> = new Promise<Hand>((resolve, reject) => {
      if (playerid === undefined) {
        reject('Player Id was undefined');
      }
      this.handService.createHand(playerid, game_id).subscribe((handReturned: Hand) => {
        resolve(handReturned);
      });

    });

    return handPromise;
}








//   game() {
//     console.log('ATTEMPTING TO START NEW GAME');
//   this.visitorplayerName = 'test_player';
//   this.dealerName = 'dealer';
//     if (true) {
//       this.getVisitorGamePlayers().then((contestants: Player[]) => {
//         console.log(contestants);
//         this.createGame(this.player, this.dealer)
//           .then((newGame) => {
//             if (newGame) {
//               console.log('FROM GAME METHOD IN newgame Component: ', newGame);

//               // CREATE HAND FOR PLAYER

//               this.createNewHand(this.player.id)
//                 .then((res) => {
//                   console.log(
//                     'Player Hand Returned to newGamecomponnent.createNewHand: ',
//                     res
//                   );
//                   this.player_new_hand_id = res.id;
//                 })
//                 .then(() => {
//                   this.createNewHand(this.dealer.id)
//                     .then((res) => {
//                       console.log(
//                         'Dealer Hand Returned to newGamecomponnent.createNewHand: ',
//                         res
//                       );
//                       this.dealer_new_hand_id = res.id;
//                       return res.id;
//                     })
//                     .then(() => {
//                       this.router.navigate([
//                         '/casino',
//                         {
//                           gameId: newGame.id,
//                           player: this.player.name,
//                           player_hand_id: this.player_new_hand_id,
//                           dealer: this.dealer.name,
//                           dealer_hand_id: this.dealer_new_hand_id,
//                         },
//                       ]);
//                       this.dialogRef.close();
//                       return;
//                     })
//                     .catch((err) =>
//                       console.log(
//                         'Error occured getting new hand for player: ',
//                         err
//                       )
//                     );
//                 })
//                 .catch((err) =>
//                   console.log(
//                     'Error occured getting new hand for player: ',
//                     err
//                   )
//                 );
//             }
//           })
//           .catch((err) => console.log('Error occured getting new Game: ', err));
//       });
//       console.log('START');
//       // CREATE GAME
//     }
//   }
//   createGame(player: Player, dealer: Player): Promise<Game> {
//     let newGamePromise = new Promise<Game>((resolve, reject) => {
//       this.gameService.create(player, dealer).subscribe((game) => {
//         resolve(game);
//       });
//     });
//     return newGamePromise;
//   }

//   login() { }

//   getPlayer(username: string): Promise<Player[]> {
//     let playerPromise: Promise<Player[]> = new Promise<Player[]>(
//       (resolve, reject) => {
//         if (!username || username != undefined)
//           reject('username is not defined');
//         this.playerService
//           .getPlayerByName(username)
//           .subscribe((player: Player) => {
//             let retarray: Player[] = [];
//             retarray.push(player);
//             resolve(retarray);
//           });
//         return playerPromise;
//       }
//     );

//     return playerPromise;
//   }
//   getVisitorGamePlayers(): Promise<Player[]> {
//     // GET PLAYER
//       this.visitorplayerName = 'test_player';
//       this.dealerName = 'dealer';
//     let getGamers: Promise<Player[]> = new Promise((resolve, reject) => {
//       console.log('GETTING GUEST PLAYER NAMED:', this.visitorplayerName);
//       if (this.visitorplayerName) {

//         this.getPlayer(this.visitorplayerName)
//           .then((p: Player[]) => {
//             this.player = p[0];
//             console.log(
//               'RETURNED GUEST PLAYER NEW GAME COMPONENT',
//               this.player
//             );

//             return p;
//           })
//           .then((players: Player[]) => {
//               this.visitorplayerName = 'test_player';
//               this.dealerName = 'dealer';
//             // GET DEALER
//             if (this.dealerName) {
//               console.log('GETTING GUEST DEALER NAMED:', this.dealerName);
//               this.getPlayer(this.dealerName).then((dealer: Player[]) => {
//                 this.dealer = dealer[0];
//                 console.log(
//                   'RETURNED GUEST DEALER NEW GAME COMPONENT',
//                   this.dealer
//                 );
//                 players.push(this.dealer);
//                 return players;
//               }).then((contestants: Player[]) => {
//                 resolve(contestants);
//                 return contestants;
//               });


//             }







//           });
//       }
//     });
//    return getGamers;
// }
//   createNewHand(player_id: number): Promise<Hand> {
//     const promiseNewHand = new Promise<Hand>((resolve, reject) => {
//       if (!player_id || player_id === undefined)
//         reject('player_id is not defined');
//       this.handService.createHand(player_id).subscribe((newHand: Hand) => {
//         resolve(newHand);
//       });
//     });

//     return promiseNewHand;
//   }


  closeDialog() {
    this.dialogRef.close();
  }
}
