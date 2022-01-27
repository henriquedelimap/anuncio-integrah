window.onload = ()=> {
    var tl = new TimelineMax({repeat: 10, repeatDelay: 3});

    tl.to("#title-container", 0.2, {ease: Power1.easeIn, opacity:1, scale:1, top:166} );
    tl.to("#top-section", 0.5, {ease: Power1.easeOut, top:-264}, .7);
    tl.to("#title-container", 0.5, {ease: Power1.easeOut, scale: 1, top:285}, "-=.5");
    tl.to("#bottom-section", 0.5, {ease: Power1.easeOut, top:475}, "-=.5");

    tl.to("#photo1", 2, {ease: Linear.easeNone, left: -300}, "-=.5")
    tl.to("#photo1", .4, {opacity: 0}, "-=.4")


    tl.to("#photo2", .4, {opacity: 1}, "-=.4")
    tl.to("#photo2", 2, {ease: Linear.easeNone, left: 0}, "-=.5")

    tl.to("#photo3", .4, {opacity: 1}, "-=.4")
    tl.to("#photo3", 2, {ease: Linear.easeNone, left: -300}, "-=.5")

    tl.to("#photo4", .4, {opacity: 1}, "-=.4")

    tl.to("#top-section", 0.5, {ease: Power1.easeOut, top:-500}, "-=0");

    tl.to("#last-screen", 0.3, {ease: Power1.easeIn, opacity: 1}, "-=.3");

    tl.to("#upto-txt", 0.3, {ease: Power1.easeIn, opacity: 1});
    tl.to("#off-txt", 0.3, {ease: Power1.easeIn, opacity: 1});
    tl.to("#percent-txt", 0.3, {ease: Power1.easeIn, opacity: 1, scale: 1});
}