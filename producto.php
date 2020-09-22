<!DOCTYPE html>
<html lang="es">
  <head>
    <title>Tienda en línea - Puros Don Manuel</title>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, width=device-width">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:site" content="@donmanuel">
    <meta property="og:title" content="Tienda en línea">
    <meta property="og:description" content="EL viejo saber de hace nueve décadas para ser disfrutado por los nuevos conocedores fumadores.">
    <meta property="og:image" content="https://i.ibb.co/f4Ky6Gr/WEB-03.jpg">
    <link rel="stylesheet" href="assets/fonts/stylesheet.css">
    <link rel="stylesheet" type="text/css" href="assets/css/owl/owl.carousel.css">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="shortcut icon" href="img/favicon.png">
    <script src="assets/js/jquery.js"></script>
    <script src="assets/js/owl.carousel.min.js"></script>
  </head>
  <body class="pageTienda">
    <header class="main-header" id="mainHeader">
      <div class="logo-container"><a href="./"><img src="img/logo.png" alt="Logotipo Puros Don Manuel"></a></div>
      <nav class="main-nav" itemscope itemtype="http://schema.org/SiteNavigationElement" role="navigation" id="main-nav">
        <div class="toggle-menu menu" id="toggle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 320"><title></title><g id="toggle-menu" class="toggle-menu" data-name="toggle-menu"><g id="Capa_1-2" data-name="Capa 1"><path d="M501.33,0H10.67a10.67,10.67,0,1,0,0,21.33H501.33a10.67,10.67,0,1,0,0-21.33Z"/><path d="M501.33,149.33H10.67a10.67,10.67,0,1,0,0,21.34H501.33a10.67,10.67,0,1,0,0-21.34Z"/><path d="M501.33,298.67H10.67a10.67,10.67,0,1,0,0,21.33H501.33a10.67,10.67,0,1,0,0-21.33Z"/></g></g></svg></div>
        <ul class="main-menu" id="main-menu">
          <li class="main-menu__item" itemprop="url"><a class="main-menu__link" href="empresa.html" itemprop="name">Nuestra empresa</a></li>
          <li class="main-menu__item selected" itemprop="url"><a class="main-menu__link selected" href="tienda.html" itemprop="name">Tienda en línea</a></li>
          <li class="main-menu__item" itemprop="url"><a class="main-menu__link" href="contacto.html" itemprop="name">Contacto</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <section class="section slider" id="slider">
        <div class="slider-title overflow-hidde">
          <h1>Bienvenidos a puros DON MANUEL</h1>
          <P>Más de 20 Marcas con la mejor calidad</P>
        </div>
        <div class="slider__container"><img class="active" src="img/slider/WEB-01.jpg" alt="slider 1" data-index="0"><img src="img/slider/WEB-02.jpg" alt="slider 2" data-index="1"><img src="img/slider/WEB-03.jpg" alt="slider 3" data-index="2"><img src="img/slider/WEB-04.jpg" alt="slider 4" data-index="3">
        </div>
      </section>
      <section class="section producto">
        <h2 class="section__title">Don Manuel Loren Opsum</h2>
        <div class="producto__container">
          <div class="producto__images"><img class="producto__img" src="img/productos/producto7.png" alt="producto Img">
            <div class="producto__gallery"><img class="arrow-left" src="img/Siguiente.2.png"><img class="arrow-right" src="img/Siguiente.png">
              <div class="owl-carousel store-slider gallery"><img class="img-slider" src="img/productos/producto5.png"><img class="img-slider" src="img/productos/producto6.png"><img class="img-slider" src="img/productos/producto9.png"><img class="img-slider" src="img/productos/producto10.png"></div>
            </div>
          </div>
          <div class="producto__text">
            <h3>Don Manuel Loren Opsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div class="count-container">
              <div class="count"><img class="btn-cout-down" src="img/Siguiente.2.png">
                <form class="count-form" id="count">
                  <input name="count" value="1" readonly>
                </form><img class="btn-cout-up" src="img/Siguiente.png">
              </div><a class="car-container" href="#">
                <div class="car-img-c"><img src="img/Carrito.png" alt="carrito"></div><span>Añadir al Carrito</span></a>
            </div>
            <div class="total">Total:<span id="total">1000</span></div>
          </div>
        </div>
      </section>
      <section class="section contact">
        <div class="contact__form">
          <h2 class="section__title">Contacto</h2>
          <form action="#" method="POST" autocomplete="off">
            <div class="input-group">
              <input name="name" id="name" placeholder="Nombre" required pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$">
            </div>
            <div class="input-group">
              <input name="email" type="email" id="email" placeholder="Correo" required pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})">
            </div>
            <div class="input-group">
              <input type="text" name="phone" id="phone" placeholder="Teléfono" required pattern="^[0-9]{10}">
            </div>
            <div class="input-group textarea">
              <textarea name="message" placeholder="Mensaje:" required data-pattern="^.{1,255}$"></textarea>
            </div>
            <footer class="contact__footer">
              <button class="btn btn-send" type="submit">Enviar</button>
              <div class="msg" id="msh_form"><img src="img/tail-spin.svg" alt="spin"></div>
            </footer>
          </form>
        </div>
        <div class="contact__map"><img src="img/mapa.jpg" alt="Mapa Puros Don Manuel"></div>
      </section>
    </main>
    <footer class="main-footer" id="main-footer"><a href="#" target="_blank"><img src="img/Facebook.png" alt="logo Facebook"></a><img src="img/logo.png" alt="logo Puros Don Manuel"><a href="#" target="_blank"><img src="img/WhatsApp.png" alt="logo Whats App"></a></footer>
    <div class="loading" id="loading"><img src="img/loading-page1.svg" alt="Loading Page"></div>
    <script src="js/scripts-min.js"></script>
  </body>
</html>