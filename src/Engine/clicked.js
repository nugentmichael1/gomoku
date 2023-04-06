function clicked(i, j) {

    //console.log('clicked function');
    //console.log(i, j);

    //j and i are flipped to better align with x as horizontal and y as vertical
    let clickedCoords = new coordinates(j, i);

    if (gameInstance.getTurn() == 0) {
        alert('Click \"Start\" button next to timer to begin game.');
        return;
    }

    //check matrix for move clearance
    if (gameInstance.getCS() == 0 && gameInstance.getMatrixValue(i, j) == 0) {
        //get td to be changed
        let td = document.getElementById(i + '-' + j);

        //set td background to a circle.
        //td.style.borderRadius = '50% 50%';


        //reset hints for current player since he's already made a decision.
        //need to remove hints before 3s and 4s are removed so we know where they
        //are still.
        if (p[gameInstance.getPlayerTurn()].hintState) p[gameInstance.getPlayerTurn()].hideHints();

        //mark the cell as taken 
        td.className = 'claimed';

        //check who's turn it is, set appropriately colored "Go" piece, 
        //update player turn message status, and matrix index
        if (gameInstance.getPlayerTurn() == 1) {
            let p1ColDisp = document.getElementById('p1ColDisp');
            p1ColDisp.style.color = p[1].color;
            p1ColDisp.innerText = gameInstance.getTurn() + 1;
            document.getElementById('p2ColDisp').innerText = ' ';
            td.style.backgroundColor = p[1].color;
            td.style.color = p[0].color;//number color
            td.children[0].style.backgroundColor = p[1].color;
            td.children[0].style.opacity = "0";
            td.children[1].style.backgroundColor = p[1].color;
            td.children[1].style.opacity = "0";
            gameInstance.setMatrix(i, j, 2);
            td.appendChild(document.createTextNode(gameInstance.getTurn()));
            td.className = td.className + " p2Color";
        }
        else {
            let p2ColDisp = document.getElementById('p2ColDisp')
            p2ColDisp.style.color = p[0].color;
            p2ColDisp.innerText = gameInstance.getTurn() + 1;
            document.getElementById('p1ColDisp').innerText = ' ';
            td.style.backgroundColor = p[0].color;
            td.style.color = p[1].color;//number color
            td.children[0].style.backgroundColor = p[0].color;
            td.children[0].style.opacity = "0";
            td.children[1].style.backgroundColor = p[0].color;
            td.children[1].style.opacity = "0";
            gameInstance.setMatrix(i, j, 1);
            td.appendChild(document.createTextNode(gameInstance.getTurn()));
            td.className = td.className + " p1Color";
        }

        //returns true when a win is detected
        if (gameInstance.moveAnalyze(clickedCoords)) {
            alert(p[gameInstance.getPlayerTurn()].name + ' won!');
            recordWin();
            gameInstance.setCS(1);
            clearInterval(gameInstance.timer);
        }
        //tie check
        else if (gameInstance.getTurn() == gameInstance.board.getSize() ** 2) {
            //else if (turn++ == bSize ** 2) {
            alert('Draw!');
            clearInterval(gameInstance.timer);
        }
        gameInstance.incrementTurn();


        //sifts respective player objects' 3s and 4s arrays for any changes
        // to hints
        p[0].cleanStats(clickedCoords);
        p[1].cleanStats(clickedCoords);

        //show hints for next player if it's enabled
        if (p[1 - gameInstance.getPlayerTurn()].hintState) p[1 - gameInstance.getPlayerTurn()].showHints();

        //update player displays
        document.getElementById('p1Threes').innerText = p[0].threesCount;
        document.getElementById('p2Threes').innerText = p[1].threesCount;
        document.getElementById('p1Fours').innerText = p[0].foursCount;
        document.getElementById('p2Fours').innerText = p[1].foursCount;

        //update which player's turn it is
        gameInstance.switchPlayerTurn();//playerTurn = 1 - playerTurn;
    }
}

export default clicked;