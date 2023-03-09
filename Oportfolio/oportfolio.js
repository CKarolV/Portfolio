var counter = 0;
$(document).bind("mousewheel", function(event){
    if (event.originalEvent.wheelDelta >0) {
        counter += 10
        console.log(counter)
        $(".galleryBoxOuter").css({"transform": "perspective(1000px) rotateX(-8deg) rotateY("+counter+"deg)"});

    }else {
        counter -= 10
        console.log(counter)
        $(".galleryBoxOuter").css({"transform": "perspective(1000px) rotateX(-8deg) rotateY("+counter+"deg)"});
    }
})