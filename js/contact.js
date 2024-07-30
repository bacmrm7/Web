$(document).ready(function(){
    
    (function($) {
        "use strict";

    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "Escribe la respuesta correcta -_-");

    // validate contactForm form
    $(function() {
        $('#form_contact').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                phone: {
                    required: true,
                    minlength: 5
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "Debes ingresar tu nombre",
                },
                email: {
                    required: "Debes colocar un correo valido",
                    minlength: "El correo tiene un formato invalido"
                },
                phone: {
                    required: "Debes ingresar tu número  de contacto",
                },
                message: {
                    required: "Escribe tu consulta o recomendación",
                    minlength: "Tu mensaje debe tener mínimo 20 caracteres"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#form_contact :input').attr('disabled', 'disabled');
                        $('#form_contact').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                            $('form#form_contact')[0].reset();
                        })
                    },
                    error: function() {
                        $('#form_contact').fadeTo( "slow", 1, function() {
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                            $('form#form_contact')[0].reset();
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})