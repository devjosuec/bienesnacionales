let hammer = new Hammer(document.body),
    menu = document.getElementById('menu')
    aside = document.getElementById('right-aside')
    var lock = false

hammer.on('swipeleft swiperight', event => {
    let type = event.type
        
    switch(lock){
    	case true: 
    		if(lock == true && type == 'swipeleft')
    		{
	    		menu.classList.remove('active')
	    		setTimeout(function () {
					lock = false
	    		}, 2000)
    		}
    		else if (lock == true && type == 'swiperight')
    		{
	    		aside.classList.remove('active')
	    		setTimeout(function () {
					lock = false
	    		}, 2000)
    		}
	    	break
	    case false:
    		if(lock == false && type == 'swiperight')
    		{
				menu.classList.add('active')
				lock = true
    		}
    		else if (lock == false && type == 'swipeleft')
    		{
				aside.classList.add('active')
				lock = true
    		}
    		break


    }
})




/* Click on toggle*/

document.getElementById('toggle-menu').addEventListener('click', 
() => {
	menu.classList.add('active');	
});




/* Dark mode */

const btnSwitch = document.querySelector('#switch');
const message = document.getElementById('message');

    btnSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        btnSwitch.classList.toggle('active');
        message.textContent = 'Modo Claro';


        /* Guardando el modo en localstorage*/
        if(document.body.classList.contains('dark')){
            localstorage.setItem('modo-oscuro', 'true');
        } else {
            localstorage.setItem('modo-oscuro', 'false');
        }
    });

    /* Obteniendo el modo actual 
    if(localstorage.getItem('modo-oscuro') === 'true'){
        document.body.classList.add('dark');
        btnSwitch.classList.add('active');
    } else{
        document.body.classList.remove('dark');
        btnSwitch.classList.remove('active');
    }*/




/*Class active*/

$(document).ready(function(){
    $('#inicio').addClass('item-active');
    $('#init').addClass('i-active');

    $('.item').click(function(){

        $('.item').removeClass('item-active');
        $(this).addClass('item-active');
    });

    $('.i-init').click(function(){
        $('.i-init').removeClass('i-active');
        $(this).addClass('i-active');
    })
    
});




/* Btn More */

$('#plus').hide();
$('#minus').show();


$('#minus').click(function(){
    $('#minus').hide();
    $('#plus').show();
    $('#ocultar').hide("linear");
});

$('#plus').click(function(){
    $('#plus').hide();
    $('#minus').show();
    $('#ocultar').show("swing");
});




/* Btn 2 More */

$('#plus2').hide();
$('#minus2').show();


$('#minus2').click(function(){
    $('#minus2').hide();
    $('#plus2').show();
    $('#ocultar2').hide("linear");
});

$('#plus2').click(function(){
    $('#plus2').hide();
    $('#minus2').show();
    $('#ocultar2').show("swing");
});




/* Btn 3 More */

$('#plus3').hide();
$('#minus3').show();


$('#minus3').click(function(){
    $('#minus3').hide();    
    $('#plus3').show();
    $('#ocultar3').hide("linear");
});

$('#plus3').click(function(){
    $('#plus3').hide();
    $('#minus3').show();
    $('#ocultar3').show("swing");
});




/* Btn 4 More */

$('#plus4').hide();
$('#minus4').show();


$('#minus4').click(function(){
    $('#minus4').hide();    
    $('#plus4').show();
    $('#ocultar4').hide("linear");
});

$('#plus4').click(function(){
    $('#plus4').hide();
    $('#minus4').show();
    $('#ocultar4').show("swing");
});




/* Box hidde */

$('#act-ubicacion').show();
$('#act-responsables').hide();
$('#u').addClass('links-active');

$('#u').click(function(){
    $('#act-ubicacion').show("slow");
    $('#act-responsables').hide(400);
    $('#u').addClass('links-active');
    $('#r').removeClass('links-active');
});

$('#r').click(function(){
    $('#act-responsables').show("slow");
    $('#act-ubicacion').hide(400);
    $('#r').addClass('links-active');
    $('#u').removeClass('links-active');
});




/* Box 2 hidde */

$('#act-incorporacion').show();
$('#act-desincorporacion').hide();
$('#act-reasignacion').hide();
$('#i').addClass('links-active');

$('#i').click(function(){
    $('#act-incorporacion').show("slow");
    $('#act-desincorporacion').hide(400);
    $('#act-reasignacion').hide(400);
    $('#i').addClass('links-active');
    $('#d').removeClass('links-active');
    $('#rs').removeClass('links-active');
});

$('#d').click(function(){
    $('#act-incorporacion').hide("slow");
    $('#act-desincorporacion').show(400);
    $('#act-reasignacion').hide(400);
    $('#i').removeClass('links-active');
    $('#d').addClass('links-active');
    $('#rs').removeClass('links-active');
});

$('#rs').click(function(){
    $('#act-incorporacion').hide("slow");
    $('#act-desincorporacion').hide(400);
    $('#act-reasignacion').show(400);
    $('#i').removeClass('links-active');
    $('#d').removeClass('links-active');
    $('#rs').addClass('links-active');
});




/* Box 3 hidde */

$('#act-descripcion').show();
$('#act-foto').hide();
$('#ds').addClass('links-active');

$('#ds').click(function(){
    $('#act-descripcion').show("slow");
    $('#act-foto').hide(400);
    $('#ds').addClass('links-active');
    $('#f').removeClass('links-active');
});

$('#f').click(function(){
    $('#act-descripcion').hide("slow");
    $('#act-foto').show(400);
    $('#ds').removeClass('links-active');
    $('#f').addClass('links-active');
});




/* tools */

$('#cat-sige').hide();
$('#autoridades').hide();
$('#buscar').hide();

$('#tools').click(function(){
    $('#cat-sige').toggle(200);
    $('#autoridades').toggle(200);
    $('#buscar').toggle(200);
});

$('#cat-sige').click(function(){
    alert('En Desarrollo...');
});

$('#autoridades').click(function(){
    alert('En Desarrollo...');
});

$('#buscar').click(function(){
    alert('En Desarrollo...');
});