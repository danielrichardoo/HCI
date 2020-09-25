$(document).ready(function () {
    $('#satu').css('opacity',1);
    $('#satu').click(function (e){
        $('.character-icons img').css('opacity',0.5)
        $(this).css('opacity',1);
        $('h1').text('Celine');
        $('.heading-text').css({"color":"#774691"});
        $('body').css('background-image', 'url("../assets/background/background-celine.png")');
        $('.character-isi').css('background-image','url("../assets/desain/Background_Celine.png")');
        $('p').html('A fighter that was destined to be a dancer.<br>Following her mother’s wishes,<br>she became a fighter to revenge her father’s death.');
    });
    $('#dua').click(function (e){
        $('.character-icons img').css('opacity',0.5)
        $(this).css('opacity',1);
        $('h1').text('Alex');
        $('.heading-text').css({"color":"#382b3f"});
        $('.character-isi').css('background-image','url("../assets/desain/Background_Alex.png")');
        $('body').css('background-image', 'url("../assets/background/background-alex.png")');
        $('p').html('Coming from the other world,<br>Alex aims to be stronger by fighting<br>other fighters in this world.');
    });
    $('#tiga').click(function (e){
        $('.character-icons img').css('opacity',0.5)
        $(this).css('opacity',1);
        $('h1').text('Eleonora');
        $('.heading-text').css({"color":"#edc68a"});
        $('.character-isi').css('background-image','url("../assets/desain/Background Eleonora.png")');
        $('body').css('background-image', 'url("../assets/background/background eleonora.png")');
        $('p').html('1st Princess of Alveria Kingdom. Becoming<br>the first daughter of the kingdom, Eleonora<br>leads the kingdom in search of her lost father.');
    });
    $('#empat').click(function (e){
        $('.character-icons img').css('opacity',0.5)
        $(this).css('opacity',1);
        $('h1').text('Alicia');
        $('.heading-text').css({"color":"#7d9ee2"});
        $('.character-isi').css('background-image','url("../assets/desain/Background Alicia.png")');
        $('body').css('background-image', 'url("../assets/background/background alicia.png")');
        $('p').html('Royal knight guard of Prince Raven<br>and Princess Eleonora. In search of her king,<br>she followed both prince and princess on their journey.');
    });
    $('#lima').click(function (e){
        $('.character-icons img').css('opacity',0.5)
        $(this).css('opacity',1);
        $('h1').text('Raven');
        $('.heading-text').css({"color":"#d29767"});
        $('.character-isi').css('background-image','url("../assets/desain/Background Raven.png")');
        $('body').css('background-image', 'url("../assets/background/background raven.png")');
        $('p').html('1st Prince of Alveria Kingdom.<br>He is currently exploring with his big sister<br>and his royal knight in search of his lost father.');
    });



});