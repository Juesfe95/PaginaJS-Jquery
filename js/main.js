$(document).ready(function($){

  //Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200
      });

      //POSTS
      var posts = [
        {
          title:"Titulo 1",
          date: "publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY")  ,
          content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptates delectus corrupti pariatur assumenda sit iste alias neque expedita numquam itaque nobis, vel ipsa sunt, quam nesciunt vero. Dolores, rerum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptates delectus corrupti pariatur assumenda sit iste alias neque expedita numquam itaque nobis, vel ipsa sunt, quam nesciunt vero. Dolores, rerum!"
        },
        {
          title:"Titulo 2",
          date: "publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY")  ,
          content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptates delectus corrupti pariatur assumenda sit iste alias neque expedita numquam itaque nobis, vel ipsa sunt, quam nesciunt vero. Dolores, rerum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptates delectus corrupti pariatur assumenda sit iste alias neque expedita numquam itaque nobis, vel ipsa sunt, quam nesciunt vero. Dolores, rerum!"
        },
        {
          title:"Titulo 3",
          date: "publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY")  ,
          content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptates delectus corrupti pariatur assumenda sit iste alias neque expedita numquam itaque nobis, vel ipsa sunt, quam nesciunt vero. Dolores, rerum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptates delectus corrupti pariatur assumenda sit iste alias neque expedita numquam itaque nobis, vel ipsa sunt, quam nesciunt vero. Dolores, rerum!"
        },
        {
          title:"Titulo 4",
          date: "publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY")  ,
          content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptates delectus corrupti pariatur assumenda sit iste alias neque expedita numquam itaque nobis, vel ipsa sunt, quam nesciunt vero. Dolores, rerum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptates delectus corrupti pariatur assumenda sit iste alias neque expedita numquam itaque nobis, vel ipsa sunt, quam nesciunt vero. Dolores, rerum!"
        },
        {
          title:"Titulo 5",
          date: "publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY")  ,
          content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptates delectus corrupti pariatur assumenda sit iste alias neque expedita numquam itaque nobis, vel ipsa sunt, quam nesciunt vero. Dolores, rerum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum voluptates delectus corrupti pariatur assumenda sit iste alias neque expedita numquam itaque nobis, vel ipsa sunt, quam nesciunt vero. Dolores, rerum!"
        }
      ];

      posts.forEach((item, index)=> {
        var post = `
        <article class="post">
          <h2>${item.title}</h2>
          <span class="date">${item.date}</span>
          <p>${item.content}</p>
          <a href="#" class="button-more">Leer más</a>
       </article>
        `;
        $("#posts").append(post);
      });

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
      
    });