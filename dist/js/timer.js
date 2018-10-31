function updater(e, o, r, t) {
    var n = new Date(2018, 1, 2),
        u = 2592e5;
    setTimeout(function a() {
        var c = new Date,
            d = u - (c - n) % u,
            i = d % 1e3,
            l = (d = Math.floor(d / 1e3)) % 60;
        l < 10 && (l = "0" + l);
        var m = (d = Math.floor(d / 60)) % 60;
        m < 10 && (m = "0" + m);
        var s = (d = Math.floor(d / 60)) % 24;
        s < 10 && (s = "0" + s);
        var y = Math.floor(d / 24);
        y < 10 && (y = "0" + y), e.innerHTML = y, o.innerHTML = s, r.innerHTML = m, t.innerHTML = l, setTimeout(a, i)
    }, 0)
}
window.onload = function() {
    updater(document.querySelector(".days"), document.querySelector(".hours"), document.querySelector(".minutes"), document.querySelector(".sec")), updater(document.querySelector(".days-02"), document.querySelector(".hours-02"), document.querySelector(".minutes-02"), document.querySelector(".sec-02"))
}

$(".popup-youtube").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: !1,
    fixedContentPos: !1,

    iframe: {
      markup: '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe id="player" class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button
// Converts Youtube links to embeded videos in Magnific popup.
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=L4bMlL9jzbw',
          src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0&showinfo=0&enablejsapi=1'
        }
      }
    },
// Tracks Youtube video state changes (so we can close the video when it ends)
    callbacks: {
      open: function() {
        new YT.Player('player', {
          events: {
            'onStateChange': onPlayerStateChange
          }
        });
      }
    }
  });
