$(function(){
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    $('.aside-left').height(clientHeight-40);
    var tab = $('#tab'),
        tabItm = tab.find('li');
    tabItm.on('click',function(){
        var anchor = $(this).attr('data-anchor');
        $(this).addClass('active').siblings().removeClass('active');
        $('#'+anchor).show().siblings().hide();
    });    
});