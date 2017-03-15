$(document).ready(init);

var currentSection = null;
var currentGameID;

function init()
{
	currentSection = $('#saludo');
	$('#btn-saludo').click(onClickBtnSaludo);
	$('#btn-nombres').click(onClickBtnNombre);
    $('#btn-historial').click(onClickBtnHistorial);
	$('#btn-comentar').click(onClickBtnComentar);
	$('#lista-juegos').on('click', 'button', onClickItemJuego);

	TweenMax.from($('#saludo h1'), 1, {marginBottom:'0px', ease:Elastic.easeOut});
}

function onClickItemJuego(){
	var idGame = $(this).parent().data('idgame');
	console.log(idGame);
	gotoSection('historial-detalle');
	getComentarios(idGame);
	currentGameID = idGame;
}

function onClickBtnSaludo() {
	gotoSection('nombres');
}


function onClickBtnNombre() {
	    
    var player1 = $('#player1');
    //localStorage.setItem('x', player1.val());
    var player2 = $('#player2');
    //localStorage.setItem('o', player2.val());
    
    if(player1.val() =='' || player2.val()==''){
       $('.texto').html("<br><h4 class='text-center' style='background:rgb(0, 197, 255)'>DEBE INGRESAR SU NOMBRE!</h4>");
    }else{
        $('.texto').html("");
        gotoSection('juego');
    }
}

/*function validateMayus(_evt){
    var player1 = $('#player1');
    var player2 = $('#player2');
    
    if(player1.val() != "" && player2.val() != "" ){
        player1.val(convertirMayus(player1.val()));
        player2.val(convertirMayus(player2.val()));
    }else{
       // alert("No registrado");
    }
}*/

function onClickBtnHistorial(evt){
	evt.preventDefault();
    gotoSection('historial');
	getHistorial();
}

function getHistorial(){
	$.ajax({
		url:"http://test-ta.herokuapp.com/games"
		
	}).done(function(_data){
		console.log(_data);
		dibujarHistorial(_data);
		
	});
}

function onClickBtnComentar(){
	//alert("hola");
	enviarComentario(currentGameID, $('#name').val(), $('#content').val());
	
}

function enviarComentario(_idGame, _name, _content){
	$.ajax({
		url: 'http://test-ta.herokuapp.com/games/'+_idGame+'/comments',
		type: 'POST',
		data:{comment:{name:_name, content:_content, game_id:_idGame}}
	}).done(function(_data){
		console.log(_data);
		getComentarios(_idGame);
	});
	
}

function getSingleGame(_idGame){
	$.ajax({
		url:"http://test-ta.herokuapp.com/games/"+_idGame
	}).done(function(_data){
		console.log(_data);
	})
}

function getComentarios(_idGame){
	$.ajax({
		url:"http://test-ta.herokuapp.com/games/"+_idGame+"/comments"
	}).done(function(_data){
		console.log(_data);
		dibujarComentarios(_data);
	})
}

function dibujarHistorial(_datos){
	var lista = $('#lista-juegos');
	
	for (var i in _datos){
		console.log(_datos[i].winner_player);
		
		var html = '<li data-idgame="'+ _datos[i].id +'" class="list-group-item">'+_datos[i].winner_player+'le gano a  ' +_datos[i].loser_player + ' en '+ _datos[i].number_of_turns_to_win + ' movimientos <button class="btn-info">comentar</button></li>';
		lista.append(html);
	}
}

function dibujarComentarios(_datos){
	var lista = $('#lista-comentarios');
	
	lista.empty();
	
	for (var i in _datos){
		var html = '<li class="list-group-item">'+_datos[i].name+' dice: <p>'+_datos[i].content+'</p> </li>';
		lista.append(html);
	}
}
//MAYUSCULA
/*function convertirMayus(texto){
    
    var nombreArray = texto.split("");
    var primeraLetra = nombreArray[0];
    var mayuscula = primeraLetra.toUpperCase();
    var espacio = false;

    for(var i=1; i<nombreArray.length; i++) {

        if(espacio){
            mayuscula += nombreArray[i].toUpperCase();
            espacio = false;
        } else {
            mayuscula += nombreArray[i];
            if(nombreArray[i] == " ")
                espacio = true;
        }
    }
    
    return mayuscula;
}*/


function gotoSection(_identificadorDeSeccion)
{
	currentSection.removeClass('visible');
	var nextSection = $('#'+_identificadorDeSeccion);

	nextSection.addClass('visible');

	TweenMax.from(nextSection, 1.5, {scale:0.2, opacity:0, ease:Elastic.easeOut});
	currentSection = nextSection;
}



//TIC TAC TOE *******
//**********
var oneClick = 0;

//creando clase .active en padre box
$('.box').click(function() {
  var cuadrado = oneClick ++;
  if ( cuadrado % 2 === 0 ) {
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
 
    
    
//X:nth-child() --> especificar en el elemento posicion del hijo del padre para //x y o **************
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


//function reset
$('.js-wins, .reset').on('click', function(){
  $('.js-wins').removeClass('active');
  $('.x').removeClass('active');
  $('.o').removeClass('active');
  $('.red-line').removeClass('active');
  oneClick = 0;
});

