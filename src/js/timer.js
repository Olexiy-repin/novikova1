function updater(e, r, t, o) {
    var u = new Date(2018, 1, 2),
        n = 2592e5;
    setTimeout(function c() {
        var d = new Date,
            a = n - (d - u) % n,
            l = a % 1e3,
            m = (a = Math.floor(a / 1e3)) % 60;
        m < 10 && (m = "0" + m);
        var y = (a = Math.floor(a / 60)) % 60;
        y < 10 && (y = "0" + y);
        var s = (a = Math.floor(a / 60)) % 24;
        s < 10 && (s = "0" + s);
        var i = Math.floor(a / 24);
        i < 10 && (i = "0" + i);
        e.innerHTML = i, r.innerHTML = s, t.innerHTML = y, o.innerHTML = m, setTimeout(c, l)
    }, 0)
}
window.onload = function() {
    updater(document.querySelector(".days"), document.querySelector(".hours"), document.querySelector(".minutes"), document.querySelector(".sec")),
    updater(document.querySelector(".days-02"), document.querySelector(".hours-02"), document.querySelector(".minutes-02"), document.querySelector(".sec-02"))
};

$(".popup-youtube").magnificPopup({
  disableOn:700,
  type:"iframe",
  mainClass:"mfp-fade",
  removalDelay:160,
  preloader:!1,
  fixedContentPos:!1
});
