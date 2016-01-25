$(function(){
    var body = $("html,body"),
        inner = $("#header>.inner");
    body.css({
        'width':'100%',
        'height':'100%',
        'overflow':'hidden'
    });
    inner.addClass("inner-full");
    setHeight();

    var asideLeft = $("#asideLeft"),
		firsetItem = asideLeft.find(".aside-nav").find("li"),
		secondUl = asideLeft.find(".aside-sub-nav"),
        secondItem = asideLeft.find(".aside-sub-nav-item"),
        secondLink = secondItem.find(".aside-sub-nav-link"),
        thirdItem = secondItem.find("li");

    //动态添加arrow
    for(var i=0;i<secondItem.length;i++){
        var arrow = '<i class="arrow"></i>';
        if(secondItem.eq(i).attr("data-child")){
            secondItem.eq(i).find(".aside-sub-nav-link").append(arrow);
        }
    }
	
	//侧栏主导航点击切换
	firsetItem.on("click",function(){
		var i = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		secondUl.eq(i).show().siblings().hide();
	});

    //link点击展开
    secondLink.on("click",function(){
        if($(this).siblings("ul").is(":visible")){
            $(this).parent("li").removeClass("open");
            $(this).siblings("ul").slideUp(200);   
        }else{
            $(this).parent("li").addClass("open");
            $(this).siblings("ul").slideDown(200);  
        } 
        $(this).parent("li").addClass("active").siblings().removeClass("active");      
    });

    thirdItem.click(function(){
        thirdItem.removeClass("active");
		secondItem.removeClass("active");
		$(this).parents(".aside-sub-nav-item").addClass("active")
        $(this).addClass("active");
    }); 

    $(window).resize(function(){
        setHeight();
    });
});  

function toTop(){
	var iframe = $(window.frames["iframeContainer"].document).find("html,body");
    iframe.animate({
        scrollTop:0
    },500);
} 
//设置侧栏导航高度
function setHeight(){
    var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
    $("#asideLeft").height(clientHeight-61);
    $("#asideLeft>.sub-nav-wrapper").height(clientHeight-71);   
    $(".content").height(clientHeight-61); 
	$("#iframeContainer").height(clientHeight-61);  
}  