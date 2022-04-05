$(document).ready(function($){

      //selector de tema
      $("#to-green").click(function(){
        $("#theme").attr("href","css/green.css");
      });

      $("#to-blue").click(function(){
        $("#theme").attr("href","css/blue.css");
      });

      $("#to-reed").click(function(){
        $("#theme").attr("href","css/red.css");
      });

      //Scroll arriba de la web
      $('.subir').click(function(e){
        e.preventDefault();
        $('html,body').animate({
          scrollTop: 0
        },500);
        return false;
      });

      //Login con local Storage
      $('#login, form').submit(function(){
        var form_name = $('#name').val();
        localStorage.setItem('form_name',form_name)
        var form_name = localStorage.getItem('form_name');

        if(form_name != null && form_name != undefined){
            var about_parrafo = $('#about p');
            about_parrafo.html("<br><hr><br><strong>Bienvenido, "+ form_name+'<strong>');
            about_parrafo.append("<br><a href='#' id='logout'> Cerrar sesión </a>")
            $('#login').hide();

            $("#logout").click(function(){
              localStorage.clear();
              window.location.reload();
            });
        }
      });

      //Validacion del formulario
      $("form input[name='fecha']").datepicker({
        dateFormat: 'dd/mm/yy'
      });
      $.validate({
        lang: 'es',
        errorMessagePosition: 'Top',
        ScrollToTopOnError: true
      });
    });