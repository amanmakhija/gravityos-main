(function (t) {
  function e(e) {
    for (
      var n, a, r = e[0], c = e[1], l = e[2], h = 0, d = [];
      h < r.length;
      h++
    )
      (a = r[h]),
        Object.prototype.hasOwnProperty.call(o, a) && o[a] && d.push(o[a][0]),
        (o[a] = 0);
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
    u && u(e);
    while (d.length) d.shift()();
    return s.push.apply(s, l || []), i();
  }
  function i() {
    for (var t, e = 0; e < s.length; e++) {
      for (var i = s[e], n = !0, r = 1; r < i.length; r++) {
        var c = i[r];
        0 !== o[c] && (n = !1);
      }
      n && (s.splice(e--, 1), (t = a((a.s = i[0]))));
    }
    return t;
  }
  var n = {},
    o = { app: 0 },
    s = [];
  function a(e) {
    if (n[e]) return n[e].exports;
    var i = (n[e] = { i: e, l: !1, exports: {} });
    return t[e].call(i.exports, i, i.exports, a), (i.l = !0), i.exports;
  }
  (a.m = t),
    (a.c = n),
    (a.d = function (t, e, i) {
      a.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
    }),
    (a.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (a.t = function (t, e) {
      if ((1 & e && (t = a(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var i = Object.create(null);
      if (
        (a.r(i),
          Object.defineProperty(i, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
      )
        for (var n in t)
          a.d(
            i,
            n,
            function (e) {
              return t[e];
            }.bind(null, n)
          );
      return i;
    }),
    (a.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
            return t["default"];
          }
          : function () {
            return t;
          };
      return a.d(e, "a", e), e;
    }),
    (a.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (a.p = "");
  var r = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = r.push.bind(r);
  (r.push = e), (r = r.slice());
  for (var l = 0; l < r.length; l++) e(r[l]);
  var u = c;
  s.push([0, "chunk-vendors"]), i();
})({
  0: function (t, e, i) {
    t.exports = i("56d7");
  },
  "034f": function (t, e, i) {
    "use strict";
    i("64a9");
  },
  "0afd": function (t, e) {
    t.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlApw1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURQAAAAEDAgEBAcHBwQIAAPzGDgMAAP7HD/7IDQABAH5+fgACAH19ffzID/7IC9+2KwICAgIAAhcJAP7HEfvFDfvHDv7KE/rIE//KEQMAAsHAxRoNAAAAAhIAAA4AAH9/f//IEOG4Lf7KERAAAPvICgEDANCpIP/JE/7ICQQAAMHCv3p6eoiIiPjBHMOWIRoaGtDGhcHCu8HEsfzGEAMBAP/LFAIEAP7FDgQCAv/HDfvFC/zGDB8SAP/GD+O6MP3JD//IFyQVAO/HNeO8M9esKfzIEfvHDA8AAH5+fPjCGgQBAO/HN/DGOhgJAN60Kf7JB8qeJMLDwAEAAwMAA/zJCX9/ffzGFBwNAMPCwteuJf/KDv/MEfzHCfzIDf/HFv3JEgcCAtqzKn19e//FH8KYI/7KFcTCv/zFEv3JC//HC3x8eSEVAP/GEhAEAAcEAPrKCS0hABMAAPrJDAQDAPnHFP/MDfjEDfjEEv/MFvvFD8bBwf/GFfvDD/jGCP3MD/nEH8LCxsLDvvzHE3+Ae+e+M//FGcLCxCoeANqxMfjGCsfAxvnDCvvEFvvCHRoaGMyhIe/DStDCmuG4MCUWANLHhsPGssPEvMTBxoqLh9bFh9CmIvrDHfrFDzIlAMqgJ8fEssfCvH5/evLGNsujKdOqJPrHGPrGHAYFB/zJE/bFB9XCldarKwsBANKrItHEkv/JFZOHVMqcI+O3P8OYHhUGAMSaG/zFG+G7LeK5LuK6McfAwu7FOBsDACQLAIx+VfrEGeG1PMehHvzDHhIHAPnGD+W9NBsbG9qvG82gE4t9VOS8LfHKPfS/GseaEOq/JwAACvXFExsQAMSZJtWoFfTHLZCDUfrCF/jEFyQTAIiJhIKDfu/DLSsYAPrGINi7UezGOOrCOf7HHtaxLfzFIpKGU93FaeK2IdOoJ++7FuO5NxkZFUIxAK2OLrmZPJuNX+m9RciqQ9SrKe/EQ8+jGvXDD3l6dY1/V7SXMea5Qol7Us6zT0IpANy3LdGmHCQdCRgPBexlNVEAAApkSURBVHja7d19WBP3AcDxM8uRuFtiMCHiBMZbFlnn3hLAJLLQbYkSxZewxhEhwTob1BAREFDEVpAqK9bObuvL1E0tzE2UtkOqU2cVO51v1Wl1Vu18WWvfXzb3vj/2+91dQt6YyeW4l+2+z1OfPj4B7uPvfpfj7nKHSHgeIgAEgAAQAAKAQQCKpoBk5uxEM2eyNQIymdlsdqsTiy2AxeIGqd07xyVWmwXPzQLA0nO8vHz37s8n3IWeNp2bjVXorUPLluUkXHr6wQueFdrMTKeTacCY0qqqvKTES3/Os4rnAAdbgMmTk8T+EgP0QQHjgLEKhQjxJ6ZcznOOxoVut9kskShDGnnAqFHYaLIEHADQxHNAAwGQySwW3gLaogCUfAE823R3nEeXYlWpNm9eEUgHkkikUh4A7nRHHwGvV8kPwK7uhubm/HnzsrPVam1omXwA9L7/yZ1b5ZEdv+7VOuVyKecBeb3kblFGaAdPtGRCgJTrgEBIaBkbAWDiRDmfAanL+Q1waXkO6NAunzVLAHADIJUaDEwB4kYgwwL6UsFmVCaTAYDBYCgaSUAwIv6ifm3GxuLiZrfbvXPnTrOzqAgIDNL/Gk0AkWhyPNlsemwYwJGmLkcT6FzjZlVhYREzALFYD7LZqkB5MaXXi8WjsaiAgZs3BwYGenq6GxpavF6DQc4EABH7ljxJdH9sLclDogJ6319PduvW8estXoOUAYBIhIgGP97/yv5XQN+MrTfWAYA/ER6GgUH01fT3948t7R+sqRk8eKIJld4rugAT/n1s4TEw82I96jgjKkBvq4f5fGCOjNLXHDmnq2QMsF/d7G4G5cfWqVpEXA9njigoODPIozXiV19Nyzhy+VhdJVOAmSpzJ9h4y1LukYxoOgTAhQ0BkG8LQJAMAbNLmAQYJY+hoHufYcA7UItgBf7t6BABbhDwN8bk5GRxDgAsZXAEMo1xfJ8ZtaM1BUgUQHIy/C85GR69m11S92051wFpaQjin8aRgBQBMGKAdWC5R4PFt9tFouDJnEzGB0DIMWLeAbYU+Hy+nxHZ9GK9fzLzBIBefW/KkkB5YnYBiCJ+wOWza0+e3Ldv30sgsF9EAGA8ARBvaCqVyphbV/eHWv4BMkGpqeAP5/LVq+F+kY1vI4DyfAQAQIUbTBCwJSmJj3MAX5Wc1Uvrpm+xgf1nXgPq+QdAUSP88U7zUhwwdHiIJwCpyZqbm1sNWrpUBgAI3wBOp7l6Od7q1QtPbdHwDgB+9bTWdXa2tnY23j13g4cjkHLu7MmXssaMmTlz/vr1/6zVDB2lI5dfzPV9oav/mjt3yly80kGfBgscpAy6joTTW6EZtTawO+2rr6+32bACDRSwBxBRAVxDxFXwuhsEsSMaPgJqbTZfVVVVWZndnqbBWAcoJoxBU1VoPIB6sdhmS7Lb7Qj4LhgPAWDbj4nA4pMnO9gEKBIHIBEXgTEOgHNAFc+hxWEBery8vLxlrABU9ygYQBzWCg7DQgCX0ImMAbIy8yXgt8RYOxUdENJUAJBLmR6BGDswHECvHxqBjQwB8ONCH+9bm7Xv6zH3xjosCgAr8A2WTphLdujEJQlTp5gQ8YTz589Pib3zevxL09LCCL0fvLxpU1bWJvjH2dMOrZOJk3yBE9eYJubId64IQMbW03cbOzsbQZ2bXS6thEEAlSIBOx7uHieTWdosFplF69WhTKxCgU2gpiDmNNgwgK2nm8gRUKl0K1DmABiGxfzvjpEvTossY2vJ5WNG42YQeNMoLCwkrlrhGCB4BQoH7JjUUGe1puh0uhS0UACMMCDaxR6sAWgqY0dJQ11uLn5OnNuAYT7ZkUMArNwGwD1OW31VtPr5Aqiq6S+N1qE/X26wch4Adp96/zZ/fvn8iNbPfLtLZ62oMJm4Pgcydo9raIy8jKi7u8uTwhOArrFRF5HD4eALoDxfLZsXXra6ra1NlssLwLMOLdxXlofuLcMPZRF/CX9YEYjrgIlhArDgPACIRKKc/10AXH5uA+AlHYqawBwIAxgMixbBK6aZBojiBni4BVDEA1AoFINcA/h6M2ItJwdeVnzBAz/wxg0Afu30B3d23flk165d34ql8vLjPV4lDpAmGF2Ase8M3Ozq6Ogojqk+rVarlHAKUPrOpY6uLperxeVyaWMJfu6WS4AJmxodq2AeuE8Ww9FdApB49AH6iGW/16QLvOGCl0loMNAHSFWhqMlkkhKbluAmBicP2vBIaBDQBshyGk2mioqK8AUGzQouoJDSE42ACrzIf/MQQeQwcGoEiFUoYiUK/oHcXoX8gCgzNnCpU/hM5gwglThDFuf3EwACQAAIAJouORMAAkAACAABIAAEgAAQAAJAAAgAASAABIAAEAACQAAIAAEwEoDor+UPQMJzAP5aOfOA7ovbQdOH7xuxdbEH3hGcBcDFN58h+gHZV6j15nYXcUtzpgHbn/kJ0Q/JvkatPX/q8EKAUsIwYMYvfkr0I7KvUmvPEwsgQMkC4FewlSu/Q/Ypan3/iQUtLAG+R/TUU4/gfZZaAOBSgjWI3wAJK4CVePjq8ygo3nXnUSJiBKSsAR4CzZkDEV+Is6E5wBJgz0NEa9asmQOLdwRIB3uTmP8A/5LPIVYh6ptRF78BHwGAiQ3Ah09fuXLlaaIvUu/Dj466UJNJp2Mc8Pzr7YunPUD0OdCnqfXrvwOAkQ3Aa+2L/3LfYqL7qPePF48Wo0Y2VqHnX98WMgLx5h8BFgHt2x6YFgyIb90hHX99cYNLxcok/mP7tm3THpwGSmwOsAZ4rb29nTaAE37uhnEAjSPABgCsQosfBEECXJLPUOu3L29oMbIzidsX8xpwgEaAigWA6gZtgKNsAFDjjfcef/fdx8l+A/oyta5tXeBAmd+Moo+tXYLRc8MMAJCwArhfMzpwRxviBv2UAZmsAJ6s1+A3foI3FVJQr4Y1gH8VojoC5F39c2Yv8LDwGxkNAP8q9MKCVehIAURMAeRyOg7uBj/el7ipkV2B2IlP8kWbxHriBpD+29dQfRwwAJhoAZTabPjzevBb+9rxysrsZXP35+vwR5+HA36fJ0aSxo8fX0Y2nlrpL3SsKly0qMhLG0AcK6BMjIznJCAwDMllZQgAzCOeUhT2TkyMAMj/JDKqj8SmZRVSKpVvHUpPj3xo+9T0QycjAUqlbtXVa8typqaDlpGlU+vgiS4ckMgpJqWyrc0x6czevXt/CfruUL8DnTntJh7TG/R6r8fhga8Hr/5Sop15GzXJ4e0CEjlHBgBtDtDA4cM9Dwd1/fbt2wMOSxSAx9PV1XX4cEnJpEk/JptEoQ0bNlxaUSGXLzIkBpDIZGZzdjZ8pnC2Wq1e6K+5ubi42Ry+/sMpIJFkmrPV+fDl/geRqSmk7evT4rdsKCpKBCCVVlZarcbc1tafh9ba2mo0Wq2VleFfAT/dWlldXZ1L3qq/mvz/eIOfU4YLC+8zkehpVkkKWNDKSjO0hDwjDf61LMoo0PTB7WHvfxA/AF9ec/Cj33BAJd8B/kYOII/6Qfb/PwC++Gb4ePboCQABwDPAfwAwa8u/1pgcVwAAAABJRU5ErkJggg==";
  },
  "1fca": function (t, e, i) {
    "use strict";
    i("ba6b");
  },
  2194: function (t, e, i) {
    t.exports = i.p + "img/wallpaperClassic.9bf0f445.jpg";
  },
  "25e7": function (t, e, i) {
    t.exports = i.p + "img/just_rain_sounds.11c35ff5.png";
  },
  "269a": function (t, e, i) {
    t.exports = i.p + "img/stopwatch.4362b789.png";
  },
  2713: function (t, e, i) {
    "use strict";
    i("e151");
  },
  2932: function (t, e, i) {
    t.exports = i.p + "img/todoist.2168e2ed.png";
  },
  "2ed9": function (t, e, i) {
    t.exports = i.p + "img/random_picker.8f66dfb3.png";
  },
  "2f10": function (t, e, i) {
    t.exports = i.p + "img/reddify_for_reddit.a9b79ef5.png";
  },
  "2fd2": function (t, e) {
    t.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlApw1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAnFBMVEWvvsSvvcSvvcOvvsOwvsSvvsKwvcSxvcSwvsWxvsWwv8YVJCsRICYQHyUXJiysu8EZKC4NHCMTIigUIyqxwMcYJy0SIScLGiCtvMKuvcO1xMoOHSSpuL8bKjG0w8kKGR+ot72qucC2xcuzwsijsrkcKzIMGyGhsLa3xs2mtbu4x84aKS8GFRwgLzWltLoJGB4HFh2ntry6yc////86G7e2AAAAAWJLR0QzN9V8XgAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAAd0SU1FB+UKCA4xNZ8p/kQAAAABb3JOVAHPoneaAAAFx0lEQVR42u2cbXfbJhSASZMlKwIpIIxFcJ2oarRlL966///jBnLsk9MZrFi6CDKek+ZDP91HXC6vAaFMJpPJZDKZTCaT+Z9ztXQAH5xPluuBpUO5jOtP1ykL2NjR9XWyAiZ70I3hp4Glo7kA89lvUhYw+XNluV06kEvZh391m7DAreHu7m7pQC6OP3EBhH7+PMS/kMD0un3zeVmBiQbHBFouhSYZXDkEMDa/CjJAJ1OeCWJ2gQohcs94UQ/wyRDzAyZwjP+NgFiVlBL5+u3JLPB1hS1T8mWsQENN7ERKOU/oR2xmBhBQSNY1sfHPLUD47AJv4z8ICC7nSpsfkLKZ/fufELiHid4KUFIFEKAMTIBz9QCXQa8CJVT4Q7fSs/aBq1MCmgDUn6MAmRbxGAEqIerPQYDOKnASCdoCWiYuQObNoVPA9gENL8BB+wCbeSA4QQ0qIDfgAl9ABcotuEAFKtDMPRv9L2YySqAE6KNS8ALbAkqAy6cAAgYOEr5dXLchwje0BUQC8a9NkO9vEM3s2WP+tU2oBjCo2RugqbAK0wMGsJ1SnM+KNdNjqMxSGCMVVKBDhJ1bmkmyUWNA6JvdKQsroFD33Ev/oBZgcn+5gP2RtX9mSgV+PyEFsCTUO60QeNirilHgVYPJIydro8lrFD6s8SiByH4WfLodNMPbBb7rOwTQL5xI4u7KTL9m0dKRujC1T9udOmdPKKkYsmjpQJ0CGIuW2612V1dmEouoBZDYyKEJXJVI9yLiFNrzK/Pt9z7yapES+R6a0rfhrsvXWhqvAGp9TUAZQSFr0UVHav4s4hQFrEWXnQk23jboCQpXiy4TwMgnQNkaq7gFEOq8bVDIyFvAdlLfZoukLEz4UwTa/eL8tADvZaAmuFgAqU23dgpI8ljAbz3b+C9vAVMrt4VjZmr/14xoXeQCrSqIdLSAWb6xHj7+ywUGFFaFZ1pR6tgF7ISBUM8arUDQ86KpAqLF1H0QaMZkLOIWwPgFEc8Sp5SRt4ChE/Y+kXtQ7kB34KYLILRV0rs+mPtWzeyYLPfcKZKPHP4obxo2j5jTQMa9a3oQ+K13C/B66QhHCJjxwDktMgpLhzhGAKPaJWAUwh0FXC4gKqcAq8XSQY7Cc5QW+0bLAecCgach8OBc6z+nIYBQlXYLGLydYOngssDSwY2gdY3HqQi4drsS6cRV7cogFfXh34HOMxInIeAah81kTiQg0DHn8evq9wRSyHd+XOMEBP7wCGAUvUDpvkMhST3cbYpaoPbcYrEJFLeACa73CNCXyAUU1p6bXLRQXcjbce8HC+9dOhbx3Q+LwvjP3ilAaf8i4hbAoiTuEUAXmy7u5bwQw96hQ0D2AvyAY6qAZtIpoNe72AW2de3eWNf8KeLQLXjn/UtX1kRc+wd2q5Uz+qH+RC7wF/GcLMVff17cXz+N+rN69sSfQP3xTh/irz8V8c9/oq8/xDP7T6H+3PuWL/HXn4eCeARirz8mulp7BKKvP0Iw4rm9Hnv9wYgnXX8wemF1yvVntykSrj9YqC8k5frTIU17nwDb4agFmpr5/nrGHsLEvPsjkOb7xa9TgES9fYXuee0XoP34SzULXELzjb4HA0nrUagGhW4rNWT/GQFCRr9+IEm7qUJm3OPMApz+TbEKcrvdUkE8zCDXX0P1BAb0MEbPYa/EggvoVZBzg10N9tCc1vAC3fwvSrxBtvD9GFaAw19mXE0P0yNAduACgO/MGYHiO7gA4CNhRkDD/5ENhXgq9ShA4e+1w7ZAgLcKAV85sy3wBC4A24kl/DhwdgY6SQD+pUJUnXkQZhL1NsCt/HIFJiDZ9wD7F1s4ARJk+0U8SALxTJvlnxACGOMCpgUCreztRhuvp4f7A7JoA12DGv68R8wuoJ9QOAHzu+2QKOcaE+quC/gEzn639vB4Vqwbtx9ZIJPJZDKZzMdm4tscy5N4/Ml//8yS5OzJZDKZTCaTySTFv1yHmcxhbQZMAAAArmVYSWZJSSoACAAAAAYAEgEDAAEAAAABAAAAGgEFAAEAAABWAAAAGwEFAAEAAABeAAAAKAEDAAEAAAACAAAAMQECABEAAABmAAAAaYcEAAEAAAB4AAAAAAAAAGAAAAABAAAAYAAAAAEAAABwYWludC5uZXQgNC4yLjExAAAEAACQBwAEAAAAMDIzMAGgAwABAAAAAQAAAAKgBAABAAAAwAAAAAOgBAABAAAAwAAAAAAAAAC/tAB6AAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTEwLTA4VDE0OjQ5OjUyKzAwOjAww8Vq3gAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0xMC0wOFQxNDo0OTo1MiswMDowMLKY0mIAAAARdEVYdGV4aWY6Q29sb3JTcGFjZQAxD5sCSQAAABN0RVh0ZXhpZjpFeGlmT2Zmc2V0ADEyMK96KgkAAAAfdEVYdGV4aWY6RXhpZlZlcnNpb24ANDgsIDUwLCA1MSwgNDgpsxDeAAAAGHRFWHRleGlmOlBpeGVsWERpbWVuc2lvbgAxOTJ5/poIAAAAGHRFWHRleGlmOlBpeGVsWURpbWVuc2lvbgAxOTLk8Xt+AAAAHnRFWHRleGlmOlNvZnR3YXJlAHBhaW50Lm5ldCA0LjIuMTH4ZXFNAAAAAElFTkSuQmCC";
  },
  "36a6": function (t, e, i) {
    t.exports = i.p + "img/progrssive_reader.c65e5470.png";
  },
  "3a2d": function (t, e, i) {
    t.exports = i.p + "img/solitaire.b56cd65e.jpg";
  },
  4678: function (t, e, i) {
    var n = {
      "./af": "2bfb",
      "./af.js": "2bfb",
      "./ar": "8e73",
      "./ar-dz": "a356",
      "./ar-dz.js": "a356",
      "./ar-kw": "423e",
      "./ar-kw.js": "423e",
      "./ar-ly": "1cfd",
      "./ar-ly.js": "1cfd",
      "./ar-ma": "0a84",
      "./ar-ma.js": "0a84",
      "./ar-sa": "8230",
      "./ar-sa.js": "8230",
      "./ar-tn": "6d83",
      "./ar-tn.js": "6d83",
      "./ar.js": "8e73",
      "./az": "485c",
      "./az.js": "485c",
      "./be": "1fc1",
      "./be.js": "1fc1",
      "./bg": "84aa",
      "./bg.js": "84aa",
      "./bm": "a7fa",
      "./bm.js": "a7fa",
      "./bn": "9043",
      "./bn-bd": "9686",
      "./bn-bd.js": "9686",
      "./bn.js": "9043",
      "./bo": "d26a",
      "./bo.js": "d26a",
      "./br": "6887",
      "./br.js": "6887",
      "./bs": "2554",
      "./bs.js": "2554",
      "./ca": "d716",
      "./ca.js": "d716",
      "./cs": "3c0d",
      "./cs.js": "3c0d",
      "./cv": "03ec",
      "./cv.js": "03ec",
      "./cy": "9797",
      "./cy.js": "9797",
      "./da": "0f14",
      "./da.js": "0f14",
      "./de": "b469",
      "./de-at": "b3eb",
      "./de-at.js": "b3eb",
      "./de-ch": "bb71",
      "./de-ch.js": "bb71",
      "./de.js": "b469",
      "./dv": "598a",
      "./dv.js": "598a",
      "./el": "8d47",
      "./el.js": "8d47",
      "./en-au": "0e6b",
      "./en-au.js": "0e6b",
      "./en-ca": "3886",
      "./en-ca.js": "3886",
      "./en-gb": "39a6",
      "./en-gb.js": "39a6",
      "./en-ie": "e1d3",
      "./en-ie.js": "e1d3",
      "./en-il": "7333",
      "./en-il.js": "7333",
      "./en-in": "ec2e",
      "./en-in.js": "ec2e",
      "./en-nz": "6f50",
      "./en-nz.js": "6f50",
      "./en-sg": "b7e9",
      "./en-sg.js": "b7e9",
      "./eo": "65db",
      "./eo.js": "65db",
      "./es": "898b",
      "./es-do": "0a3c",
      "./es-do.js": "0a3c",
      "./es-mx": "b5b7",
      "./es-mx.js": "b5b7",
      "./es-us": "55c9",
      "./es-us.js": "55c9",
      "./es.js": "898b",
      "./et": "ec18",
      "./et.js": "ec18",
      "./eu": "0ff2",
      "./eu.js": "0ff2",
      "./fa": "8df4",
      "./fa.js": "8df4",
      "./fi": "81e9",
      "./fi.js": "81e9",
      "./fil": "d69a",
      "./fil.js": "d69a",
      "./fo": "0721",
      "./fo.js": "0721",
      "./fr": "9f26",
      "./fr-ca": "d9f8",
      "./fr-ca.js": "d9f8",
      "./fr-ch": "0e49",
      "./fr-ch.js": "0e49",
      "./fr.js": "9f26",
      "./fy": "7118",
      "./fy.js": "7118",
      "./ga": "5120",
      "./ga.js": "5120",
      "./gd": "f6b4",
      "./gd.js": "f6b4",
      "./gl": "8840",
      "./gl.js": "8840",
      "./gom-deva": "aaf2",
      "./gom-deva.js": "aaf2",
      "./gom-latn": "0caa",
      "./gom-latn.js": "0caa",
      "./gu": "e0c5",
      "./gu.js": "e0c5",
      "./he": "c7aa",
      "./he.js": "c7aa",
      "./hi": "dc4d",
      "./hi.js": "dc4d",
      "./hr": "4ba9",
      "./hr.js": "4ba9",
      "./hu": "5b14",
      "./hu.js": "5b14",
      "./hy-am": "d6b6",
      "./hy-am.js": "d6b6",
      "./id": "5038",
      "./id.js": "5038",
      "./is": "0558",
      "./is.js": "0558",
      "./it": "6e98",
      "./it-ch": "6f12",
      "./it-ch.js": "6f12",
      "./it.js": "6e98",
      "./ja": "079e",
      "./ja.js": "079e",
      "./jv": "b540",
      "./jv.js": "b540",
      "./ka": "201b",
      "./ka.js": "201b",
      "./kk": "6d79",
      "./kk.js": "6d79",
      "./km": "e81d",
      "./km.js": "e81d",
      "./kn": "3e92",
      "./kn.js": "3e92",
      "./ko": "22f8",
      "./ko.js": "22f8",
      "./ku": "2421",
      "./ku.js": "2421",
      "./ky": "9609",
      "./ky.js": "9609",
      "./lb": "440c",
      "./lb.js": "440c",
      "./lo": "b29d",
      "./lo.js": "b29d",
      "./lt": "26f9",
      "./lt.js": "26f9",
      "./lv": "b97c",
      "./lv.js": "b97c",
      "./me": "293c",
      "./me.js": "293c",
      "./mi": "688b",
      "./mi.js": "688b",
      "./mk": "6909",
      "./mk.js": "6909",
      "./ml": "02fb",
      "./ml.js": "02fb",
      "./mn": "958b",
      "./mn.js": "958b",
      "./mr": "39bd",
      "./mr.js": "39bd",
      "./ms": "ebe4",
      "./ms-my": "6403",
      "./ms-my.js": "6403",
      "./ms.js": "ebe4",
      "./mt": "1b45",
      "./mt.js": "1b45",
      "./my": "8689",
      "./my.js": "8689",
      "./nb": "6ce3",
      "./nb.js": "6ce3",
      "./ne": "3a39",
      "./ne.js": "3a39",
      "./nl": "facd",
      "./nl-be": "db29",
      "./nl-be.js": "db29",
      "./nl.js": "facd",
      "./nn": "b84c",
      "./nn.js": "b84c",
      "./oc-lnc": "167b",
      "./oc-lnc.js": "167b",
      "./pa-in": "f3ff",
      "./pa-in.js": "f3ff",
      "./pl": "8d57",
      "./pl.js": "8d57",
      "./pt": "f260",
      "./pt-br": "d2d4",
      "./pt-br.js": "d2d4",
      "./pt.js": "f260",
      "./ro": "972c",
      "./ro.js": "972c",
      "./ru": "957c",
      "./ru.js": "957c",
      "./sd": "6784",
      "./sd.js": "6784",
      "./se": "ffff",
      "./se.js": "ffff",
      "./si": "eda5",
      "./si.js": "eda5",
      "./sk": "7be6",
      "./sk.js": "7be6",
      "./sl": "8155",
      "./sl.js": "8155",
      "./sq": "c8f3",
      "./sq.js": "c8f3",
      "./sr": "cf1e",
      "./sr-cyrl": "13e9",
      "./sr-cyrl.js": "13e9",
      "./sr.js": "cf1e",
      "./ss": "52bd",
      "./ss.js": "52bd",
      "./sv": "5fbd",
      "./sv.js": "5fbd",
      "./sw": "74dc",
      "./sw.js": "74dc",
      "./ta": "3de5",
      "./ta.js": "3de5",
      "./te": "5cbb",
      "./te.js": "5cbb",
      "./tet": "576c",
      "./tet.js": "576c",
      "./tg": "3b1b",
      "./tg.js": "3b1b",
      "./th": "10e8",
      "./th.js": "10e8",
      "./tk": "5aff",
      "./tk.js": "5aff",
      "./tl-ph": "0f38",
      "./tl-ph.js": "0f38",
      "./tlh": "cf75",
      "./tlh.js": "cf75",
      "./tr": "0e81",
      "./tr.js": "0e81",
      "./tzl": "cf51",
      "./tzl.js": "cf51",
      "./tzm": "c109",
      "./tzm-latn": "b53d",
      "./tzm-latn.js": "b53d",
      "./tzm.js": "c109",
      "./ug-cn": "6117",
      "./ug-cn.js": "6117",
      "./uk": "ada2",
      "./uk.js": "ada2",
      "./ur": "5294",
      "./ur.js": "5294",
      "./uz": "2e8c",
      "./uz-latn": "010e",
      "./uz-latn.js": "010e",
      "./uz.js": "2e8c",
      "./vi": "2921",
      "./vi.js": "2921",
      "./x-pseudo": "fd7e",
      "./x-pseudo.js": "fd7e",
      "./yo": "7f33",
      "./yo.js": "7f33",
      "./zh-cn": "5c3a",
      "./zh-cn.js": "5c3a",
      "./zh-hk": "49ab",
      "./zh-hk.js": "49ab",
      "./zh-mo": "3a6c",
      "./zh-mo.js": "3a6c",
      "./zh-tw": "90ea",
      "./zh-tw.js": "90ea",
    };
    function o(t) {
      var e = s(t);
      return i(e);
    }
    function s(t) {
      if (!i.o(n, t)) {
        var e = new Error("Cannot find module '" + t + "'");
        throw ((e.code = "MODULE_NOT_FOUND"), e);
      }
      return n[t];
    }
    (o.keys = function () {
      return Object.keys(n);
    }),
      (o.resolve = s),
      (t.exports = o),
      (o.id = "4678");
  },
  "4a46": function (t, e, i) {
    t.exports = i.p + "img/doom_fire.0b00282d.png";
  },
  "4b64": function (t, e, i) { },
  "4b7c": function (t, e, i) {
    t.exports = i.p + "img/tic_tac_toe.e8390791.png";
  },
  5583: function (t, e, i) {
    t.exports = i.p + "img/ip_tools.cb24ec5f.png";
  },
  "56d7": function (t, e, i) {
    "use strict";
    i.r(e);
    var n = {};
    i.r(n),
      i.d(n, "WindowResizeEvent", function () {
        return Ui;
      }),
      i.d(n, "fixPosition", function () {
        return Hi;
      }),
      i.d(n, "StyleBlack", function () {
        return ci;
      }),
      i.d(n, "StyleWhite", function () {
        return li;
      }),
      i.d(n, "StyleMetal", function () {
        return ui;
      }),
      i.d(n, "StyleFactory", function () {
        return ri;
      }),
      i.d(n, "install", function () {
        return Ni;
      }),
      i.d(n, "windows", function () {
        return hi;
      }),
      i.d(n, "WindowType", function () {
        return Yi;
      });
    i("cadf"), i("551c"), i("f751"), i("097d");
    var o = i("2b0e"),
      s = i("8c4f"),
      a = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i(
          "fullscreen",
          {
            staticStyle: { height: "100%" },
            attrs: { fullscreen: t.isFullScreen },
            on: {
              "update:fullscreen": function (e) {
                t.isFullScreen = e;
              },
            },
          },
          [
            i(
              "v-app",
              [
                i(
                  "v-content",
                  [
                    i(
                      "v-container",
                      {
                        staticClass: "desktop",
                        style: { backgroundImage: "url(" + t.desktopUrl + ")" },
                        attrs: { fluid: "" },
                      },
                      [
                        i(
                          "div",
                          {
                            staticClass: "desktop-wrapper",
                            style: t.desktopStyle,
                          },
                          [
                            t._l(t.desktopApps, function (e) {
                              return i(
                                "div",
                                {
                                  key: e.id,
                                  staticClass: "desktop-app-wrapper",
                                  on: {
                                    click: function (i) {
                                      return t.toggleApp(e.id, !0);
                                    },
                                  },
                                },
                                [
                                  i(
                                    "div",
                                    { staticClass: "desktop-app-icon" },
                                    [
                                      i(
                                        "v-icon",
                                        {
                                          attrs: {
                                            size: t.isMobile ? 26 : 40,
                                            color: e.iconcolor,
                                          },
                                        },
                                        [t._v(t._s(e.icon))]
                                      ),
                                    ],
                                    1
                                  ),
                                  i(
                                    "span",
                                    { staticClass: "desktop-app-title" },
                                    [t._v(t._s(e.title))]
                                  ),
                                ]
                              );
                            }),
                            t._l(t.installedApps, function (e) {
                              return i(
                                "div",
                                {
                                  key: e.id + 100,
                                  staticClass: "desktop-app-wrapper",
                                  on: {
                                    click: function (i) {
                                      return t.toggleAppUrl(24, e.url, !0);
                                    },
                                  },
                                },
                                [
                                  i(
                                    "div",
                                    { staticClass: "desktop-app-icon" },
                                    [
                                      i("img", {
                                        staticStyle: {
                                          width: "40px",
                                          height: "40px",
                                        },
                                        attrs: { src: e.icon },
                                      }),
                                    ]
                                  ),
                                  i(
                                    "span",
                                    { staticClass: "desktop-app-title" },
                                    [t._v(t._s(e.name))]
                                  ),
                                ]
                              );
                            }),
                          ],
                          2
                        ),
                      ]
                    ),
                  ],
                  1
                ),
                t.isMobile || t.hideSideBar
                  ? t._e()
                  : i(
                    "v-navigation-drawer",
                    {
                      staticStyle: { "z-index": "28" },
                      attrs: {
                        color: t.themePrimaryColor,
                        absolute: "",
                        right: "",
                        width: "307",
                      },
                      model: {
                        value: t.drawer,
                        callback: function (e) {
                          t.drawer = e;
                        },
                        expression: "drawer",
                      },
                    },
                    [
                      i(
                        "v-layout",
                        {
                          attrs: {
                            "justify-space-between": "",
                            column: "",
                            "fill-height": "",
                          },
                        },
                        [
                          i(
                            "v-list",
                            { attrs: { "three-line": "", dense: "" } },
                            [
                              i(
                                "v-list-item",
                                [
                                  i(
                                    "v-list-item-content",
                                    [
                                      i("v-list-item-title", [
                                        t._v(
                                          "Welcome to the alpha version of GravityOS."
                                        ),
                                      ]),
                                      i("v-list-item-subtitle", [
                                        t._v(
                                          "It is the World's First Web based Operating System."
                                        ),
                                      ]),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          i("v-spacer"),
                          i(
                            "v-list",
                            {
                              staticClass: "mb-12",
                              attrs: {
                                subheader: "",
                                "two-line": "",
                                dense: "",
                                "justify-end": "",
                              },
                            },
                            [
                              i("v-subheader", [t._v("Support project")]),
                              i(
                                "v-list-item",
                                [
                                  i(
                                    "v-list-item-content",
                                    [
                                      i("v-list-item-subtitle"),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                i(
                  "v-app-bar",
                  {
                    staticStyle: { "z-index": "29" },
                    attrs: {
                      app: "",
                      bottom: !0,
                      height: t.isMobile ? 32 : 48,
                      color: t.themePrimaryColor,
                    },
                  },
                  [
                    1 == t.currentThemeIndex ? i("v-spacer") : t._e(),
                    i(
                      "v-menu",
                      {
                        attrs: {
                          auto: "",
                          "content-class": "startcard",
                          top: "",
                          "allow-overflow": "",
                          "offset-y": "",
                        },
                        scopedSlots: t._u([
                          {
                            key: "activator",
                            fn: function (e) {
                              var n = e.on;
                              return [
                                i(
                                  "v-btn",
                                  t._g(
                                    {
                                      attrs: { icon: "" },
                                      on: { click: t.forceRerenderStartMenu },
                                    },
                                    n
                                  ),
                                  [
                                    i(
                                      "v-icon",
                                      {
                                        attrs: {
                                          color: t.currentTheme.startIconColor,
                                        },
                                      },
                                      [t._v("mdi-shield-moon-outline")]
                                    ),
                                  ],
                                  1
                                ),
                              ];
                            },
                          },
                        ]),
                      },
                      [
                        i(
                          "v-card",
                          {
                            staticClass: "startcard",
                            style: t.startMenuStyle,
                            attrs: { color: t.themePrimaryColor },
                          },
                          [
                            i(
                              "v-card-actions",
                              { staticStyle: { padding: "0em" } },
                              [
                                0 == t.currentThemeIndex
                                  ? i("StartMenu", { key: t.startMenuKey })
                                  : t._e(),
                                1 == t.currentThemeIndex
                                  ? i("StartMenuModern")
                                  : t._e(),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    i(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !t.isMobile && 0 == t.currentThemeIndex,
                            expression: "!isMobile && currentThemeIndex == 0",
                          },
                        ],
                        staticClass: "search",
                      },
                      [
                        i("v-text-field", {
                          attrs: {
                            "hide-details": "",
                            label: "Type here to search",
                            "prepend-inner-icon": "mdi-magnify",
                            dark: "",
                            "single-line": "",
                          },
                          on: {
                            keyup: t.searchInternet,
                            "click:prepend-inner": function (e) {
                              return t.toggleAppUrl(
                                2,
                                "https://www.google.com/search?igu=1&q=" +
                                t.search,
                                !0
                              );
                            },
                          },
                          model: {
                            value: t.search,
                            callback: function (e) {
                              t.search = e;
                            },
                            expression: "search",
                          },
                        }),
                      ],
                      1
                    ),
                    i(
                      "v-btn",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.isMobile || 1 == t.currentThemeIndex,
                            expression: "isMobile || currentThemeIndex == 1",
                          },
                        ],
                        staticClass: "toolbar-button",
                        attrs: {
                          width: "32",
                          height: "32",
                          tile: "",
                          icon: "",
                        },
                        on: {
                          click: function (e) {
                            return t.toggleAppUrl(
                              2,
                              "https://www.google.com/search?igu=1&q=",
                              !0
                            );
                          },
                        },
                      },
                      [i("v-icon", [t._v("mdi-magnify")])],
                      1
                    ),
                    t._l(t.apps, function (e) {
                      return i(
                        "v-tooltip",
                        {
                          key: e.id,
                          attrs: { top: "" },
                          scopedSlots: t._u(
                            [
                              {
                                key: "activator",
                                fn: function (n) {
                                  var o = n.on;
                                  return [
                                    i(
                                      "v-btn",
                                      t._g(
                                        {
                                          directives: [
                                            {
                                              name: "show",
                                              rawName: "v-show",
                                              value: e.isTaskbarVisible,
                                              expression:
                                                "app.isTaskbarVisible",
                                            },
                                          ],
                                          class: [
                                            e.isOpen
                                              ? "toolbar-button-active"
                                              : "toolbar-button",
                                          ],
                                          attrs: {
                                            width: t.isMobile ? 32 : 48,
                                            height: t.isMobile ? 32 : 48,
                                            tile: "",
                                            icon: "",
                                          },
                                          on: {
                                            click: function (i) {
                                              return t.toggleAppState(e.id);
                                            },
                                          },
                                        },
                                        o
                                      ),
                                      [
                                        i(
                                          "v-icon",
                                          {
                                            attrs: {
                                              size: t.isMobile ? 24 : 32,
                                              color: e.iconcolor,
                                            },
                                          },
                                          [t._v(t._s(e.icon))]
                                        ),
                                      ],
                                      1
                                    ),
                                  ];
                                },
                              },
                            ],
                            null,
                            !0
                          ),
                        },
                        [i("span", [t._v(t._s(e.title))])]
                      );
                    }),
                    i("v-spacer"),
                    i(
                      "v-btn",
                      {
                        staticStyle: { transform: "rotate(270deg)" },
                        attrs: { icon: "", small: "" },
                      },
                      [
                        i("v-icon", { attrs: { disabled: !t.onLine } }, [
                          t._v(
                            t._s(t.onLine ? "mdi-signal-variant" : "mdi-earth")
                          ),
                        ]),
                      ],
                      1
                    ),
                    i(
                      "v-tooltip",
                      {
                        attrs: { top: "" },
                        scopedSlots: t._u([
                          {
                            key: "activator",
                            fn: function (e) {
                              var n = e.on;
                              return [
                                i(
                                  "v-btn",
                                  t._g(
                                    {
                                      attrs: { icon: "", small: "" },
                                      on: { click: t.toggleFullScreen },
                                    },
                                    n
                                  ),
                                  [
                                    i("v-icon", [
                                      t._v(
                                        t._s(
                                          t.isFullScreen
                                            ? "mdi-fullscreen-exit"
                                            : "mdi-fullscreen"
                                        )
                                      ),
                                    ]),
                                  ],
                                  1
                                ),
                              ];
                            },
                          },
                        ]),
                      },
                      [
                        i("span", [
                          t._v(
                            t._s(
                              t.isFullScreen
                                ? "Exit full screen"
                                : "Full screen"
                            )
                          ),
                        ]),
                      ]
                    ),
                    i("DateTime", { attrs: { isMobile: t.isMobile } }),
                    t.isMobile || t.hideSideBar
                      ? t._e()
                      : i(
                        "v-btn",
                        {
                          attrs: { icon: "" },
                          on: {
                            click: function (e) {
                              e.stopPropagation(), (t.drawer = !t.drawer);
                            },
                          },
                        },
                        [i("v-icon", [t._v("mdi-message-outline")])],
                        1
                      ),
                  ],
                  2
                ),
                t._l(t.apps, function (e) {
                  return i(
                    "gravity-window-style-white",
                    { key: e.id },
                    [
                      i(
                        "gravity-window",
                        {
                          style: [
                            t.isMaximizedWindow(e)
                              ? {
                                width: "calc(100vw - (100vw - 100%))",
                                height:
                                  "calc(100vh - " + t.taskbarHeight + "px)",
                              }
                              : { width: e.width, height: e.height },
                          ],
                          attrs: {
                            icon: e.icon,
                            iconcolor: e.iconcolor,
                            taskbarHeight: t.taskbarHeight,
                            titlebarPadding: t.isMobile ? "0px" : "8px",
                            positionHint: "center",
                            title: e.title,
                            minimizeButton: !0,
                            closeButton: !0,
                            maximizeButton: e.isResizible,
                            isOpen: e.isOpen,
                            isMaximized: e.isMaximized,
                            draggable: !0,
                            resizable: e.isResizible,
                          },
                          on: {
                            closeButtonClick: function (i) {
                              return t.closeApp(e.id);
                            },
                            minimizeButtonClick: function (i) {
                              return t.toggleAppState(e.id);
                            },
                            "update:isOpen": function (i) {
                              return t.$set(e, "isOpen", i);
                            },
                            "update:is-open": function (i) {
                              return t.$set(e, "isOpen", i);
                            },
                            "update:isMaximized": function (i) {
                              return t.$set(e, "isMaximized", i);
                            },
                            "update:is-maximized": function (i) {
                              return t.$set(e, "isMaximized", i);
                            },
                          },
                        },
                        [
                          0 === e.type
                            ? [
                              e.isTaskbarVisible
                                ? i("div", { staticClass: "wrap" }, [
                                  i("iframe", {
                                    staticClass: "frame",
                                    attrs: {
                                      src:
                                        t.isMobile && e.mobileUrl
                                          ? e.mobileUrl
                                          : e.url,
                                    },
                                  }),
                                ])
                                : t._e(),
                            ]
                            : 1 === e.type
                              ? [i(e.component, { tag: "component" })]
                              : [
                                i(e.component, {
                                  tag: "component",
                                  attrs: { url: e.url },
                                }),
                              ],
                        ],
                        2
                      ),
                    ],
                    1
                  );
                }),
                i(
                  "v-overlay",
                  {
                    attrs: {
                      absolute: "",
                      opacity: t.shutdownOpacity,
                      value: t.isShutdown,
                      "z-index": 100,
                    },
                  },
                  [
                    i(
                      "div",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: t.shutdownOpacity < 1,
                            expression: "shutdownOpacity < 1",
                          },
                        ],
                      },
                      [
                        i("v-progress-circular", {
                          attrs: { indeterminate: "", color: "white" },
                        }),
                        i(
                          "span",
                          {
                            staticStyle: {
                              "margin-left": "12px",
                              "font-size": "x-large",
                            },
                          },
                          [t._v("Shutting down")]
                        ),
                      ],
                      1
                    ),
                  ]
                ),
              ],
              2
            ),
          ],
          1
        );
      },
      r = [],
      c =
        (i("6b54"),
          i("386d"),
          function () {
            var t = this,
              e = t.$createElement,
              i = t._self._c || e;
            return i("div", { staticClass: "dt", style: t.customStyle }, [
              t._v(t._s(t.displayTime)),
              i("br"),
              t._v(t._s(t.displayDate)),
            ]);
          }),
      l = [],
      u = i("c1df"),
      h = i.n(u),
      d = {
        props: { isMobile: Boolean },
        data: function () {
          return {
            time: Date.now(),
            selectedFontSize: this.isMobile ? "60%" : "80%",
          };
        },
        computed: {
          displayTime: function () {
            return h()(this.time).format("HH:mm");
          },
          displayDate: function () {
            return h()(this.time).format("L");
          },
          customStyle: function () {
            return { "--sel-font-size": this.selectedFontSize };
          },
        },
        created: function () {
          var t = this;
          setInterval(function () {
            t.time = Date.now();
          }, 1e3);
        },
      },
      p = d,
      f = (i("abe5"), i("2877")),
      m = Object(f["a"])(p, c, l, !1, null, "42a18149", null),
      v = m.exports,
      g = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "v-container",
          { staticStyle: { padding: "0", margin: "0" } },
          [
            n(
              "v-navigation-drawer",
              {
                staticStyle: { transform: "translateX(0)" },
                attrs: {
                  absolute: "",
                  permanent: "",
                  color: t.themePrimaryColor,
                  "mini-variant": t.miniDrawer,
                  "mini-variant-width": "2.4vw",
                  width: "12vw",
                },
                on: {
                  "update:miniVariant": function (e) {
                    t.miniDrawer = e;
                  },
                  "update:mini-variant": function (e) {
                    t.miniDrawer = e;
                  },
                },
              },
              [
                n(
                  "v-layout",
                  {
                    attrs: {
                      "justify-space-between": "",
                      column: "",
                      "fill-height": "",
                    },
                  },
                  [
                    n(
                      "v-list",
                      [
                        n(
                          "v-list-item",
                          {
                            staticStyle: { padding: "0" },
                            attrs: { link: "" },
                            on: {
                              click: function (e) {
                                e.stopPropagation(),
                                  (t.miniDrawer = !t.miniDrawer);
                              },
                            },
                          },
                          [
                            n(
                              "v-list-item-icon",
                              [
                                n("v-icon", { attrs: { size: "1.7vw" } }, [
                                  t._v("mdi-view-headline"),
                                ]),
                              ],
                              1
                            ),
                            n(
                              "v-list-item-title",
                              {
                                style: [
                                  t.isMobile
                                    ? {
                                      "font-weight": "bold",
                                      "font-size": ".4rem",
                                    }
                                    : { "font-weight": "bold" },
                                ],
                              },
                              [t._v("START")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    n("v-spacer"),
                    n(
                      "v-list",
                      { attrs: { dense: "", "justify-end": "" } },
                      [
                        n(
                          "v-list-item",
                          {
                            staticStyle: { padding: "0", height: "6vh" },
                            attrs: { disabled: "", link: "" },
                          },
                          [
                            n(
                              "v-list-item-icon",
                              [
                                n(
                                  "v-icon",
                                  { attrs: { size: "1.7vw", color: "grey" } },
                                  [t._v("mdi-account-circle-outline")]
                                ),
                              ],
                              1
                            ),
                            n(
                              "v-list-item-title",
                              {
                                style: [
                                  t.isMobile ? { "font-size": ".4rem" } : {},
                                ],
                              },
                              [t._v("Guest")]
                            ),
                          ],
                          1
                        ),
                        n(
                          "v-list-item",
                          {
                            staticStyle: { padding: "0", height: "6vh" },
                            attrs: { link: "" },
                            on: {
                              click: function (e) {
                                return t.toggleApp(23, !0);
                              },
                            },
                          },
                          [
                            n(
                              "v-list-item-icon",
                              [
                                n("v-icon", { attrs: { size: "1.7vw" } }, [
                                  t._v("mdi-cog-outline"),
                                ]),
                              ],
                              1
                            ),
                            n(
                              "v-list-item-title",
                              {
                                style: [
                                  t.isMobile ? { "font-size": ".4rem" } : {},
                                ],
                              },
                              [t._v("Settings")]
                            ),
                          ],
                          1
                        ),
                        n(
                          "v-list-item",
                          {
                            staticStyle: { padding: "0", height: "6vh" },
                            attrs: { link: "" },
                            on: { click: t.shutdown },
                          },
                          [
                            n(
                              "v-list-item-icon",
                              [
                                n("v-icon", { attrs: { size: "1.7vw" } }, [
                                  t._v("mdi-power"),
                                ]),
                              ],
                              1
                            ),
                            n(
                              "v-list-item-title",
                              {
                                style: [
                                  t.isMobile ? { "font-size": ".4rem" } : {},
                                ],
                              },
                              [t._v("Power")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
            n("div", { style: t.startMenuStyle, attrs: { id: "start" } }, [
              n(
                "div",
                { staticClass: "grid-layout-container margin-right" },
                [
                  n(
                    "v-row",
                    {
                      key: 1,
                      staticStyle: {
                        "margin-right": "-0.6vw",
                        "margin-left": "-0.6vw",
                      },
                    },
                    [
                      n(
                        "v-col",
                        {
                          key: 1,
                          staticClass: "col-start",
                          attrs: { cols: "8" },
                        },
                        [
                          n(
                            "MetroTile",
                            {
                              attrs: {
                                width: t.getWidth(4),
                                height: t.getHeight(2),
                                rotateX: 0,
                                faceStyle: { "background-color": "#1E90FF" },
                              },
                              on: {
                                click: function (e) {
                                  return (
                                    e.stopPropagation(), t.toggleApp(1, !0)
                                  );
                                },
                              },
                            },
                            [
                              n(
                                "div",
                                { attrs: { slot: "front" }, slot: "front" },
                                [
                                  n("EdgeIcon", {
                                    staticClass: "icon",
                                    staticStyle: { fill: "white" },
                                  }),
                                  n("div", { staticClass: "tile-label" }, [
                                    t._v(
                                      "\n                                    Internet Browser\n                                "
                                    ),
                                  ]),
                                ],
                                1
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      n(
                        "v-col",
                        {
                          key: 2,
                          staticClass: "col-start",
                          attrs: { cols: "4" },
                        },
                        [
                          n(
                            "MetroTile",
                            {
                              attrs: {
                                width: t.getWidth(2),
                                height: t.getHeight(2),
                                rotateX: 0,
                                faceStyle: { "background-color": "#9400d3" },
                              },
                              on: {
                                click: function (e) {
                                  return (
                                    e.stopPropagation(), t.toggleApp(3, !0)
                                  );
                                },
                              },
                            },
                            [
                              n(
                                "div",
                                { attrs: { slot: "front" }, slot: "front" },
                                [
                                  n("OneNoteIcon", {
                                    staticClass: "icon",
                                    staticStyle: { fill: "white" },
                                  }),
                                  n("div", { staticClass: "tile-label" }, [
                                    t._v(
                                      "\n                                    Note\n                                "
                                    ),
                                  ]),
                                ],
                                1
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  n(
                    "v-row",
                    {
                      key: 2,
                      staticStyle: {
                        "margin-right": "-0.6vw",
                        "margin-left": "-0.6vw",
                      },
                    },
                    [
                      n(
                        "v-col",
                        {
                          key: 1,
                          staticClass: "col-start",
                          attrs: { cols: "4" },
                        },
                        [
                          n(
                            "MetroTile",
                            {
                              attrs: {
                                width: t.getWidth(2),
                                height: t.getHeight(2),
                                rotateX: 0,
                                faceStyle: { "background-color": "#228b22" },
                              },
                              on: {
                                click: function (e) {
                                  return (
                                    e.stopPropagation(), t.toggleApp(7, !0)
                                  );
                                },
                              },
                            },
                            [
                              n(
                                "div",
                                { attrs: { slot: "front" }, slot: "front" },
                                [
                                  n(
                                    "v-icon",
                                    {
                                      staticClass: "icon",
                                      attrs: { size: "4vw" },
                                    },
                                    [t._v("mdi-map-marker-outline")]
                                  ),
                                  n("div", { staticClass: "tile-label" }, [
                                    t._v(
                                      "\n                                    Map\n                                "
                                    ),
                                  ]),
                                ],
                                1
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      n(
                        "v-col",
                        {
                          key: 2,
                          staticClass: "col-start",
                          attrs: { cols: "8" },
                        },
                        [
                          n(
                            "MetroTile",
                            {
                              attrs: {
                                width: t.getWidth(4),
                                height: t.getHeight(2),
                                rotateX: 0,
                                faceStyle: { "background-color": "#282828" },
                              },
                              on: {
                                click: function (e) {
                                  return (
                                    e.stopPropagation(), t.toggleApp(20, !0)
                                  );
                                },
                              },
                            },
                            [
                              n(
                                "div",
                                { attrs: { slot: "front" }, slot: "front" },
                                [
                                  n("YouTubeIcon", {
                                    staticClass: "youtubeicon",
                                    staticStyle: { fill: "white" },
                                  }),
                                ],
                                1
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  n(
                    "v-row",
                    {
                      key: 3,
                      staticStyle: {
                        "margin-right": "-0.6vw",
                        "margin-left": "-0.6vw",
                      },
                    },
                    [
                      n(
                        "v-col",
                        {
                          key: 1,
                          staticClass: "col-start",
                          attrs: { cols: "8" },
                        },
                        [
                          n(
                            "MetroTile",
                            {
                              attrs: {
                                width: t.getWidth(4),
                                height: t.getHeight(2),
                                rotateX: 0,
                                faceStyle: { "background-color": "#21519D" },
                              },
                              on: {
                                click: function (e) {
                                  return (
                                    e.stopPropagation(), t.toggleApp(5, !0)
                                  );
                                },
                              },
                            },
                            [
                              n(
                                "div",
                                {
                                  staticClass: "solitaire-cover",
                                  attrs: { slot: "front" },
                                  slot: "front",
                                },
                                [
                                  n("img", {
                                    staticClass: "solitaire-cover-img",
                                    attrs: { src: i("3a2d") },
                                  }),
                                ]
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      n(
                        "v-col",
                        {
                          key: 2,
                          staticClass: "col-start",
                          attrs: { cols: "4" },
                        },
                        [
                          n(
                            "MetroTile",
                            {
                              attrs: {
                                width: t.getWidth(2),
                                height: t.getHeight(2),
                                rotateX: 0,
                                faceStyle: { "background-color": "#ffa07a" },
                              },
                              on: {
                                click: function (e) {
                                  return (
                                    e.stopPropagation(), t.toggleApp(9, !0)
                                  );
                                },
                              },
                            },
                            [
                              n(
                                "div",
                                { attrs: { slot: "front" }, slot: "front" },
                                [
                                  n("PowerPointIcon", {
                                    staticClass: "icon",
                                    staticStyle: { fill: "white" },
                                  }),
                                  n("div", { staticClass: "tile-label" }, [
                                    t._v(
                                      "\n                                    PowerPoint\n                                "
                                    ),
                                  ]),
                                ],
                                1
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  n(
                    "v-row",
                    {
                      key: 4,
                      staticStyle: {
                        "margin-right": "-0.6vw",
                        "margin-left": "-0.6vw",
                      },
                    },
                    [
                      n(
                        "v-col",
                        {
                          key: 1,
                          staticClass: "col-start",
                          attrs: { cols: "4" },
                        },
                        [
                          n(
                            "MetroTile",
                            {
                              attrs: {
                                width: t.getWidth(2),
                                height: t.getHeight(2),
                                rotateX: 0,
                                faceStyle: { "background-color": "#1E90FF" },
                              },
                              on: {
                                click: function (e) {
                                  return (
                                    e.stopPropagation(), t.toggleApp(15, !0)
                                  );
                                },
                              },
                            },
                            [
                              n(
                                "div",
                                { attrs: { slot: "front" }, slot: "front" },
                                [
                                  n("div", { staticClass: "calendar" }, [
                                    n(
                                      "div",
                                      { staticClass: "calendar-week-day" },
                                      [
                                        t._v(
                                          "\n                                        " +
                                          t._s(t.weekDay) +
                                          "\n                                    "
                                        ),
                                      ]
                                    ),
                                    n(
                                      "div",
                                      { staticClass: "calendar-month-day" },
                                      [
                                        t._v(
                                          "\n                                        " +
                                          t._s(t.monthDay) +
                                          "\n                                    "
                                        ),
                                      ]
                                    ),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      n(
                        "v-col",
                        {
                          key: 2,
                          staticClass: "col-start",
                          attrs: { cols: "8" },
                        },
                        [
                          n(
                            "MetroTile",
                            {
                              attrs: {
                                width: t.getWidth(4),
                                height: t.getHeight(2),
                                rotateX: t.rotateNews,
                                faceStyle: { "background-color": "#ff4500" },
                              },
                              on: {
                                click: function (e) {
                                  return e.stopPropagation(), t.clickNews();
                                },
                              },
                            },
                            [
                              n(
                                "div",
                                { attrs: { slot: "front" }, slot: "front" },
                                [
                                  n("div", { staticClass: "tile-label" }, [
                                    t._v(
                                      "\n                                    News\n                                "
                                    ),
                                  ]),
                                  n("img", {
                                    staticClass: "news-cover-img",
                                    attrs: {
                                      src: "https://news.sky.com/resources/sky-news-logo.png?v=1?bypass-service-worker",
                                    },
                                  }),
                                  n("div", { staticClass: "news-title" }, [
                                    t._v(
                                      "\n                                    Sky news\n                                "
                                    ),
                                  ]),
                                  n(
                                    "div",
                                    {
                                      staticClass: "news-subtitle",
                                      style: [
                                        t.isMobile
                                          ? { "font-size": "1vh" }
                                          : { "font-size": "1.4vh" },
                                      ],
                                    },
                                    [
                                      t._v(
                                        "\n                                    World News - Breaking international news and headlines\n                                "
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              n(
                                "div",
                                { attrs: { slot: "top" }, slot: "top" },
                                [
                                  n("div", { staticClass: "tile-label" }, [
                                    t._v(
                                      "\n                                    News\n                                "
                                    ),
                                  ]),
                                  n("img", {
                                    staticClass: "news-cover-img",
                                    attrs: { src: i("b0cc") },
                                  }),
                                  n("div", { staticClass: "news-title" }, [
                                    t._v(
                                      "\n                                    CNN Lite\n                                "
                                    ),
                                  ]),
                                  n(
                                    "div",
                                    {
                                      staticClass: "news-subtitle",
                                      style: [
                                        t.isMobile
                                          ? { "font-size": "1vh" }
                                          : { "font-size": "1.4vh" },
                                      ],
                                    },
                                    [
                                      t._v(
                                        "\n                                    CNN - Breaking News, Latest News and Videos\n                                "
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                              n(
                                "div",
                                { attrs: { slot: "bottom" }, slot: "bottom" },
                                [
                                  n("div", { staticClass: "tile-label" }, [
                                    t._v(
                                      "\n                                    News\n                                "
                                    ),
                                  ]),
                                  n("img", {
                                    staticClass: "news-cover-img",
                                    attrs: {
                                      src: "https://www.thesun.co.uk/wp-content/themes/thesun/images/sunmasthead.svg",
                                    },
                                  }),
                                  n("div", { staticClass: "news-title" }, [
                                    t._v(
                                      "\n                                    The Sun\n                                "
                                    ),
                                  ]),
                                  n(
                                    "div",
                                    {
                                      staticClass: "news-subtitle",
                                      style: [
                                        t.isMobile
                                          ? { "font-size": "1vh" }
                                          : { "font-size": "1.4vh" },
                                      ],
                                    },
                                    [
                                      t._v(
                                        "\n                                    Latest News headlines, exclusives and opinion\n                                "
                                      ),
                                    ]
                                  ),
                                ]
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              n(
                "div",
                { staticClass: "grid-layout-container" },
                [
                  n(
                    "v-row",
                    {
                      key: 1,
                      staticStyle: {
                        "margin-right": "-0.6vw",
                        "margin-left": "-0.6vw",
                      },
                    },
                    [
                      n(
                        "v-col",
                        {
                          key: 1,
                          staticClass: "col-start",
                          attrs: { cols: "2" },
                        },
                        [
                          n(
                            "MetroTile",
                            {
                              attrs: {
                                width: t.getWidth(1),
                                height: t.getHeight(1, 1.5),
                                rotateX: 0,
                                faceStyle: { "background-color": "#1E90FF" },
                              },
                              on: {
                                click: function (e) {
                                  return (
                                    e.stopPropagation(), t.toggleApp(14, !0)
                                  );
                                },
                              },
                            },
                            [
                              n(
                                "div",
                                { attrs: { slot: "front" }, slot: "front" },
                                [
                                  n("WeatherIcon", {
                                    staticClass: "icon",
                                    staticStyle: { fill: "white" },
                                  }),
                                ],
                                1
                              ),
                            ]
                          ),
                          n(
                            "MetroTile",
                            {
                              staticStyle: { "margin-top": "0.8vh" },
                              attrs: {
                                width: t.getWidth(1),
                                height: t.getHeight(1, 1.5),
                                rotateX: 0,
                                faceStyle: { "background-color": "#1E90FF" },
                              },
                              on: {
                                click: function (e) {
                                  return (
                                    e.stopPropagation(), t.toggleApp(13, !0)
                                  );
                                },
                              },
                            },
                            [
                              n(
                                "div",
                                { attrs: { slot: "front" }, slot: "front" },
                                [
                                  n("CameraIcon", {
                                    staticClass: "icon_small",
                                    staticStyle: { fill: "white" },
                                  }),
                                ],
                                1
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      n(
                        "v-col",
                        {
                          key: 2,
                          staticClass: "col-start",
                          attrs: { cols: "2" },
                        },
                        [
                          n(
                            "MetroTile",
                            {
                              attrs: {
                                width: t.getWidth(1),
                                height: t.getHeight(1, 1.5),
                                rotateX: 0,
                                faceStyle: { "background-color": "#1E90FF" },
                              },
                              on: {
                                click: function (e) {
                                  return (
                                    e.stopPropagation(), t.toggleApp(18, !0)
                                  );
                                },
                              },
                            },
                            [
                              n(
                                "div",
                                { attrs: { slot: "front" }, slot: "front" },
                                [
                                  n(
                                    "v-icon",
                                    {
                                      staticClass: "icon",
                                      attrs: { size: "2.6vw" },
                                    },
                                    [t._v("mdi-calculator")]
                                  ),
                                ],
                                1
                              ),
                            ]
                          ),
                          n(
                            "MetroTile",
                            {
                              staticStyle: { "margin-top": "0.8vh" },
                              attrs: {
                                width: t.getWidth(1),
                                height: t.getHeight(1, 1.5),
                                rotateX: 0,
                                faceStyle: { "background-color": "#1E90FF" },
                              },
                              on: {
                                click: function (e) {
                                  return (
                                    e.stopPropagation(), t.toggleApp(6, !0)
                                  );
                                },
                              },
                            },
                            [
                              n(
                                "div",
                                { attrs: { slot: "front" }, slot: "front" },
                                [
                                  n("PhotoIcon", {
                                    staticClass: "icon_small",
                                    staticStyle: { fill: "white" },
                                  }),
                                ],
                                1
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      n(
                        "v-col",
                        {
                          key: 3,
                          staticClass: "col-start",
                          attrs: { cols: "8" },
                        },
                        [
                          n(
                            "MetroTile",
                            {
                              attrs: {
                                width: t.getWidth(4),
                                height: t.getHeight(2),
                                rotateX: 0,
                                faceStyle: { "background-color": "#3cb371" },
                              },
                              on: {
                                click: function (e) {
                                  return (
                                    e.stopPropagation(), t.toggleApp(10, !0)
                                  );
                                },
                              },
                            },
                            [
                              n(
                                "div",
                                { attrs: { slot: "front" }, slot: "front" },
                                [
                                  n("div", { staticClass: "tile-label" }, [
                                    t._v(
                                      "\n                                    Spreadsheet\n                                "
                                    ),
                                  ]),
                                  n("ExcelIcon", { staticClass: "icon" }),
                                ],
                                1
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  n(
                    "v-row",
                    {
                      key: 2,
                      staticStyle: {
                        "margin-right": "-0.6vw",
                        "margin-left": "-0.6vw",
                      },
                    },
                    [
                      n(
                        "v-col",
                        {
                          key: 1,
                          staticClass: "col-start",
                          attrs: { cols: "8" },
                        },
                        [
                          n(
                            "MetroTile",
                            {
                              attrs: {
                                width: t.getWidth(4),
                                height: t.getHeight(4, 0.5),
                                rotateX: 0,
                                faceStyle: { "background-color": "#608B8B" },
                              },
                              on: {
                                click: function (e) {
                                  return (
                                    e.stopPropagation(), t.toggleApp(16, !0)
                                  );
                                },
                              },
                            },
                            [
                              n(
                                "div",
                                { attrs: { slot: "front" }, slot: "front" },
                                [
                                  n("div", { staticClass: "tile-label" }, [
                                    t._v(
                                      "\n                                    Games\n                                "
                                    ),
                                  ]),
                                  n("img", {
                                    staticClass: "icon_big",
                                    attrs: {
                                      src: "https://corporate.arkadium.com/wp-content/uploads/2018/04/Arkadium-Logo-1.png",
                                    },
                                  }),
                                ]
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      n(
                        "v-col",
                        {
                          key: 2,
                          staticClass: "col-start",
                          attrs: { cols: "4" },
                        },
                        [
                          n(
                            "MetroTile",
                            {
                              attrs: {
                                width: t.getWidth(2),
                                height: t.getHeight(2, 1.5),
                                rotateX: t.rotateApps,
                                frontStyle: { "background-color": "#8a2be2" },
                                topStyle: { "background-color": "#1E90FF" },
                                backStyle: { "background-color": "yellow" },
                                bottomStyle: { "background-color": "green" },
                              },
                              on: {
                                click: function (e) {
                                  return e.stopPropagation(), t.clickApp();
                                },
                              },
                            },
                            [
                              n(
                                "div",
                                { attrs: { slot: "front" }, slot: "front" },
                                [
                                  n("div", { staticClass: "tile-label" }, [
                                    t._v(
                                      "\n                                    PDFzorro\n                                "
                                    ),
                                  ]),
                                  n(
                                    "v-icon",
                                    {
                                      staticClass: "icon_big",
                                      attrs: { size: "4vw" },
                                    },
                                    [t._v("mdi-file-pdf-outline")]
                                  ),
                                ],
                                1
                              ),
                              n(
                                "div",
                                { attrs: { slot: "top" }, slot: "top" },
                                [
                                  n("div", { staticClass: "tile-label" }, [
                                    t._v(
                                      "\n                                    Photopea\n                                "
                                    ),
                                  ]),
                                  n("img", {
                                    staticClass: "photopeaimage",
                                    attrs: {
                                      src: "https://www.photopea.com/promo/thumb256.png",
                                    },
                                  }),
                                ]
                              ),
                            ]
                          ),
                          n(
                            "MetroTile",
                            {
                              staticStyle: { "margin-top": "0.8vh" },
                              attrs: {
                                width: t.getWidth(2),
                                height: t.getHeight(2, 1.5),
                                rotateX: 0,
                                faceStyle: { "background-color": "#4169e1" },
                              },
                              on: {
                                click: function (e) {
                                  return (
                                    e.stopPropagation(), t.toggleApp(19, !0)
                                  );
                                },
                              },
                            },
                            [
                              n(
                                "div",
                                { attrs: { slot: "front" }, slot: "front" },
                                [
                                  n("div", { staticClass: "tile-label" }, [
                                    t._v(
                                      "\n                                    TuneIn\n                                "
                                    ),
                                  ]),
                                  n("TuneinIcon", {
                                    staticClass: "icon_big",
                                    staticStyle: { fill: "white" },
                                  }),
                                ],
                                1
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                  n(
                    "v-row",
                    {
                      key: 3,
                      staticStyle: {
                        "margin-right": "-0.6vw",
                        "margin-left": "-0.6vw",
                      },
                    },
                    [
                      n(
                        "v-col",
                        {
                          key: 1,
                          staticClass: "col-start",
                          attrs: { cols: "8" },
                        },
                        [
                          n(
                            "MetroTile",
                            {
                              attrs: {
                                width: t.getWidth(4),
                                height: t.getHeight(2),
                                rotateX: 0,
                                faceStyle: { "background-color": "#4169e1" },
                              },
                              on: {
                                click: function (e) {
                                  return (
                                    e.stopPropagation(), t.toggleApp(11, !0)
                                  );
                                },
                              },
                            },
                            [
                              n(
                                "div",
                                { attrs: { slot: "front" }, slot: "front" },
                                [
                                  n("div", { staticClass: "tile-label" }, [
                                    t._v(
                                      "\n                                    Doc\n                                "
                                    ),
                                  ]),
                                  n(
                                    "v-icon",
                                    {
                                      staticClass: "icon",
                                      attrs: { size: "4vw" },
                                    },
                                    [t._v("mdi-file-document")]
                                  ),
                                ],
                                1
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      n(
                        "v-col",
                        {
                          key: 2,
                          staticClass: "col-start",
                          attrs: { cols: "4" },
                        },
                        [
                          n(
                            "MetroTile",
                            {
                              attrs: {
                                width: t.getWidth(2),
                                height: t.getHeight(2),
                                rotateX: 0,
                                faceStyle: { "background-color": "#cd5c5c" },
                              },
                              on: {
                                click: function (e) {
                                  return (
                                    e.stopPropagation(), t.toggleApp(12, !0)
                                  );
                                },
                              },
                            },
                            [
                              n(
                                "div",
                                { attrs: { slot: "front" }, slot: "front" },
                                [
                                  n("div", { staticClass: "tile-label" }, [
                                    t._v(
                                      "\n                                    Drawing\n                                "
                                    ),
                                  ]),
                                  n(
                                    "v-icon",
                                    {
                                      staticClass: "icon",
                                      attrs: { size: "4vw" },
                                    },
                                    [t._v("mdi-drawing-box")]
                                  ),
                                ],
                                1
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ]),
          ],
          1
        );
      },
      A = [],
      w = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i(
          "div",
          {
            ref: "scene",
            style: t.sceneStyle,
            on: {
              mousemove: function (e) {
                return t.onMouseMove(e);
              },
              mousedown: function (e) {
                return t.onMouseDown(e);
              },
              mouseup: function (e) {
                return t.onMouseUp(e);
              },
              mouseleave: t.onMouseLeave,
              touchmove: function (e) {
                return e.preventDefault(), t.onTouchMove(e);
              },
            },
          },
          [
            i("div", { style: t.boxContainerStyle }, [
              i("div", { style: t.frontFaceStyle }, [t._t("front")], 2),
              i("div", { style: t.backFaceStyle }, [t._t("back")], 2),
              i("div", { style: t.topFaceStyle }, [t._t("top")], 2),
              i("div", { style: t.bottomFaceStyle }, [t._t("bottom")], 2),
              i("div", { style: t.rightFaceStyle }, [t._t("right")], 2),
              i("div", { style: t.leftFaceStyle }, [t._t("left")], 2),
            ]),
            i(
              "div",
              {
                class: { border: t.isHover && !t.isMouseDown },
                style: t.glareBoundingBox,
              },
              [
                i("div", { style: t.hoverGlareStyle }),
                i("div", {
                  class: { ripple: t.isAnimating },
                  style: t.clickGlareStyle,
                  on: { animationend: t.resetAnimation },
                }),
              ]
            ),
          ]
        );
      },
      b = [],
      y = (i("8e6e"), i("ac6a"), i("456d"), i("ade3"));
    i("c5f6");
    function k(t, e) {
      var i = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var n = Object.getOwnPropertySymbols(t);
        e &&
          (n = n.filter(function (e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable;
          })),
          i.push.apply(i, n);
      }
      return i;
    }
    function x(t) {
      for (var e = 1; e < arguments.length; e++) {
        var i = null != arguments[e] ? arguments[e] : {};
        e % 2
          ? k(Object(i), !0).forEach(function (e) {
            Object(y["a"])(t, e, i[e]);
          })
          : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i))
            : k(Object(i)).forEach(function (e) {
              Object.defineProperty(
                t,
                e,
                Object.getOwnPropertyDescriptor(i, e)
              );
            });
      }
      return t;
    }
    var C = {
      name: "MetroTile",
      props: {
        faceStyle: { type: Object },
        frontStyle: { type: Object },
        backStyle: { type: Object },
        rightStyle: { type: Object },
        leftStyle: { type: Object },
        topStyle: { type: Object },
        bottomStyle: { type: Object },
        rotateX: { type: Number, default: 0 },
        height: { type: Number, default: 200 },
        width: { type: Number, default: 250 },
        perspective: { type: Number, default: 750 },
        maxTiltX: { type: Number, default: 20 },
        maxTiltY: { type: Number, default: 10 },
        clickGlareSize: { type: Number, default: 90 },
        clickGlareOpacity: { type: Number, default: 0.2 },
        hoverGlareOpacity: { type: Number, default: 0.3 },
      },
      data: function () {
        return {
          curTiltTransform: "",
          clickGlareTop: 0,
          clickGlareLeft: 0,
          glareScale: 5,
          hoverX: 0,
          hoverY: 0,
          mouseDownX: 0,
          mouseDownY: 0,
          isHover: !1,
          isMouseDown: !1,
          isAnimating: !1,
        };
      },
      computed: {
        sceneStyle: function () {
          return {
            position: "relative",
            cursor: "pointer",
            width: "".concat(this.width, "vw"),
            height: "".concat(this.height, "vh"),
            perspective: "".concat(this.perspective, "em"),
            overflow: "hidden",
            "background-color": "rgba(153,153,153,0.3)",
          };
        },
        curFaceTransform: function () {
          return "translateZ(-"
            .concat(this.height / 2, "vh) rotateX(")
            .concat(this.rotateX, "deg)");
        },
        boxContainerStyle: function () {
          return {
            width: "100%",
            height: "100%",
            position: "relative",
            "transform-style": "preserve-3d",
            transition: "transform 0.5s",
            transform: ""
              .concat(this.curTiltTransform, " ")
              .concat(this.curFaceTransform),
            "will-change": "transform",
          };
        },
        glareBoundingBox: function () {
          var t = Math.max(this.height / 2, this.width / 2),
            e = this.perspective
              ? this.perspective / (this.perspective - t)
              : 1;
          return {
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            position: "absolute",
            overflow: "hidden",
            "transform-style": "preserve-3d",
            transform: "scale("
              .concat(1 / e, ", ")
              .concat(1 / e, ") translateZ(")
              .concat(t, "em"),
            "pointer-events": "none",
          };
        },
        hoverGlareStyle: function () {
          return {
            position: "absolute",
            width: "".concat(2 * this.width, "vw"),
            height: "".concat(2 * this.height, "vh"),
            "background-image":
              "radial-gradient(circle at center, rgba(255,255,255, 0.7) 0%, rgba(255,255,255,0.1) 100%)",
            transform: "translate("
              .concat(this.hoverX - this.width / 2, "vw, ")
              .concat(this.hoverY - this.height / 2, "vh) translate(-")
              .concat(this.width / 2, "vw, -")
              .concat(this.height / 2, "vh)"),
            opacity: this.isHover ? this.hoverGlareOpacity : 0,
            "transform-style": "preserve-3d",
          };
        },
        clickGlareStyle: function () {
          var t = this.clickGlareSize * this.glareScale,
            e = (t - this.clickGlareSize) / 2,
            i = this.clickGlareTop - this.clickGlareSize / 2,
            n = this.clickGlareLeft - this.clickGlareSize / 2;
          return {
            position: "absolute",
            width: "".concat(this.clickGlareSize, "vw"),
            height: "".concat(this.clickGlareSize, "vh"),
            opacity: 0,
            "border-radius": "50%",
            "--glare-top": "".concat(i, "em"),
            "--glare-left": "".concat(n, "em"),
            "--glare-opacity": "".concat(this.clickGlareOpacity),
            "--glare-scaled-size": "".concat(t, "em"),
            "--glare-scaled-top": "".concat(i - e, "em"),
            "--glare-scaled-left": "".concat(n - e, "em"),
            "transform-style": "preserve-3d",
          };
        },
        frontFaceStyle: function () {
          return x(
            x(x({}, this.faceStyle), this.frontStyle),
            {},
            {
              position: "absolute",
              width: "".concat(this.width, "vw"),
              height: "".concat(this.height, "vh"),
              transform: "translateZ(".concat(this.height / 2, "vh)"),
              outline: "1px solid transparent",
            }
          );
        },
        backFaceStyle: function () {
          return x(
            x(x({}, this.faceStyle), this.backStyle),
            {},
            {
              position: "absolute",
              width: "".concat(this.width, "vw"),
              height: "".concat(this.height, "vh"),
              transform: "translateZ(-".concat(
                this.height / 2,
                "vh) rotateZ(180deg) rotateY(180deg)"
              ),
              outline: "1px solid transparent",
            }
          );
        },
        topFaceStyle: function () {
          return x(
            x(x({}, this.faceStyle), this.topStyle),
            {},
            {
              position: "absolute",
              width: "".concat(this.width, "vw"),
              height: "".concat(this.height, "vh"),
              transform: "translateY(-".concat(
                this.height / 2,
                "vh) rotateX(90deg)"
              ),
              outline: "1px solid transparent",
            }
          );
        },
        bottomFaceStyle: function () {
          return x(
            x(x({}, this.faceStyle), this.bottomStyle),
            {},
            {
              position: "absolute",
              width: "".concat(this.width, "vw"),
              height: "".concat(this.height, "vh"),
              transform: "translateY(".concat(
                this.height - this.height / 2,
                "vh) rotateX(-90deg)"
              ),
              outline: "1px solid transparent",
            }
          );
        },
        leftFaceStyle: function () {
          return x(
            x(x({}, this.faceStyle), this.leftStyle),
            {},
            {
              position: "absolute",
              width: "".concat(this.height, "vw"),
              height: "".concat(this.height, "vh"),
              transform: "translateX(-".concat(
                this.height / 2,
                "vh) rotateY(-90deg)"
              ),
              outline: "1px solid transparent",
            }
          );
        },
        rightFaceStyle: function () {
          return x(
            x(x({}, this.faceStyle), this.rightStyle),
            {},
            {
              position: "absolute",
              width: "".concat(this.height, "vw"),
              height: "".concat(this.height, "vh"),
              transform: "translateX(".concat(
                this.width - this.height / 2,
                "vh) rotateY(90deg)"
              ),
              outline: "1px solid transparent",
            }
          );
        },
      },
      methods: {
        getRelativePos2Scene: function (t, e) {
          var i = this.$refs.scene.getBoundingClientRect();
          return {
            x: t - (i.left + window.scrollX),
            y: e - (i.top + window.scrollY),
          };
        },
        onMouseDown: function (t) {
          var e = this.getRelativePos2Scene(t.pageX, t.pageY);
          (this.mouseDownX = t.pageX),
            (this.mouseDownY = t.pageY),
            this.tiltTile(e),
            this.clickGlare(e),
            this.setMouseDown(!0);
        },
        onMouseUp: function (t) {
          this.$emit("click", t), this.recoverTile(), this.setMouseDown(!1);
        },
        onMouseMove: function (t) {
          var e = this.getRelativePos2Scene(t.pageX, t.pageY);
          this.hoverGlare(e);
        },
        onMouseLeave: function () {
          this.recoverTile(), this.resetHover();
        },
        onTouchMove: function (t) {
          this.$emit("touchmove", t);
        },
        tiltTile: function (t) {
          var e = t.x / this.width,
            i = t.y / this.height,
            n = ((0.5 - i) * this.maxTiltX).toFixed(2),
            o = ((e - 0.5) * this.maxTiltY).toFixed(2);
          this.curTiltTransform = "rotateX("
            .concat(n, "deg) rotateY(")
            .concat(o, "deg)");
        },
        recoverTile: function () {
          this.curTiltTransform = "";
        },
        resetHover: function () {
          this.isHover = !1;
        },
        clickGlare: function (t) {
          (this.clickGlareTop = t.y),
            (this.clickGlareLeft = t.x),
            (this.isAnimating = !0);
        },
        resetAnimation: function () {
          this.isAnimating = !1;
        },
        hoverGlare: function (t) {
          (this.isHover = !0), (this.hoverX = t.x), (this.hoverY = t.y);
        },
        setMouseDown: function (t) {
          this.isMouseDown = t;
        },
      },
    },
      S = C,
      O = (i("ccb7"), Object(f["a"])(S, w, b, !1, null, null, null)),
      M = O.exports,
      j = {
        functional: !0,
        render(t, e) {
          const { _c: i, _v: n, data: o, children: s = [] } = e,
            {
              class: a,
              staticClass: r,
              style: c,
              staticStyle: l,
              attrs: u = {},
              ...h
            } = o;
          return i(
            "svg",
            {
              class: [a, r],
              style: [c, l],
              attrs: Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 32 32",
                  width: "50",
                  height: "50",
                },
                u
              ),
              ...h,
            },
            s.concat([
              i("path", {
                attrs: {
                  d: "M9.96 10.828c-2.616 1.629-4.112 3.942-4.112 3.942s.386-4.852 4.113-7.696C11.44 5.945 13.469 5 16.19 5c1.024 0 3.168.18 5.102 1.371 1.934 1.191 2.715 2.188 3.586 3.652.375.63.683 1.442.875 2.223.355 1.465.398 3.215.398 3.215v2.309H12.336s-.336 4.64 6.02 4.64c2.206 0 2.984-.348 3.71-.562 1.137-.336 2.235-1.086 2.235-1.086l.004 4.636S21.703 27 17.773 27c-1.105 0-2.27-.094-3.394-.457-.984-.32-3.04-1.18-4.418-3.195-.488-.711-1.016-1.66-1.277-2.586-.286-1.004-.282-1.977-.282-2.516 0-2.004.688-3.918 1.875-5.305 1.54-1.793 3.489-2.582 3.489-2.582s-.633.739-1.024 1.66c-.39.922-.5 1.848-.5 1.848h7.805s.457-4.664-4.414-4.664c-1.836 0-4.09.64-5.672 1.625z",
                },
              }),
            ])
          );
        },
      },
      z = {
        functional: !0,
        render(t, e) {
          const { _c: i, _v: n, data: o, children: s = [] } = e,
            {
              class: a,
              staticClass: r,
              style: c,
              staticStyle: l,
              attrs: u = {},
              ...h
            } = o;
          return i(
            "svg",
            {
              class: [a, r],
              style: [c, l],
              attrs: Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 50 50",
                  width: "40",
                  height: "40",
                },
                u
              ),
              ...h,
            },
            s.concat([
              i("path", {
                attrs: {
                  d: "M28.813.031l-28 5.313c-.473.09-.813.52-.813 1v37.312c0 .48.34.91.813 1l28 5.313c.062.011.125.031.187.031.23 0 .445-.07.625-.219.23-.191.375-.484.375-.781V1c0-.297-.145-.59-.375-.781-.23-.192-.52-.242-.813-.188zM32 5v10h6v2h-6v3h6v2h-6v3h6v2h-6v3h6v2h-6v3h6v2h-6v9h12c.555 0 1-.445 1-1V18h3c1.102 0 2-.898 2-2V7c0-1.102-.898-2-2-2zM6.531 15.688h4L17.031 27c.297.508.594 1 .844 1.5h.031c-.062-.434-.093-1.293-.093-2.563v-10.25h3.5V34.25h-3.75l-6.75-11.656A15.83 15.83 0 0110 21.03h-.063c.063.657.094 1.653.094 3V34.25h-3.5zM47 20v12h1c1.102 0 2-.898 2-2v-8c0-1.102-.898-2-2-2zm0 14v12h1c1.102 0 2-.898 2-2v-8c0-1.102-.898-2-2-2z",
                },
              }),
            ])
          );
        },
      },
      E = {
        functional: !0,
        render(t, e) {
          const { _c: i, _v: n, data: o, children: s = [] } = e,
            {
              class: a,
              staticClass: r,
              style: c,
              staticStyle: l,
              attrs: u = {},
              ...h
            } = o;
          return i(
            "svg",
            {
              class: [a, r],
              style: [c, l],
              attrs: Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "55",
                  height: "55",
                  viewBox: "0 0 48 48",
                },
                u
              ),
              ...h,
            },
            s.concat([
              i("path", {
                attrs: {
                  fill: "#FF8A65",
                  d: "M41 10H25v28h16a1 1 0 001-1V11a1 1 0 00-1-1z",
                },
              }),
              i("g", { attrs: { fill: "#FBE9E7" } }, [
                i("path", {
                  attrs: {
                    d: "M24 29h14v2H24zM24 33h14v2H24zM30 15a6 6 0 000 12 6 6 0 006-6h-6v-6z",
                  },
                }),
                i("path", { attrs: { d: "M32 13v6h6a6 6 0 00-6-6z" } }),
              ]),
              i("path", {
                attrs: { fill: "#E64A19", d: "M27 42L6 38V10l21-4z" },
              }),
              i("path", {
                attrs: {
                  fill: "#FFF",
                  d: "M16.828 17H12v14h3v-4.823h1.552c1.655 0 2.976-.436 3.965-1.304.988-.869 1.484-2.007 1.482-3.412C22 18.487 20.275 17 16.828 17zm-.534 6.785H15v-4.364h1.294c1.641 0 2.461.72 2.461 2.158 0 1.472-.82 2.206-2.461 2.206z",
                },
              }),
            ])
          );
        },
      },
      B = {
        functional: !0,
        render(t, e) {
          const { _c: i, _v: n, data: o, children: s = [] } = e,
            {
              class: a,
              staticClass: r,
              style: c,
              staticStyle: l,
              attrs: u = {},
              ...h
            } = o;
          return i(
            "svg",
            {
              class: [a, r],
              style: [c, l],
              attrs: Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 32 32",
                  width: "36",
                  height: "36",
                },
                u
              ),
              ...h,
            },
            s.concat([
              i("path", {
                attrs: {
                  d: "M15 3v5h2V3zM7.5 6.094L6.094 7.5l3.531 3.563 1.438-1.438zm17 0l-3.563 3.531 1.438 1.438L25.906 7.5zM16 9c-3.855 0-7 3.145-7 7s3.145 7 7 7 7-3.145 7-7-3.145-7-7-7zm0 2c2.773 0 5 2.227 5 5s-2.227 5-5 5-5-2.227-5-5 2.227-5 5-5zM3 15v2h5v-2zm21 0v2h5v-2zM9.625 20.938L6.094 24.5 7.5 25.906l3.563-3.531zm12.75 0l-1.438 1.437 3.563 3.531 1.406-1.406zM15 24v5h2v-5z",
                },
              }),
            ])
          );
        },
      },
      D = {
        functional: !0,
        render(t, e) {
          const { _c: i, _v: n, data: o, children: s = [] } = e,
            {
              class: a,
              staticClass: r,
              style: c,
              staticStyle: l,
              attrs: u = {},
              ...h
            } = o;
          return i(
            "svg",
            {
              class: [a, r],
              style: [c, l],
              attrs: Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 50 50",
                  width: "36",
                  height: "36",
                },
                u
              ),
              ...h,
            },
            s.concat([
              i("path", {
                attrs: {
                  d: "M0 4v42h50V4zm2 2h46v38H2zm2 2v22.688L17.313 18.28c.195-.183.457-.308.718-.281.266.012.54.117.719.313l10.281 11.25 4.25-4.282c.39-.39 1.047-.39 1.438 0L46 36.594V8zm31 7a3 3 0 11-.002 6.002A3 3 0 0135 15zm-17.063 5.406L4 33.438V42h42v-2.594l-12-12L26.406 35h-2.812l4.031-4.031z",
                },
              }),
            ])
          );
        },
      },
      P = {
        functional: !0,
        render(t, e) {
          const { _c: i, _v: n, data: o, children: s = [] } = e,
            {
              class: a,
              staticClass: r,
              style: c,
              staticStyle: l,
              attrs: u = {},
              ...h
            } = o;
          return i(
            "svg",
            {
              class: [a, r],
              style: [c, l],
              attrs: Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "48",
                  height: "48",
                },
                u
              ),
              ...h,
            },
            s.concat([
              i("path", {
                attrs: {
                  d: "M41 10H25v28h16c.555 0 1-.445 1-1V11c0-.555-.445-1-1-1z",
                  fill: "#4caf50",
                },
              }),
              i("path", {
                attrs: {
                  d: "M32 15h7v3h-7zM32 25h7v3h-7zM32 30h7v3h-7zM32 20h7v3h-7zM25 15h5v3h-5zM25 25h5v3h-5zM25 30h5v3h-5zM25 20h5v3h-5z",
                  fill: "#fff",
                },
              }),
              i("path", {
                attrs: { d: "M27 42L6 38V10l21-4z", fill: "#2e7d32" },
              }),
              i("path", {
                attrs: {
                  d: "M19.129 31l-2.41-4.563c-.094-.167-.188-.48-.285-.937h-.036c-.046.215-.156.543-.324.98L13.652 31H9.895l4.46-7-4.082-7h3.836l2.004 4.195c.157.332.293.727.418 1.18h.04c.077-.27.226-.68.44-1.219L19.239 17h3.516l-4.2 6.938 4.313 7.058H19.13z",
                  fill: "#fff",
                },
              }),
            ])
          );
        },
      },
      T = {
        functional: !0,
        render(t, e) {
          const { _c: i, _v: n, data: o, children: s = [] } = e,
            {
              class: a,
              staticClass: r,
              style: c,
              staticStyle: l,
              attrs: u = {},
              ...h
            } = o;
          return i(
            "svg",
            {
              class: [a, r],
              style: [c, l],
              attrs: Object.assign(
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  viewBox: "0 0 26 26",
                  width: "36",
                  height: "36",
                },
                u
              ),
              ...h,
            },
            s.concat([
              i("path", {
                attrs: {
                  d: "M25.188 6.016h-5.391c-.813 0-.813-.813-.813-.813v-1.36a.812.812 0 00-.812-.812H7.812A.812.812 0 007 3.844v1.36s0 .812-.813.812H.813A.812.812 0 000 6.828v15.36c0 .449.363.812.813.812h24.375c.449 0 .812-.363.812-.813V6.829a.812.812 0 00-.813-.812zM23 10.258A1.26 1.26 0 0121.742 9 1.26 1.26 0 0123 7.742 1.26 1.26 0 0124.258 9 1.26 1.26 0 0123 10.258zM13 21.12A7.123 7.123 0 015.879 14 7.123 7.123 0 0113 6.879 7.123 7.123 0 0120.121 14 7.12 7.12 0 0113 21.121zm0-1.664a5.457 5.457 0 110-10.914 5.457 5.457 0 010 10.914z",
                },
              }),
            ])
          );
        },
      },
      V = {
        functional: !0,
        render(t, e) {
          const { _c: i, _v: n, data: o, children: s = [] } = e,
            {
              class: a,
              staticClass: r,
              style: c,
              staticStyle: l,
              attrs: u = {},
              ...h
            } = o;
          return i(
            "svg",
            {
              class: [a, r],
              style: [c, l],
              attrs: Object.assign(
                { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 200 88" },
                u
              ),
              ...h,
            },
            s.concat([
              i("path", {
                attrs: {
                  d: "M180.24 20.8a.8.8 0 00-.8-.8h-4a.8.8 0 00-.8.8v15c0 .24-.28.32-.36.08l-5.48-15.2a1 1 0 00-1-.72H163a.8.8 0 00-.8.8v26.43a.8.8 0 00.8.81h4a.8.8 0 00.8-.81V33.36c0-.24.28-.32.36-.08l5.44 14a1 1 0 001.08.68h4.72a.8.8 0 00.8-.81V20.8zM157.8 43.4a.8.8 0 00-.8-.8h-3.4a.38.38 0 01-.4-.4V25.8a.38.38 0 01.4-.4h3a.8.8 0 00.8-.8v-3.8a.8.8 0 00-.8-.8h-12.4a.8.8 0 00-.8.8v3.8a.8.8 0 00.8.8h3a.38.38 0 01.4.4v16.4a.38.38 0 01-.4.4h-3.4a.8.8 0 00-.8.8v3.79a.8.8 0 00.8.81H157a.8.8 0 00.8-.81V43.4zM122 26H6.5a.5.5 0 00-.5.5v55a.5.5 0 00.5.5h115a.5.5 0 00.5-.5V26zm78-23v62a3 3 0 01-3 3h-69v17a3 3 0 01-3 3H3a3 3 0 01-3-3V23a3 3 0 013-3h119V3a3 3 0 013-3h72a3 3 0 013 3zm-95.73 59.4H94.8a.38.38 0 01-.4-.4v-4.8a.38.38 0 01.4-.4h9a.8.8 0 00.8-.8v-4a.8.8 0 00-.8-.8h-9a.38.38 0 01-.4-.4V46a.38.38 0 01.4-.4h9.31a.8.8 0 00.8-.8v-4a.8.8 0 00-.8-.8H89.6a.8.8 0 00-.8.8v26.4a.81.81 0 00.8.8h14.67a.81.81 0 00.8-.8v-4a.8.8 0 00-.8-.8zM83.56 40h-4a.8.8 0 00-.8.8v15c0 .24-.28.32-.36.08l-5.48-15.2a1 1 0 00-1-.72h-4.76a.8.8 0 00-.8.8V67.2a.81.81 0 00.8.8h4a.81.81 0 00.8-.8V53.36c0-.24.28-.32.36-.08l5.44 14a1 1 0 001.08.68h4.72a.81.81 0 00.79-.8V40.8a.8.8 0 00-.79-.8zM61 40h-4a.8.8 0 00-.8.8v18.8c0 1.76-1.44 3.2-3.88 3.2s-3.8-1.44-3.8-3.2V40.8a.8.8 0 00-.8-.8h-4a.8.8 0 00-.8.8v18.8c0 4.84 4 8.83 9.44 8.83s9.52-4 9.52-8.83V40.8A.8.8 0 0061 40zm-22 .8v4a.8.8 0 01-.8.8h-5a.38.38 0 00-.4.4v21.2a.81.81 0 01-.8.8h-4a.81.81 0 01-.8-.8V46a.38.38 0 00-.4-.4h-5a.8.8 0 01-.8-.8v-4a.8.8 0 01.8-.8h16.4a.8.8 0 01.8.8z",
                  fill: "#14d8cc",
                },
              }),
            ])
          );
        },
      },
      _ = {
        functional: !0,
        render(t, e) {
          const { _c: i, _v: n, data: o, children: s = [] } = e,
            {
              class: a,
              staticClass: r,
              style: c,
              staticStyle: l,
              attrs: u = {},
              ...h
            } = o;
          return i(
            "svg",
            {
              class: [a, r],
              style: [c, l],
              attrs: Object.assign(
                {
                  version: "1.1",
                  id: "Layer_1",
                  xmlns: "http://www.w3.org/2000/svg",
                  x: "0",
                  y: "0",
                  viewBox: "0 0 380.9 85",
                  "xml:space": "preserve",
                },
                u
              ),
              ...h,
            },
            s.concat([
              i("path", {
                attrs: {
                  d: "M118.9 13.3c-1.4-5.2-5.5-9.3-10.7-10.7C98.7 0 60.7 0 60.7 0s-38 0-47.5 2.5C8.1 3.9 3.9 8.1 2.5 13.3 0 22.8 0 42.5 0 42.5s0 19.8 2.5 29.2C3.9 76.9 8 81 13.2 82.4 22.8 85 60.7 85 60.7 85s38 0 47.5-2.5c5.2-1.4 9.3-5.5 10.7-10.7 2.5-9.5 2.5-29.2 2.5-29.2s.1-19.8-2.5-29.3z",
                  fill: "red",
                },
              }),
              i("path", {
                attrs: { fill: "#fff", d: "M48.6 60.7l31.6-18.2-31.6-18.2z" },
              }),
              i("g", [
                i("path", {
                  staticClass: "st2",
                  attrs: {
                    d: "M176.3 77.4c-2.4-1.6-4.1-4.1-5.1-7.6-1-3.4-1.5-8-1.5-13.6v-7.7c0-5.7.6-10.3 1.7-13.8 1.2-3.5 3-6 5.4-7.6 2.5-1.6 5.7-2.4 9.7-2.4 3.9 0 7.1.8 9.5 2.4 2.4 1.6 4.1 4.2 5.2 7.6 1.1 3.4 1.7 8 1.7 13.8v7.7c0 5.7-.5 10.2-1.6 13.7-1.1 3.4-2.8 6-5.2 7.6-2.4 1.6-5.7 2.4-9.8 2.4-4.2-.1-7.6-.9-10-2.5zm13.5-8.4c.7-1.7 1-4.6 1-8.5V43.9c0-3.8-.3-6.6-1-8.4-.7-1.8-1.8-2.6-3.5-2.6-1.6 0-2.8.9-3.4 2.6-.7 1.8-1 4.6-1 8.4v16.6c0 3.9.3 6.8 1 8.5.6 1.7 1.8 2.6 3.5 2.6 1.6 0 2.7-.8 3.4-2.6zM360.9 56.3V59c0 3.4.1 6 .3 7.7.2 1.7.6 3 1.3 3.7.6.8 1.6 1.2 3 1.2 1.8 0 3-.7 3.7-2.1.7-1.4 1-3.7 1.1-7l10.3.6c.1.5.1 1.1.1 1.9 0 4.9-1.3 8.6-4 11s-6.5 3.6-11.4 3.6c-5.9 0-10-1.9-12.4-5.6-2.4-3.7-3.6-9.4-3.6-17.2v-9.3c0-8 1.2-13.8 3.7-17.5 2.5-3.7 6.7-5.5 12.6-5.5 4.1 0 7.3.8 9.5 2.3 2.2 1.5 3.7 3.9 4.6 7 .9 3.2 1.3 7.6 1.3 13.2v9.1h-20.1zm1.5-22.4c-.6.8-1 2-1.2 3.7-.2 1.7-.3 4.3-.3 7.8v3.8h8.8v-3.8c0-3.4-.1-6-.3-7.8-.2-1.8-.7-3-1.3-3.7-.6-.7-1.6-1.1-2.8-1.1-1.4-.1-2.3.3-2.9 1.1zM147.1 55.3L133.5 6h11.9l4.8 22.3c1.2 5.5 2.1 10.2 2.7 14.1h.3c.4-2.8 1.3-7.4 2.7-14l5-22.4h11.9L159 55.3v23.6h-11.8V55.3zM241.6 25.7V79h-9.4l-1-6.5h-.3c-2.5 4.9-6.4 7.4-11.5 7.4-3.5 0-6.1-1.2-7.8-3.5-1.7-2.3-2.5-5.9-2.5-10.9V25.7h12v39.1c0 2.4.3 4.1.8 5.1s1.4 1.5 2.6 1.5c1 0 2-.3 3-1 1-.6 1.7-1.4 2.1-2.4V25.7h12zM303.1 25.7V79h-9.4l-1-6.5h-.3c-2.5 4.9-6.4 7.4-11.5 7.4-3.5 0-6.1-1.2-7.8-3.5-1.7-2.3-2.5-5.9-2.5-10.9V25.7h12v39.1c0 2.4.3 4.1.8 5.1s1.4 1.5 2.6 1.5c1 0 2-.3 3-1 1-.6 1.7-1.4 2.1-2.4V25.7h12z",
                  },
                }),
                i("path", {
                  staticClass: "st2",
                  attrs: {
                    d: "M274.2 15.7h-11.9v63.2h-11.7V15.7h-11.9V6h35.5v9.7zM342.8 34.2c-.7-3.4-1.9-5.8-3.5-7.3s-3.9-2.3-6.7-2.3c-2.2 0-4.3.6-6.2 1.9-1.9 1.2-3.4 2.9-4.4 4.9h-.1V3.3h-11.6v75.6h9.9l1.2-5h.3c.9 1.8 2.3 3.2 4.2 4.3 1.9 1 3.9 1.6 6.2 1.6 4.1 0 7-1.9 8.9-5.6 1.9-3.7 2.9-9.6 2.9-17.5v-8.4c-.1-6.1-.4-10.8-1.1-14.1zm-11 21.7c0 3.9-.2 6.9-.5 9.1-.3 2.2-.9 3.8-1.6 4.7-.8.9-1.8 1.4-3 1.4-1 0-1.9-.2-2.7-.7-.8-.5-1.5-1.2-2-2.1V38.1c.4-1.4 1.1-2.6 2.1-3.6 1-.9 2.1-1.4 3.2-1.4 1.2 0 2.2.5 2.8 1.4.7 1 1.1 2.6 1.4 4.8.3 2.3.4 5.5.4 9.6v7z",
                  },
                }),
              ]),
            ])
          );
        },
      },
      I = 0.375,
      R = {
        name: "app",
        components: {
          MetroTile: M,
          EdgeIcon: j,
          OneNoteIcon: z,
          PowerPointIcon: E,
          WeatherIcon: B,
          PhotoIcon: D,
          ExcelIcon: P,
          CameraIcon: T,
          TuneinIcon: V,
          YouTubeIcon: _,
        },
        data: function () {
          return {
            rotateNews: 0,
            rotateApps: 0,
            weekDay: (function () {
              var t = {
                0: "Sunday",
                1: "Monday",
                2: "Tuesday",
                3: "Wednesday",
                4: "Thursday",
                5: "Friday",
                6: "Saturday",
              };
              return t[new Date().getDay()];
            })(),
            monthDay: (function () {
              return new Date().getDate();
            })(),
            rotateIndex1: 0,
            rotateArray1: [-90, 90, 90, -90],
            rotateIndex2: 0,
            rotateArray2: [-90, 90],
            miniDrawer: !0,
          };
        },
        methods: {
          getWidth: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1,
              i = this.isMobile ? 5 : 3.5;
            return i * t - I * e;
          },
          getHeight: function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1,
              i = this.isMobile ? 10 : 7;
            return i * t - I * e;
          },
          setRotateX: function (t, e, i) {
            (this[t] += i[this[e] % i.length]), (this[e] += 1);
          },
          shutdown: function () {
            var t = this;
            this.$store.dispatch("shutdownAction"),
              (this.intervalShutdown = setInterval(function () {
                t.$store.dispatch("shutdownEndAction");
              }, 5e3));
          },
          shutdownEnd: function () {
            this.$store.dispatch("shutdownEndAction");
          },
          toggleApp: function (t, e) {
            this.$store.dispatch("toggleAppAction", { id: t, isOpen: e });
          },
          clickApp: function () {
            0 == this.rotateApps
              ? this.toggleApp(22, !0)
              : this.toggleApp(21, !0);
          },
          clickNews: function () {
            0 == this.rotateNews
              ? this.toggleAppUrl(17, "https://news.sky.com/world", !0)
              : -90 == this.rotateNews
                ? this.toggleAppUrl(17, "https://lite.cnn.com/", !0)
                : this.toggleAppUrl(17, "https://www.thesun.co.uk/news/", !0);
          },
          toggleAppUrl: function (t, e, i) {
            this.$store.dispatch("toggleAppUrlAction", {
              id: t,
              url: e,
              isOpen: i,
            });
          },
          redirect: function () {
            window.open("https://www.rferl.org", "_blank");
          },
          closeWindow: function () {
            window.close();
          },
          say: function (t) {
            alert(t);
          },
        },
        computed: {
          apps: function () {
            return this.$store.getters.apps;
          },
          themePrimaryColor: function () {
            return this.$store.getters.themePrimaryColor;
          },
          isWindowSmall: function () {
            return window.innerWidth <= 720 || window.innerHeight <= 375;
          },
          isMobile: function () {
            return (
              Boolean(this.$route.query && this.$route.query.mobile) ||
              this.isMobileBrowser
            );
          },
          isMobileBrowser: function () {
            return !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            );
          },
          startMenuStyle: function () {
            return {
              "--start-padding-top": this.isWindowSmall ? "3vh" : "1vh",
            };
          },
        },
        mounted: function () {
          var t = this;
          (this.interval1 = setInterval(function () {
            t.setRotateX("rotateNews", "rotateIndex1", t.rotateArray1);
          }, 3e3)),
            (this.interval2 = setInterval(function () {
              t.setRotateX("rotateApps", "rotateIndex2", t.rotateArray2);
            }, 5e3));
        },
        beforeDestroy: function () {
          clearInterval(this.interval1),
            clearInterval(this.interval2),
            clearInterval(this.intervalShutdown);
        },
      },
      U = R,
      F = (i("e3dc"), i("6544")),
      L = i.n(F),
      H = i("62ad"),
      W = i("a523"),
      Q = i("132d"),
      G = i("a722"),
      X = i("8860"),
      N = i("da13"),
      Y = i("34c3"),
      J = i("5d23"),
      K = i("f774"),
      q = i("0fd9"),
      Z = i("2fa4"),
      $ = Object(f["a"])(U, g, A, !1, null, "2b2acc3a", null),
      tt = $.exports;
    L()($, {
      VCol: H["a"],
      VContainer: W["a"],
      VIcon: Q["a"],
      VLayout: G["a"],
      VList: X["a"],
      VListItem: N["a"],
      VListItemIcon: Y["a"],
      VListItemTitle: J["c"],
      VNavigationDrawer: K["a"],
      VRow: q["a"],
      VSpacer: Z["a"],
    });
    var et = function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i(
        "v-container",
        { staticStyle: { padding: "1vw", margin: "0" } },
        [
          i("div", { attrs: { id: "start-modern" } }, [
            i(
              "div",
              { attrs: { id: "start-modern-search" } },
              [
                i("v-text-field", {
                  attrs: {
                    "hide-details": "",
                    label: "Type here to search",
                    "prepend-inner-icon": "mdi-magnify",
                    light: "",
                    height: "1.25vw",
                    "single-line": "",
                  },
                  on: {
                    click: function (t) {
                      t.stopPropagation();
                    },
                    keyup: t.searchInternet,
                    "click:prepend-inner": function (e) {
                      return t.toggleAppUrl(
                        2,
                        "https://www.google.com/search?igu=1&q=" + t.search,
                        !0
                      );
                    },
                  },
                  model: {
                    value: t.search,
                    callback: function (e) {
                      t.search = e;
                    },
                    expression: "search",
                  },
                }),
              ],
              1
            ),
            i("div", { staticClass: "start-title" }, [t._v("All app")]),
            i(
              "div",
              { staticClass: "start-wrapper" },
              t._l(t.apps, function (e) {
                return i(
                  "div",
                  {
                    key: e.id,
                    staticClass: "app-wrapper",
                    on: {
                      click: function (i) {
                        return t.toggleApp(e.id, !0);
                      },
                    },
                  },
                  [
                    i(
                      "div",
                      { staticClass: "app-icon" },
                      [
                        i(
                          "v-icon",
                          { attrs: { size: "2vw", color: e.iconcolor } },
                          [t._v(t._s(e.icon))]
                        ),
                      ],
                      1
                    ),
                    i("span", { staticClass: "app-title" }, [
                      t._v(t._s(e.title)),
                    ]),
                  ]
                );
              }),
              0
            ),
            i("div", { staticClass: "start-title" }, [t._v("Recommended")]),
            i(
              "div",
              { staticClass: "start-recommended" },
              t._l(t.recommendedApps, function (e) {
                return i(
                  "div",
                  {
                    key: e.id,
                    staticClass: "app-recommended",
                    on: {
                      click: function (i) {
                        return t.toggleApp(e.id, !0);
                      },
                    },
                  },
                  [
                    i(
                      "v-icon",
                      {
                        staticStyle: { display: "inline" },
                        attrs: { size: "2vw", color: e.iconcolor },
                      },
                      [t._v(t._s(e.icon))]
                    ),
                    i(
                      "span",
                      {
                        staticClass: "app-title",
                        staticStyle: {
                          display: "inline",
                          "white-space": "nowrap",
                          "padding-left": "0.15vw",
                        },
                      },
                      [t._v(t._s(e.title))]
                    ),
                  ],
                  1
                );
              }),
              0
            ),
          ]),
          i(
            "v-bottom-navigation",
            {
              attrs: {
                fixed: "",
                height: "2vw",
                "background-color": t.themePrimaryColor,
              },
            },
            [
              i(
                "v-btn",
                { attrs: { height: "2vw", color: t.themePrimaryColor } },
                [
                  i("v-icon", { attrs: { size: "1.25vw", color: "grey" } }, [
                    t._v("mdi-account-circle-outline"),
                  ]),
                ],
                1
              ),
              i("v-spacer"),
              i(
                "v-btn",
                {
                  attrs: { height: "2vw", color: t.themePrimaryColor },
                  on: {
                    click: function (e) {
                      return t.toggleApp(23, !0);
                    },
                  },
                },
                [
                  i("v-icon", { attrs: { size: "1.25vw" } }, [
                    t._v("mdi-cog-outline"),
                  ]),
                ],
                1
              ),
              i(
                "v-btn",
                {
                  attrs: { height: "2vw", color: t.themePrimaryColor },
                  on: { click: t.shutdown },
                },
                [
                  i("v-icon", { attrs: { size: "1.25vw" } }, [
                    t._v("mdi-power"),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      );
    },
      it = [],
      nt = {
        name: "app",
        data: function () {
          return { miniDrawer: !0, search: null };
        },
        methods: {
          getIconSize: function () {
            return this.isMobile ? 5 : 3.5;
          },
          shutdown: function () {
            var t = this;
            this.$store.dispatch("shutdownAction"),
              (this.intervalShutdown = setInterval(function () {
                t.$store.dispatch("shutdownEndAction");
              }, 5e3));
          },
          shutdownEnd: function () {
            this.$store.dispatch("shutdownEndAction");
          },
          toggleApp: function (t, e) {
            this.$store.dispatch("toggleAppAction", { id: t, isOpen: e });
          },
          clickApp: function () {
            0 == this.rotateApps
              ? this.toggleApp(22, !0)
              : this.toggleApp(21, !0);
          },
          clickNews: function () {
            0 == this.rotateNews
              ? this.toggleAppUrl(17, "https://news.sky.com/world", !0)
              : -90 == this.rotateNews
                ? this.toggleAppUrl(17, "https://lite.cnn.com/", !0)
                : this.toggleAppUrl(17, "https://www.thesun.co.uk/news/", !0);
          },
          toggleAppUrl: function (t, e, i) {
            this.$store.dispatch("toggleAppUrlAction", {
              id: t,
              url: e,
              isOpen: i,
            });
          },
          searchInternet: function (t) {
            13 === t.keyCode &&
              this.toggleAppUrl(
                2,
                "https://www.google.com/search?igu=1&q=" + this.search,
                !0
              );
          },
          redirect: function () {
            window.open("https://www.rferl.org", "_blank");
          },
          closeWindow: function () {
            window.close();
          },
        },
        computed: {
          apps: function () {
            return this.$store.getters.apps.filter(function (t) {
              return t.isValidApp;
            });
          },
          recommendedApps: function () {
            return this.$store.getters.apps.filter(function (t) {
              return t.isRecommended;
            });
          },
          themePrimaryColor: function () {
            return this.$store.getters.themePrimaryColor;
          },
          isWindowSmall: function () {
            return window.innerWidth <= 720 || window.innerHeight <= 375;
          },
          isMobile: function () {
            return (
              Boolean(this.$route.query && this.$route.query.mobile) ||
              this.isMobileBrowser
            );
          },
          isMobileBrowser: function () {
            return !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              navigator.userAgent
            );
          },
          startMenuStyle: function () {
            return {
              "--start-padding-top": this.isWindowSmall ? "1.5vw" : "0.5vw",
            };
          },
        },
      },
      ot = nt,
      st = (i("95c0"), i("b81c")),
      at = i("8336"),
      rt = i("8654"),
      ct = Object(f["a"])(ot, et, it, !1, null, "278f4706", null),
      lt = ct.exports;
    L()(ct, {
      VBottomNavigation: st["a"],
      VBtn: at["a"],
      VContainer: W["a"],
      VIcon: Q["a"],
      VSpacer: Z["a"],
      VTextField: rt["a"],
    });
    var ut = function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i("div", { ref: "calc", attrs: { id: "calculator" } }, [
        i(
          "div",
          { staticClass: "calculator-logs" },
          t._l(t.logs, function (e) {
            return i("span", { key: e }, [t._v(t._s(e))]);
          }),
          0
        ),
        i("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: t.value,
              expression: "value",
            },
          ],
          staticClass: "calculator-input",
          attrs: { type: "string" },
          domProps: { value: t.value },
          on: {
            keyup: function (e) {
              return !e.type.indexOf("key") &&
                t._k(e.keyCode, "enter", 13, e.key, "Enter")
                ? null
                : t.getResult();
            },
            input: function (e) {
              e.target.composing || (t.value = e.target.value);
            },
          },
        }),
        i("div", { staticClass: "calculator-row" }, [
          i("div", { staticClass: "calculator-col" }, [
            i(
              "button",
              {
                staticClass: "calculator-btn gray action",
                on: {
                  click: function (e) {
                    return t.clear();
                  },
                },
              },
              [t._v("C")]
            ),
          ]),
          i("div", { staticClass: "calculator-col" }, [
            i(
              "button",
              {
                staticClass: "calculator-btn gray action",
                on: {
                  click: function (e) {
                    return t.del();
                  },
                },
              },
              [t._v("del")]
            ),
          ]),
          i("div", { staticClass: "calculator-col" }, [
            i(
              "button",
              {
                staticClass: "calculator-btn gray action",
                on: {
                  click: function (e) {
                    return t.addExpresion("%");
                  },
                },
              },
              [t._v("%")]
            ),
          ]),
          i("div", { staticClass: "calculator-col" }, [
            i(
              "button",
              {
                staticClass: "calculator-btn clcaccent action",
                on: {
                  click: function (e) {
                    return t.addExpresion("/");
                  },
                },
              },
              [t._v("/")]
            ),
          ]),
        ]),
        i("div", { staticClass: "calculator-row" }, [
          i("div", { staticClass: "calculator-col" }, [
            i(
              "button",
              {
                staticClass: "calculator-btn",
                on: {
                  click: function (e) {
                    return t.addExpresion(7);
                  },
                },
              },
              [t._v("7")]
            ),
          ]),
          i("div", { staticClass: "calculator-col" }, [
            i(
              "button",
              {
                staticClass: "calculator-btn",
                on: {
                  click: function (e) {
                    return t.addExpresion(8);
                  },
                },
              },
              [t._v("8")]
            ),
          ]),
          i("div", { staticClass: "calculator-col" }, [
            i(
              "button",
              {
                staticClass: "calculator-btn",
                on: {
                  click: function (e) {
                    return t.addExpresion(9);
                  },
                },
              },
              [t._v("9")]
            ),
          ]),
          i("div", { staticClass: "calculator-col" }, [
            i(
              "button",
              {
                staticClass: "calculator-btn clcaccent action",
                on: {
                  click: function (e) {
                    return t.addExpresion("*");
                  },
                },
              },
              [t._v("*")]
            ),
          ]),
        ]),
        i("div", { staticClass: "calculator-row" }, [
          i("div", { staticClass: "calculator-col" }, [
            i(
              "button",
              {
                staticClass: "calculator-btn",
                on: {
                  click: function (e) {
                    return t.addExpresion(4);
                  },
                },
              },
              [t._v("4")]
            ),
          ]),
          i("div", { staticClass: "calculator-col" }, [
            i(
              "button",
              {
                staticClass: "calculator-btn",
                on: {
                  click: function (e) {
                    return t.addExpresion(5);
                  },
                },
              },
              [t._v("5")]
            ),
          ]),
          i("div", { staticClass: "calculator-col" }, [
            i(
              "button",
              {
                staticClass: "calculator-btn",
                on: {
                  click: function (e) {
                    return t.addExpresion(6);
                  },
                },
              },
              [t._v("6")]
            ),
          ]),
          i("div", { staticClass: "calculator-col" }, [
            i(
              "button",
              {
                staticClass: "calculator-btn clcaccent action",
                on: {
                  click: function (e) {
                    return t.addExpresion("-");
                  },
                },
              },
              [t._v("-")]
            ),
          ]),
        ]),
        i("div", { staticClass: "calculator-row" }, [
          i("div", { staticClass: "calculator-col" }, [
            i(
              "button",
              {
                staticClass: "calculator-btn",
                on: {
                  click: function (e) {
                    return t.addExpresion(1);
                  },
                },
              },
              [t._v("1")]
            ),
          ]),
          i("div", { staticClass: "calculator-col" }, [
            i(
              "button",
              {
                staticClass: "calculator-btn",
                on: {
                  click: function (e) {
                    return t.addExpresion(2);
                  },
                },
              },
              [t._v("2")]
            ),
          ]),
          i("div", { staticClass: "calculator-col" }, [
            i(
              "button",
              {
                staticClass: "calculator-btn",
                on: {
                  click: function (e) {
                    return t.addExpresion(3);
                  },
                },
              },
              [t._v("3")]
            ),
          ]),
          i("div", { staticClass: "calculator-col" }, [
            i(
              "button",
              {
                staticClass: "calculator-btn clcaccent action",
                on: {
                  click: function (e) {
                    return t.addExpresion("+");
                  },
                },
              },
              [t._v("+")]
            ),
          ]),
        ]),
        i("div", { staticClass: "calculator-row" }, [
          i("div", { staticClass: "calculator-col wide" }, [
            i(
              "button",
              {
                staticClass: "calculator-btn",
                on: {
                  click: function (e) {
                    return t.addExpresion(0);
                  },
                },
              },
              [t._v("0")]
            ),
          ]),
          i("div", { staticClass: "calculator-col" }, [
            i(
              "button",
              {
                staticClass: "calculator-btn action",
                on: {
                  click: function (e) {
                    return t.addExpresion(".");
                  },
                },
              },
              [t._v(".")]
            ),
          ]),
          i("div", { staticClass: "calculator-col" }, [
            i(
              "button",
              {
                staticClass: "calculator-btn clcaccent action",
                on: {
                  click: function (e) {
                    return t.getResult();
                  },
                },
              },
              [t._v("=")]
            ),
          ]),
        ]),
      ]);
    },
      ht = [],
      dt = i("a97d"),
      pt = dt["a"],
      ft = (i("1fca"), Object(f["a"])(pt, ut, ht, !1, null, "74721b52", null)),
      mt = ft.exports,
      vt = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i(
          "v-sheet",
          { attrs: { height: "500" } },
          [
            i("v-calendar", {
              ref: "calendar",
              attrs: {
                type: t.type,
                light: "",
                now: t.getDate,
                value: t.getDate,
              },
              on: { "click:more": t.viewDay, "click:date": t.viewDay },
            }),
          ],
          1
        );
      },
      gt = [],
      At = {
        data: function () {
          return { time: Date.now(), type: "month", start: null, end: null };
        },
        computed: {
          getDate: function () {
            return h()(this.time).format("YYYY-MM-DD");
          },
          title: function () {
            var t = this.start,
              e = this.end;
            if (!t || !e) return "";
            var i = this.monthFormatter(t),
              n = this.monthFormatter(e),
              o = i === n ? "" : n,
              s = t.year,
              a = e.year,
              r = s === a ? "" : a,
              c = t.day + this.nth(t.day),
              l = e.day + this.nth(e.day);
            switch (this.type) {
              case "month":
                return "".concat(i, " ").concat(s);
              case "week":
              case "4day":
                return ""
                  .concat(i, " ")
                  .concat(c, " ")
                  .concat(s, " - ")
                  .concat(o, " ")
                  .concat(l, " ")
                  .concat(r);
              case "day":
                return "".concat(i, " ").concat(c, " ").concat(s);
            }
            return "";
          },
          monthFormatter: function () {
            return this.$refs.calendar.getFormatter({
              timeZone: "UTC",
              month: "long",
            });
          },
        },
        mounted: function () {
          this.$refs.calendar.checkChange();
        },
        methods: {
          viewDay: function (t) {
            var e = t.date;
            "day" == this.type
              ? ((this.focus = e), (this.type = "month"))
              : ((this.focus = e), (this.type = "day"));
          },
          prev: function () {
            this.$refs.calendar.prev();
          },
          next: function () {
            this.$refs.calendar.next();
          },
          nth: function (t) {
            return t > 3 && t < 21
              ? "th"
              : ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"][
              t % 10
              ];
          },
        },
      },
      wt = At,
      bt = i("a4f6"),
      yt = i("8dd9"),
      kt = Object(f["a"])(wt, vt, gt, !1, null, "ca30b8b6", null),
      xt = kt.exports;
    L()(kt, { VCalendar: bt["a"], VSheet: yt["a"] });
    var Ct = function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i(
        "div",
        {
          staticStyle: {
            padding: "0",
            margin: "0",
            height: "100%",
            "overflow-y": "scroll",
          },
        },
        [
          i(
            "v-row",
            {
              key: 1,
              staticStyle: { width: "100%", height: "100%" },
              attrs: { "no-gutters": "" },
            },
            [
              i(
                "v-col",
                { key: 1, attrs: { cols: "3" } },
                [
                  i(
                    "v-list",
                    {
                      attrs: {
                        light: "",
                        dense: "",
                        width: "100%",
                        height: "100%",
                      },
                    },
                    t._l(t.items, function (e) {
                      return i(
                        "v-list-item",
                        {
                          key: e.name,
                          attrs: { link: "" },
                          on: {
                            click: function (i) {
                              t.currentItem = e;
                            },
                          },
                        },
                        [
                          i(
                            "v-list-item-action",
                            [
                              i("v-icon", { attrs: { color: "#3886C4" } }, [
                                t._v(t._s(e.icon)),
                              ]),
                            ],
                            1
                          ),
                          i(
                            "v-list-item-content",
                            [i("v-list-item-title", [t._v(t._s(e.name))])],
                            1
                          ),
                        ],
                        1
                      );
                    }),
                    1
                  ),
                ],
                1
              ),
              i(
                "v-col",
                { key: 2, attrs: { cols: "9" } },
                [
                  i(t.currentItem.path, {
                    tag: "v-content",
                    staticStyle: { width: "99%", background: "#E1E7FA" },
                  }),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      );
    },
      St = [],
      Ot = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i(
          "v-container",
          { attrs: { fluid: "" } },
          [
            i(
              "v-row",
              { attrs: { dense: "" } },
              [
                i(
                  "v-col",
                  { attrs: { cols: "6" } },
                  [
                    i(
                      "v-card",
                      {
                        attrs: { light: "", "max-width": "200" },
                        on: {
                          click: function (e) {
                            return t.navigate(1);
                          },
                        },
                      },
                      [
                        i(
                          "v-card-title",
                          [
                            i(
                              "v-icon",
                              {
                                attrs: {
                                  large: "",
                                  left: "",
                                  color: "#3886C4",
                                },
                              },
                              [
                                t._v(
                                  "\n                        mdi-cog\n                    "
                                ),
                              ]
                            ),
                            i(
                              "span",
                              { staticClass: "title font-weight-light" },
                              [t._v("Wallpaper")]
                            ),
                          ],
                          1
                        ),
                        i("v-card-text", [
                          t._v(
                            "\n                    Display, wallpaper\n                "
                          ),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                i(
                  "v-col",
                  { attrs: { cols: "6" } },
                  [
                    i(
                      "v-card",
                      {
                        attrs: { light: "", "max-width": "200" },
                        on: {
                          click: function (e) {
                            return t.navigate(2);
                          },
                        },
                      },
                      [
                        i(
                          "v-card-title",
                          [
                            i(
                              "v-icon",
                              {
                                attrs: {
                                  large: "",
                                  left: "",
                                  color: "#3886C4",
                                },
                              },
                              [
                                t._v(
                                  "\n                        mdi-monitor-edit\n                    "
                                ),
                              ]
                            ),
                            i(
                              "span",
                              { staticClass: "title font-weight-light" },
                              [t._v("Theme")]
                            ),
                          ],
                          1
                        ),
                        i("v-card-text", [
                          t._v(
                            "\n                    System colors\n                "
                          ),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
            i(
              "v-row",
              { staticStyle: { "margin-top": "30px" }, attrs: { dense: "" } },
              [
                i(
                  "v-col",
                  { attrs: { cols: "6" } },
                  [
                    i(
                      "v-card",
                      {
                        attrs: { light: "", "max-width": "200" },
                        on: {
                          click: function (e) {
                            return t.navigate(3);
                          },
                        },
                      },
                      [
                        i(
                          "v-card-title",
                          [
                            i(
                              "v-icon",
                              {
                                attrs: {
                                  large: "",
                                  left: "",
                                  color: "#3886C4",
                                },
                              },
                              [
                                t._v(
                                  "\n                        mdi-palette-outline\n                    "
                                ),
                              ]
                            ),
                            i(
                              "span",
                              { staticClass: "title font-weight-light" },
                              [t._v("Color")]
                            ),
                          ],
                          1
                        ),
                        i("v-card-text", [
                          t._v(
                            "\n                    System colors\n                "
                          ),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                i(
                  "v-col",
                  { attrs: { cols: "6" } },
                  [
                    i(
                      "v-card",
                      {
                        attrs: { light: "", "max-width": "200" },
                        on: {
                          click: function (e) {
                            return t.navigate(4);
                          },
                        },
                      },
                      [
                        i(
                          "v-card-title",
                          [
                            i(
                              "v-icon",
                              {
                                attrs: {
                                  large: "",
                                  left: "",
                                  color: "#3886C4",
                                },
                              },
                              [
                                t._v(
                                  "\n                        mdi-playlist-plus\n                    "
                                ),
                              ]
                            ),
                            i(
                              "span",
                              { staticClass: "title font-weight-light" },
                              [t._v("Install app")]
                            ),
                          ],
                          1
                        ),
                        i("v-card-text", [
                          t._v(
                            "\n                    Install application\n                "
                          ),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
            i(
              "v-row",
              { staticStyle: { "margin-top": "30px" }, attrs: { dense: "" } },
              [
                i(
                  "v-col",
                  { attrs: { cols: "6" } },
                  [
                    i(
                      "v-card",
                      {
                        attrs: { light: "", "max-width": "200" },
                        on: {
                          click: function (e) {
                            return t.navigate(5);
                          },
                        },
                      },
                      [
                        i(
                          "v-card-title",
                          [
                            i(
                              "v-icon",
                              {
                                attrs: {
                                  large: "",
                                  left: "",
                                  color: "#3886C4",
                                },
                              },
                              [
                                t._v(
                                  "\n                        mdi-playlist-remove\n                    "
                                ),
                              ]
                            ),
                            i(
                              "span",
                              { staticClass: "title font-weight-light" },
                              [t._v("Uninstall app")]
                            ),
                          ],
                          1
                        ),
                        i("v-card-text", [
                          t._v(
                            "\n                    Uninstall application\n                "
                          ),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                i(
                  "v-col",
                  { attrs: { cols: "6" } },
                  [
                    i(
                      "v-card",
                      {
                        attrs: { light: "", "max-width": "200" },
                        on: {
                          click: function (e) {
                            return t.navigate(6);
                          },
                        },
                      },
                      [
                        i(
                          "v-card-title",
                          [
                            i(
                              "v-icon",
                              {
                                attrs: {
                                  large: "",
                                  left: "",
                                  color: "#3886C4",
                                },
                              },
                              [
                                t._v(
                                  "\n                        mdi-information-outline\n                    "
                                ),
                              ]
                            ),
                            i(
                              "span",
                              { staticClass: "title font-weight-light" },
                              [t._v("About")]
                            ),
                          ],
                          1
                        ),
                        i("v-card-text", [
                          t._v(
                            "\n                    GravityOS information\n                "
                          ),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                i("v-col", { attrs: { cols: "6" } }),
              ],
              1
            ),
          ],
          1
        );
      },
      Mt = [],
      jt = {
        methods: {
          navigate: function (t) {
            this.$parent.navigate(t);
          },
        },
      },
      zt = jt,
      Et = i("b0af"),
      Bt = i("99d9"),
      Dt = Object(f["a"])(zt, Ot, Mt, !1, null, "0439b721", null),
      Pt = Dt.exports;
    L()(Dt, {
      VCard: Et["a"],
      VCardText: Bt["b"],
      VCardTitle: Bt["c"],
      VCol: H["a"],
      VContainer: W["a"],
      VIcon: Q["a"],
      VRow: q["a"],
    });
    var Tt = function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i(
        "div",
        { staticStyle: { padding: "10px" } },
        [
          i(
            "v-row",
            { key: 1 },
            [
              i(
                "v-col",
                { key: 1 },
                [
                  i("v-autocomplete", {
                    attrs: {
                      disabled: t.isUpdating,
                      items: t.wallpapers,
                      filled: "",
                      color: "blue-grey lighten-2",
                      label: "Image url",
                      "item-text": "src.original",
                      "item-value": "src.original",
                    },
                    scopedSlots: t._u([
                      {
                        key: "item",
                        fn: function (e) {
                          return [
                            "object" !== typeof e.item
                              ? [
                                i("v-list-item-content", {
                                  domProps: { textContent: t._s(e.item) },
                                }),
                              ]
                              : [
                                i("v-list-item-avatar", [
                                  i("img", {
                                    attrs: { src: e.item.src.tiny },
                                  }),
                                ]),
                                i(
                                  "v-list-item-content",
                                  [
                                    i("v-list-item-title", {
                                      domProps: {
                                        innerHTML: t._s(
                                          "Photographer: " +
                                          e.item.photographer
                                        ),
                                      },
                                    }),
                                  ],
                                  1
                                ),
                              ],
                          ];
                        },
                      },
                    ]),
                    model: {
                      value: t.desktopUrl,
                      callback: function (e) {
                        t.desktopUrl = e;
                      },
                      expression: "desktopUrl",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          i(
            "v-row",
            { key: 2 },
            [
              i(
                "v-col",
                { key: 1 },
                [
                  i("v-img", {
                    ref: "imgPreview",
                    attrs: { "max-height": "67vh", src: t.desktopUrl },
                    on: {
                      "update:src": function (e) {
                        t.desktopUrl = e;
                      },
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          i(
            "v-row",
            { key: 3 },
            [
              i(
                "v-col",
                { key: 1, staticStyle: { "text-align": "right" } },
                [
                  i(
                    "v-btn",
                    {
                      staticClass: "mr-4",
                      on: {
                        click: function (e) {
                          return (
                            e.preventDefault(),
                            t.setDefaultDesktopUrl.apply(null, arguments)
                          );
                        },
                      },
                    },
                    [t._v("Default")]
                  ),
                  i(
                    "v-btn",
                    {
                      staticClass: "mr-4",
                      on: {
                        click: function (e) {
                          return (
                            e.preventDefault(),
                            t.changeDesktopUrl.apply(null, arguments)
                          );
                        },
                      },
                    },
                    [t._v("Save")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      );
    },
      Vt = [],
      _t = {
        data: function () {
          return {
            desktopUrl: "",
            isUpdating: !0,
            wallpapers: [],
            rules: [
              function (t) {
                return !!t || "Required.";
              },
              function (t) {
                return (t && t.length >= 7) || "Min 7 characters";
              },
              function (t) {
                var e =
                  /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/;
                return e.test(t) || "Invalid url.";
              },
            ],
          };
        },
        mounted: function () {
          var t = this;
          null === localStorage.getItem("desktopUrl")
            ? this.setDefaultDesktopUrl()
            : (this.desktopUrl = localStorage.desktopUrl);
          var e =
            "https://api.pexels.com/v1/search?query=wallpaper&per_page=15&page=1";
          this.$http
            .get(e, {
              headers: {
                Authorization:
                  "563492ad6f91700001000001c452b4d2c6af4068b2623ec6df32fcc3",
              },
            })
            .then(function (e) {
              (t.wallpapers = e.data.photos), (t.isUpdating = !1);
            });
        },
        methods: {
          changeDesktopUrl: function () {
            this.$store.dispatch("changeDesktopUrlAction", this.desktopUrl);
          },
          defaultDesktopUrl: function () {
            this.$store.dispatch("setDefaultDesktopUrlAction");
          },
          setDefaultDesktopUrl: function () {
            this.defaultDesktopUrl(),
              (this.desktopUrl = this.$store.getters.desktopUrl);
          },
        },
        watch: {
          desktopUrl: function (t) {
            localStorage.desktopUrl = t;
          },
        },
      },
      It = _t,
      Rt = (i("706d"), i("c6a6")),
      Ut = i("adda"),
      Ft = i("8270"),
      Lt = Object(f["a"])(It, Tt, Vt, !1, null, null, null),
      Ht = Lt.exports;
    L()(Lt, {
      VAutocomplete: Rt["a"],
      VBtn: at["a"],
      VCol: H["a"],
      VImg: Ut["a"],
      VListItemAvatar: Ft["a"],
      VListItemContent: J["a"],
      VListItemTitle: J["c"],
      VRow: q["a"],
    });
    var Wt = function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i(
        "div",
        { staticStyle: { padding: "10px" } },
        [
          i(
            "v-row",
            { key: 1 },
            [
              i(
                "v-col",
                { key: 1 },
                [
                  i("v-select", {
                    attrs: {
                      items: t.items,
                      "item-text": "name",
                      "item-value": "id",
                      label: "Theme",
                    },
                    model: {
                      value: t.currentThemeIndex,
                      callback: function (e) {
                        t.currentThemeIndex = e;
                      },
                      expression: "currentThemeIndex",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          i(
            "v-row",
            { key: 2, staticStyle: { "margin-top": "0" } },
            [
              i(
                "v-col",
                { key: 1 },
                [
                  i("v-img", {
                    ref: "imgPreview",
                    attrs: {
                      "max-height": "67vh",
                      contain: "",
                      src: t.currentThemePreview,
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          i(
            "v-row",
            { key: 3 },
            [
              i(
                "v-col",
                { key: 1, staticStyle: { "text-align": "right" } },
                [
                  i(
                    "v-btn",
                    {
                      staticClass: "mr-4",
                      on: {
                        click: function (e) {
                          return (
                            e.preventDefault(),
                            t.setDefaultTheme.apply(null, arguments)
                          );
                        },
                      },
                    },
                    [t._v("Default")]
                  ),
                  i(
                    "v-btn",
                    {
                      staticClass: "mr-4",
                      on: {
                        click: function (e) {
                          return (
                            e.preventDefault(),
                            t.changeTheme.apply(null, arguments)
                          );
                        },
                      },
                    },
                    [t._v("Save")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      );
    },
      Qt = [],
      Gt = i("712c"),
      Xt = i.n(Gt),
      Nt = i("ff61"),
      Yt = i.n(Nt),
      Jt = {
        data: function () {
          return {
            currentThemeIndex: "",
            currentThemePreview: Yt.a,
            items: [
              { id: "0", name: "Classic", preview: Xt.a },
              { id: "1", name: "Modern", preview: Yt.a },
            ],
          };
        },
        mounted: function () {
          null === localStorage.getItem("currentThemeIndex")
            ? this.setDefaultTheme()
            : (this.currentThemeIndex = localStorage.currentThemeIndex);
        },
        methods: {
          changeTheme: function () {
            this.$store.dispatch("changeThemeAction", this.currentThemeIndex),
              (localStorage.themePrimaryColor =
                this.$store.getters.themePrimaryColor),
              (localStorage.desktopUrl = this.$store.getters.desktopUrl),
              (this.$vuetify.theme.dark =
                this.$store.getters.currentTheme.isDarkTheme);
          },
          defaultTheme: function () {
            this.$store.dispatch("setDefaultThemeAction"),
              (localStorage.themePrimaryColor =
                this.$store.getters.themePrimaryColor),
              (localStorage.desktopUrl = this.$store.getters.desktopUrl),
              (this.$vuetify.theme.dark =
                this.$store.getters.currentTheme.isDarkTheme);
          },
          setDefaultTheme: function () {
            this.defaultTheme(),
              (this.currentThemeIndex = this.$store.getters.currentThemeIndex);
          },
        },
        watch: {
          currentThemeIndex: function (t) {
            (localStorage.currentThemeIndex = t),
              (this.currentThemePreview = this.items[t].preview);
          },
        },
      },
      Kt = Jt,
      qt = i("b974"),
      Zt = Object(f["a"])(Kt, Wt, Qt, !1, null, null, null),
      $t = Zt.exports;
    L()(Zt, {
      VBtn: at["a"],
      VCol: H["a"],
      VImg: Ut["a"],
      VRow: q["a"],
      VSelect: qt["a"],
    });
    var te = function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i(
        "div",
        { staticStyle: { padding: "10px" } },
        [
          i(
            "v-row",
            { key: 1 },
            [
              i(
                "v-col",
                { key: 1, staticStyle: { "text-align": "center" } },
                [
                  i(
                    "div",
                    {
                      style: {
                        background: "" + t.themePrimaryColor,
                        width: "80%",
                        "margin-left": "10%",
                      },
                    },
                    [
                      i("v-img", {
                        ref: "imgPreview",
                        attrs: {
                          "max-height": "67vh",
                          "aspect-ratio": "1.7778",
                          contain: "",
                          src: t.themePreview,
                        },
                      }),
                    ],
                    1
                  ),
                ]
              ),
            ],
            1
          ),
          i(
            "v-row",
            { key: 2 },
            [
              i(
                "v-col",
                { key: 1 },
                [
                  i("v-color-picker", {
                    attrs: {
                      "show-swatches": "",
                      "hide-canvas": "",
                      "hide-inputs": "",
                    },
                    model: {
                      value: t.themePrimaryColor,
                      callback: function (e) {
                        t.themePrimaryColor = e;
                      },
                      expression: "themePrimaryColor",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          i(
            "v-row",
            { key: 3 },
            [
              i(
                "v-col",
                { key: 1, staticStyle: { "text-align": "right" } },
                [
                  i(
                    "v-btn",
                    {
                      staticClass: "mr-4",
                      on: {
                        click: function (e) {
                          return (
                            e.preventDefault(),
                            t.setDefaultDesktopColor.apply(null, arguments)
                          );
                        },
                      },
                    },
                    [t._v("Default")]
                  ),
                  i(
                    "v-btn",
                    {
                      staticClass: "mr-4",
                      on: {
                        click: function (e) {
                          return (
                            e.preventDefault(),
                            t.changeThemePrimaryColor.apply(null, arguments)
                          );
                        },
                      },
                    },
                    [t._v("Save")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      );
    },
      ee = [],
      ie = i("b7f4"),
      ne = i.n(ie),
      oe = i("5ff0"),
      se = i.n(oe),
      ae = {
        data: function () {
          return { themePrimaryColor: "", themePreview: ne.a };
        },
        mounted: function () {
          null === localStorage.getItem("themePrimaryColor")
            ? this.setDefaultDesktopColor()
            : (this.themePrimaryColor = localStorage.themePrimaryColor),
            0 == this.$store.getters.currentThemeIndex
              ? (this.themePreview = se.a)
              : (this.themePreview = ne.a);
        },
        methods: {
          changeThemePrimaryColor: function () {
            this.$store.dispatch(
              "changeThemePrimaryColorAction",
              this.themePrimaryColor
            );
          },
          defaultThemePrimaryColor: function () {
            this.$store.dispatch("setDefaultThemePrimaryColorAction");
          },
          setDefaultDesktopColor: function () {
            this.defaultThemePrimaryColor(),
              (this.themePrimaryColor = this.$store.getters.themePrimaryColor);
          },
        },
        watch: {
          themePrimaryColor: function (t) {
            localStorage.themePrimaryColor = t;
          },
        },
      },
      re = ae,
      ce = (i("950d"), i("03a4")),
      le = Object(f["a"])(re, te, ee, !1, null, "ca1e06be", null),
      ue = le.exports;
    L()(le, {
      VBtn: at["a"],
      VCol: H["a"],
      VColorPicker: ce["a"],
      VImg: Ut["a"],
      VRow: q["a"],
    });
    var he = function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i("div", { staticStyle: { padding: "10px" } }, [
        i(
          "div",
          { staticClass: "start-wrapper" },
          t._l(t.apps, function (e) {
            return i("div", { key: e.id, staticClass: "app-wrapper" }, [
              i("div", { staticClass: "app-icon" }, [
                i("img", { staticClass: "icn", attrs: { src: e.icon } }),
              ]),
              i("span", { staticClass: "app-title" }, [t._v(t._s(e.name))]),
              i(
                "span",
                { staticClass: "app-install" },
                [
                  i(
                    "v-btn",
                    {
                      attrs: {
                        small: "",
                        disabled: t.checkInstalledApps(e.url),
                      },
                      on: {
                        click: function (i) {
                          return t.install(e.id);
                        },
                      },
                    },
                    [t._v("Install")]
                  ),
                ],
                1
              ),
            ]);
          }),
          0
        ),
      ]);
    },
      de = [],
      pe = (i("96cf"), i("1da1")),
      fe = {
        components: {},
        data: function () {
          return {
            apps: [
              {
                id: 1,
                name: "BMI Calculator",
                url: "https://www-jvktpeglfs.now.sh/",
                icon: i("92f7"),
              },
              {
                id: 2,
                name: "Craft Cards",
                url: "https://www.craft.cards/",
                icon: i("c6e2"),
              },
              {
                id: 3,
                name: "Crossnote",
                url: "https://crossnote.app/",
                icon: i("c6a1"),
              },
              {
                id: 4,
                name: "Currency Calculator",
                url: "https://www.currency-calc.com/",
                icon: i("a078"),
              },
              {
                id: 5,
                name: "Dictionary",
                url: "https://fallaciousreasoning.github.io/dictionary/",
                icon: i("b916"),
              },
              {
                id: 6,
                name: "DOOM Fire",
                url: "https://doom-fire.com/",
                icon: i("4a46"),
              },
              {
                id: 7,
                name: "InstaLoadGram",
                url: "https://www.instaloadgram.com/",
                icon: i("afda"),
              },
              {
                id: 8,
                name: "IP Tools",
                url: "https://iptools.tk/",
                icon: i("5583"),
              },
              {
                id: 9,
                name: "Just Rain Sounds",
                url: "https://justrainsounds.com/",
                icon: i("25e7"),
              },
              {
                id: 10,
                name: "Material Money",
                url: "https://material.money/",
                icon: i("e78c"),
              },
              {
                id: 11,
                name: "Morse Code",
                url: "https://morsecode.tools/",
                icon: i("6f08"),
              },
              {
                id: 12,
                name: "Personal Calculator",
                url: "https://bhar.app/calculator/",
                icon: i("2fd2"),
              },
              {
                id: 13,
                name: "Notepad",
                url: "https://notepad.js.org",
                icon: i("785d"),
              },
              {
                id: 14,
                name: "PixelCraft",
                url: "https://pixelcraft.web.app/",
                icon: i("0afd"),
              },
              {
                id: 15,
                name: "Progrssive Reader",
                url: "https://progrssive.now.sh/",
                icon: i("36a6"),
              },
              {
                id: 16,
                name: "Random Picker",
                url: "https://random.jasonlbeggs.com",
                icon: i("2ed9"),
              },
              {
                id: 17,
                name: "Reddify for Reddit",
                url: "https://reddit.premii.com/",
                icon: i("2f10"),
              },
              {
                id: 18,
                name: "StickyWall",
                url: "https://stickywall.tk/",
                icon: i("74fc"),
              },
              {
                id: 19,
                name: "Stopwatch",
                url: "https://stopwatch-app.com",
                icon: i("269a"),
              },
              {
                id: 20,
                name: "Tic Tac Toe",
                url: "https://janzbinden.github.io/tictactoe/",
                icon: i("4b7c"),
              },
              {
                id: 21,
                name: "Todoist",
                url: "https://todoist.com/app/",
                icon: i("2932"),
              },
              {
                id: 22,
                name: "Trivago",
                url: "https://www.trivago.com",
                icon: i("f85e"),
              },
            ],
          };
        },
        created: function () { },
        mounted: function () { },
        methods: {
          install: (function () {
            var t = Object(pe["a"])(
              regeneratorRuntime.mark(function t(e) {
                var i;
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (!e) {
                            t.next = 5;
                            break;
                          }
                          return (
                            (i = this.apps[e - 1]),
                            (t.next = 4),
                            this.$store.dispatch("saveInstalledApp", i)
                          );
                        case 4:
                          this.$store.dispatch("getInstalledApps");
                        case 5:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            );
            function e(e) {
              return t.apply(this, arguments);
            }
            return e;
          })(),
          checkInstalledApps: function (t) {
            return !!this.$store.state.installedApps.some(function (e) {
              return e.url === t;
            });
          },
        },
        computed: {
          appUrl: function () {
            return this.app ? this.app.url : "";
          },
        },
        watch: {},
      },
      me = fe,
      ve = (i("ec0e"), Object(f["a"])(me, he, de, !1, null, null, null)),
      ge = ve.exports;
    L()(ve, { VBtn: at["a"] });
    var Ae = function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i(
        "v-container",
        { attrs: { fluid: "" } },
        t._l(t.installedApps, function (e, n) {
          return i(
            "v-row",
            {
              key: e.id,
              class: n % 2 == 0 ? "grey lighten-5" : "grey darken-2",
              attrs: { justify: "space-between", "no-gutters": "" },
            },
            [
              i(
                "v-col",
                { key: "1" },
                [
                  i(
                    "v-card",
                    {
                      class:
                        n % 2 == 0
                          ? "pa-2 grey--text text--darken-4"
                          : "pa-2 white--text",
                      attrs: {
                        color: "rgb(255, 0, 0, 0)",
                        outlined: "",
                        tile: "",
                      },
                    },
                    [
                      t._v(
                        "\n                " + t._s(e.name) + "\n            "
                      ),
                    ]
                  ),
                ],
                1
              ),
              i(
                "v-col",
                { key: "2" },
                [
                  i(
                    "v-card",
                    {
                      class:
                        n % 2 == 0
                          ? "pa-2 grey--text text--darken-4"
                          : "pa-2 white--text",
                      attrs: {
                        color: "rgb(255, 0, 0, 0)",
                        outlined: "",
                        tile: "",
                      },
                    },
                    [
                      t._v(
                        "\n                " + t._s(e.url) + "\n            "
                      ),
                    ]
                  ),
                ],
                1
              ),
              i(
                "v-col",
                { key: "3", attrs: { md: "1" } },
                [
                  i(
                    "v-btn",
                    {
                      attrs: { fab: "", text: "", small: "" },
                      on: {
                        click: function (i) {
                          return t.deleteInstalledApp(e);
                        },
                      },
                    },
                    [
                      i(
                        "v-icon",
                        {
                          class:
                            n % 2 == 0
                              ? "grey--text text--darken-4"
                              : "white--text",
                          attrs: { small: "" },
                        },
                        [t._v("mdi-delete-forever")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        }),
        1
      );
    },
      we = [],
      be = {
        data: function () {
          return {};
        },
        computed: {
          installedApps: function () {
            return this.$store.state.installedApps;
          },
        },
        created: function () {
          this.$store.dispatch("getInstalledApps");
        },
        methods: {
          deleteInstalledApp: (function () {
            var t = Object(pe["a"])(
              regeneratorRuntime.mark(function t(e) {
                return regeneratorRuntime.wrap(
                  function (t) {
                    while (1)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (
                            console.log("delete", e.id),
                            (t.next = 3),
                            this.$store.dispatch("deleteInstalledApp", e)
                          );
                        case 3:
                          this.$store.dispatch("getInstalledApps");
                        case 4:
                        case "end":
                          return t.stop();
                      }
                  },
                  t,
                  this
                );
              })
            );
            function e(e) {
              return t.apply(this, arguments);
            }
            return e;
          })(),
        },
      },
      ye = be,
      ke = Object(f["a"])(ye, Ae, we, !1, null, "1f8b2026", null),
      xe = ke.exports;
    L()(ke, {
      VBtn: at["a"],
      VCard: Et["a"],
      VCol: H["a"],
      VContainer: W["a"],
      VIcon: Q["a"],
      VRow: q["a"],
    });
    var Ce = i("6bce"),
      Se = [
        { name: "Home", icon: "mdi-home-outline", path: "Home" },
        { name: "Wallpaper", icon: "mdi-cog", path: "Wallpaper" },
        { name: "Theme", icon: "mdi-monitor-edit", path: "Theme" },
        { name: "Colors", icon: "mdi-palette-outline", path: "Color" },
        { name: "Install", icon: "mdi-playlist-plus", path: "Install" },
        { name: "Uninstall", icon: "mdi-playlist-remove", path: "Uninstall" },
        { name: "About", icon: "mdi-information-outline", path: "About" },
      ],
      Oe = {
        components: {
          Home: Pt,
          Wallpaper: Ht,
          Theme: $t,
          Color: ue,
          Install: ge,
          Uninstall: xe,
          About: Ce["default"],
        },
        data: function () {
          return { items: Se, currentItem: Se[0] };
        },
        methods: {
          navigate: function (t) {
            this.currentItem = Se[t];
          },
        },
      },
      Me = Oe,
      je = i("a75b"),
      ze = i("1800"),
      Ee = Object(f["a"])(Me, Ct, St, !1, null, "b34d6c36", null),
      Be = Ee.exports;
    L()(Ee, {
      VCol: H["a"],
      VContent: je["a"],
      VIcon: Q["a"],
      VList: X["a"],
      VListItem: N["a"],
      VListItemAction: ze["a"],
      VListItemContent: J["a"],
      VListItemTitle: J["c"],
      VRow: q["a"],
    });
    var De = function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i("iframe", {
        ref: "ifMain",
        staticStyle: { width: "100%", height: "100%" },
        attrs: {
          id: "ifMain",
          srcdoc: t.content,
          src: "",
          sandbox:
            "allow-forms allow-modals allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation-by-user-activation",
        },
        on: { onload: t.oniframeload, onerror: t.oniframeerror },
      });
    },
      Pe = [],
      Te =
        (i("a481"),
          i("f559"),
        {
          name: "iframe-bypass",
          props: { url: String },
          data: function () {
            return { content: String, contentTest: String, timer: null };
          },
          methods: {
            onload: function () {
              console.log("IFrameBypass - onload: the iframe is loaded");
            },
            oniframeload: function () {
              console.log("IFrameBypass - oniframeload");
            },
            oniframeerror: function () {
              console.log(
                "IFrameBypass - oniframeerror: error on iframe loading"
              ),
                this.$emit("iframeerror", event);
            },
            checkIframeLoaded: function () {
              var t = this.$refs.ifMain,
                e = t.contentDocument || t.contentWindow.document;
              if ("complete" == e.readyState || "interactive" == e.readyState) {
                if ("" !== e.body.innerHTML)
                  return (
                    console.log(
                      "IFrameBypass - checkIframeLoaded: iframe was loaded"
                    ),
                    this.$emit("iframeloaded", event),
                    void clearInterval(this.timer)
                  );
                console.log(
                  "IFrameBypass - checkIframeLoaded: iframe body.innerHTML is empty"
                );
              }
            },
            load: function (t, e) {
              var i = this;
              return t
                ? t.startsWith("http")
                  ? ((this.content =
                    '<html>\n                        <head>\n                            <style>\n                            .loader {\n                                position: absolute;\n                                top: calc(50% - 25px);\n                                left: calc(50% - 25px);\n                                width: 50px;\n                                height: 50px;\n                                background-color: #333;\n                                border-radius: 50%;\n                                animation: loader 1s infinite ease-in-out;\n                            }\n                            @keyframes loader {\n                                0% {\n                                transform: scale(0);\n                                }\n                                100% {\n                                transform: scale(1);\n                                opacity: 0;\n                                }\n                            }\n                            </style>\n                        </head>\n                        <body>\n                            <div class="loader"></div>\n                        </body>\n                        </html>'),
                    void this.fetchProxy(t, e, 0)
                      .then(function (t) {
                        return t.text();
                      })
                      .then(function (t) {
                        t
                          ? ((i.timer = setInterval(i.checkIframeLoaded, 4e3)),
                            (i.content = t.replace(
                              /<head([^>]*)>/i,
                              '<head$1>\n                            <base href="'
                                .concat(
                                  i.url,
                                  "\">\n                            <script>\n                            // X-Frame-Bypass navigation event handlers\n                            document.addEventListener('click', e => {\n                                if (window.frameElement && document.activeElement && document.activeElement.href) {\n                                    e.preventDefault()\n                                    load(document.activeElement.href)\n                                }\n                            })\n                            document.addEventListener('submit', e => {\n                                if (window.frameElement && document.activeElement && document.activeElement.form && document.activeElement.form.action) {\n                                    e.preventDefault()\n                                    if (document.activeElement.form.method === 'post')\n                                        load(document.activeElement.form.action, {method: 'post', body: new FormData(document.activeElement.form)})\n                                    else\n                                        load(document.activeElement.form.action + '?' + new URLSearchParams(new FormData(document.activeElement.form)))\n                                }\n                            })\n                            "
                                )
                                .concat(
                                  i.fetchProxy,
                                  "\n                            "
                                )
                                .concat(
                                  i.load,
                                  "\n                        </script>"
                                )
                            )),
                            console.log(
                              "IFrameBypass - load: iframe was loaded"
                            ))
                          : console.log(
                            "IFrameBypass - load: iframe data is empty"
                          );
                      })
                      .catch(function (t) {
                        return console.error(
                          "IFrameBypass - load: cannot load iframe",
                          t
                        );
                      }))
                  : (console.log(
                    "IFrameBypass - load: src " +
                    this.url +
                    " does not start with http(s)://"
                  ),
                    void (this.content =
                      "<html>\n                        <head></head>\n                        <body>\n                            <div>This url doesn't support GravityOS installing.</div>\n                        </body>\n                        </html>"))
                : (console.log("IFrameBypass src is empty"),
                  void (this.content =
                    "<html>\n                        <head></head>\n                        <body>\n                        </body>\n                        </html>"));
            },
            fetchProxy: function (t, e, i) {
              var n = this,
                o = [
                  "https://cors.io/?",
                  "https://jsonp.afeld.me/?url=",
                  "https://cors-anywhere.herokuapp.com/",
                ];
              return fetch(o[i] + t, e)
                .then(function (t) {
                  if (!t.ok)
                    throw new Error(
                      "".concat(t.status, " ").concat(t.statusText)
                    );
                  return t;
                })
                .catch(function (s) {
                  if (i === o.length - 1) throw s;
                  return n.fetchProxy(t, e, i + 1);
                });
            },
          },
          created: function () {
            console.log("IFrameBypass - created"),
              (this.content =
                "<html>\n                        <head></head>\n                        <body>\n                        </body>\n                        </html>");
          },
          mounted: function () { },
          watch: {
            url: function (t) {
              t &&
                (console.log("IFrameBypass - watch: " + t),
                  this.load(t, { mode: "cors" }));
            },
          },
        }),
      Ve = Te,
      _e = Object(f["a"])(Ve, De, Pe, !1, null, "3760a3eb", null),
      Ie = _e.exports,
      Re = function () {
        var t = this,
          e = t.$createElement,
          i = t._self._c || e;
        return i(
          "transition",
          {
            attrs: { name: "fade" },
            on: {
              "after-leave": function (e) {
                return t.$emit("close");
              },
              "after-enter": function (e) {
                return t.$emit("open");
              },
            },
          },
          [
            i(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: t.isOpen,
                    expression: "isOpen",
                  },
                ],
                ref: "window",
                staticClass: "window",
                style: t.styleWindow,
                on: { mousedown: t.activate, touchstart: t.activate },
              },
              [
                i(
                  "div",
                  {
                    ref: "titlebar",
                    staticClass: "titlebar",
                    style: t.styleTitlebar,
                  },
                  [
                    i(
                      "div",
                      { staticClass: "window_title" },
                      [
                        t.icon
                          ? i(
                            "v-icon",
                            {
                              staticClass: "window_icon",
                              attrs: { color: t.iconcolor },
                            },
                            [t._v(t._s(t.icon))]
                          )
                          : t._e(),
                        t.$slots.title
                          ? [t._t("title")]
                          : [
                            t._v(
                              "\n                    " +
                              t._s(t.title) +
                              "\n                "
                            ),
                          ],
                      ],
                      2
                    ),
                    t.minimizeButton
                      ? [
                        i(
                          "my-button",
                          {
                            staticClass: "bar-button",
                            on: { click: t.minimizeButtonClick },
                          },
                          [t._v("⚊")]
                        ),
                      ]
                      : t._e(),
                    t.maximizeButton
                      ? [
                        t.isMaximized
                          ? [
                            i(
                              "my-button",
                              {
                                staticClass: "bar-button",
                                on: { click: t.restoreButtonClick },
                              },
                              [t._v("❐")]
                            ),
                          ]
                          : [
                            i(
                              "my-button",
                              {
                                staticClass: "bar-button",
                                on: { click: t.maximizeButtonClick },
                              },
                              [t._v("☐")]
                            ),
                          ],
                      ]
                      : t._e(),
                    t.closeButton
                      ? [
                        i(
                          "my-button",
                          {
                            staticClass: "bar-button",
                            on: { click: t.closeButtonClick },
                          },
                          [t._v("✕")]
                        ),
                      ]
                      : t._e(),
                  ],
                  2
                ),
                i(
                  "div",
                  {
                    ref: "content",
                    staticClass: "content",
                    style: t.styleContent,
                  },
                  [t._t("default")],
                  2
                ),
              ]
            ),
          ]
        );
      },
      Ue = [],
      Fe = (i("2397"), i("3835")),
      Le = (i("28a5"), i("d4ec")),
      He = i("bee2"),
      We = i("262e"),
      Qe = i("99de"),
      Ge = i("7e84"),
      Xe = i("53ca"),
      Ne = i("60a3");
    function Ye(t) {
      var e = t.style,
        i = e.width,
        n = e.height;
      (t.style.width = "auto"), (t.style.height = "auto");
      var o = Je(t);
      return (t.style.width = i), (t.style.height = n), o;
    }
    function Je(t) {
      var e = t.getBoundingClientRect(),
        i = e.width,
        n = e.height,
        o = e.top,
        s = e.left,
        a = s + i,
        r = o + n;
      return { width: i, height: n, top: o, left: s, bottom: r, right: a };
    }
    function Ke(t) {
      return window.TouchEvent && t instanceof TouchEvent;
    }
    var qe = (function () {
      function t(e) {
        Object(Le["a"])(this, t), (this.e = e);
      }
      return (
        Object(He["a"])(
          t,
          [
            {
              key: "stopPropagation",
              value: function () {
                this.e.stopPropagation();
              },
            },
            {
              key: "preventDefault",
              value: function () {
                this.e.preventDefault();
              },
            },
            {
              key: "clientX",
              get: function () {
                return Ke(this.e)
                  ? ("touchend" === this.e.type
                    ? this.e.changedTouches
                    : this.e.touches
                  ).item(0).clientX
                  : this.e.clientX;
              },
            },
            {
              key: "clientY",
              get: function () {
                return Ke(this.e)
                  ? ("touchend" === this.e.type
                    ? this.e.changedTouches
                    : this.e.touches
                  ).item(0).clientY
                  : this.e.clientY;
              },
            },
            {
              key: "clientCoord",
              get: function () {
                return new Ze(this.clientX, this.clientY);
              },
            },
            {
              key: "originalEvent",
              value: function (t) {
                var e = t.mouse,
                  i = t.touch;
                Ke(this.e) ? i && i(this.e) : e && e(this.e);
              },
            },
          ],
          [
            {
              key: "bindDown",
              value: function (e, i, n) {
                var o =
                  arguments.length > 3 &&
                  void 0 !== arguments[3] &&
                  arguments[3],
                  s = function (e) {
                    i(new t(e));
                  },
                  a = function (e) {
                    1 === e.touches.length && i(new t(e)),
                      e.touches.length > 1 && n && n(new t(e));
                  };
                return (
                  e.addEventListener("mousedown", s, o),
                  e.addEventListener("touchstart", a, o),
                  function () {
                    e.removeEventListener("mousedown", s, o),
                      e.removeEventListener("touchstart", a, o);
                  }
                );
              },
            },
            {
              key: "bindMove",
              value: function (e, i) {
                var n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                  o = function (e) {
                    i(new t(e));
                  },
                  s = function (e) {
                    1 === e.touches.length && i(new t(e));
                  };
                return (
                  e.addEventListener("mousemove", o, n),
                  e.addEventListener("touchmove", s, n),
                  function () {
                    e.removeEventListener("mousemove", o, n),
                      e.removeEventListener("touchmove", s, n);
                  }
                );
              },
            },
            {
              key: "bindUp",
              value: function (e, i) {
                var n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                  o = function (e) {
                    i(new t(e));
                  },
                  s = function (e) {
                    0 === e.touches.length && i(new t(e));
                  };
                return (
                  e.addEventListener("mouseup", o, n),
                  e.addEventListener("touchend", s, n),
                  function () {
                    e.removeEventListener("mouseup", o, n),
                      e.removeEventListener("touchend", s, n);
                  }
                );
              },
            },
          ]
        ),
        t
      );
    })(),
      Ze = (function () {
        function t(e, i) {
          Object(Le["a"])(this, t), (this.x = e), (this.y = i);
        }
        return (
          Object(He["a"])(t, [
            {
              key: "clone",
              value: function () {
                return new t(this.x, this.y);
              },
            },
          ]),
          t
        );
      })(),
      $e = (function () {
        function t(e, i) {
          var n = this,
            o =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
          Object(Le["a"])(this, t),
            (this.handle = e),
            (this.container = i),
            (this.options = o),
            (this.mousedown = function (t) {
              t.preventDefault(),
                n.options.onMoveEnd && n.options.onMoveEnd(),
                n.unbindUp && n.unbindUp(),
                n.unbindMove && n.unbindMove(),
                (n.unbindUp = n.unbindMove = void 0);
              var e = n.handle.getBoundingClientRect(),
                i = e.left,
                o = e.top;
              (n.offsetX = t.clientX - i),
                (n.offsetY = t.clientY - o),
                n.options.onMoveStart && n.options.onMoveStart(),
                (n.unbindMove = qe.bindMove(document, n.mousemove)),
                (n.unbindUp = qe.bindUp(document, n.mouseup));
            }),
            (this.mousemove = function (t) {
              (n.container.style.left = "".concat(t.clientX - n.offsetX, "px")),
                (n.container.style.top = "".concat(
                  t.clientY - n.offsetY,
                  "px"
                )),
                n.options.onMove && n.options.onMove();
            }),
            (this.mouseup = function (t) {
              n.options.onMoveEnd && n.options.onMoveEnd(),
                n.unbindUp(),
                n.unbindMove(),
                (n.unbindUp = n.unbindMove = void 0);
            }),
            (this.unbindDown = qe.bindDown(e, this.mousedown)),
            e.classList.add("draggable-handle");
        }
        return (
          Object(He["a"])(t, [
            {
              key: "teardown",
              value: function () {
                this.handle.classList.remove("draggable-handle"),
                  this.unbindDown(),
                  this.unbindUp && this.unbindUp(),
                  this.unbindMove && this.unbindMove();
              },
            },
          ]),
          t
        );
      })();
    function ti(t) {
      var e = ei();
      return function () {
        var i,
          n = Object(Ge["a"])(t);
        if (e) {
          var o = Object(Ge["a"])(this).constructor;
          i = Reflect.construct(n, arguments, o);
        } else i = n.apply(this, arguments);
        return Object(Qe["a"])(this, i);
      };
    }
    function ei() {
      if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" === typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () { })
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    }
    var ii = (function () {
      function t(e, i) {
        var n = this;
        Object(Le["a"])(this, t),
          (this.container = e),
          (this.options = i),
          (this.handles = ni.map(function (t) {
            return new t(e, n);
          }));
        var o = Ye(e),
          s = o.width,
          a = o.height,
          r = i.maxWidth || window.innerWidth,
          c = i.maxHeight || window.innerHeight,
          l = !1;
        (s < i.minWidth || s > r) &&
          ((e.style.width = "".concat(si(s, i.minWidth, r), "px")), (l = !0)),
          (a < i.minHeight || a > c) &&
          ((e.style.height = "".concat(si(a, i.minHeight, c), "px")),
            (l = !0)),
          l && i.onResize && i.onResize();
      }
      return (
        Object(He["a"])(t, [
          {
            key: "teardown",
            value: function () {
              this.handles.forEach(function (t) {
                return t.teardown();
              });
            },
          },
        ]),
        t
      );
    })(),
      ni = [],
      oi = (function () {
        function t(e, i) {
          var n = this;
          Object(Le["a"])(this, t),
            (this.container = e),
            (this.helper = i),
            (this.handleSize = 8),
            (this.mousedown = function (t) {
              t.preventDefault(),
                t.stopPropagation(),
                n.helper.options.onResizeEnd && n.helper.options.onResizeEnd(),
                n.unbindUp && n.unbindUp(),
                n.unbindMove && n.unbindMove(),
                (n.unbindUp = n.unbindMove = void 0);
              var e = Je(n.container),
                i = e.left,
                o = e.top,
                s = e.width,
                a = e.height;
              (n.x0 = t.clientX),
                (n.y0 = t.clientY),
                (n.left0 = i),
                (n.top0 = o),
                (n.width0 = s),
                (n.height0 = a),
                n.calcSafeBoundaries(),
                n.helper.options.onResizeStart &&
                n.helper.options.onResizeStart(),
                (n.unbindMove = qe.bindMove(document, n.mousemove)),
                (n.unbindUp = qe.bindUp(document, n.mouseup));
            }),
            (this.mousemove = function (t) {
              t.preventDefault(),
                t.stopPropagation(),
                n.setPosition(t),
                n.fixPosition(),
                n.helper.options.onResize && n.helper.options.onResize();
            }),
            (this.mouseup = function (t) {
              t.preventDefault(),
                t.stopPropagation(),
                n.helper.options.onResizeEnd && n.helper.options.onResizeEnd(),
                n.unbindUp(),
                n.unbindMove(),
                (n.unbindUp = n.unbindMove = void 0);
            }),
            (this.handle = this.createHandleElement()),
            (this.unbindDown = qe.bindDown(this.handle, this.mousedown));
        }
        return (
          Object(He["a"])(t, [
            {
              key: "teardown",
              value: function () {
                this.unbindDown(),
                  this.unbindUp && this.unbindUp(),
                  this.unbindMove && this.unbindMove(),
                  this.handle.parentElement.removeChild(this.handle);
              },
            },
            {
              key: "calcSafeBoundaries",
              value: function () {
                var t = Je(this.container),
                  e = t.left,
                  i = t.top,
                  n = t.right,
                  o = t.bottom,
                  s = this.helper.options,
                  a = s.maxWidth || window.innerWidth,
                  r = s.maxHeight || window.innerHeight;
                (this.minLeft = Math.max(n - a, 0)),
                  (this.maxLeft = n - s.minWidth),
                  (this.minRight = e + s.minWidth),
                  (this.maxRight = Math.min(e + a, window.innerWidth)),
                  (this.minTop = Math.max(o - r, 0)),
                  (this.maxTop = o - s.minHeight),
                  (this.minBottom = i + s.minHeight),
                  (this.maxBottom = Math.min(i + r, window.innerHeight));
              },
            },
            {
              key: "fixPosition",
              value: function () {
                var t = Je(this.container),
                  e = t.width,
                  i = t.height,
                  n = t.left,
                  o = t.top,
                  s = t.right,
                  a = t.bottom,
                  r = this.helper.options;
                n < this.minLeft
                  ? ((this.container.style.width = "".concat(
                    e + n - this.minLeft,
                    "px"
                  )),
                    (this.container.style.left = "".concat(this.minLeft, "px")))
                  : n > this.maxLeft
                    ? ((this.container.style.width = "".concat(r.minWidth, "px")),
                      (this.container.style.left = "".concat(this.maxLeft, "px")))
                    : s < this.minRight
                      ? (this.container.style.width = "".concat(r.minWidth, "px"))
                      : s > this.maxRight &&
                      (this.container.style.width = "".concat(
                        this.maxRight - n,
                        "px"
                      )),
                  o < this.minTop
                    ? ((this.container.style.height = "".concat(
                      i + o - this.minTop,
                      "px"
                    )),
                      (this.container.style.top = "".concat(this.minTop, "px")))
                    : o > this.maxTop
                      ? ((this.container.style.height = "".concat(
                        r.minHeight,
                        "px"
                      )),
                        (this.container.style.top = "".concat(this.maxTop, "px")))
                      : a < this.minBottom
                        ? (this.container.style.height = "".concat(
                          r.minHeight,
                          "px"
                        ))
                        : a > this.maxBottom &&
                        (this.container.style.height = "".concat(
                          this.maxBottom - o,
                          "px"
                        ));
              },
            },
            {
              key: "createHandleElement",
              value: function () {
                var t = document.createElement("div"),
                  e = t.style;
                return (
                  (e.position = "absolute"),
                  this.applyStyle(e),
                  this.container.appendChild(t),
                  t
                );
              },
            },
          ]),
          t
        );
      })();
    function si(t, e, i) {
      return t < e ? e : t > i ? i : t;
    }
    ni.push(
      (function (t) {
        Object(We["a"])(i, t);
        var e = ti(i);
        function i() {
          return Object(Le["a"])(this, i), e.apply(this, arguments);
        }
        return (
          Object(He["a"])(i, [
            {
              key: "setPosition",
              value: function (t) {
                (this.container.style.width = "".concat(
                  this.width0 + t.clientX - this.x0,
                  "px"
                )),
                  (this.container.style.height = "".concat(
                    this.height0 + t.clientY - this.y0,
                    "px"
                  ));
              },
            },
            {
              key: "applyStyle",
              value: function (t) {
                (t.width = "".concat(2 * this.handleSize, "px")),
                  (t.height = "".concat(2 * this.handleSize, "px")),
                  (t.right = "".concat(-this.handleSize, "px")),
                  (t.bottom = "".concat(-this.handleSize, "px")),
                  (t.cursor = "nwse-resize");
              },
            },
          ]),
          i
        );
      })(oi),
      (function (t) {
        Object(We["a"])(i, t);
        var e = ti(i);
        function i() {
          return Object(Le["a"])(this, i), e.apply(this, arguments);
        }
        return (
          Object(He["a"])(i, [
            {
              key: "setPosition",
              value: function (t) {
                this.container.style.height = "".concat(
                  this.height0 + t.clientY - this.y0,
                  "px"
                );
              },
            },
            {
              key: "applyStyle",
              value: function (t) {
                (t.right = "".concat(this.handleSize, "px")),
                  (t.left = "".concat(this.handleSize, "px")),
                  (t.height = "".concat(2 * this.handleSize, "px")),
                  (t.bottom = "".concat(-this.handleSize, "px")),
                  (t.cursor = "ns-resize");
              },
            },
          ]),
          i
        );
      })(oi),
      (function (t) {
        Object(We["a"])(i, t);
        var e = ti(i);
        function i() {
          return Object(Le["a"])(this, i), e.apply(this, arguments);
        }
        return (
          Object(He["a"])(i, [
            {
              key: "setPosition",
              value: function (t) {
                (this.container.style.left = "".concat(
                  this.left0 + t.clientX - this.x0,
                  "px"
                )),
                  (this.container.style.width = "".concat(
                    this.width0 - (t.clientX - this.x0),
                    "px"
                  )),
                  (this.container.style.height = "".concat(
                    this.height0 + t.clientY - this.y0,
                    "px"
                  ));
              },
            },
            {
              key: "applyStyle",
              value: function (t) {
                (t.left = "".concat(-this.handleSize, "px")),
                  (t.bottom = "".concat(-this.handleSize, "px")),
                  (t.width = "".concat(2 * this.handleSize, "px")),
                  (t.height = "".concat(2 * this.handleSize, "px")),
                  (t.cursor = "nesw-resize");
              },
            },
          ]),
          i
        );
      })(oi),
      (function (t) {
        Object(We["a"])(i, t);
        var e = ti(i);
        function i() {
          return Object(Le["a"])(this, i), e.apply(this, arguments);
        }
        return (
          Object(He["a"])(i, [
            {
              key: "setPosition",
              value: function (t) {
                (this.container.style.left = "".concat(
                  this.left0 + t.clientX - this.x0,
                  "px"
                )),
                  (this.container.style.width = "".concat(
                    this.width0 - (t.clientX - this.x0),
                    "px"
                  ));
              },
            },
            {
              key: "applyStyle",
              value: function (t) {
                (t.left = "".concat(-this.handleSize, "px")),
                  (t.bottom = "".concat(this.handleSize, "px")),
                  (t.width = "".concat(2 * this.handleSize, "px")),
                  (t.top = "".concat(this.handleSize, "px")),
                  (t.cursor = "ew-resize");
              },
            },
          ]),
          i
        );
      })(oi),
      (function (t) {
        Object(We["a"])(i, t);
        var e = ti(i);
        function i() {
          return Object(Le["a"])(this, i), e.apply(this, arguments);
        }
        return (
          Object(He["a"])(i, [
            {
              key: "setPosition",
              value: function (t) {
                (this.container.style.left = "".concat(
                  this.left0 + t.clientX - this.x0,
                  "px"
                )),
                  (this.container.style.width = "".concat(
                    this.width0 - (t.clientX - this.x0),
                    "px"
                  )),
                  (this.container.style.top = "".concat(
                    this.top0 + t.clientY - this.y0,
                    "px"
                  )),
                  (this.container.style.height = "".concat(
                    this.height0 - (t.clientY - this.y0),
                    "px"
                  ));
              },
            },
            {
              key: "applyStyle",
              value: function (t) {
                (t.left = "".concat(-this.handleSize, "px")),
                  (t.top = "".concat(-this.handleSize, "px")),
                  (t.width = "".concat(2 * this.handleSize, "px")),
                  (t.height = "".concat(2 * this.handleSize, "px")),
                  (t.cursor = "nwse-resize");
              },
            },
          ]),
          i
        );
      })(oi),
      (function (t) {
        Object(We["a"])(i, t);
        var e = ti(i);
        function i() {
          return Object(Le["a"])(this, i), e.apply(this, arguments);
        }
        return (
          Object(He["a"])(i, [
            {
              key: "setPosition",
              value: function (t) {
                (this.container.style.top = "".concat(
                  this.top0 + t.clientY - this.y0,
                  "px"
                )),
                  (this.container.style.height = "".concat(
                    this.height0 - (t.clientY - this.y0),
                    "px"
                  ));
              },
            },
            {
              key: "applyStyle",
              value: function (t) {
                (t.left = "".concat(this.handleSize, "px")),
                  (t.right = "".concat(this.handleSize, "px")),
                  (t.height = "".concat(2 * this.handleSize, "px")),
                  (t.top = "".concat(-this.handleSize, "px")),
                  (t.cursor = "ns-resize");
              },
            },
          ]),
          i
        );
      })(oi),
      (function (t) {
        Object(We["a"])(i, t);
        var e = ti(i);
        function i() {
          return Object(Le["a"])(this, i), e.apply(this, arguments);
        }
        return (
          Object(He["a"])(i, [
            {
              key: "setPosition",
              value: function (t) {
                (this.container.style.top = "".concat(
                  this.top0 + t.clientY - this.y0,
                  "px"
                )),
                  (this.container.style.height = "".concat(
                    this.height0 - (t.clientY - this.y0),
                    "px"
                  )),
                  (this.container.style.width = "".concat(
                    this.width0 + t.clientX - this.x0,
                    "px"
                  ));
              },
            },
            {
              key: "applyStyle",
              value: function (t) {
                (t.right = "".concat(-this.handleSize, "px")),
                  (t.top = "".concat(-this.handleSize, "px")),
                  (t.height = "".concat(2 * this.handleSize, "px")),
                  (t.width = "".concat(2 * this.handleSize, "px")),
                  (t.cursor = "nesw-resize");
              },
            },
          ]),
          i
        );
      })(oi),
      (function (t) {
        Object(We["a"])(i, t);
        var e = ti(i);
        function i() {
          return Object(Le["a"])(this, i), e.apply(this, arguments);
        }
        return (
          Object(He["a"])(i, [
            {
              key: "setPosition",
              value: function (t) {
                this.container.style.width = "".concat(
                  this.width0 + t.clientX - this.x0,
                  "px"
                );
              },
            },
            {
              key: "applyStyle",
              value: function (t) {
                (t.right = "".concat(-this.handleSize, "px")),
                  (t.top = "".concat(this.handleSize, "px")),
                  (t.bottom = "".concat(this.handleSize, "px")),
                  (t.width = "".concat(2 * this.handleSize, "px")),
                  (t.cursor = "ew-resize");
              },
            },
          ]),
          i
        );
      })(oi)
    );
    var ai = "windowStyle";
    function ri(t) {
      return {
        provide: function () {
          return Object(y["a"])({}, ai, t);
        },
        render: function (t) {
          return t("div", this.$slots.default);
        },
      };
    }
    var ci = ri({
      window: {
        color: "#fff",
        boxShadow: "0 0 6pt rgba(255, 255, 255, 0.75)",
        backgroundColor: "rgba(31, 31, 31, 0.9)",
      },
      titlebar: { backgroundColor: "rgba(63, 63, 63, 0.9)" },
      content: {},
      button: { color: "white" },
      buttonHover: { backgroundColor: "rgba(255, 255, 255, 0.25)" },
      buttonActive: {
        color: "black",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
      },
    }),
      li = ri({
        window: {
          color: "#000",
          boxShadow: "0 2pt 4pt rgba(0, 0, 0, 0.5)",
          backgroundColor: "rgba(239, 239, 239, 0.95)",
        },
        titlebar: { backgroundColor: "rgba(191, 191, 191, 0.9)" },
        content: {},
        button: { color: "#000" },
        buttonHover: { backgroundColor: "rgba(0, 0, 0, 0.25)" },
        buttonActive: { color: "#fff", backgroundColor: "rgba(0, 0, 0, 0.5)" },
      }),
      ui = ri({
        window: {
          color: "#000",
          boxShadow: "0 4pt 8pt rgba(0, 0, 0, 0.5)",
          background:
            "linear-gradient(to bottom, rgb(215, 215, 215), rgb(191, 191, 191))",
        },
        titlebar: {
          background:
            "linear-gradient(to bottom, rgb(215, 215, 215), rgb(191, 191, 191))",
        },
        content: {},
        button: { color: "#000" },
        buttonHover: { backgroundColor: "rgba(0, 0, 0, 0.25)" },
        buttonActive: { color: "#fff", backgroundColor: "rgba(0, 0, 0, 0.5)" },
      }),
      hi = (i("5df3"), i("4f7f"), new Set());
    i("ac4d"), i("8a81"), i("1c4c"), i("7f7f"), i("55dd"), i("f400");
    function di(t, e) {
      var i;
      if ("undefined" === typeof Symbol || null == t[Symbol.iterator]) {
        if (
          Array.isArray(t) ||
          (i = pi(t)) ||
          (e && t && "number" === typeof t.length)
        ) {
          i && (t = i);
          var n = 0,
            o = function () { };
          return {
            s: o,
            n: function () {
              return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
            },
            e: function (t) {
              throw t;
            },
            f: o,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var s,
        a = !0,
        r = !1;
      return {
        s: function () {
          i = t[Symbol.iterator]();
        },
        n: function () {
          var t = i.next();
          return (a = t.done), t;
        },
        e: function (t) {
          (r = !0), (s = t);
        },
        f: function () {
          try {
            a || null == i.return || i.return();
          } finally {
            if (r) throw s;
          }
        },
      };
    }
    function pi(t, e) {
      if (t) {
        if ("string" === typeof t) return fi(t, e);
        var i = Object.prototype.toString.call(t).slice(8, -1);
        return (
          "Object" === i && t.constructor && (i = t.constructor.name),
          "Map" === i || "Set" === i
            ? Array.from(t)
            : "Arguments" === i ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
              ? fi(t, e)
              : void 0
        );
      }
    }
    function fi(t, e) {
      (null == e || e > t.length) && (e = t.length);
      for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
      return n;
    }
    var mi = (function () {
      function t(e, i) {
        var n = this;
        Object(Le["a"])(this, t),
          (this._group = e),
          (this.onChange = i),
          this.a(function (t) {
            return t.push(n);
          });
      }
      return (
        Object(He["a"])(t, [
          {
            key: "group",
            get: function () {
              return this._group;
            },
            set: function (t) {
              this._group = t;
              var e = Ai(this._group),
                i = Ai(t);
              e.splice(e.indexOf(this), 1), i.push(this), bi();
            },
          },
          {
            key: "unregister",
            value: function () {
              var t = this;
              this.a(function (e) {
                return e.splice(e.indexOf(t), 1);
              });
            },
          },
          {
            key: "raise",
            value: function () {
              var t = this;
              this.a(function (e) {
                e.splice(e.indexOf(t), 1), e.push(t);
              });
            },
          },
          {
            key: "a",
            value: function (t) {
              t(Ai(this._group)), bi();
            },
          },
        ]),
        t
      );
    })(),
      vi = new Map(),
      gi = 0;
    function Ai(t) {
      return vi.has(t) || vi.set(t, []), vi.get(t);
    }
    function wi(t, e) {
      return t > e ? -wi(e, t) : t < 0 && e >= 0 ? 1 : t - e;
    }
    function bi() {
      var t,
        e = gi,
        i = di(yi(vi).sort(wi));
      try {
        for (i.s(); !(t = i.n()).done;) {
          var n,
            o = t.value,
            s = di(Ai(o));
          try {
            for (s.s(); !(n = s.n()).done;) {
              var a = n.value;
              e != a.zIndex && ((a.zIndex = e), a.onChange(e)), e++;
            }
          } catch (r) {
            s.e(r);
          } finally {
            s.f();
          }
        }
      } catch (r) {
        i.e(r);
      } finally {
        i.f();
      }
    }
    function yi(t) {
      var e = [];
      return (
        t.forEach(function (t, i) {
          return e.push(i);
        }),
        e
      );
    }
    var ki = function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i(
        "div",
        {
          staticClass: "button",
          style: t.style,
          attrs: { disabled: t.disabled },
          on: {
            mouseenter: function (e) {
              t.hover = !0;
            },
            mouseleave: function (e) {
              t.hover = !1;
            },
            mousedown: function (e) {
              return e.stopPropagation(), t.mousedown.apply(null, arguments);
            },
            touchstart: function (e) {
              return e.stopPropagation(), t.mousedown.apply(null, arguments);
            },
            mouseup: t.mouseup,
            touchend: t.mouseup,
          },
        },
        [t._t("default")],
        2
      );
    },
      xi = [];
    function Ci(t) {
      var e = Si();
      return function () {
        var i,
          n = Object(Ge["a"])(t);
        if (e) {
          var o = Object(Ge["a"])(this).constructor;
          i = Reflect.construct(n, arguments, o);
        } else i = n.apply(this, arguments);
        return Object(Qe["a"])(this, i);
      };
    }
    function Si() {
      if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" === typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () { })
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    }
    var Oi = function (t, e, i, n) {
      var o,
        s = arguments.length,
        a =
          s < 3
            ? e
            : null === n
              ? (n = Object.getOwnPropertyDescriptor(e, i))
              : n;
      if (
        "object" ===
        ("undefined" === typeof Reflect
          ? "undefined"
          : Object(Xe["a"])(Reflect)) &&
        "function" === typeof Reflect.decorate
      )
        a = Reflect.decorate(t, e, i, n);
      else
        for (var r = t.length - 1; r >= 0; r--)
          (o = t[r]) &&
            (a = (s < 3 ? o(a) : s > 3 ? o(e, i, a) : o(e, i)) || a);
      return s > 3 && a && Object.defineProperty(e, i, a), a;
    },
      Mi = (function (t) {
        Object(We["a"])(i, t);
        var e = Ci(i);
        function i() {
          var t;
          return (
            Object(Le["a"])(this, i),
            (t = e.apply(this, arguments)),
            (t.hover = !1),
            (t.active = !1),
            t
          );
        }
        return (
          Object(He["a"])(i, [
            {
              key: "style",
              get: function () {
                var t = this.windowStyle.button;
                return (
                  this.hover &&
                  (t = Object.assign(
                    Object.assign({}, t),
                    this.windowStyle.buttonHover
                  )),
                  this.active &&
                  (t = Object.assign(
                    Object.assign({}, t),
                    this.windowStyle.buttonActive
                  )),
                  t
                );
              },
            },
            {
              key: "mousedown",
              value: function (t) {
                var e = this;
                t.preventDefault(), (this.active = !0);
                var i = qe.bindUp(document, function () {
                  (e.active = !1), i();
                });
              },
            },
            {
              key: "mouseup",
              value: function (t) {
                this.active && this.$emit("click");
              },
            },
          ]),
          i
        );
      })(Ne["d"]);
    Oi([Object(Ne["b"])(ai)], Mi.prototype, "windowStyle", void 0),
      Oi(
        [Object(Ne["c"])({ type: Boolean, default: !1 })],
        Mi.prototype,
        "disabled",
        void 0
      ),
      (Mi = Oi([Ne["a"]], Mi));
    var ji = Mi,
      zi = ji,
      Ei = (i("2713"), Object(f["a"])(zi, ki, xi, !1, null, "0a8231c7", null)),
      Bi = Ei.exports;
    function Di(t) {
      var e = Pi();
      return function () {
        var i,
          n = Object(Ge["a"])(t);
        if (e) {
          var o = Object(Ge["a"])(this).constructor;
          i = Reflect.construct(n, arguments, o);
        } else i = n.apply(this, arguments);
        return Object(Qe["a"])(this, i);
      };
    }
    function Pi() {
      if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" === typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () { })
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    }
    var Ti = function (t, e, i, n) {
      var o,
        s = arguments.length,
        a =
          s < 3
            ? e
            : null === n
              ? (n = Object.getOwnPropertyDescriptor(e, i))
              : n;
      if (
        "object" ===
        ("undefined" === typeof Reflect
          ? "undefined"
          : Object(Xe["a"])(Reflect)) &&
        "function" === typeof Reflect.decorate
      )
        a = Reflect.decorate(t, e, i, n);
      else
        for (var r = t.length - 1; r >= 0; r--)
          (o = t[r]) &&
            (a = (s < 3 ? o(a) : s > 3 ? o(e, i, a) : o(e, i)) || a);
      return s > 3 && a && Object.defineProperty(e, i, a), a;
    },
      Vi = [],
      _i = (function (t) {
        Object(We["a"])(i, t);
        var e = Di(i);
        function i() {
          var t;
          return (
            Object(Le["a"])(this, i),
            (t = e.apply(this, arguments)),
            (t.zIndex = "auto"),
            (t.openCount = 0),
            (t.lastTop = 0),
            (t.lastLeft = 0),
            (t.lastWidth = 0),
            (t.lastHeight = 0),
            t
          );
        }
        return (
          Object(He["a"])(i, [
            {
              key: "mounted",
              value: function () {
                var t = this;
                Vi.push(this),
                  (this.zElement = new mi(this.zGroup, function (e) {
                    return (t.zIndex = "".concat(e));
                  })),
                  this.isOpen && this.onIsOpenChange(!0),
                  hi.add(this);
              },
            },
            {
              key: "beforeDestroy",
              value: function () {
                hi.delete(this),
                  this.zElement.unregister(),
                  this.resizableHelper && this.resizableHelper.teardown(),
                  this.draggableHelper && this.draggableHelper.teardown(),
                  Vi.splice(Vi.indexOf(this), 1);
              },
            },
            {
              key: "windowElement",
              value: function () {
                return this.$refs.window;
              },
            },
            {
              key: "titlebarElement",
              value: function () {
                return this.$refs.titlebar;
              },
            },
            {
              key: "contentElement",
              value: function () {
                return this.$refs.content;
              },
            },
            {
              key: "activate",
              value: function () {
                this.zElement.raise(), this.$emit("activate");
              },
            },
            {
              key: "styleWindow",
              get: function () {
                return Object.assign(
                  Object.assign({}, this.windowStyle.window),
                  { zIndex: this.zIndex, overflow: this.overflow }
                );
              },
            },
            {
              key: "styleTitlebar",
              get: function () {
                return 1 == this.$store.getters.currentThemeIndex
                  ? Object.assign({}, { padding: this.titlebarPadding })
                  : Object.assign(
                    Object.assign({}, this.windowStyle.titlebar),
                    { padding: this.titlebarPadding }
                  );
              },
            },
            {
              key: "styleContent",
              get: function () {
                var t = Object.assign({}, this.windowStyle.content);
                return (
                  this.resizable
                    ? (t.padding = "0")
                    : void 0 != this.padding &&
                    (t.padding = "".concat(this.padding, "px")),
                  this.isScrollable && (t.overflow = "auto"),
                  t
                );
              },
            },
            {
              key: "onResizableChange",
              value: function (t) {
                this.console.error("prop 'resizable' can't be changed");
              },
            },
            {
              key: "onIsOpenChange",
              value: function (t) {
                var e = this;
                t &&
                  (this.$nextTick(function () {
                    0 == e.openCount++ &&
                      (e.setWindowRect(e), e.setInitialPosition()),
                      e.isMaximized
                        ? e.maximizeButtonClick()
                        : (e.resizable && e.onWindowResize(),
                          e.onWindowMove(),
                          (e.draggableHelper = new $e(
                            e.titlebarElement(),
                            e.windowElement(),
                            {
                              onMove: function () {
                                return e.onWindowMove();
                              },
                              onMoveStart: function () {
                                return e.$emit("move-start");
                              },
                              onMoveEnd: function () {
                                return e.$emit("move-end");
                              },
                            }
                          )),
                          e.resizable && e.initResizeHelper());
                  }),
                    this.activateWhenOpen && this.activate());
              },
            },
            {
              key: "onZGroupChange",
              value: function () {
                this.zElement.group = this.zGroup;
              },
            },
            {
              key: "fixPosition",
              value: function () {
                var t = this.windowElement(),
                  e = t.getBoundingClientRect();
                e.left < 0 && (t.style.left = "0px"),
                  e.top < 0 && (t.style.top = "0px"),
                  e.right > window.innerWidth &&
                  (t.style.left = "".concat(
                    window.innerWidth - e.width,
                    "px"
                  )),
                  e.bottom > window.innerHeight &&
                  (t.style.top = "".concat(
                    window.innerHeight - e.height,
                    "px"
                  ));
              },
            },
            {
              key: "onLeftChange",
              value: function (t) {
                this.setWindowRect({ left: t }), this.onWindowMove(!1);
              },
            },
            {
              key: "onTopChange",
              value: function (t) {
                this.setWindowRect({ top: t }), this.onWindowMove(!1);
              },
            },
            {
              key: "onWidthChange",
              value: function (t) {
                this.setWindowRect({ width: t }), this.onWindowResize(!1);
              },
            },
            {
              key: "onHeightChange",
              value: function (t) {
                this.setWindowRect({ height: t }), this.onWindowResize(!1);
              },
            },
            {
              key: "setWindowRect",
              value: function (t) {
                var e = t.width,
                  i = t.height,
                  n = t.top,
                  o = t.left,
                  s = this.windowElement();
                if (
                  (void 0 != e && (s.style.width = "".concat(e, "px")),
                    void 0 != i)
                ) {
                  var a = Ri(this.titlebarElement()).height;
                  s.style.height = "".concat(i + a, "px");
                }
                void 0 != o && (s.style.left = "".concat(o, "px")),
                  void 0 != n && (s.style.top = "".concat(n, "px"));
              },
            },
            {
              key: "initResizeHelper",
              value: function () {
                var t = this,
                  e = Ye(this.titlebarElement()),
                  i = e.height;
                this.resizableHelper = new ii(this.windowElement(), {
                  onResize: function () {
                    return t.onWindowResize();
                  },
                  onResizeStart: function () {
                    return t.$emit("resize-start");
                  },
                  onResizeEnd: function () {
                    return t.$emit("resize-end");
                  },
                  minWidth: this.minWidth,
                  minHeight: this.minHeight + i,
                  maxWidth: this.maxWidth,
                  maxHeight: this.maxHeight ? this.maxHeight + i : void 0,
                });
              },
            },
            {
              key: "onWindowResize",
              value: function () {
                var t =
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0],
                  e = this.windowElement(),
                  i = this.titlebarElement(),
                  n = this.contentElement(),
                  o = Ri(n),
                  s = o.width,
                  a = o.height,
                  r = Ri(e),
                  c = r.width,
                  l = r.height,
                  u = Ri(i).height,
                  h = c - (n.offsetWidth - s),
                  d = l - u - (n.offsetHeight - a);
                (n.style.width = "".concat(h, "px")),
                  (n.style.height = "".concat(d, "px")),
                  Hi(),
                  this.$emit("resize", new Ui(h, d)),
                  t &&
                  (this.$emit("update:width", h),
                    this.$emit("update:height", d));
              },
            },
            {
              key: "onWindowMove",
              value: function () {
                var t =
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0];
                this.fixPosition();
                var e = this.windowElement().getBoundingClientRect(),
                  i = e.left,
                  n = e.top;
                t &&
                  (this.$emit("update:left", i), this.$emit("update:top", n));
              },
            },
            {
              key: "setInitialPosition",
              value: function () {
                var t,
                  e,
                  i = this,
                  n = this.windowElement(),
                  o = Je(n),
                  s = o.width,
                  a = o.height;
                if ((void 0 !== this.left) != (void 0 !== this.top))
                  throw new Error(
                    "Either of left or top is specified. Both must be set or not set."
                  );
                if ("number" == typeof this.left)
                  (t = this.left), (e = this.top);
                else {
                  var r = this.isMaximized
                    ? "maximized"
                    : this.positionHint || "auto";
                  switch (r) {
                    case "auto":
                      (function () {
                        var n = 20,
                          o = 50,
                          s = 0;
                        do {
                          if (
                            Vi.every(function (t) {
                              if (!t.isOpen || i == t) return !0;
                              var e = Fi(t);
                              if (null == e) return !0;
                              var s = e.left,
                                a = e.top;
                              return Li(s, a, n, o) > 16;
                            })
                          )
                            break;
                          (n = (n + 40) % (window.innerWidth - 200)),
                            (o = (o + 40) % (window.innerHeight - 200));
                        } while (++s < 100);
                        (t = n), (e = o);
                      })();
                      break;
                    case "center":
                      (t = (window.innerWidth - s) / 2),
                        (e = (window.innerHeight - a) / 2 - 48);
                      break;
                    case "maximized":
                      (t = 0), (e = 0);
                      break;
                    default:
                      try {
                        var c = r.split("/").map(Number);
                        if (2 != c.length) throw null;
                        var l = Object(Fe["a"])(c, 2),
                          u = l[0],
                          h = l[1];
                        if (!isFinite(u) || !isFinite(h)) throw null;
                        (t = u >= 0 ? u : window.innerWidth - s + u),
                          (e = h >= 0 ? h : window.innerHeight - a + h);
                      } catch (d) {
                        throw new Error("invalid position string: ".concat(r));
                      }
                  }
                }
                (n.style.left = "".concat(t, "px")),
                  (n.style.top = "".concat(e, "px"));
              },
            },
            {
              key: "minimizeButtonClick",
              value: function () {
                this.$emit("minimizeButtonClick");
              },
            },
            {
              key: "restoreButtonClick",
              value: function () {
                var t = this.windowElement();
                (t.style.left = this.lastLeft),
                  (t.style.top = this.lastTop),
                  (t.style.width = this.lastWidth),
                  (t.style.height = this.lastHeight),
                  this.$emit("update:isMaximized", !1),
                  this.onWindowResize(),
                  this.$emit("restoreButtonClick");
              },
            },
            {
              key: "maximizeButtonClick",
              value: function () {
                var t = this.windowElement();
                (this.lastTop = t.style.top),
                  (this.lastLeft = t.style.left),
                  (this.lastWidth = t.style.width),
                  (this.lastHeight = t.style.height),
                  (t.style.left = "0px"),
                  (t.style.top = "0px"),
                  (t.style.width = "calc(100vw - (100vw - 100%))"),
                  (t.style.height =
                    "calc(100vh - " + this.taskbarHeight + "px)"),
                  this.$emit("update:isMaximized", !0),
                  this.onWindowResize(),
                  this.$emit("maximizeButtonClick");
              },
            },
            {
              key: "closeButtonClick",
              value: function () {
                this.$emit("closeButtonClick");
              },
            },
          ]),
          i
        );
      })(Ne["d"]);
    function Ii(t) {
      return null !== t ? parseFloat(t) : 0;
    }
    function Ri(t) {
      var e = window.getComputedStyle(t),
        i = Math.ceil(
          [e.paddingLeft, e.width, e.paddingRight]
            .map(Ii)
            .reduce(function (t, e) {
              return t + e;
            })
        ),
        n = Math.ceil(
          [e.paddingTop, e.height, e.paddingBottom]
            .map(Ii)
            .reduce(function (t, e) {
              return t + e;
            })
        );
      return { width: i, height: n };
    }
    Ti(
      [Object(Ne["c"])({ type: Boolean, default: !0 })],
      _i.prototype,
      "isOpen"
    ),
      Ti(
        [Object(Ne["c"])({ type: Boolean, default: !1 })],
        _i.prototype,
        "isMaximized"
      ),
      Ti(
        [Object(Ne["c"])({ type: String, default: "" })],
        _i.prototype,
        "icon"
      ),
      Ti(
        [Object(Ne["c"])({ type: String, default: "" })],
        _i.prototype,
        "iconcolor"
      ),
      Ti(
        [Object(Ne["c"])({ type: String, default: "" })],
        _i.prototype,
        "title"
      ),
      Ti(
        [Object(Ne["c"])({ type: Boolean, default: !1 })],
        _i.prototype,
        "minimizeButton"
      ),
      Ti(
        [Object(Ne["c"])({ type: Boolean, default: !1 })],
        _i.prototype,
        "maximizeButton"
      ),
      Ti(
        [Object(Ne["c"])({ type: Boolean, default: !1 })],
        _i.prototype,
        "closeButton"
      ),
      Ti(
        [Object(Ne["c"])({ type: Boolean, default: !1 })],
        _i.prototype,
        "resizable"
      ),
      Ti(
        [Object(Ne["c"])({ type: Boolean, default: !1 })],
        _i.prototype,
        "isScrollable"
      ),
      Ti(
        [Object(Ne["c"])({ type: Number, default: 0 })],
        _i.prototype,
        "padding"
      ),
      Ti(
        [Object(Ne["c"])({ type: Boolean, default: !0 })],
        _i.prototype,
        "activateWhenOpen"
      ),
      Ti([Object(Ne["c"])({ type: String })], _i.prototype, "positionHint"),
      Ti(
        [Object(Ne["c"])({ type: Number, default: 0 })],
        _i.prototype,
        "zGroup"
      ),
      Ti([Object(Ne["c"])({ default: "visible" })], _i.prototype, "overflow"),
      Ti([Object(Ne["b"])(ai)], _i.prototype, "windowStyle"),
      Ti([Object(Ne["e"])("resizable")], _i.prototype, "onResizableChange"),
      Ti([Object(Ne["e"])("isOpen")], _i.prototype, "onIsOpenChange"),
      Ti([Object(Ne["e"])("zGroup")], _i.prototype, "onZGroupChange"),
      Ti([Object(Ne["c"])({ type: Number })], _i.prototype, "left"),
      Ti([Object(Ne["e"])("left")], _i.prototype, "onLeftChange"),
      Ti([Object(Ne["c"])({ type: Number })], _i.prototype, "top"),
      Ti([Object(Ne["e"])("top")], _i.prototype, "onTopChange"),
      Ti([Object(Ne["c"])({ type: Number })], _i.prototype, "width"),
      Ti([Object(Ne["e"])("width")], _i.prototype, "onWidthChange"),
      Ti([Object(Ne["c"])({ type: Number })], _i.prototype, "height"),
      Ti([Object(Ne["e"])("height")], _i.prototype, "onHeightChange"),
      Ti(
        [Object(Ne["c"])({ type: Number, default: 1 })],
        _i.prototype,
        "minWidth"
      ),
      Ti(
        [Object(Ne["c"])({ type: Number, default: 0 })],
        _i.prototype,
        "minHeight"
      ),
      Ti([Object(Ne["c"])({ type: Number })], _i.prototype, "maxWidth"),
      Ti([Object(Ne["c"])({ type: Number })], _i.prototype, "maxHeight"),
      Ti([Object(Ne["c"])({ type: Number })], _i.prototype, "taskbarHeight"),
      Ti(
        [Object(Ne["c"])({ type: String, default: "" })],
        _i.prototype,
        "titlebarPadding"
      ),
      (_i = Ti([Object(Ne["a"])({ components: { MyButton: Bi } })], _i));
    var Ui = function t(e, i) {
      Object(Le["a"])(this, t), (this.width = e), (this.height = i);
    };
    function Fi(t) {
      var e = t.windowElement(),
        i = parseFloat(e.style.left || "NaN"),
        n = parseFloat(e.style.top || "NaN");
      return isNaN(i) || isNaN(n) ? null : { left: i, top: n };
    }
    function Li(t, e, i, n) {
      var o = t - i,
        s = e - n;
      return o * o + s * s;
    }
    function Hi() {
      hi.forEach(function (t) {
        t.fixPosition();
      });
    }
    window.addEventListener("resize", function (t) {
      return Hi();
    });
    var Wi = _i,
      Qi = Wi,
      Gi = (i("e054"), Object(f["a"])(Qi, Re, Ue, !1, null, "3d58e53e", null)),
      Xi = Gi.exports;
    function Ni(t) {
      var e =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : { prefix: "gravity-window" },
        i = e.prefix;
      t.component("".concat(i), Xi),
        t.component("".concat(i, "-style-black"), ci),
        t.component("".concat(i, "-style-white"), li),
        t.component("".concat(i, "-style-metal"), ui);
    }
    L()(Gi, { VIcon: Q["a"] });
    var Yi = Xi,
      Ji = i("03cd"),
      Ki = i.n(Ji);
    o["a"].use(n), o["a"].use(Ki.a);
    var qi = {
      name: "App",
      components: {
        DateTime: v,
        StartMenu: tt,
        StartMenuModern: lt,
        Calculator: mt,
        Calendar: xt,
        Settings: Be,
        IFrameBypass: Ie,
        ExcelIcon: P,
      },
      data: function () {
        return {
          drawer: !1,
          search: null,
          showSearch: !1,
          showInternetBrowser: !1,
          startMenuKey: 0,
          taskbarItemOrder: 1,
          onLine: navigator.onLine,
          isFullScreen: !1,
          windowHeight: window.innerHeight,
        };
      },
      created: function () {
        null != localStorage.getItem("currentThemeIndex") &&
          (console.log("changeThemeAction", localStorage.currentThemeIndex),
            this.$store.dispatch(
              "changeThemeAction",
              localStorage.currentThemeIndex
            )),
          (this.$vuetify.theme.dark = this.currentTheme.isDarkTheme),
          null != localStorage.getItem("desktopUrl") &&
          (console.log("changeDesktopUrlAction", localStorage.desktopUrl),
            this.$store.dispatch(
              "changeDesktopUrlAction",
              localStorage.desktopUrl
            )),
          null != localStorage.getItem("themePrimaryColor") &&
          (console.log(
            "changeThemePrimaryColorAction",
            localStorage.themePrimaryColor
          ),
            this.$store.dispatch(
              "changeThemePrimaryColorAction",
              localStorage.themePrimaryColor
            )),
          this.$store.dispatch("getInstalledApps");
      },
      methods: {
        updateIsOpenWindow: function (t) {
          this.$emit("update:isOpen", !1);
        },
        toggleAppState: function (t) {
          this.$store.dispatch("toggleAppStateAction", t);
        },
        toggleApp: function (t, e) {
          this.$store.dispatch("toggleAppAction", { id: t, isOpen: e });
        },
        toggleAppUrl: function (t, e, i) {
          this.$store.dispatch("toggleAppUrlAction", {
            id: t,
            url: e,
            isOpen: i,
          });
        },
        closeApp: function (t) {
          this.$store.dispatch("closeAppAction", t);
        },
        searchInternet: function (t) {
          13 === t.keyCode &&
            this.toggleAppUrl(
              2,
              "https://www.google.com/search?igu=1&q=" + this.search,
              !0
            );
        },
        forceRerenderStartMenu: function () {
          this.startMenuKey += 1;
        },
        openAdsterraDirect: function () {
          window.open(
            "https://www.passeura.com/c55cjgm3u?key=fd5c8ef8270209f0dffbb7c5c8355385",
            "_blank"
          );
        },
        openPropellerAdsDirect: function () {
          window.open("http://serconmp.com/afu.php?zoneid=2964282", "_blank");
        },
        selectElementText: function (t) {
          var e = document.createRange();
          e.selectNodeContents(t);
          var i = window.getSelection();
          i.removeAllRanges(), i.addRange(e);
        },
        copyBtcAddress: function () {
          var t = this.$el.querySelector("#btcAddress");
          this.selectElementText(t);
          try {
            document.execCommand("copy");
          } catch (e) { }
        },
        updateOnlineStatus: function (t) {
          var e = t.type;
          this.onLine = "online" === e;
        },
        isMaximizedWindow: function (t) {
          return this.isWindowSmall || this.isMobile
            ? 18 != t.id && ((t.isMaximized = !0), (t.isResizible = !1), !0)
            : t.isMaximized;
        },
        randomColor: function () {
          return "#" + ((16777215 * Math.random()) << 0).toString(16);
        },
        onResize: function () {
          this.windowHeight = window.innerHeight;
        },
        toggleFullScreen: function () {
          this.isFullScreen = !this.isFullScreen;
        },
      },
      computed: {
        apps: function () {
          return this.$store.getters.apps;
        },
        desktopApps: function () {
          return this.$store.getters.apps.filter(function (t) {
            return t.isDesktopVisible;
          });
        },
        isShutdown: function () {
          return this.$store.getters.isShutdown;
        },
        shutdownOpacity: function () {
          return this.$store.getters.shutdownOpacity;
        },
        desktopUrl: function () {
          return this.$store.getters.desktopUrl;
        },
        themePrimaryColor: function () {
          return this.$store.getters.themePrimaryColor;
        },
        currentThemeIndex: function () {
          return this.$store.getters.currentThemeIndex;
        },
        currentTheme: function () {
          return this.$store.getters.currentTheme;
        },
        installedApps: function () {
          return this.$store.state.installedApps;
        },
        isWindowSmall: function () {
          return window.innerWidth <= 720 || window.innerHeight <= 375;
        },
        isMobile: function () {
          return (
            Boolean(this.$route.query && this.$route.query.mobile) ||
            this.isMobileBrowser
          );
        },
        isMobileBrowser: function () {
          return !!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          );
        },
        hideSideBar: function () {
          return !1;
        },
        taskbarHeight: function () {
          return this.isMobile ? 32 : 48;
        },
        startMenuStyle: function () {
          return {
            "--start-menu-height": this.isMobile ? "84vh" : "60vh",
            "--start-menu-max-height": this.isMobile ? "64vw" : "46vw",
            "--start-menu-width": this.isMobile ? "64vw" : "46vw",
          };
        },
        desktopStyle: function () {
          var t = this.desktopApps.length + this.installedApps.length;
          return {
            "--desktop-grid-cols":
              Math.floor((65 * t) / this.windowHeight) + 1,
          };
        },
      },
      mounted: function () {
        var t = this;
        window.addEventListener("online", this.updateOnlineStatus),
          window.addEventListener("offline", this.updateOnlineStatus),
          this.$nextTick(function () {
            window.addEventListener("resize", t.onResize);
          });
      },
      beforeDestroy: function () {
        window.removeEventListener("online", this.updateOnlineStatus),
          window.removeEventListener("offline", this.updateOnlineStatus),
          window.removeEventListener("resize", this.onResize);
      },
    },
      Zi = qi,
      $i = (i("034f"), i("7496")),
      tn = i("40dc"),
      en = i("e449"),
      nn = i("a797"),
      on = i("490a"),
      sn = i("e0c7"),
      an = i("3a2f"),
      rn = Object(f["a"])(Zi, a, r, !1, null, null, null),
      cn = rn.exports;
    L()(rn, {
      VApp: $i["a"],
      VAppBar: tn["a"],
      VBtn: at["a"],
      VCard: Et["a"],
      VCardActions: Bt["a"],
      VContainer: W["a"],
      VContent: je["a"],
      VIcon: Q["a"],
      VLayout: G["a"],
      VList: X["a"],
      VListItem: N["a"],
      VListItemContent: J["a"],
      VListItemSubtitle: J["b"],
      VListItemTitle: J["c"],
      VMenu: en["a"],
      VNavigationDrawer: K["a"],
      VOverlay: nn["a"],
      VProgressCircular: on["a"],
      VSpacer: Z["a"],
      VSubheader: sn["a"],
      VTextField: rt["a"],
      VTooltip: an["a"],
    });
    var ln = i("f309");
    o["a"].use(ln["a"]);
    var un,
      hn = new ln["a"]({ theme: { themes: { dark: { primary: "#1F1F1F" } } } }),
      dn = i("2f62"),
      pn = i("bc3a"),
      fn = i.n(pn),
      mn = i("2194"),
      vn = i.n(mn),
      gn = i("d21b"),
      An = i.n(gn),
      wn = "gravitydb",
      bn = 1,
      yn = {
        getDb: (function () {
          var t = Object(pe["a"])(
            regeneratorRuntime.mark(function t() {
              return regeneratorRuntime.wrap(function (t) {
                while (1)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return t.abrupt(
                        "return",
                        new Promise(function (t, e) {
                          if (un) return t(un);
                          console.log("OPENING DB");
                          var i = window.indexedDB.open(wn, bn);
                          (i.onerror = function (t) {
                            console.log("Error opening db", t), e("Error");
                          }),
                            (i.onsuccess = function (e) {
                              (un = e.target.result), t(un);
                            }),
                            (i.onupgradeneeded = function (t) {
                              console.log("onupgradeneeded");
                              var e = t.target.result;
                              e.createObjectStore("apps", {
                                autoIncrement: !0,
                                keyPath: "id",
                              });
                            });
                        })
                      );
                    case 1:
                    case "end":
                      return t.stop();
                  }
              }, t);
            })
          );
          function e() {
            return t.apply(this, arguments);
          }
          return e;
        })(),
        deleteApp: (function () {
          var t = Object(pe["a"])(
            regeneratorRuntime.mark(function t(e) {
              var i;
              return regeneratorRuntime.wrap(
                function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), this.getDb();
                      case 2:
                        return (
                          (i = t.sent),
                          t.abrupt(
                            "return",
                            new Promise(function (t) {
                              var n = i.transaction(["apps"], "readwrite");
                              n.oncomplete = function () {
                                t();
                              };
                              var o = n.objectStore("apps");
                              o.delete(e.id);
                            })
                          )
                        );
                      case 4:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this
              );
            })
          );
          function e(e) {
            return t.apply(this, arguments);
          }
          return e;
        })(),
        getApps: (function () {
          var t = Object(pe["a"])(
            regeneratorRuntime.mark(function t() {
              var e;
              return regeneratorRuntime.wrap(
                function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), this.getDb();
                      case 2:
                        return (
                          (e = t.sent),
                          t.abrupt(
                            "return",
                            new Promise(function (t) {
                              var i = e.transaction(["apps"], "readonly");
                              i.oncomplete = function () {
                                t(o);
                              };
                              var n = i.objectStore("apps"),
                                o = [];
                              n.openCursor().onsuccess = function (t) {
                                var e = t.target.result;
                                e && (o.push(e.value), e.continue());
                              };
                            })
                          )
                        );
                      case 4:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this
              );
            })
          );
          function e() {
            return t.apply(this, arguments);
          }
          return e;
        })(),
        saveApp: (function () {
          var t = Object(pe["a"])(
            regeneratorRuntime.mark(function t(e) {
              var i;
              return regeneratorRuntime.wrap(
                function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), this.getDb();
                      case 2:
                        return (
                          (i = t.sent),
                          t.abrupt(
                            "return",
                            new Promise(function (t) {
                              var n = i.transaction(["apps"], "readwrite");
                              n.oncomplete = function () {
                                t();
                              };
                              var o = n.objectStore("apps");
                              o.put(e);
                            })
                          )
                        );
                      case 4:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                this
              );
            })
          );
          function e(e) {
            return t.apply(this, arguments);
          }
          return e;
        })(),
      };
    o["a"].use(dn["a"]);
    var kn = "#424242",
      xn = "#D5DBE9",
      Cn = 1,
      Sn = new dn["a"].Store({
        state: {
          isShutdown: !1,
          shutdownOpacity: 0.7,
          desktopUrl: An.a,
          themePrimaryColor: xn,
          currentThemeIndex: Cn,
          themes: [
            {
              id: 0,
              title: "Classic",
              primaryColor: kn,
              isDarkTheme: !0,
              startIconColor: "#ffffff",
              defaultWallpaper: vn.a,
            },
            {
              id: 1,
              title: "Modern",
              primaryColor: xn,
              isDarkTheme: !1,
              startIconColor: "#0979CB",
              defaultWallpaper: An.a,
            },
          ],
          apps: [
            {
              id: 1,
              title: "Internet",
              icon: "mdi-microsoft-internet-explorer",
              iconcolor: "#0D87DD",
              url: "https://www.bing.com",
              type: 0,
              isTaskbarVisible: !0,
              isOpen: !1,
              isResizible: !0,
              isMaximized: !1,
              isValidApp: !0,
              isRecommended: !0,
              isDesktopVisible: !1,
              width: "800px",
              height: "500px",
            },
            {
              id: 2,
              title: "Search",
              icon: "mdi-magnify",
              iconcolor: "#FBBD00",
              url: "https://www.google.com/search?igu=1",
              type: 0,
              isTaskbarVisible: !1,
              isOpen: !1,
              isResizible: !0,
              isMaximized: !1,
              isValidApp: !1,
              isRecommended: !1,
              isDesktopVisible: !1,
              width: "800px",
              height: "500px",
            },
            {
              id: 3,
              title: "Note",
              icon: "mdi-note-outline",
              iconcolor: "#66B2C2",
              url: "https://www.memonotepad.com/",
              type: 0,
              isTaskbarVisible: !1,
              isOpen: !1,
              isResizible: !0,
              isMaximized: !1,
              isValidApp: !0,
              isRecommended: !1,
              isDesktopVisible: !1,
              width: "800px",
              height: "500px",
            },
            {
              id: 4,
              title: "Mail",
              icon: "mdi-email-outline",
              iconcolor: "#FFFFFF",
              url: "https://outlook.live.com/mail/0/inbox",
              type: 0,
              isTaskbarVisible: !1,
              isOpen: !1,
              isResizible: !0,
              isMaximized: !1,
              isValidApp: !1,
              isRecommended: !1,
              isDesktopVisible: !1,
              width: "800px",
              height: "500px",
            },
            {
              id: 5,
              title: "Solitaire",
              icon: "mdi-cards-playing-outline",
              iconcolor: "#17B134",
              url: "https://cdn.zone.msn.com/assets/games/microsoftsolitairecollection/2019/20190729T121300_1.5.4.1_release_v0001_9af64392_msn/solitaire/index.html?hostingEnvironment=zone",
              type: 0,
              isTaskbarVisible: !1,
              isOpen: !1,
              isResizible: !0,
              isMaximized: !1,
              isValidApp: !0,
              isRecommended: !1,
              isDesktopVisible: !1,
              width: "900px",
              height: "550px",
            },
            {
              id: 6,
              title: "Images",
              icon: "mdi-image",
              iconcolor: "#E0995E",
              url: "https://www.bing.com/images/discover?FORM=ILSTFI",
              type: 0,
              isTaskbarVisible: !1,
              isOpen: !1,
              isResizible: !0,
              isMaximized: !1,
              isValidApp: !0,
              isRecommended: !1,
              isDesktopVisible: !1,
              width: "800px",
              height: "500px",
            },
            {
              id: 7,
              title: "Map",
              icon: "mdi-map-marker-outline",
              iconcolor: "#e5fac1",
              url: "https://www.bing.com/maps/embed?h=400&w=500&cp=26.912434~75.787271&lvl=20&typ=d&sty=r&src=SHELL&FORM=MBEDV8",
              type: 0,
              isTaskbarVisible: !1,
              isOpen: !1,
              isResizible: !1,
              isMaximized: !1,
              isValidApp: !0,
              isRecommended: !1,
              isDesktopVisible: !1,
              width: "520px",
              height: "460px",
            },
            {
              id: 8,
              title: "Skype",
              icon: "mdi-skype-business",
              iconcolor: "#00ADEF",
              url: "https://web.skype.com",
              type: 0,
              isTaskbarVisible: !1,
              isOpen: !1,
              isResizible: !0,
              isMaximized: !1,
              isValidApp: !1,
              isRecommended: !1,
              isDesktopVisible: !1,
              width: "800px",
              height: "500px",
            },
            {
              id: 9,
              title: "Slides",
              icon: "mdi-file-powerpoint-box-outline",
              iconcolor: "#EF6C00",
              url: "https://docs.google.com/presentation/d/1wO59eALFiVJeq6WMJbdgcE9pDmkzes8aEP_epimCE1w/edit?usp=sharing",
              mobileUrl:
                "https://docs.google.com/presentation/d/e/2PACX-1vTmVl7Cle31d97uxcZGyxVnoP79eQN2dEMFH2ajQxgFrhe8tXalVqtH2aXvVGcAFElXYHq44cTrTaJG/embed?start=false&loop=false&delayms=3000",
              type: 0,
              isTaskbarVisible: !1,
              isOpen: !1,
              isResizible: !0,
              isMaximized: !1,
              isValidApp: !0,
              isRecommended: !1,
              isDesktopVisible: !1,
              width: "800px",
              height: "500px",
            },
            {
              id: 10,
              title: "Spreadsheet",
              icon: "mdi-file-excel-outline",
              iconcolor: "#639E66",
              url: "https://docs.google.com/spreadsheets/d/1TweDs_Jt6srLSEFUilaIjx1I0E9DNpRPNK1RPl58Btk/edit?usp=sharing",
              mobileUrl:
                "https://docs.google.com/spreadsheets/d/e/2PACX-1vR1YUvz1_nmAcdx5b71jC4OcK5piZGR01unU7TXMXyydBPjjp7n0zVuQiZn21xsiTfO7DeOnXjM8tyh/pubhtml?widget=true",
              type: 0,
              isTaskbarVisible: !1,
              isOpen: !1,
              isResizible: !0,
              isMaximized: !1,
              isValidApp: !0,
              isRecommended: !0,
              isDesktopVisible: !0,
              width: "800px",
              height: "500px",
            },
            {
              id: 11,
              title: "Doc",
              icon: "mdi-file-document",
              iconcolor: "#1565C0",
              url: "https://docs.google.com/document/d/1u2HjxniwYckU0L2c7CrbFY0RaYlURXf7RakTqtAJk2c/edit?usp=sharing",
              type: 0,
              isTaskbarVisible: !1,
              isOpen: !1,
              isResizible: !0,
              isMaximized: !1,
              isValidApp: !0,
              isRecommended: !0,
              isDesktopVisible: !0,
              width: "800px",
              height: "500px",
            },
            {
              id: 12,
              title: "Drawing",
              icon: "mdi-drawing-box",
              iconcolor: "#DE5347",
              url: "https://docs.google.com/drawings/d/1R1VqQZxu241z_WZXCgKsTRdLfwUdtyrbXNA2b0LzwxE/edit?usp=sharing",
              type: 0,
              isTaskbarVisible: !1,
              isOpen: !1,
              isResizible: !0,
              isMaximized: !1,
              isValidApp: !0,
              isRecommended: !1,
              isDesktopVisible: !1,
              width: "800px",
              height: "500px",
            },
            {
              id: 13,
              title: "Photo",
              icon: "mdi-camera",
              iconcolor: "#FF1A03",
              url: "https://www.shutterstock.com/search?image_type=photo",
              type: 0,
              isTaskbarVisible: !1,
              isOpen: !1,
              isResizible: !0,
              isMaximized: !1,
              isValidApp: !0,
              isRecommended: !1,
              isDesktopVisible: !1,
              width: "800px",
              height: "500px",
            },
            {
              id: 14,
              title: "Weather",
              icon: "mdi-weather-sunny",
              iconcolor: "#DEBD25",
              url: "https://www.accuweather.com/",
              type: 0,
              isTaskbarVisible: !1,
              isOpen: !1,
              isResizible: !0,
              isMaximized: !1,
              isValidApp: !0,
              isRecommended: !1,
              isDesktopVisible: !1,
              width: "800px",
              height: "500px",
            },
            {
              id: 15,
              title: "Calendar",
              icon: "mdi-calendar-range",
              iconcolor: "#F34D56",
              component: "Calendar",
              url: "",
              type: 1,
              isTaskbarVisible: !1,
              isOpen: !1,
              isResizible: !0,
              isMaximized: !1,
              isValidApp: !0,
              isRecommended: !1,
              isDesktopVisible: !1,
              width: "500px",
              height: "500px",
            },
            {
              id: 16,
              title: "Games",
              icon: "mdi-gamepad-variant-outline",
              iconcolor: "#DD0131",
              url: "https://www.arkadium.com/free-online-games/",
              type: 0,
              isTaskbarVisible: !1,
              isOpen: !1,
              isResizible: !0,
              isMaximized: !1,
              isValidApp: !0,
              isRecommended: !1,
              isDesktopVisible: !1,
              width: "800px",
              height: "500px",
            },
            {
              id: 17,
              title: "News",
              icon: "mdi-newspaper-variant-outline",
              iconcolor: "#FDF1C1",
              url: "https://news.sky.com/world",
              type: 0,
              isTaskbarVisible: !1,
              isOpen: !1,
              isResizible: !0,
              isMaximized: !1,
              isValidApp: !0,
              isRecommended: !1,
              isDesktopVisible: !1,
              width: "800px",
              height: "500px",
            },
            {
              id: 18,
              title: "Calculator",
              icon: "mdi-calculator",
              iconcolor: "#F49E3F",
              component: "Calculator",
              url: "",
              type: 1,
              isTaskbarVisible: !1,
              isOpen: !1,
              isResizible: !1,
              isMaximized: !1,
              isValidApp: !0,
              isRecommended: !1,
              isDesktopVisible: !1,
              width: "22vw",
              height: "100",
            },
            {
              id: 19,
              title: "TuneIn",
              icon: "mdi-radio-tower",
              iconcolor: "#2CB6A8",
              url: "https://tunein.com/",
              type: 0,
              isTaskbarVisible: !1,
              isOpen: !1,
              isResizible: !0,
              isMaximized: !1,
              isValidApp: !0,
              isRecommended: !1,
              isDesktopVisible: !1,
              width: "800px",
              height: "500px",
            },
            {
              id: 20,
              title: "YouTube",
              icon: "mdi-youtube",
              iconcolor: "#FF0000",
              url: "https://www.youtube.com/",
              type: 0,
              isTaskbarVisible: !1,
              isOpen: !1,
              isResizible: !0,
              isMaximized: !1,
              isValidApp: !0,
              isRecommended: !1,
              isDesktopVisible: !1,
              width: "800px",
              height: "500px",
            },
            {
              id: 21,
              title: "Photopea",
              icon: "mdi-image",
              iconcolor: "#18A497",
              url: "https://www.photopea.com/",
              type: 0,
              isTaskbarVisible: !1,
              isOpen: !1,
              isResizible: !0,
              isMaximized: !1,
              isValidApp: !0,
              isRecommended: !1,
              isDesktopVisible: !0,
              width: "1000px",
              height: "500px",
            },
            {
              id: 22,
              title: "PDFzorro",
              icon: "mdi-file-pdf-box",
              iconcolor: "#9D1B35",
              url: "https://www.pdfzorro.com/",
              type: 0,
              isTaskbarVisible: !1,
              isOpen: !1,
              isResizible: !0,
              isMaximized: !1,
              isValidApp: !0,
              isRecommended: !1,
              isDesktopVisible: !1,
              width: "800px",
              height: "500px",
            },
            {
              id: 23,
              title: "Settings",
              icon: "mdi-cog-outline",
              iconcolor: "#3886C4",
              component: "Settings",
              url: "",
              type: 1,
              isTaskbarVisible: !1,
              isOpen: !1,
              isResizible: !0,
              isMaximized: !1,
              isValidApp: !1,
              isRecommended: !0,
              isDesktopVisible: !1,
              width: "810px",
              height: "500px",
            },
            {
              id: 24,
              title: "App",
              icon: "mdi-application",
              iconcolor: "#3886C4",
              component: "IFrameBypass",
              url: "",
              type: 0,
              isTaskbarVisible: !1,
              isOpen: !1,
              isResizible: !0,
              isMaximized: !0,
              isValidApp: !1,
              isRecommended: !1,
              isDesktopVisible: !1,
              width: "800px",
              height: "500px",
            },
          ],
          installedApps: [],
        },
        mutations: {
          shutdown: function (t) {
            t.isShutdown = !0;
          },
          shutdownEnd: function (t) {
            t.shutdownOpacity = 1;
          },
          toggleAppState: function (t, e) {
            e--, (t.apps[e].isOpen = !t.apps[e].isOpen);
          },
          closeApp: function (t, e) {
            e--, (t.apps[e].isOpen = !1), (t.apps[e].isTaskbarVisible = !1);
          },
          toggleApp: function (t, e) {
            var i = e.id,
              n = e.isOpen;
            i--, (t.apps[i].isOpen = n), (t.apps[i].isTaskbarVisible = n);
          },
          toggleAppUrl: function (t, e) {
            var i = e.id,
              n = e.url,
              o = e.isOpen;
            i--,
              (t.apps[i].url = n),
              (t.apps[i].isOpen = o),
              (t.apps[i].isTaskbarVisible = o);
          },
          changeDesktopUrl: function (t, e) {
            t.desktopUrl = e;
          },
          setDefaultDesktopUrl: function (t) {
            t.desktopUrl = t.themes[t.currentThemeIndex].defaultWallpaper;
          },
          changeThemePrimaryColor: function (t, e) {
            t.themePrimaryColor = e;
          },
          setDefaultThemePrimaryColor: function (t) {
            t.themePrimaryColor = t.themes[t.currentThemeIndex].primaryColor;
          },
          changeTheme: function (t, e) {
            (t.currentThemeIndex = e),
              (t.themePrimaryColor = t.themes[e].primaryColor),
              (t.desktopUrl = t.themes[e].defaultWallpaper);
          },
          setDefaultTheme: function (t) {
            (t.currentThemeIndex = Cn),
              (t.themePrimaryColor = t.themes[Cn].primaryColor),
              (t.desktopUrl = t.themes[Cn].defaultWallpaper);
          },
        },
        actions: {
          shutdownAction: function (t) {
            var e = t.commit;
            e("shutdown");
          },
          shutdownEndAction: function (t) {
            var e = t.commit;
            e("shutdownEnd");
          },
          toggleAppStateAction: function (t, e) {
            var i = t.commit;
            i("toggleAppState", e);
          },
          toggleAppAction: function (t, e) {
            var i = t.commit,
              n = e.id,
              o = e.isOpen;
            i("toggleApp", { id: n, isOpen: o });
          },
          toggleAppUrlAction: function (t, e) {
            var i = t.commit,
              n = e.id,
              o = e.url,
              s = e.isOpen;
            i("toggleAppUrl", { id: n, url: o, isOpen: s });
          },
          closeAppAction: function (t, e) {
            var i = t.commit;
            i("closeApp", e);
          },
          changeDesktopUrlAction: function (t, e) {
            var i = t.commit;
            i("changeDesktopUrl", e);
          },
          setDefaultDesktopUrlAction: function (t) {
            var e = t.commit;
            e("setDefaultDesktopUrl");
          },
          changeThemePrimaryColorAction: function (t, e) {
            var i = t.commit;
            i("changeThemePrimaryColor", e);
          },
          setDefaultThemePrimaryColorAction: function (t) {
            var e = t.commit;
            e("setDefaultThemePrimaryColor");
          },
          changeThemeAction: function (t, e) {
            var i = t.commit;
            i("changeTheme", e);
          },
          setDefaultThemeAction: function (t) {
            var e = t.commit;
            e("setDefaultTheme");
          },
          deleteInstalledApp: (function () {
            var t = Object(pe["a"])(
              regeneratorRuntime.mark(function t(e, i) {
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          console.log("store is being asked to delete " + i.id),
                          (t.next = 3),
                          yn.deleteApp(i)
                        );
                      case 3:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            function e(e, i) {
              return t.apply(this, arguments);
            }
            return e;
          })(),
          getInstalledApps: (function () {
            var t = Object(pe["a"])(
              regeneratorRuntime.mark(function t(e) {
                var i;
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (e.state.installedApps = []),
                          (t.next = 3),
                          yn.getApps()
                        );
                      case 3:
                        (i = t.sent),
                          i.forEach(function (t) {
                            e.state.installedApps.push(t);
                          });
                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            function e(e) {
              return t.apply(this, arguments);
            }
            return e;
          })(),
          saveInstalledApp: (function () {
            var t = Object(pe["a"])(
              regeneratorRuntime.mark(function t(e, i) {
                return regeneratorRuntime.wrap(function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), yn.saveApp(i);
                      case 2:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            );
            function e(e, i) {
              return t.apply(this, arguments);
            }
            return e;
          })(),
        },
        getters: {
          apps: function (t) {
            return t.apps;
          },
          isShutdown: function (t) {
            return t.isShutdown;
          },
          shutdownOpacity: function (t) {
            return t.shutdownOpacity;
          },
          desktopUrl: function (t) {
            return t.desktopUrl;
          },
          themePrimaryColor: function (t) {
            return t.themePrimaryColor;
          },
          currentThemeIndex: function (t) {
            return t.currentThemeIndex;
          },
          currentTheme: function (t) {
            return t.themes[t.currentThemeIndex];
          },
        },
      });
    (o["a"].prototype.$http = fn.a),
      (o["a"].config.productionTip = !1),
      o["a"].use(dn["a"]),
      o["a"].use(s["a"]);
    var On = { template: "<div>Home</div>" },
      Mn = new s["a"]({
        mode: "history",
        routes: [{ path: "/", component: On }],
      });
    new o["a"]({
      vuetify: hn,
      router: Mn,
      render: function (t) {
        return t(cn);
      },
      store: Sn,
    }).$mount("#app");
  },
  "5ff0": function (t, e, i) {
    t.exports = i.p + "img/theme_classic_preview.b69cdaaa.png";
  },
  "64a9": function (t, e, i) { },
  "65a1": function (t, e, i) { },
  "6b4c": function (t, e, i) {
    "use strict";
    var n = i("89bc"),
      o = i.n(n);
    e["default"] = o.a;
  },
  "6b66": function (t, e, i) { },
  "6bce": function (t, e, i) {
    "use strict";
    var n = i("ead4"),
      o = i("6b4c"),
      s = (i("b11f"), i("2877")),
      a = i("6544"),
      r = i.n(a),
      c = i("b0af"),
      l = i("99d9"),
      u = i("8414"),
      h = i("1e06"),
      d = Object(s["a"])(
        o["default"],
        n["a"],
        n["b"],
        !1,
        null,
        "a71e60f0",
        null
      );
    (e["default"] = d.exports),
      r()(d, {
        VCard: c["a"],
        VCardText: l["b"],
        VCardTitle: l["c"],
        VTimeline: u["a"],
        VTimelineItem: h["a"],
      });
  },
  "6f08": function (t, e, i) {
    t.exports = i.p + "img/morse_code_transmitter.19664b9a.png";
  },
  "706d": function (t, e, i) {
    "use strict";
    i("bf5d");
  },
  "712c": function (t, e, i) {
    t.exports = i.p + "img/theme_classic.2340cc2c.png";
  },
  "74fc": function (t, e, i) {
    t.exports = i.p + "img/stickywall.a0fcd31d.png";
  },
  "785d": function (t, e, i) {
    t.exports = i.p + "img/notepad.4eb7b8c2.png";
  },
  "89bc": function (t, e) { },
  "92f7": function (t, e) {
    t.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlApw1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAn1BMVEXvUkDvUkLuUUHtUUHtUEHtUEPsUEPsUUPsUUXsT0btT0fsTkbsTkjsTUjsTUrrTEnrTEvsSkzsSU3sSU7sSVDsSFHsSFLrR1HqR1HqR1LqR1PpRlLpRVTpRVbpRFfpRFjoQ1boQ1noQ1roQ1voQlvoQl3nQVvoQFzpQF3nPl7nPWHnPWTmPGPmO2TmO2XmO2fmO2bkPGbnPGjlO2f///9Upb9vAAAAAWJLR0Q0qbHp/QAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAAd0SU1FB+UKCA8GJRNbJCMAAAABb3JOVAHPoneaAAABSklEQVR42u3PV04VABQA0StIUWmC2OggRQFp+98byVvC+5lMMmcFMzNJ3D7INUBrgOYfWJGbVbkGaA3QGqD5Bz7KzZrcrMvNhpx/YFOuAVoDNP/AJ7n5LNcAzT/wRc4/sCXXAM0/sC03O3IN0Bqg+Qd25RqgNUBrgNYAbfbkGqA1QGuA1gBtvso1QGuA5h/Yl5sDuQZo/oFvcg3QGqD5Bw7l5rtcA7T5ITc/5Rqg+Qd+yc1vuQZocyTXAK0B2hzLNUBrgNYAbU7kGqD5B07l5kyuAVoDtAZoDdD8A+dyDdAaoM2FXAO0Bmj+gUu5uZJrgDZ/5OZazj9wI9cAzT9wKzd3cg3QGqA1QGuA1gCtAVoDtAZo81euAZp/4J/c3Ms1QGuA1gCtAZp/4EGuAVoDtAZoDdDmUW7+y83TAp2xrOeXeV14pkuW9PT2DnHdzK+ctIaGAAAArmVYSWZJSSoACAAAAAYAEgEDAAEAAAABAAAAGgEFAAEAAABWAAAAGwEFAAEAAABeAAAAKAEDAAEAAAACAAAAMQECABEAAABmAAAAaYcEAAEAAAB4AAAAAAAAAGAAAAABAAAAYAAAAAEAAABwYWludC5uZXQgNC4yLjEwAAAEAACQBwAEAAAAMDIzMAGgAwABAAAAAQAAAAKgBAABAAAAwAAAAAOgBAABAAAAwAAAAAAAAACnHtIeAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTEwLTA4VDE1OjA2OjM3KzAwOjAwy9a9dAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0xMC0wOFQxNTowNjozNyswMDowMLqLBcgAAAARdEVYdGV4aWY6Q29sb3JTcGFjZQAxD5sCSQAAABN0RVh0ZXhpZjpFeGlmT2Zmc2V0ADEyMK96KgkAAAAfdEVYdGV4aWY6RXhpZlZlcnNpb24ANDgsIDUwLCA1MSwgNDgpsxDeAAAAGHRFWHRleGlmOlBpeGVsWERpbWVuc2lvbgAxOTJ5/poIAAAAGHRFWHRleGlmOlBpeGVsWURpbWVuc2lvbgAxOTLk8Xt+AAAAHnRFWHRleGlmOlNvZnR3YXJlAHBhaW50Lm5ldCA0LjIuMTCPYkHbAAAAAElFTkSuQmCC";
  },
  "950d": function (t, e, i) {
    "use strict";
    i("4b64");
  },
  "95c0": function (t, e, i) {
    "use strict";
    i("65a1");
  },
  a078: function (t, e, i) {
    t.exports = i.p + "img/currency_calculator.c0aa0bd3.png";
  },
  a979: function (t, e, i) { },
  a97d: function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__("c5f6"),
      core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0___default =
        __webpack_require__.n(
          core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__
        ),
      core_js_modules_es6_number_is_integer__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__("7cdf"),
      core_js_modules_es6_number_is_integer__WEBPACK_IMPORTED_MODULE_1___default =
        __webpack_require__.n(
          core_js_modules_es6_number_is_integer__WEBPACK_IMPORTED_MODULE_1__
        );
    __webpack_exports__["a"] = {
      data: function () {
        return { value: 0, logs: [] };
      },
      methods: {
        addExpresion: function (t) {
          Number.isInteger(this.value) && (this.value = ""), (this.value += t);
        },
        getResult: function getResult() {
          var log = this.value;
          (this.value = eval(this.value)),
            this.logs.push(log + "=" + this.value);
        },
        clear: function () {
          this.value = 0;
        },
        del: function () {
          this.value = this.value.slice(0, -1);
        },
      },
    };
  },
  abe5: function (t, e, i) {
    "use strict";
    i("6b66");
  },
  afda: function (t, e, i) {
    t.exports = i.p + "img/instaloadgram.10904d65.png";
  },
  b0cc: function (t, e) {
    t.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAeCAYAAACc7RhZAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAIpUlEQVRYw7WZfXBNZx7HP+fem3d5k3cSeisSb11FKN2lY4YdmY7VtQ3a6q7YCiFKEEm9pOolEjSJUKG02q0KYXQxmJ3ZDrazlroRW1IRQlfeCXmRRN7uPfvHyT0997o3OUF+M+eP8/ye832e53t+b+d3BFTIWdB5wAQRpgFjAT3gDeisplZFQKD5RgQhD94WIEaE1wAn4AZwyAF2DIdGNevnwVQgVoRxQC/gpgBHNLB9BNTae84AqUCi+X5kW5upLDm5oWrzZg/zmK6zhf8Lbm2wDFgigg/dkAJwNECOANNFS9VwYHgbRF+CKa/BXXsYuaB9Gb4Q4S9WqqEiDDXC3CsQORJ+VrUpk0lDS4uHckjTCevvtcEtYD3dPDxAM2QJML2TKWFaOH0BXOxNeBk28fThldLPBGfywYtnFJ0d1tNEWG7rAacBA3AOD0cXEIDg4GChE7TaVrKz+VF6QzG/0qzBc8oUtN7e1J08ibG+3qwZ5CCZ6DrrdX6EEJR7EAQ8Jk3CITCQulOnaH/0SCbBCJ8AS56bgFzQ6iEXqzen9fIiYOlSvGfOxHnQIPsW1tDgTXY2WnhbBME83n/vXnznzpUso6iIwjFjMNbVSeeChIuwbyyUWpnmH5X7C966lYDlEh+tpaUURkTQVlVlVscaIDsCCrtLgMbK5FKtzdYnOpphxcUEJCbSlJfHnagoroeFke/mRp4gWFz57u6NACYIlcnz8MA3OpqyxER+HjYMx379CFq7VrmEqxY229hbqMKy8I+LozI1lWt6PVp3d/qkpCjnOgDbnsUCZAIuwzvACnlRnY6QHTt46csvqT9zhoKwMO7Onk3N0aO03LqFqanJLqggRXuZAASB5qIinhQUcD89Hf/Fi3EKDVXOf88gZQkUGUTGEJydEZycaC4qovWXX6jYuBHfOXNwHTFC+cibBvj9MxFwAVwE2KJUhOzcid+CBdxbtIi7s2fTWlLCi5DK1FTaHz4keOtWK87IVLpNZ3I/K4uWu3cJzsiwVmWe7SKz2STAEZYCweZB35gY/ObPp2TJEh7s2mX9TDtwToT9InyuvIBvulrQ+Pgx5WvW4PXWW7hPnKhUjTXATDWbFltbKU1IwP2NN/CabuGxg91hXreCYC5ogXhlwOubksKjb7996vAdB/14DFQ+jxVUf/UVfnFxBKenUxgRgWg0ms0g7QIcfx2edIVR+913PD53juAtW6g7dQqxpcWs+iQfcjorkCwsIBR+C/iZB/yXLEHj5kbZRx9ZH37BaJj/vIfvKEgojY/H9dVX8YmOtsjrjnbSry0pjY/HSa/H/8MPlcN+Rlir2gVMUnkrS+8ZM6g5csTa53ePhj28QHl8/jy1x47RZ+NGtO7uSlXiFeijBqPp6lWq9+8naPVqdP7+SlVcPgxUGwNel4uc0FCchwyh7vhx5ZxWDSTTA1K6ciU6Ly8CV61SDvcySRWgKilfswY0GvqsX68cdjTCVrUEDDDfOIeHA9CYl6ecc34kPOgJAlqKi7mflYX/0qU46fVK1Z+BkWow2iorqdy8Gd8PPsDllVeUqmnARDUEeMrVRFAQiCJtFRVK3y+iB6Vi0yZM9fX0TUuz2JcAEWox7mdk0FZSQnB6urVqTLcqQQTBVlEj9CQBxro6ypOT8Y6Kotf48c8WU5ubKU1MxGPSJDynTu12IVQnm1N5OQiCZAm/EhDWEy8ekKNs9b59PPnpJ0K2bweNRi1GPYravyY3l4YffiAkIwPByUk9ASLclj9hb94EwG3UKKULTLgIAS+YgCcCyHlWNBopWbYM1xEj8Hn/fdXGY/3FWrJsGU56PX6xseoJEOCCHJRu36a5sBDPaRaZ0VEHG160CYyEg8AlOS1+/z21J07QNyUFTa9eqjBGw2ngH3JaNBh4eOAAfZKT0fn4qCbAIufVHD6Md1QUjv36KYfnGSD2RRIggKiRKlC5YVSWkIDO15fAlSvV+79kBe0yxqpVCI6OBK1bp46AYskC5DRXlZmJqbGRvpuf+kLdZYB9BghSgeui0gr+AxySXbCoiPuffUbAihXWL8CujIECpO8QKY6VlVGZlobfggU4DxnSNQEzwAjI+cNYW0tZUhK9330Xv0WLrOf/FSgxwL8MsP8y7LFxfUP3PkuTUNT+FRs2SC8gNbU7BvUxitq/6tNPaauoIHhb1y0CDcBjyLSOyg927yYkMxP/uDjrZ7TAeGCOADE2rtnSB6Y6iYB7ymaGsaaG8nXr6D1rFm7jxqnFqEYRp0xNTZQlJeEZGYlnZGTXBEyEZgESLCLq4sVU791LyI4d6HNycOzfv8dqARepF1Euv4A9e2i+cYOQ9HSbtYkdjJ1ITVwAHuXk0HjxIsHbtiHodF0XQqPgMCCXY2J7O/cWLuR/8+bhMXkyQwsL0R88KPUFw8PRuLqq2pjZD9sfPrRIgxY9bmgAVinXLlm+HLexY/GLicF58GDZPS0bzxYYraKio4UoUhIfj/PgwQQsX47TwIEIDg6dYiCCJg+OGkBUXvmenmJZcrLYdP26+CzScOmSmOfgoMQ89lSTAzSX4bJy3eqvv5Yxmq5dE6+4uCgxztoi/DL8U4lRlZkpYzQXF4v5Xl5KjKuCrY0YpOZogs22uF6P86BBUlvcsWtXb6+upv70aUzNzco13hmtiP6KfxHjRTiPufw2t9O9vKg9cQJTQ4Ny+sIIyLaB8RsRrnTEKgA8Jk/GITCQ2pMnLSxAgNV2HewyzBKk4NT3Bbv8v0fBBAFMdn7IfCHC3C4wrrlAxFBotaU0SPvuqrFyxwWGazqpsg4BYQKsRoqyzy0iGNrhT/YOD+ABC4G/dwJTYII37R2+I6slAX/rBKPYCJFDoUFViM0F7UvwOy1ME6UGivnnqIOKxxuB6yIccIXPO9u4gijhCkSZpLQa0eESt4CDrZCtpmfYYcV/AGIFqeWuA+4IkOsMWR2Bl/8D6fhDgDx8nB4AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDktMjVUMTM6Mjk6MzcrMDA6MDBroOvdAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTA5LTI1VDEzOjI5OjM3KzAwOjAwGv1TYQAAAABJRU5ErkJggg==";
  },
  b103: function (t, e, i) { },
  b11f: function (t, e, i) {
    "use strict";
    i("b103");
  },
  b7f4: function (t, e, i) {
    t.exports = i.p + "img/theme_modern_preview.3b2fa8db.png";
  },
  b916: function (t, e, i) {
    t.exports = i.p + "img/dictionary.b23fc43f.png";
  },
  ba6b: function (t, e, i) { },
  ba81: function (t, e, i) { },
  bd67: function (t, e, i) { },
  bf5d: function (t, e, i) { },
  c6a1: function (t, e, i) {
    t.exports = i.p + "img/crossnote.ff910308.png";
  },
  c6e2: function (t, e, i) {
    t.exports = i.p + "img/craft_cards.61b2101e.png";
  },
  ccb7: function (t, e, i) {
    "use strict";
    i("bd67");
  },
  d21b: function (t, e, i) {
    t.exports = i.p + "img/wallpaperModern.aecbb604.jpg";
  },
  e054: function (t, e, i) {
    "use strict";
    i("ea4f");
  },
  e151: function (t, e, i) { },
  e3dc: function (t, e, i) {
    "use strict";
    i("a979");
  },
  e78c: function (t, e, i) {
    t.exports = i.p + "img/material_money.fd9adf65.png";
  },
  ea4f: function (t, e, i) { },
  ead4: function (t, e, i) {
    "use strict";
    i.d(e, "a", function () {
      return n;
    }),
      i.d(e, "b", function () {
        return o;
      });
    var n = function () {
      var t = this,
        e = t.$createElement,
        i = t._self._c || e;
      return i(
        "div",
        { staticStyle: { padding: "10px" } },
        [
          i("h1", [t._v("GravityOS")]),
          i(
            "span",
            {
              staticClass: "v-card__text",
              staticStyle: { color: "rgba(0, 0, 0, 0.54)" },
            },
            [
              t._v(
                "\n        GravityOS - World's First Web Based Operating System. It provides a cross-platform environment with Simple UI inside a web browser.\n        The team had inspired by the Pareto principle, or more commonly 'the 80/20' rule.  It claims that roughly 80% of output is a direct result of about 20% of the input. So the mission of GravityOS is to move 20% most used operating system functionality online.\n    "
              ),
            ]
          ),
          i(
            "v-timeline",
            { attrs: { light: "" } },
            [
              i(
                "v-timeline-item",
                {
                  key: "1",
                  attrs: {
                    color: "purple lighten-2",
                    "fill-dot": "",
                    small: "",
                  },
                  scopedSlots: t._u([
                    {
                      key: "opposite",
                      fn: function () {
                        return [
                          i("span", { staticClass: "date" }, [
                            t._v("Aug, 2023"),
                          ]),
                        ];
                      },
                      proxy: !0,
                    },
                  ]),
                },
                [
                  i(
                    "v-card",
                    { staticClass: "elevation-2" },
                    [
                      i("v-card-title", { staticClass: "headline" }, [
                        t._v("Initial release"),
                      ])
                    ],
                    1
                  ),
                ],
                1
              )
            ],
            1
          ),
        ],
        1
      );
    },
      o = [];
  },
  ec0e: function (t, e, i) {
    "use strict";
    i("ba81");
  },
  f85e: function (t, e) {
    t.exports =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlApw1AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURUxpcf////////////////////////////////////////38/fr6+v////r6+vz8/Pz7/O/v7/Ly8u/v7/Ly8v39/fOPAv///wJ+rcpKL8xJMf/72fWRAwB/q9+TKOn//xp2mf/277RTP//28bRSQf7+/uf//+CUKRh3mf39/ctMMMxKLwB/r//+/8pLLcpKMf3//81LMPz//////gKBsfr//wCAqf/84wF/q//588xKLf/9/+3//85KMgN9qf3//gB/rctMLspKMwB/swCBpfr6+vf397VRRAF9r8pNLgN+q81INQB/sQCBtc6WRv//9f/9/MxJMwR9rf/++AR+p81KOQOBrv//+shOL//69ez//wh8pP79+fz//NFJM6JZSypxigCBo/z7/P/188lFMv/39chNLOX//85JNQCAoAd7sMlHOcZPLP/9+P/89cpKO/X///L//8ROJ9H//9BGNc9QQshMHgJ1n9ZKRf79/8JXUs9HPspMMMpINcpJQgB7rc1KNcxGOshLL8ROLQJ7s/v//+///2a1yQ6Bogh5tqpLOAN5ov/14MNJPhuFpAB+uLlHNve5qAh0mQB7qc9IMQt2n/j99geFtGatyv//8SmAoguDsP748bhMPKxRQvv57P/v4g2GtN2RhjWEp7rq98ZKMr9SOcpKJv/p3NBJLsdLKP/45tJJN//8/xZ4lf/29b1UUxd+lB+Fl8xvatyMg/7+/EKcsBZ3m75PQvv9/9FLOtBpYc1CNv/p1SKHsJXV5jOVvd2CeCqHo+H//81IMcRRL+WVhyp6llCoyKJROgZ+qgB4pRt+ocJTQvq7qcH1/7FENf/nz9aRebJMPPP08aHh7v/hzf/46xd2jFWdwAp7pwJ2rid5htr//8FGNv/649b//wNolqlYQdGNcgCCu//958RPHgJrlef//AqBplykqR+Enx11k7ZQPsd1Zc1OPv/Xxf/Ot7/1+v/87xuBrp/b8MdQQgB8nb1pWs94Yf/VwgeAqcNRNbxRQ9F3YSV7nEzf4QEAAABGdFJOUwCcHP7ZtvzzbBpu/U5OHPOb809Obpv///////////////////////////////////////////////////////////////6iEtqZAAAEs0lEQVR42u3cV1BTWRzH8QuksoJu87BhKZagiQFCQoAAScBApASlg7CgggsIhqpgw4Zr76699769995777333nfdG0o2d5wJDzjof/19Z/KSOQ//zz333MfDcV15y8SigRUqFaOQVCSWeXPuyb0kjKlSKxidJIPk/80/4EJGLptNOqBnfl8l//jpEZiPb9f8F/sQHJ4p+VSdeyCXuv1LC8CkznPg5fb6OP8kBFDavPjv5wUqRhXAlKn+nExF8fy6knFi2gAxJ6INEHFS2gApx2gD2P8AoFQCAMD5DSAeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwGmFh9MGhCck9EboDWBIDPFYokG4flxsoMdixwnXZxuHuBrmrLKy0mgcX+8osjA28wwAEieGemxionB97NgRwoKFjY0VrjdOGOpq+Bi+WXfe/8gzr7z78Y9MX3G77uTJvgJCQgM8FhoiXB844nJhg4UFBwrXDxl6WU+RkaPb29vvWtDw9PIPPvz+CNvBLLqZ1ACZBXcU1L2zdufXu/Yd2brbkaDT9fUQ9ysgcnRO++TJBQUN307/5e/f/jhudFi0hAA9hvk15eUnThw89M+647uvYLQAzhQmk6m8/OjhY3/9/t2eHXpSgIiI+Pj4UVHqOcXFU1tbjx36Zk/9Jj05QHxyenHHw82ftB4+uHPfq1uLqL1CEXzp6VVTm5uPZq7a9fxKB0VAcnJyVUfH1dOmv/jCynpyh5hPrU5O71jIA557/O7xVAFVCx+a1rB2+TqiALV6jtpUU7fqtpuupApQR5nm182de+O1NAFRfKbMBbNnXEcYEJmTOXvGrMr+BgQP9livAEVno/gUipyazDHDKAMUJsVw2gAFAGcL4AoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzhuARuOcNCmJJiDs1jRNmgfAyLBzHFB9z6KseQH8LnTtQ0BAkLBzHhB2nyZ6nnP8rn2gBwh57AlztOvxEwSULFm6YrPdHpCRm0sTsPjl19YXZtkzzBlEd6DpvbdWb8iymkudgDg+aoDGt7/4cm+WNb/UzM9vjsmPoQYwfPbDV212e2lpbm1ahjklJSWGGEBrSdzy0/agKZ/XLqvNzU+ZMokaQK83tOzfmP9r25vLFqXFxUwitwPsJYPhwKm2Pzd/tGaNVZMURO4MML2FGX7e9ulea5bVatdoCqkB9I6issamA/vff2N74ZMboqOjk2gBtPq8vLKyTSUtr297av3GFeagwjhSAK1OZ7k5z1Fm0FU/u+XRB1YvpfYV4gFXWfKKGMtmJQ+23Lvklhuuv2akoNOv5wn2mKfrebov6RE0wdjHV0ir0+r1jIVrDY1Ni0tCwqrDhJ3JC5LcrklyZczu61dI2+v9Mmc33HIGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ7wAp7fmlnIg2QMSJaQPEnIw2QMZ5S2x0x1dK/DnuUsIA2yCO4+R0v0PKgXIewPn5kBye/1X4cZ35UhQobarUS7juLpKqCL7/Uj/OldxLQm1+iZecc89bJhaROc1SkVjm3z34vwTC+WnXY0sTAAAAAElFTkSuQmCC";
  },
  ff61: function (t, e, i) {
    t.exports = i.p + "img/theme_modern.c55ea6c1.png";
  },
});
//# sourceMappingURL=app.7de24577.js.map
