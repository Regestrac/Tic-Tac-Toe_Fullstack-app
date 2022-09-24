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
 }
 module.exports = Session