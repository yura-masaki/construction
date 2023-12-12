$(function () {
    const cursor = $("#js__cursor");
    const mouse = $("#js__mouse");
    $(document).on("mousemove", function (e) {
        const x = e.clientX;
        const y = e.clientY;
        cursor.css({
            "opacity": "1",
            "transform": "translate(" + x + "px," + y + "px)",
        });
        setTimeout(function () {
            mouse.css({
                "opacity": "1",
                "transform": "translate(" + x + "px," + y + "px)",
            });
        }, 150);
        $("a").on({
            "mouseenter": function () {
                mouse.addClass("js__hover");
                cursor.addClass("js__hover");
            },
            "mouseleave": function () {
                mouse.removeClass("js__hover");
                cursor.removeClass("js__hover");
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("p-header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 800) { // スクロール位置が一定値を超えたら
            header.classList.add("visible");
        } else {
            header.classList.remove("visible");
        }
    });
});