$(document).ready(init);

var currentSection = null;

function init()
{
	currentSection = $('#saludo');
	$('#btn-saludo').click(onClickBtnSaludo);
	$('#btn-nombres').click(onClickBtnNombre);

	TweenMax.from($('#saludo h1'), 1, {marginBottom:'0px', ease:Elastic.easeOut});
}

function onClickBtnSaludo() {
	gotoSection('nombres');
}

function onClickBtnNombre() {
	gotoSection('juego');
}

function gotoSection(_identificadorDeSeccion)
{
	currentSection.removeClass('visible');
	var nextSection = $('#'+_identificadorDeSeccion);

	nextSection.addClass('visible');

	TweenMax.from(nextSection, 1.5, {scale:0.2, opacity:0, ease:Elastic.easeOut});
	currentSection = nextSection;
}

// tic tac toe
//*************************

/*$(function () {

    var   = [], 
        SIZE = 3,
        EMPTY = "&nbsp;",
        score,
        moves,
        turn = "X",
        win = function (score) {
        for (var i = 0; i < wins.length; i += 1) {
            if ((wins[i] & score) === wins[i]) {
                return true;
            }
        }
        return false;
    },
    set = function () {
        
        if ($(this).html() !== EMPTY) {
            return;
        }
        $(this).html(turn);
        console.log($(this));
        moves += 1;
        score[turn] += $(this)[0].indicator;
        console.log(score[turn]);
        if (win(score[turn])) {
            alert(turn + " wins!");
            startNewGame();
        } else if (moves === SIZE * SIZE) {
            alert("Cat\u2019s game!");
            startNewGame();
        } else {
            turn = turn === "X" ? "O" : "X";
        }
    },

    play = function () {
        var board = $("<table border=1 cellspacing=0>"), indicator = 1;
        for (var i = 0; i < SIZE; i += 1) {
            var row = $("<tr>");
            board.append(row);
            for (var j = 0; j < SIZE; j += 1) {
                var cell = $("<td height=50 width=50 align=center valign=center></td>");
                cell[0].indicator = indicator;
                cell.click(set);
                row.append(cell);
                squares.push(cell);
                indicator += indicator;
            }
        }

        $(document.getElementById("tictactoe") || document.body).append(board);
        startNewGame();
    };

    play();
});

*/
$(function() {
  
  var player = 1;
  var table = $('table');
  var messages = $('.messages');
  var turn = $('.turn');
  displayNextPlayer(turn, player);
  
  $('td').click(function() {
    td = $(this);
    var state = getState(td);
    if(!state) {
      var pattern = definePatternForCurrentPlayer(player);
      changeState(td, pattern);
      if(checkIfPlayerWon(table, pattern)) {
        messages.html('Player '+player+' has won.');
        turn.html('');
      } else {
        player = setNextPlayer(player);
        displayNextPlayer(turn, player);
      }
    } else {
      messages.html('This box is already checked.');
    }
  });
  
  $('.reset').click(function() {
    player = 1;
    messages.html('');
    reset(table);
    displayNextPlayer(turn, player);
  });
  
});

function getState(td) {
  if(td.hasClass('cross') || td.hasClass('circle')) {
    return 1;
  } else {
    return 0;
  }
}

function changeState(td, pattern) {
  return td.addClass(pattern);
}

function definePatternForCurrentPlayer(player) {
  if(player == 1) {
    return 'cross';
  } else {
    return 'circle';
  }
}

function setNextPlayer(player) {
  if(player == 1) {
    return player = 2;
  } else {
    return player = 1;
  }
}

function displayNextPlayer(turn, player) {
  turn.html('Player turn : '+player);
}

function checkIfPlayerWon(table, pattern) {
  var won = 0;
  if(table.find('.item1').hasClass(pattern) && table.find('.item2').hasClass(pattern) && table.find('.item3').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.item1').hasClass(pattern) && table.find('.item4').hasClass(pattern) && table.find('.item7').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.item1').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item9').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.item4').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item6').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.item7').hasClass(pattern) && table.find('.item8').hasClass(pattern) && table.find('.item9').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.item2').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item8').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.item3').hasClass(pattern) && table.find('.item6').hasClass(pattern) && table.find('.item9').hasClass(pattern)) {
    won = 1;
  } else if (table.find('.item3').hasClass(pattern) && table.find('.item5').hasClass(pattern) && table.find('.item7').hasClass(pattern)) {
    won = 1;
  }
  return won;
}

function reset(table) {
  table.find('td').each(function() {
    $(this).removeClass('circle').removeClass('cross');
  });
}
