!(function (a, d, h) {
    function i(a) {
      d.head.appendChild(a);
    }
    function j(a) {
      return q.call(a.attributes);
    }
    function k(a, b, c, e) {
      return (
        (e = (e = b ? d.getElementById(b) : e) || d.createElement(a)),
        b && (e.id = b),
        c && (e.onload = c),
        e
      );
    }
    function l(a, b) {
      return q.call((b || d).querySelectorAll(a));
    }
    function b(a) {
      l("source", a).forEach(b),
        j(a).forEach(function (b, c) {
          (c = m.exec(b.name)) && (a[c[1]] = b.value);
        }),
        "load" in a && a.load();
    }
    function e(a) {
      g(function (b) {
        (b = l(a || "[type=deferjs]")),
          (function a(c, d) {
            (c = b.shift()) &&
              (c.parentNode.removeChild(c),
              ((d = k(c.nodeName)).text = c.text),
              j(c).forEach(function (a) {
                "type" != a.name && (d[a.name] = a.value);
              }),
              d.src && !d.hasAttribute("async")
                ? ((d.onload = d.onerror = a), i(d))
                : (i(d), a()));
          })();
      });
    }
    var g,
      m = /^data-(.+)/,
      o = /p/.test(d.readyState),
      p = [],
      q = p.slice;
    ((g = function (a, b) {
      o ? h(a, b) : p.push(a, b);
    }).all = e),
      (g.js = function (a, b, c, d) {
        g(function (c) {
          ((c = k("SCRIPT", b, d)).src = a), i(c);
        }, c);
      }),
      (g.css = function (a, b, c, d) {
        g(function (c) {
          ((c = k("LINK", b, d)).rel = "stylesheet"), (c.href = a), i(c);
        }, c);
      }),
      (g.dom = function (d, e, f, h, j, k) {
        function i(a) {
          (j && !1 === j(a)) || (b(a), f && (a.className += " " + f));
        }
        var g,
        m = /^data-(.+)/,
        o = /p/.test(d.readyState),
        p = [],
        q = p.slice;
      ((g = function (a, b) {
        o ? h(a, b) : p.push(a, b);
      }).all = e),
        (g.js = function (a, b, c, d) {
          g(function (c) {
            ((c = k("SCRIPT", b, d)).src = a), i(c);
          }, c);
        }),
        (g.css = function (a, b, c, d) {
          g(function (c) {
            ((c = k("LINK", b, d)).rel = "stylesheet"), (c.href = a), i(c);
          }, c);
        }),
        (g.dom = function (d, e, f, h, j, k) {
            function i(a) {
              (j && !1 === j(a)) || (b(a), f && (a.className += " " + f));
            }
            g(function (b) {
              (b =
                "IntersectionObserver" in a &&
                new a.IntersectionObserver(function (a) {
                  a.forEach(function (a, c) {
                    a.isIntersecting &&
                      (c = a.target) &&
                      (h && h(c), b.unobserve(c), i(c));
                  });
                }, k)),
                l(d || "[data-src]").forEach(function (a) {
                  a.hasAttribute("lazied") ||
                    (a.setAttribute("lazied", ""), b ? b.observe(a) : i(a));
                });
            }, e);
          }),
          (g.reveal = b),
          (a.Defer = g),
          a.addEventListener("onpageshow" in a ? "pageshow" : "load", function () {
            for (e(); p[0]; o = 1) h(p.shift(), p.shift());
          });
      })(this, document, setTimeout),
        "IntersectionObserver" in window ||
          document.write(
            '<script src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver"></script>'
          );
          const jo = {};
!(function () {
  function d(a, b) {
    return -1 < (" " + a.className + " ").indexOf(" " + b + " ");
  }
  function f(a, b) {
    var c;
    d(a, b) ||
      ("" != (c = a.className) && (b = " " + b), (a.className = c + b));
  }
  function j(a, b) {
    a.className = a.className
      .replace(new H("(?:^|\\s)" + b + "(?!\\S)"), "")
      .trim();
  }
  function i(a, b) {
    (d(a, b) ? j : f)(a, b);
  }
  function h(a, b) {
    f(a, "d-block"),
      D(function () {
        f(a, b);
      }, 100);
  }
  function k(a, b, c) {
    j(a, b),
      D(function () {
        j(a, "d-block");
      }, c || 300);
  }
  function l(a, b) {
    for (var c = 0; c < a.length; c++) if (a[c] === b) return !0;
    return !1;
  }
  function m() {
    return (F.random() + 1).toString(36).substr(7);
  }
  function o(a, b) {
    return !!(a = new H("[?&]" + a + "=([^&#=]*)")).test(b) && b.match(a)[1];
  }
  function n(a, b, c) {
    var d = new E();
    d.setTime(d.getTime() + 1e3 * (60 * (60 * (24 * (c || 14))))),
      (d = "expires=" + d.toUTCString()),
      (C.cookie = a + "=" + b + "; " + d + "; path=/");
  }
  function q(a) {
    if (((a = C.cookie.match(new H("(^| )" + a + "=([^;]+)"))), a)) return a[2];
  }
  function p(a, b, c, d) {
    (a = G(a)), (b = G(b)), (c = G(c)), (d = G(d));
    var e,
      f,
      g = F.ceil(a / c);
    1 > b ? (b = 1) : g < b && (b = g),
      (f =
        g <= d
          ? ((e = 1), g)
          : ((a = F.floor(d / 2)),
            (c = F.ceil(d / 2) - 1),
            b <= a
              ? ((e = 1), d)
              : g <= b + c
              ? ((e = g - d + 1), g)
              : ((e = b - a), b + c)));
    for (
      var h = (b - 1) * c, d = F.min(h + c - 1, a - 1), i = [], j = 0;
      j < f + 1 - e;
      j++
    )
    i.push(j);
  return (
    (i = i.map(function (a) {
      return e + a;
    })),
    {
      totalItems: a,
      currentPage: b,
      pageSize: c,
      totalPages: g,
      startPage: e,
      endPage: f,
      startIndex: h,
      endIndex: d,
      pages: i,
    }
  );
}
function s() {
  ((ca && ca.checked) || (aa && aa.checked) ? j : f)(ba, "header-animate");
}
function t(a, b) {
  function c(c) {
    a.contains(c.target) || (b(), d());
  }
  var d = function () {
    C.removeEventListener("click", c);
  };
  C.addEventListener("click", c);
}
function u(a) {
  a != ka.href && (f(ia, "loader"), (ka.href = a), (ja.src = a)),
    d(ia, "d-none") &&
      (j(ia, "d-none"),
      (a = la.value.match(/<script.*?src='(.*?)'/)[1]),
      Defer.js(a, "comment-js", 500, function () {
        BLOG_CMT_createIframe("https://www.blogger.com/rpc_relay.html");
      }));
}
    aa &&
    aa.addEventListener("change", function () {
      s(),
        this.checked
          ? (h(g, "show"),
            t(g, function () {
              (aa.checked = !1), s(), k(g, "show");
            }))
          : k(g, "show");
    }),
  fa &&
    fa.addEventListener("click", function (a) {
      a.preventDefault(),
        i(ga, "dark-mode"),
        N.setItem("theme", d(ga, "dark-mode") ? "dark" : "light");
    }),

    c.addEventListener(
        "scroll",
        function () {
          (1 <= this.pageYOffset ? f : j)(ba, "shadow-sm"),
            (1e3 <= this.pageYOffset ? j : f)(ea, "d-none");
        },
        !1
      ),
      ja &&
        ja.addEventListener("load", function () {
          j(ia, "loader");
        }),
      ha &&
        ha.addEventListener("click", function (a) {
          a.preventDefault(),
            u(this.href),
            "add-comment" != ia.parentElement.id &&
              C.getElementById("add-comment").appendChild(ia);
        });
    for (var ta = 0; ta < U.length; ++ta)
      U[ta].addEventListener("click", function (a) {
        a.preventDefault(),
          (a = this.getAttribute("data-comment-id")),
          u(this.href),
          ia.parentElement.id != "c" + a &&
            C.getElementById("c" + a).appendChild(ia);
      });
    var ua = function (a) {
        var b, c, e, f, g, j, k;
        "IMG" == a.tagName &&
          (0 < (k = a.getAttribute("data-src")).indexOf("bp.blogspot")
            ? ((b = a.offsetWidth.toFixed(0)),
              (c = a.parentElement.offsetWidth.toFixed(0)),
              (e = a.parentElement.parentElement.offsetWidth.toFixed(0)),
              (f = a.offsetHeight.toFixed(0)),
              (g = k.split("/")),
              (j = ""),
              (j = d(a.parentElement, "ratio")
                ? "w" + b + "-h" + f + "-c"
                : 10 > b
                ? 10 > c
                  ? "s" + e
                  : "s" + c
                : "s" + b),
              (k = k.replace(g[g.length - 2], j)),
              a.setAttribute("data-src", k))
            : k.match(/(img.youtube|i.ytimg)/) &&
              ((k = k.substr(0, k.lastIndexOf("/")) + "/mqdefault.jpg"),
              a.setAttribute("data-src", k)));
      },
      L = function () {
        4 === this.readyState &&
          (200 !== this.status || "" == this.response
            ? v()
            : e(this.responseText.trim()));
      };
    qa && (qa !== ra || sa == "undefined")
      ? D(function () {
          var a = new K();
          (a.onreadystatechange = L),
            a.open("get", "https://source.jettheme.com/app?src=" + qa, !0),
            a.send(null);
        }, 8e3)
      : (qa && sa == "true") || v();
    if (
      ((jo.loadCustomPosts = function (a) {
        var b = m(),
          d = a.getAttribute("data-label"),
          e = a.getAttribute("data-title"),
          f = a.getAttribute("data-items"),
          g = a.getAttribute("data-no-item"),
          k = a.getAttribute("data-func"),
          l = a.getAttribute("data-callback"),
          h = g ? G(f) + 1 : f,
          i = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          n = d || a.innerHTML,
          o = n.split(","),
          d = "",
          d =
            1 < o.length
              ? n
                ? "-/" + w(o[F.floor(F.random() * o.length)]) + "/?"
                : "?"
              : n && n != "false"
              ? "-/" + w(n.trim()) + "/?"
              : "?";
        Defer.js(
          S +
            "feeds/posts/summary/" +
            d +
            "alt=json&callback=jo." +
            "custom_posts" +
            "_" +
            "key" +
            "_" +
            b +
            "&max-results=" +
            h
        ),
          (jo["custom_posts_key_" + b] = function (d) {
            var m = G(d.feed.openSearch$totalResults.$t),
              n = d.feed.category;
            if (0 < m) {
              for (
                var o = { title: e, posts: [], categories: n },
                  p = d.feed.entry,
                  q = 0,
                  r = 0;
                r < p.length;
                ++r
              ) {
                var s,
                  t,
                  u = p[r],
                  v = u.link[u.link.length - 1].href;
                if (q == f) break;
                v != g &&
                  (q++,
                  ((s = {}).grup_id = b),
                  (s.url = v),
                  (s.title = u.title.$t),
                  (s.summary = u.summary.$t.trim()),
                  (s.img = u.media$thumbnail && u.media$thumbnail.url),
                  (s.author = u.author[0].name.$t),
                  (s.comment = u.thr$total && u.thr$total.$t),
                  (s.label = u.category),
                  (t = u.updated.$t),
                  (u = (v = new E(t)).getDate()),
                  (t = i[v.getMonth()]),
                  (v = v.getFullYear()),
                  (s.date = u + " " + t + ", " + v),
                  o.posts.push(s));
              }
              (d = c[k]),
                typeof d === "function" &&
                  0 < o.posts.length &&
                  ((a.innerHTML = d(o).trim()),
                  j(a, "visually-hidden"),
                  Defer.dom(".lazy-" + b, 100, "loaded", ua),
                  !l || (typeof (d = c[l]) === "function" && d()));
            }
          });
      }),
      (function (b) {
        c.addEventListener(
          "scroll",
          function () {
            var c,
              e = this.pageYOffset;
            e < b && d(ba, "header-hidden")
              ? (c = D(function () {
                  j(ba, "header-hidden");
                }, 500))
              : b < e &&
                d(ba, "header-animate") &&
                (a(c), f(ba, "header-hidden")),
              (b = e);
          },
          !1
        );
      })(0),
      (function (a, b) {
        "function" == typeof define && define.amd
          ? define(["exports"], b)
          : "undefined" == typeof exports
          ? b((a.dragscroll = {}))
          : b(exports);
      })(this, function (a) {
        function b(a, b) {
          for (a = 0; a < f.length; )
            (b = (b = f[a++]).container || b).removeEventListener(
              "mousedown",
              b.md,
              0
            ),
              c.removeEventListener("mouseup", b.mu, 0),
              c.removeEventListener("mousemove", b.mm, 0);
          for (
            f = [].slice.call(C.getElementsByClassName("drag-scroll")), a = 0;
            a < f.length;
  
          )
            !(function (a, b, f, g, h, i) {
              (i = a.container || a).addEventListener(
                "mousedown",
                (i.md = function (c) {
                  (a.hasAttribute("nochilddrag") &&
                    C.elementFromPoint(c.pageX, c.pageY) != i) ||
                    ((g = 1),
                    (b = c.clientX),
                    (f = c.clientY),
                    c.preventDefault());
                }),
                0
              ),
                c.addEventListener(
                  "mouseup",
                  (i.mu = function () {
                    g = 0;
                  }),
                  0
                ),
                c.addEventListener(
                  "mousemove",
                  (i.mm = function (c) {
                    g &&
                      (((h = a.scroller || a).scrollLeft -= d =
                        -b + (b = c.clientX)),
                      (h.scrollTop -= e = -f + (f = c.clientY)),
                      a == C.body &&
                        (((h = C._docElement).scrollLeft -= d),
                        (h.scrollTop -= e)));
                  }),
                  0
                );
            })(f[a++]);
        }
        var d,
          e,
          f = [];
        "complete" == C.readyState ? b() : c.addEventListener("load", b, 0),
          (a.reset = b);
      }),
      0 < ma.length)
    ) {
      for (ta = 0; ta < ma.length; ++ta) {
        var va = ma[ta],
          wa = va.innerHTML,
          xa = C.createElement("textarea");
        xa.innerHTML = wa.replace(
          /src="(.*?)"/g,
          'src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" loading="lazy" lazyload="true" data-src="$1"'
        );
        var ya = C.createElement("div");
        (ya.innerHTML = xa.value),
          0 == ta && f(ya, "feature-image mb-3"),
          va.parentElement.insertBefore(ya, va);
      }
      Defer.dom('[lazyload="true"]', 100, "loaded", ua, null, {
        rootMargin: "200%",
      });
    }
    if (
      (oa &&
        (C.title = C.title.replace(
          " \u2013 ",
          " \u2013 Page " + oa + " \u2013 "
        )),
      Defer.dom(".lazyload", 100, "loaded", ua),
      Defer.dom(
        "#post-pager",
        100,
        null,
        function (a) {
          for (var b = a.querySelectorAll("a"), c = 0; c < b.length; ++c) {
            var d = b[c],
              e = d.href,
              g = C.createElement("span");
            f(g, "d-block fw-bold pt-2"), d.appendChild(g), y(e, g);
          }
        },
        null,
        { rootMargin: "200%" }
      ),
      Defer.dom(
        "#pagination",
        100,
        null,
        function (a) {
          function b(a, b, j) {
            var k = C.createElement("li"),
              i = C.createElement("span");
            return (
              f(i, "btn btn-sm rounded-pill"),
              (i.innerHTML = j || a),
              i.setAttribute("data-page", a),
              a == b
                ? f(i, "jt-btn-primary")
                : (f(i, "jt-btn-light hover-btn-primary"),
                  i.addEventListener("click", function (a) {
                    var b;
                    a.preventDefault(),
                      1 == (q = i.getAttribute("data-page"))
                        ? ((b = e
                            ? S +
                              "search" +
                              h +
                              "?max-results=" +
                              d +
                              "&page=" +
                              q
                            : S),
                          (c.location.href = b))
                        : ((b = (q - 1) * d),
                          Defer.js(
                            S +
                              "feeds/posts/summary/" +
                              g +
                              "?start-index=" +
                              b +
                              "&alt=json&callback=jo." +
                              "pagination" +
                              "_date&max-results=1"
                          ));
                  })),
              k.appendChild(i),
              k
            );
          }
          var d, e, g, h, i, k, m, q;
          a.getAttribute("data-pagination") == "false"
            ? j(a, "visually-hidden")
            : ((d = a.getAttribute("data-posts")),
              (e = a.getAttribute("data-label")),
              (g = (e = w(e)) ? "-/" + e + "/" : ""),
              (h = e ? "/label/" + e : ""),
              Defer.js(
                S +
                  "feeds/posts/summary/" +
                  g +
                  "?alt=json&callback=jo." +
                  "pagination" +
                  "_" +
                  "key" +
                  "&max-results=1"
              ),
              (i = o("max-results", T)),
              (k = o("page", T)),
              (m = i || d),
              (q = k || 1),
              (jo.pagination_key = function (c) {
                var e = c.feed,
                  g = G(e.openSearch$totalResults.$t);
                if (d < g) {
                  var c = p(g, q, m, 5),
                    h = C.createElement("ul"),
                    e = c.totalPages;
                  1 != c.currentPage &&
                    ((g = b(
                      c.currentPage - 1,
                      "",
                      '<svg aria-hidden="true" height="1em" style="vertical-align:-.1em" width="1em"><use xlink:href="#i-arrow-l"/></svg>'
                    )),
                    h.appendChild(g)),
                    l(c.pages, 1) ||
                      ((k = b(1, c.currentPage, "1 . .")), h.appendChild(k));
                  for (var k, n = 0; n < c.pages.length; n++)
                    (k = b(c.pages[n], c.currentPage)), h.appendChild(k);
                  l(c.pages, e) ||
                    ((k = b(e, c.currentPage, ". . " + e)), h.appendChild(k)),
                    c.currentPage != e &&
                      ((e = b(
                        c.currentPage + 1,
                        "",
                        '<svg aria-hidden="true" height="1em" style="vertical-align:-.1em" width="1em"><use xlink:href="#i-arrow-r"/></svg>'
                      )),
                      h.appendChild(e)),
                    (a.innerHTML = ""),
                    f(h, "pagination mb-0"),
                    a.appendChild(h),
                    j(a, "visually-hidden");
                }
              }),
              (jo.pagination_date = function (a) {
                (a = a.feed.entry[0]),
                  (a = (a =
                    a.published.$t.substr(0, 19) +
                    a.published.$t.substr(23, 29)).replace("+", "%2B")),
                  (a =
                    S +
                    "search" +
                    h +
                    "?updated-max=" +
                    a +
                    "&max-results=" +
                    m +
                    "&page=" +
                    q),
                  (c.location.href = a);
              }));
        },
        null,
        { rootMargin: "200%" }
      ),
      Defer.dom(".custom-posts", 100, null, jo.loadCustomPosts, null, {
        rootMargin: "200%",
      }),
      null !== na)
    ) {
      if (null !== O) {
        for (
          var za = na.querySelectorAll(X), I = O.childNodes, ta = 0;
          ta < I.length;
          ta++
        ) {
          var Aa = I.length + 1,
            Ba = F.round(za.length / Aa) * (ta + 1);
          za[Ba] &&
            za[Ba].parentElement.insertBefore(I[ta].cloneNode(!0), za[Ba]);
        }
        O.outerHTML = "";
      }
      if (Y && "false" != Y && null !== na.firstChild) {
        for (
          var Ca = na.querySelectorAll("h2,h3,h4,h5,h6"),
            J = C.createElement("div"),
            Da = na.querySelector(Z),
            Ea = [],
            ta = 0;
          ta < Ca.length;
          ta++
        ) {
          var Fa = Ca[ta],
            Ga = Fa.textContent.replace(/[^\w!?]/g, "_").replace(/__/g, "_"),
            Ha = G(Fa.tagName.replace("H", ""));
          (Fa.id = Ga), Ea.push({ level: Ha, title: Fa.textContent, id: Ga });
        }
        null === Da && (Da = na.firstChild),
          0 < Ea.length &&
            ((J.innerHTML = toc_temp(Ea).trim()),
            Da && Da.parentElement.insertBefore(J, Da));
      }
    }
    C.addEventListener("mousemove", B),
      C.addEventListener("touchstart", B),
      C.addEventListener("scroll", B);
  })();
