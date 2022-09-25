 class Session{

    gameStats = {
        player1_name : "",
        player2_name : "",
        player1_score : 0,
        player2_score : 0,
        draw : 0,
        player1_turn : true,
        game_over : false,
        boxes : [null,null,null,null,null,null,null,null,null]
    }
    
    constructor(username,gameId,socket){
        this.gameStats.player1_name = username;
        this.gameId = gameId;
        this.player1_socket  = socket;
    }

    joinGame(username,socket){
        this.gameStats.player2_name = username;
        this.player2_socket  = socket;
    }

    SendToBoth(event,data){
        this.player1_socket.emit(event,data)
        this.player2_socket.emit(event,data)
    }

    checkWinner(){
        const winConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]        //These are the possible win conditions
          ]
        const boxes = this.gameStats.boxes;
        for (let i = 0; i < winConditions.length; i++) {    //loops through the winconditions
            const [x, y, z] = winConditions[i];
            if (boxes[x] && boxes[x] === boxes[y] && boxes[y] === boxes[z]) {     //checks if the condition satisfies with same value
              return boxes[x];
            }
          }
    }
 }
 module.exports = Session