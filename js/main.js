function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
}
$('#accordion').on('hidden.bs.collapse', toggleChevron);
$('#accordion').on('shown.bs.collapse', toggleChevron);

/* ****** AGREGADOS ****** */

/* ****** Barra de Progreso ****** */
$(document).ready(function(){
    $('.modal-footer button').click(function(){
		var button = $(this);
		if ( button.attr("data-dismiss") != "modal" ){
			var inputs = $('form input');
			var title = $('.modal-title');
			var progress = $('.progress');
			var progressBar = $('.progress-bar');
			inputs.attr("disabled", "disabled");
			button.hide();
			progress.show();
			progressBar.animate({width : "100%"}, 100);
			progress.delay(100000000)
					.fadeOut(600);
			button.text("Cerrar")
					.removeClass("btn-primary")
					.addClass("btn-success")
    				.blur()
					.delay(1600)
					.fadeIn(function(){
						title.text("Log in is successful");
						button.attr("data-dismiss", "modal");
					});
		}
	});
	$('#myModal').on('hidden.bs.modal', function (e) {
		var inputs = $('form input');
		var title = $('.modal-title');
		var progressBar = $('.progress-bar');
		var button = $('.modal-footer button');
		inputs.removeAttr("disabled");
		title.text("Log in");
		progressBar.css({ "width" : "0%" });
		button.removeClass("btn-success")
				.addClass("btn-primary")
				.text("Ingresar")
				.removeAttr("data-dismiss");
	});
});

/* ****** Login - Olvidar Contraseña ****** */
$(document).ready(function() {
  $('#olvidado').click(function(e) {
    e.preventDefault();
    $('div#form-olvidado').toggle('500');
  });
  $('#acceso').click(function(e) {
    e.preventDefault();
    $('div#form-olvidado').toggle('500');
  });
});

/* ****** Mostrar Contraseña ****** */
function showPassword() {
	var key_attr = $('#passCliente').attr('type');
    if(key_attr != 'tel') {
        $('.checkbox').addClass('show');
        $('#passCliente').attr('type', 'tel');
    } else {
        $('.checkbox').removeClass('show');
        $('#passCliente').attr('type', 'password');
    }
}