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

/* Pop up */
$('#pop-up-left').hide();

$('#act-pop-up-left').click(function(){
    $('#pop-up-left').toggle(5).css({display: 'flex'})
});

$('#btn-cancelar').click(function () {
    $('.pop-up-categories').hide()
})

$('#showCategoriyForm').click(function () {
    $('.pop-up-categories').toggle(5)
})

/* Click on toggle*/

document.getElementById('toggle-menu').addEventListener('click', 
() => {
	menu.classList.add('active');	
});




/* Dark mode */

const btnSwitch = document.querySelector('#switch');

    btnSwitch.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        btnSwitch.classList.toggle('active');


        /* Guardando el modo en localstorage*/
        if(document.body.classList.contains('dark')){
            window.localStorage.setItem('modo-oscuro', 'true');
        } else {
            window.localStorage.setItem('modo-oscuro', 'false');
        }
    });

    /* Obteniendo el modo actual */ 
    if(window.localStorage.getItem('modo-oscuro') === 'true'){
        document.body.classList.add('dark');
        btnSwitch.classList.add('active');
    } else{
        document.body.classList.remove('dark');
        btnSwitch.classList.remove('active');
    }
    




/* Class active 

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
});  */




/* Btn More */

$('.minus').click(function(){
    $(this).hide()
    $(this.previousElementSibling).show()
    $(this.parentNode.parentNode.nextElementSibling).hide('swing')
});

$('.plus').click(function(){
    $(this).hide()
    $(this.nextElementSibling).show()
    $(this.parentNode.parentNode.nextElementSibling).show('swing')
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






