let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
        const minPerSlide = 4
        let next = el.nextElementSibling
        for (var i = 1; i < minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items[0]
            }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling
        }
    })
    (function($) {
        $.fn.countdown = function(options, callback) {
            //custom 'this' selector
            thisEl = $(this);

            // array of custom settings
            var settings = {
                'date': null,
                'format': null
            };

            // append the settings array to options
            if (options) {
                $.extend(settings, options);
            }

            //create the countdown processing function
            function countdown_proc() {
                var eventDate = Date.parse(settings.date) / 1000;
                var currentDate = Math.floor($.now() / 1000);

                if (eventDate <= currentDate) {
                    callback.call(this);
                    clearInterval(interval);
                }

                var seconds = eventDate - currentDate;

                var days = Math.floor(seconds / (60 * 60 * 24));
                //calculate the number of days

                seconds -= days * 60 * 60 * 24;
                //update the seconds variable with number of days removed

                var hours = Math.floor(seconds / (60 * 60));
                seconds -= hours * 60 * 60;
                //update the seconds variable with number of hours removed

                var minutes = Math.floor(seconds / 60);
                seconds -= minutes * 60;
                //update the seconds variable with number of minutes removed

                //conditional statements
                if (days == 1) {
                    thisEl.find(".timeRefDays").text("day");
                } else {
                    thisEl.find(".timeRefDays").text("days");
                }
                if (hours == 1) {
                    thisEl.find(".timeRefHours").text("hour");
                } else {
                    thisEl.find(".timeRefHours").text("hours");
                }
                if (minutes == 1) {
                    thisEl.find(".timeRefMinutes").text("minute");
                } else {
                    thisEl.find(".timeRefMinutes").text("minutes");
                }
                if (seconds == 1) {
                    thisEl.find(".timeRefSeconds").text("second");
                } else {
                    thisEl.find(".timeRefSeconds").text("seconds");
                }

                //logic for the two_digits ON setting
                if (settings.format == "on") {
                    days = (String(days).length >= 2) ? days : "0" + days;
                    hours = (String(hours).length >= 2) ? hours : "0" + hours;
                    minutes = (String(minutes).length >= 2) ? minutes : "0" + minutes;
                    seconds = (String(seconds).length >= 2) ? seconds : "0" + seconds;
                }

                //update the countdown's html values.
                thisEl.find(".days").text(days);
                thisEl.find(".hours").text(hours);
                thisEl.find(".minutes").text(minutes);
                thisEl.find(".seconds").text(seconds);
            }

            //run the function
            countdown_proc();

            //loop the function
            interval = setInterval(countdown_proc, 1000);
        };

    })(jQuery);



//Provide the plugin settings
$("#countdown").countdown({
        //The countdown end date
        date: "1 January 2022 12:00:00",

        // on (03:07:52) | off (3:7:52) - two_digits set to ON maintains layout consistency
        format: "on"
    },

    function() {
        // This will run when the countdown ends
        alert("We're Out Now");
    });


function setHeights() {
    var windowHeight = $(window).height();
    $('.slide').height(windowHeight);
}

setHeights();

$(window).resize(function() {
    setHeights();
});

function addSticky() {
    $('.slide').each(function() {
        var scrollerAnchor = $(this).offset().top;
        if (window.scrollY >= scrollerAnchor) {
            $(this).addClass('fix-it');
        } else {
            $(this).removeClass('fix-it');
        }
    });
}

$(window).scroll(function() {
    addSticky();
});
/*--------------------
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                Vars
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                --------------------*/
const $menu = document.querySelector('.menu')
const $items = document.querySelectorAll('.menu--item')
const $images = document.querySelectorAll('.menu--item img')
let menuWidth = $menu.clientWidth
let itemWidth = $items[0].clientWidth
let wrapWidth = $items.length * itemWidth

let scrollSpeed = 0
let oldScrollY = 0
let scrollY = 0
let y = 0


/*--------------------
Lerp
--------------------*/
const lerp = (v0, v1, t) => {
    return v0 * (1 - t) + v1 * t
}


/*--------------------
Dispose
--------------------*/
const dispose = (scroll) => {
    gsap.set($items, {
        x: (i) => {
            return i * itemWidth + scroll
        },
        modifiers: {
            x: (x, target) => {
                const s = gsap.utils.wrap(-itemWidth, wrapWidth - itemWidth, parseInt(x))
                return `${s}px`
            }
        }
    })
}
dispose(0)


/*--------------------
Wheel
--------------------*/
const handleMouseWheel = (e) => {
    scrollY -= e.deltaY * 0.9
}


/*--------------------
Touch
--------------------*/
let touchStart = 0
let touchX = 0
let isDragging = false
const handleTouchStart = (e) => {
    touchStart = e.clientX || e.touches[0].clientX
    isDragging = true
    $menu.classList.add('is-dragging')
}
const handleTouchMove = (e) => {
    if (!isDragging) return
    touchX = e.clientX || e.touches[0].clientX
    scrollY += (touchX - touchStart) * 2.5
    touchStart = touchX
}
const handleTouchEnd = () => {
    isDragging = false
    $menu.classList.remove('is-dragging')
}


/*--------------------
Listeners
--------------------*/
$menu.addEventListener('mousewheel', handleMouseWheel)

$menu.addEventListener('touchstart', handleTouchStart)
$menu.addEventListener('touchmove', handleTouchMove)
$menu.addEventListener('touchend', handleTouchEnd)

$menu.addEventListener('mousedown', handleTouchStart)
$menu.addEventListener('mousemove', handleTouchMove)
$menu.addEventListener('mouseleave', handleTouchEnd)
$menu.addEventListener('mouseup', handleTouchEnd)

$menu.addEventListener('selectstart', () => {
    return false
})


/*--------------------
Resize
--------------------*/
window.addEventListener('resize', () => {
    menuWidth = $menu.clientWidth
    itemWidth = $items[0].clientWidth
    wrapWidth = $items.length * itemWidth
})


/*--------------------
Render
--------------------*/
const render = () => {
    requestAnimationFrame(render)
    y = lerp(y, scrollY, .1)
    dispose(y)

    scrollSpeed = y - oldScrollY
    oldScrollY = y

    gsap.to($items, {
        skewX: -scrollSpeed * .2,
        rotate: scrollSpeed * .01,
        scale: 1 - Math.min(100, Math.abs(scrollSpeed)) * 0.003
    })
}
render()