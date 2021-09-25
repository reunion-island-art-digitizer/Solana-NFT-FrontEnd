(self.webpackChunkwebpack_starter = self.webpackChunkwebpack_starter || []).push([
    [826], { "2f54674dfd4dc112b34c": (e, t, n) => { "use strict"; var a = n("1efe8eafdbf40cd1ff49"),
                s = n("30d4db511c3d50be1cc5"),
                r = n("d440ef8bd5a90a1e2360"),
                o = n("3063e477940dff4ab2af");
            a.Z.use([s.Z]), window.addEventListener("DOMContentLoaded", (async() => { if (null !== document.getElementById("family-slider")) { new a.Z("#family-slider", { speed: 400, loop: !0, spaceBetween: 10, autoplay: { delay: 3e3 }, slidesPerView: 1.5, centeredSlides: !0, breakpoints: { 600: { slidesPerView: 3 }, 1280: { slidesPerView: 5 } } }) } try { if (document.getElementById("timer")) { const e = document.getElementById("timer"),
                            t = r.ou.fromFormat("23.10.2021 09:00", "dd.LL.yyyy HH:mm", { zone: "Europe/Moscow" }).setZone("America/New_York").setLocale("en"),
                            n = e.querySelector(".timer__left");
                        e.querySelector(".timer__date").innerHTML = [t.toFormat("LLLL dd"), `${t.toFormat("hh")} ${t.hour > 11 ? "PM" : "PA"} EST `].map((e => `<span>${e}</span>`)).join(""); const a = () => { const e = r.ou.local().setZone("America/New_York").diff(t, ["hours", "minutes", "seconds"]).toObject(); let a = 0,
                                s = 0,
                                o = 0; "number" == typeof e.hours && (a = Math.round(Math.abs(e.hours))), "number" == typeof e.minutes && (s = Math.round(Math.abs(e.minutes))), "number" == typeof e.seconds && (o = Math.round(Math.abs(e.seconds))), n.innerHTML = [a, s, o].map((e => e < 10 ? `0${e}` : e)).join(":") };
                        a(), setInterval(a, 1e3) } } catch (e) { o.log(e) } if (document.getElementById("phantom-input")) { const e = document.getElementById("phantom-input");
                    e.addEventListener("input", (() => { parseInt(e.value, 10) > parseInt("20", 10) && (e.value = "20"), parseInt(e.value, 10) < parseInt("1", 10) && (e.value = "1") })) } })) } },
    e => { "use strict";
        e.O(0, [736], (() => { return t = "2f54674dfd4dc112b34c", e(e.s = t); var t }));
        e.O() }
]);