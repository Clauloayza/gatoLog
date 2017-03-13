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
*/
var oneClick = 0;

$('.box').click(function() {
  var tally = oneClick ++;
  if ( tally % 2 === 0 ) {
    if ( $(this).children('.o').hasClass('active')){
      oneClick --;
    } else{
      $(this).children('.x').addClass('active');
    }
  } else {
    if ( $(this).children('.x').hasClass('active')){
      oneClick --;
    } else{
      $(this).children('.o').addClass('active');
    }
  }
  
  var xChild1 = $('.box:nth-child(1)').children('.x').hasClass('active'),
      oChild1 = $('.box:nth-child(1)').children('.o').hasClass('active'),
      xChild2 = $('.box:nth-child(2)').children('.x').hasClass('active'),
      oChild2 = $('.box:nth-child(2)').children('.o').hasClass('active'),
      xChild3 = $('.box:nth-child(3)').children('.x').hasClass('active'),
      oChild3 = $('.box:nth-child(3)').children('.o').hasClass('active'),
      xChild4 = $('.box:nth-child(4)').children('.x').hasClass('active'),
      oChild4 = $('.box:nth-child(4)').children('.o').hasClass('active'),
      xChild5 = $('.box:nth-child(5)').children('.x').hasClass('active'),
      oChild5 = $('.box:nth-child(5)').children('.o').hasClass('active'),
      xChild6 = $('.box:nth-child(6)').children('.x').hasClass('active'),
      oChild6 = $('.box:nth-child(6)').children('.o').hasClass('active'),
      xChild7 = $('.box:nth-child(7)').children('.x').hasClass('active'),
      oChild7 = $('.box:nth-child(7)').children('.o').hasClass('active'),
      xChild8 = $('.box:nth-child(8)').children('.x').hasClass('active'),
      oChild8 = $('.box:nth-child(8)').children('.o').hasClass('active'),
      xChild9 = $('.box:nth-child(9)').children('.x').hasClass('active'),
      oChild9 = $('.box:nth-child(9)').children('.o').hasClass('active');
  
  if(  xChild1 && xChild2 && xChild3 ){
    
    $('.top-hor').addClass('active');
    $('.x-wins').addClass('active');
  } else if(  oChild1 && oChild2 && oChild3 ){
    $('.top-hor').addClass('active');
    $('.o-wins').addClass('active');
  } else if(  xChild4 && xChild5 && xChild6 ){
    $('.mid-hor').addClass('active');
    $('.x-wins').addClass('active');
  } else if(  oChild4 && oChild5 && oChild6 ){
    $('.mid-hor').addClass('active');
    $('.o-wins').addClass('active');
  } else if(  xChild7 && xChild8 && xChild9 ){
    $('.bottom-hor').addClass('active');
    $('.x-wins').addClass('active');
  } else if(  oChild7 && oChild8 && oChild9 ){
    $('.mid-hor').addClass('active');
    $('.o-wins').addClass('active');
  } else if(  xChild1 && xChild4 && xChild7 ){
    $('.left-vert').addClass('active');
    $('.x-wins').addClass('active');
  } else if(  oChild1 && oChild4 && oChild7 ){
    $('.left-vert').addClass('active');
    $('.o-wins').addClass('active');
  } else if(  xChild2 && xChild5 && xChild8 ){
    $('.mid-vert').addClass('active');
    $('.x-wins').addClass('active');
  } else if(  oChild2 && oChild5 && oChild8 ){
    $('.mid-vert').addClass('active');
    $('.o-wins').addClass('active');
  } else if(  xChild3 && xChild6 && xChild9 ){
    $('.right-vert').addClass('active');
    $('.x-wins').addClass('active');
  } else if(  oChild3 && oChild6 && oChild9 ){
    $('.right-vert').addClass('active');
    $('.o-wins').addClass('active');
  } else if(  xChild1 && xChild5 && xChild9 ){
    $('.ltr-diag').addClass('active');
    $('.x-wins').addClass('active');
  } else if(  oChild1 && oChild5 && oChild9 ){
    $('.ltr-diag').addClass('active');
    $('.o-wins').addClass('active');
  } else if(  xChild3 && xChild5 && xChild7 ){
    $('.rtl-diag').addClass('active');
    $('.x-wins').addClass('active');
  } else if(  oChild3 && oChild5 && oChild7 ){
    $('.rtl-diag').addClass('active');
    $('.o-wins').addClass('active');
  }
});

$('.js-wins, .reset').on('click', function(){
  $('.js-wins').removeClass('active');
  $('.x').removeClass('active');
  $('.o').removeClass('active');
  $('.red-line').removeClass('active');
  oneClick = 0;
});