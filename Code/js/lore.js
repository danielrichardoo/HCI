$(document).ready(function () {
    flag=0;
    $('#lore').click(function (e){
        if(flag===0){
            flag = 1;
            $('.lore-icons img').css('opacity',0.5)
            $(this).css('opacity',0.5);
            $('h1').text('Lore of Alveria Kingdom');
            $('.heading-text').css({"color":"#DC143C"});
            $('.heading-text').css('opacity', 0.8);
            $('.lore-body').css('background-image', 'url("../assets/background/background.jpg")');
            $('p').html('After a hundred year the mist finally clear to reveal the woods of the demoncraft the land of demons and magic and at the same time a greedy king was born, it was said that he would bring doom upon the kingdom. Beyond the woods of the demoncraft lies true power of the demonlord. The king who rules with an iron hand and acquisitive mind longs for the demonlord power. He summons adventures to claim the land hoping to obtain the true power lies within but the journey across the land is long and dangerous and only the most dare crossed successfully. <br>Those who make it arrived at core of the woods of this magical land from there the adventurer shall have the absolute power. But the king will not wait for the power , he fear that the adventure will take what is his. And thus the king venture with his most trustworthy adventure and adventures who seeks power ventures across the unknown.');
            $('p').css("font-size", 26);
            $('p').css("margin-right", 20);
            $('.body-text').css('opacity', 0.95);
        }else if(flag===1){
            flag = 0;
            $('.lore-icons img').css('opacity',0.5)
            $(this).css('opacity',0.5);
            $('h1').text('Lore');
            $('.heading-text').css({"color":"#DC143C"});
            $('.heading-text').css('opacity', 0.8);
            $('.lore-body').css('background-image', 'url("../assets/background/background-before.jpg")');
            $('p').html('Back in the old world the kingdom thrive everyone was happy of their life. <br>It was said that the mist that cover the woods is to protect all people from the demonlord.');
            $('p').css("font-size", 26);
            $('p').css("margin-right", 20);
            $('.body-text').css('opacity', 0.95);
        }
        
    });
});