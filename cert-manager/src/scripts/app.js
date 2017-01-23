! function () {
    "use strict";

    angular.module("app", ["ngRoute", "ngAnimate", "ngAria", "ui.bootstrap", "easypiechart", "ui.tree", "ngMap", "ngTagsInput", "textAngular", "angular-loading-bar", "duScroll", "app.nav", "app.i18n", "app.chart", "app.ui", "app.ui.form", "app.ui.form.validation", "app.ui.map", "app.page", "app.table", "app.task", "app.master"])
}(),
function () {
    "use strict";
  //   angular.module("app").config(function($httpProvider){


  // $httpProvider.defaults.headers.common = {};
  // $httpProvider.defaults.headers.post = {};
  // $httpProvider.defaults.headers.put = {};
  // $httpProvider.defaults.headers.patch = {};

    angular.module("app").config(["$routeProvider", function (a) {
        var b, c;
        b = ["dashboard", "ui/Status_Master", "ui/users", "ui/Project_Master", "ui/Project_Component_Master", "ui/Project_Task_Details", "ui/typography", "ui/buttons", "ui/icons", "ui/grids", "ui/widgets", "ui/components", "ui/boxes", "ui/timeline", "ui/nested-lists", "ui/pricing-tables", "ui/maps", "tables/static", "tables/dynamic", "tables/responsive", "forms/elements", "forms/layouts", "forms/validation", "forms/wizard", "charts/charts", "charts/flot", "charts/morris", "pages/404", "pages/500", "pages/blank", "pages/forgot-password", "pages/invoice", "pages/lock-screen", "pages/profile", "pages/invoice", "pages/signin", "pages/signup", "mail/compose", "mail/inbox", "mail/single", "app/tasks", "app/calendar"], c = function (b) {
            var c, d;
            return d = "/" + b, c = {
                templateUrl: "views/" + b + ".html"
            }, a.when(d, c), a
        }, b.forEach(function (a) {
            return c(a)
        }), a.when("/", {
            redirectTo: "/dashboard"
        })
        .when("/404", {
            templateUrl: "views/pages/404.html"
        }).otherwise({
            redirectTo: "/404"
        })
    }])
}(),
function () {
    "use strict";

    function a(a, b, c, d) {
        var e = new Date,
            f = e.getFullYear();
        a.main = {
            brand: "Transform",
            name: "Lisa",
            year: f
        }, a.pageTransitionOpts = [{
            name: "Fade up",
            "class": "animate-fade-up"
        }, {
            name: "Scale up",
            "class": "ainmate-scale-up"
        }, {
            name: "Slide in from right",
            "class": "ainmate-slide-in-right"
        }, {
            name: "Flip Y",
            "class": "animate-flip-y"
        }], a.admin = {
            layout: "wide",
            menu: "vertical",
            fixedHeader: !0,
            fixedSidebar: !0,
            pageTransition: a.pageTransitionOpts[0]
        }, a.$watch("admin", function (c, d) {
            "horizontal" === c.menu && "vertical" === d.menu && b.$broadcast("nav:reset"), c.fixedHeader === !1 && c.fixedSidebar === !0 && (d.fixedHeader === !1 && d.fixedSidebar === !1 && (a.admin.fixedHeader = !0, a.admin.fixedSidebar = !0), d.fixedHeader === !0 && d.fixedSidebar === !0 && (a.admin.fixedHeader = !1, a.admin.fixedSidebar = !1)), c.fixedSidebar === !0 && (a.admin.fixedHeader = !0), c.fixedHeader === !1 && (a.admin.fixedSidebar = !1)
        }, !0), a.color = {
            primary: "#1BB7A0",
            success: "#94B758",
            info: "#56BDF1",
            infoAlt: "#7F6EC7",
            warning: "#F3C536",
            danger: "#FA7B58",
            gray: "#DCDCDC"
        }, b.$on("$routeChangeSuccess", function (a, b, c) {
            d.scrollTo(0, 0)
        })
    }
    angular.module("app").controller("AppCtrl", ["$scope", "$rootScope", "$route", "$document", a])
}(),
function () {
    function a(a) {
        a.useStaticFilesLoader({
            prefix: "i18n/",
            suffix: ".json"
        }), a.preferredLanguage("en")
    }

    function b(a, b) {
        a.lang = "English", a.setLang = function (c) {
            switch (c) {
                case "English":
                    b.use("en");
                    break;
                case "Español":
                    b.use("es");
                    break;
                case "中文":
                    b.use("zh");
                    break;
                case "日本語":
                    b.use("ja");
                    break;
                case "Portugal":
                    b.use("pt");
                    break;
                case "Русский язык":
                    b.use("ru")
            }
            return a.lang = c
        }, a.getFlag = function () {
            var b;
            switch (b = a.lang) {
                case "English":
                    return "flags-american";
                case "Español":
                    return "flags-spain";
                case "中文":
                    return "flags-china";
                case "Portugal":
                    return "flags-portugal";
                case "日本語":
                    return "flags-japan";
                case "Русский язык":
                    return "flags-russia"
            }
        }
    }
    angular.module("app.i18n", ["pascalprecht.translate"]).config(["$translateProvider", a]).controller("LangCtrl", ["$scope", "$translate", b])
}(),
function () {
    "use strict";
    angular.module("app.chart", [])
}(),
function () {
    "use strict";

    function a(a) {
        a.easypiechartsm1 = {
            percent: 63,
            options: {
                animate: {
                    duration: 1e3,
                    enabled: !1
                },
                barColor: a.color.success,
                lineCap: "round",
                size: 120,
                lineWidth: 5
            }
        }, a.easypiechartsm2 = {
            percent: 35,
            options: {
                animate: {
                    duration: 1e3,
                    enabled: !1
                },
                barColor: a.color.info,
                lineCap: "round",
                size: 120,
                lineWidth: 5
            }
        }, a.easypiechartsm3 = {
            percent: 75,
            options: {
                animate: {
                    duration: 1e3,
                    enabled: !1
                },
                barColor: a.color.warning,
                lineCap: "round",
                size: 120,
                lineWidth: 5
            }
        }, a.easypiechartsm4 = {
            percent: 66,
            options: {
                animate: {
                    duration: 1e3,
                    enabled: !1
                },
                barColor: a.color.danger,
                lineCap: "round",
                size: 120,
                lineWidth: 5
            }
        }, a.easypiechart = {
            percent: 65,
            options: {
                animate: {
                    duration: 1e3,
                    enabled: !0
                },
                barColor: a.color.primary,
                lineCap: "round",
                size: 180,
                lineWidth: 5
            }
        }, a.easypiechart2 = {
            percent: 35,
            options: {
                animate: {
                    duration: 1e3,
                    enabled: !0
                },
                barColor: a.color.success,
                lineCap: "round",
                size: 180,
                lineWidth: 10
            }
        }, a.easypiechart3 = {
            percent: 68,
            options: {
                animate: {
                    duration: 1e3,
                    enabled: !0
                },
                barColor: a.color.info,
                lineCap: "square",
                size: 180,
                lineWidth: 20,
                scaleLength: 0
            }
        }
    }

    function b(a) {
        var b, c, d, e, f, g, h, i, j, k;
        i = [{
            month: "2013-01",
            xbox: 294e3,
            will: 136e3,
            playstation: 244e3
        }, {
            month: "2013-02",
            xbox: 228e3,
            will: 335e3,
            playstation: 127e3
        }, {
            month: "2013-03",
            xbox: 199e3,
            will: 159e3,
            playstation: 13e4
        }, {
            month: "2013-04",
            xbox: 174e3,
            will: 16e4,
            playstation: 82e3
        }, {
            month: "2013-05",
            xbox: 255e3,
            will: 318e3,
            playstation: 82e3
        }, {
            month: "2013-06",
            xbox: 298400,
            will: 401800,
            playstation: 98600
        }, {
            month: "2013-07",
            xbox: 37e4,
            will: 225e3,
            playstation: 159e3
        }, {
            month: "2013-08",
            xbox: 376700,
            will: 303600,
            playstation: 13e4
        }, {
            month: "2013-09",
            xbox: 527800,
            will: 301e3,
            playstation: 119400
        }], h = [a.color.infoAlt, a.color.danger, a.color.success], a.main = {
            data: i,
            type: "area",
            options: {
                xkey: "month",
                ykeys: ["xbox", "will", "playstation"],
                labels: ["xbox", "will", "playstation"],
                lineColors: h,
                lineWidth: 0,
                behaveLikeLine: !0,
                pointSize: 0
            }
        }, k = [{
            year: "2008",
            value: 20
        }, {
            year: "2009",
            value: 10
        }, {
            year: "2010",
            value: 5
        }, {
            year: "2011",
            value: 5
        }, {
            year: "2012",
            value: 20
        }, {
            year: "2013",
            value: 19
        }], j = [a.color.primary], a.simple1 = {
            data: k,
            type: "line",
            options: {
                xkey: "year",
                ykeys: ["value"],
                labels: ["Value"],
                lineWidth: "2",
                lineColors: j
            }
        }, a.simple2 = {
            data: k,
            type: "area",
            options: {
                xkey: "year",
                ykeys: ["value"],
                labels: ["Value"],
                lineWidth: "2",
                lineColors: j
            }
        }, e = [{
            month: "1",
            a: 20,
            b: 30
        }, {
            month: "2",
            a: 30,
            b: 20
        }, {
            month: "3",
            a: 20,
            b: 10
        }, {
            month: "4",
            a: 10,
            b: 20
        }, {
            month: "5",
            a: 20,
            b: 30
        }, {
            month: "6",
            a: 30,
            b: 20
        }, {
            month: "7",
            a: 20,
            b: 10
        }, {
            month: "8",
            a: 10,
            b: 20
        }, {
            month: "9",
            a: 20,
            b: 30
        }, {
            month: "10",
            a: 30,
            b: 20
        }, {
            month: "11",
            a: 20,
            b: 10
        }, {
            month: "12",
            a: 10,
            b: 20
        }], d = [a.color.success, a.color.danger, a.color.infoAlt], a.combo1 = {
            data: e,
            type: "line",
            options: {
                xkey: "month",
                ykeys: ["a", "b"],
                labels: ["Value A", "Value B"],
                lineWidth: "2",
                lineColors: d
            }
        }, a.combo2 = {
            data: e,
            type: "area",
            options: {
                xkey: "month",
                ykeys: ["a", "b"],
                labels: ["Value A", "Value B"],
                lineWidth: "2",
                lineColors: d
            }
        }, c = [{
            year: "2008",
            a: 20,
            b: 16,
            c: 12
        }, {
            year: "2009",
            a: 10,
            b: 22,
            c: 30
        }, {
            year: "2010",
            a: 5,
            b: 14,
            c: 20
        }, {
            year: "2011",
            a: 5,
            b: 12,
            c: 19
        }, {
            year: "2012",
            a: 20,
            b: 19,
            c: 13
        }, {
            year: "2013",
            a: 28,
            b: 22,
            c: 20
        }], b = [a.color.infoAlt, a.color.success, a.color.warning], a.bar1 = {
            data: c,
            type: "bar",
            options: {
                xkey: "year",
                ykeys: ["a", "b", "c"],
                labels: ["Value A", "Value B", "Value C"],
                barColors: b
            }
        }, a.bar2 = {
            data: c,
            type: "bar",
            options: {
                xkey: "year",
                ykeys: ["a", "b", "c"],
                labels: ["Value A", "Value B", "Value C"],
                barColors: b,
                stacked: !0
            }
        }, f = [a.color.success, a.color.info, a.color.warning, a.color.danger], g = [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }, {
            label: "Online Sales",
            value: 19
        }], a.donut1 = {
            data: g,
            type: "donut",
            options: {
                xkey: "year"
            }
        }, a.donut2 = {
            data: g,
            type: "donut",
            options: {
                xkey: "year",
                colors: f
            }
        }, a.donut3 = {
            data: g,
            type: "donut",
            options: {
                xkey: "year",
                formatter: "return '$' + y;"
            }
        }
    }

    function c(a) {
        var b, c, d, e, f, g;
        e = {}, e.data1 = [
            [1, 15],
            [2, 20],
            [3, 14],
            [4, 10],
            [5, 10],
            [6, 20],
            [7, 28],
            [8, 26],
            [9, 22]
        ], a.line1 = {}, a.line1.data = [{
            data: e.data1,
            label: "Trend"
        }], a.line1.options = {
            series: {
                lines: {
                    show: !0,
                    fill: !0,
                    fillColor: {
                        colors: [{
                            opacity: 0
                        }, {
                            opacity: .3
                        }]
                    }
                },
                points: {
                    show: !0,
                    lineWidth: 2,
                    fill: !0,
                    fillColor: "#ffffff",
                    symbol: "circle",
                    radius: 5
                }
            },
            colors: [a.color.primary, a.color.infoAlt],
            tooltip: !0,
            tooltipOpts: {
                defaultTheme: !1
            },
            grid: {
                hoverable: !0,
                clickable: !0,
                tickColor: "#f9f9f9",
                borderWidth: 1,
                borderColor: "#eeeeee"
            },
            xaxis: {
                ticks: [
                    [1, "Jan."],
                    [2, "Feb."],
                    [3, "Mar."],
                    [4, "Apr."],
                    [5, "May"],
                    [6, "June"],
                    [7, "July"],
                    [8, "Aug."],
                    [9, "Sept."],
                    [10, "Oct."],
                    [11, "Nov."],
                    [12, "Dec."]
                ]
            }
        }, b = {}, b.data1 = [
            [2007, 15],
            [2008, 20],
            [2009, 10],
            [2010, 5],
            [2011, 5],
            [2012, 20],
            [2013, 28]
        ], b.data2 = [
            [2007, 15],
            [2008, 16],
            [2009, 22],
            [2010, 14],
            [2011, 12],
            [2012, 19],
            [2013, 22]
        ], a.area = {}, a.area.data = [{
            data: b.data1,
            label: "Value A",
            lines: {
                fill: !0
            }
        }, {
            data: b.data2,
            label: "Value B",
            points: {
                show: !0
            },
            yaxis: 2
        }], a.area.options = {
            series: {
                lines: {
                    show: !0,
                    fill: !1
                },
                points: {
                    show: !0,
                    lineWidth: 2,
                    fill: !0,
                    fillColor: "#ffffff",
                    symbol: "circle",
                    radius: 5
                },
                shadowSize: 0
            },
            grid: {
                hoverable: !0,
                clickable: !0,
                tickColor: "#f9f9f9",
                borderWidth: 1,
                borderColor: "#eeeeee"
            },
            colors: [a.color.success, a.color.danger],
            tooltip: !0,
            tooltipOpts: {
                defaultTheme: !1
            },
            xaxis: {
                mode: "time"
            },
            yaxes: [{}, {
                position: "right"
            }]
        }, f = [
            [1, 65],
            [2, 59],
            [3, 90],
            [4, 81],
            [5, 56],
            [6, 55],
            [7, 68],
            [8, 45],
            [9, 66]
        ], g = [
            [1, 28],
            [2, 48],
            [3, 30],
            [4, 60],
            [5, 100],
            [6, 50],
            [7, 10],
            [8, 25],
            [9, 50]
        ], a.area1 = {}, a.area1.data = [{
            label: " A",
            data: f,
            bars: {
                order: 0,
                fillColor: {
                    colors: [{
                        opacity: .3
                    }, {
                        opacity: .3
                    }]
                },
                show: !0,
                fill: 1,
                barWidth: .3,
                align: "center",
                horizontal: !1
            }
        }, {
            data: g,
            curvedLines: {
                apply: !0
            },
            lines: {
                show: !0,
                fill: !0,
                fillColor: {
                    colors: [{
                        opacity: .2
                    }, {
                        opacity: .2
                    }]
                }
            }
        }, {
            data: g,
            label: "D",
            points: {
                show: !0
            }
        }], a.area1.options = {
            series: {
                curvedLines: {
                    active: !0
                },
                points: {
                    lineWidth: 2,
                    fill: !0,
                    fillColor: "#ffffff",
                    symbol: "circle",
                    radius: 4
                }
            },
            grid: {
                hoverable: !0,
                clickable: !0,
                tickColor: "#f9f9f9",
                borderWidth: 1,
                borderColor: "#eeeeee"
            },
            tooltip: !0,
            tooltipOpts: {
                defaultTheme: !1
            },
            colors: [a.color.gray, a.color.primary, a.color.primary]
        }, c = {}, c.data1 = [
            [2008, 20],
            [2009, 10],
            [2010, 5],
            [2011, 5],
            [2012, 20],
            [2013, 28]
        ], c.data2 = [
            [2008, 16],
            [2009, 22],
            [2010, 14],
            [2011, 12],
            [2012, 19],
            [2013, 22]
        ], c.data3 = [
            [2008, 12],
            [2009, 30],
            [2010, 20],
            [2011, 19],
            [2012, 13],
            [2013, 20]
        ], a.barChart = {}, a.barChart.data = [{
            label: "Value A",
            data: c.data1
        }, {
            label: "Value B",
            data: c.data2
        }, {
            label: "Value C",
            data: c.data3
        }], a.barChart.options = {
            series: {
                stack: !0,
                bars: {
                    show: !0,
                    fill: 1,
                    barWidth: .3,
                    align: "center",
                    horizontal: !1,
                    order: 1
                }
            },
            grid: {
                hoverable: !0,
                borderWidth: 1,
                borderColor: "#eeeeee"
            },
            tooltip: !0,
            tooltipOpts: {
                defaultTheme: !1
            },
            colors: [a.color.success, a.color.info, a.color.warning, a.color.danger]
        }, a.barChart1 = {}, a.barChart1.data = [{
            label: "Value A",
            data: c.data1,
            bars: {
                order: 0
            }
        }, {
            label: "Value B",
            data: c.data2,
            bars: {
                order: 1
            }
        }, {
            label: "Value C",
            data: c.data3,
            bars: {
                order: 2
            }
        }], a.barChart1.options = {
            series: {
                stack: !0,
                bars: {
                    show: !0,
                    fill: 1,
                    barWidth: .2,
                    align: "center",
                    horizontal: !1
                }
            },
            grid: {
                hoverable: !0,
                borderWidth: 1,
                borderColor: "#eeeeee"
            },
            tooltip: !0,
            tooltipOpts: {
                defaultTheme: !1
            },
            colors: [a.color.success, a.color.info, a.color.warning, a.color.danger]
        }, a.barChart3 = {}, a.barChart3.data = [{
            label: " A",
            data: [
                [40, 1],
                [59, 2],
                [90, 3],
                [81, 4],
                [56, 5]
            ],
            bars: {
                order: 0,
                fillColor: {
                    colors: [{
                        opacity: .3
                    }, {
                        opacity: .3
                    }]
                }
            }
        }, {
            label: " B",
            data: [
                [28, 1],
                [48, 2],
                [40, 3],
                [19, 4],
                [45, 5]
            ],
            bars: {
                order: 1,
                fillColor: {
                    colors: [{
                        opacity: .3
                    }, {
                        opacity: .3
                    }]
                }
            }
        }], a.barChart3.options = {
            series: {
                stack: !0,
                bars: {
                    show: !0,
                    fill: 1,
                    barWidth: .35,
                    align: "center",
                    horizontal: !0
                }
            },
            grid: {
                show: !0,
                aboveData: !1,
                color: "#eaeaea",
                hoverable: !0,
                borderWidth: 1,
                borderColor: "#eaeaea"
            },
            tooltip: !0,
            tooltipOpts: {
                defaultTheme: !1
            },
            colors: [a.color.gray, a.color.primary, a.color.info, a.color.danger]
        }, d = {}, d.data1 = [
            [85, 10],
            [50, 20],
            [55, 30]
        ], d.data2 = [
            [77, 10],
            [60, 20],
            [70, 30]
        ], d.data3 = [
            [100, 10],
            [70, 20],
            [55, 30]
        ], a.barChart2 = {}, a.barChart2.data = [{
            label: "Value A",
            data: d.data1,
            bars: {
                order: 1
            }
        }, {
            label: "Value B",
            data: d.data2,
            bars: {
                order: 2
            }
        }, {
            label: "Value C",
            data: d.data3,
            bars: {
                order: 3
            }
        }], a.barChart2.options = {
            series: {
                stack: !0,
                bars: {
                    show: !0,
                    fill: 1,
                    barWidth: 1,
                    align: "center",
                    horizontal: !0
                }
            },
            grid: {
                hoverable: !0,
                borderWidth: 1,
                borderColor: "#eeeeee"
            },
            tooltip: !0,
            tooltipOpts: {
                defaultTheme: !1
            },
            colors: [a.color.success, a.color.info, a.color.warning, a.color.danger]
        }, a.pieChart = {}, a.pieChart.data = [{
            label: "Download Sales",
            data: 12
        }, {
            label: "In-Store Sales",
            data: 30
        }, {
            label: "Mail-Order Sales",
            data: 20
        }, {
            label: "Online Sales",
            data: 19
        }], a.pieChart.options = {
            series: {
                pie: {
                    show: !0
                }
            },
            legend: {
                show: !0
            },
            grid: {
                hoverable: !0,
                clickable: !0
            },
            colors: [a.color.primary, a.color.success, a.color.info, a.color.warning, a.color.danger],
            tooltip: !0,
            tooltipOpts: {
                content: "%p.0%, %s",
                defaultTheme: !1
            }
        }, a.donutChart = {}, a.donutChart.data = [{
            label: "Download Sales",
            data: 12
        }, {
            label: "In-Store Sales",
            data: 30
        }, {
            label: "Mail-Order Sales",
            data: 20
        }, {
            label: "Online Sales",
            data: 19
        }], a.donutChart.options = {
            series: {
                pie: {
                    show: !0,
                    innerRadius: .5
                }
            },
            legend: {
                show: !0
            },
            grid: {
                hoverable: !0,
                clickable: !0
            },
            colors: [a.color.primary, a.color.success, a.color.info, a.color.warning, a.color.danger],
            tooltip: !0,
            tooltipOpts: {
                content: "%p.0%, %s",
                defaultTheme: !1
            }
        }, a.donutChart2 = {}, a.donutChart2.data = [{
            label: "Download Sales",
            data: 12
        }, {
            label: "In-Store Sales",
            data: 30
        }, {
            label: "Mail-Order Sales",
            data: 20
        }, {
            label: "Online Sales",
            data: 19
        }, {
            label: "Direct Sales",
            data: 15
        }], a.donutChart2.options = {
            series: {
                pie: {
                    show: !0,
                    innerRadius: .45
                }
            },
            legend: {
                show: !1
            },
            grid: {
                hoverable: !0,
                clickable: !0
            },
            colors: ["#1BB7A0", "#39B5B9", "#52A3BB", "#619CC4", "#6D90C5"],
            tooltip: !0,
            tooltipOpts: {
                content: "%p.0%, %s",
                defaultTheme: !1
            }
        }
    }

    function d(a) {
        a.gaugeChart1 = {
            data: {
                maxValue: 3e3,
                animationSpeed: 40,
                val: 1375
            },
            options: {
                lines: 12,
                angle: 0,
                lineWidth: .47,
                pointer: {
                    length: .6,
                    strokeWidth: .03,
                    color: "#000000"
                },
                limitMax: "false",
                strokeColor: "#E0E0E0",
                generateGradient: !0,
                percentColors: [
                    [0, a.color.success],
                    [1, a.color.success]
                ]
            }
        }, a.gaugeChart2 = {
            data: {
                maxValue: 3e3,
                animationSpeed: 45,
                val: 1200
            },
            options: {
                lines: 12,
                angle: 0,
                lineWidth: .47,
                pointer: {
                    length: .6,
                    strokeWidth: .03,
                    color: "#464646"
                },
                limitMax: "true",
                colorStart: "#7ACBEE",
                colorStop: "#7ACBEE",
                strokeColor: "#F1F1F1",
                generateGradient: !0,
                percentColors: [
                    [0, a.color.info],
                    [1, a.color.info]
                ]
            }
        }, a.gaugeChart3 = {
            data: {
                maxValue: 3e3,
                animationSpeed: 50,
                val: 1100
            },
            options: {
                lines: 12,
                angle: 0,
                lineWidth: .47,
                pointer: {
                    length: .6,
                    strokeWidth: .03,
                    color: "#464646"
                },
                limitMax: "true",
                colorStart: "#FF7857",
                colorStop: "#FF7857",
                strokeColor: "#F1F1F1",
                generateGradient: !0,
                percentColors: [
                    [0, a.color.danger],
                    [1, a.color.danger]
                ]
            }
        }
    }

    function e(a) {
        a.demoData1 = {
            data: [3, 1, 2, 2, 4, 6, 4, 5, 2, 4, 5, 3, 4, 6, 4, 7],
            options: {
                type: "line",
                lineColor: "#fff",
                highlightLineColor: "#fff",
                fillColor: a.color.success,
                spotColor: !1,
                minSpotColor: !1,
                maxSpotColor: !1,
                width: "100%",
                height: "150px"
            }
        }, a.simpleChart1 = {
            data: [3, 1, 2, 3, 5, 3, 4, 2],
            options: {
                type: "line",
                lineColor: a.color.primary,
                fillColor: "#fafafa",
                spotColor: !1,
                minSpotColor: !1,
                maxSpotColor: !1
            }
        }, a.simpleChart2 = {
            data: [3, 1, 2, 3, 5, 3, 4, 2],
            options: {
                type: "bar",
                barColor: a.color.primary
            }
        }, a.simpleChart3 = {
            data: [3, 1, 2, 3, 5, 3, 4, 2],
            options: {
                type: "pie",
                sliceColors: [a.color.primary, a.color.success, a.color.info, a.color.infoAlt, a.color.warning, a.color.danger]
            }
        }, a.tristateChart1 = {
            data: [1, 2, -3, -5, 3, 1, -4, 2],
            options: {
                type: "tristate",
                posBarColor: a.color.success,
                negBarColor: a.color.danger
            }
        }, a.largeChart1 = {
            data: [3, 1, 2, 3, 5, 3, 4, 2],
            options: {
                type: "line",
                lineColor: a.color.info,
                highlightLineColor: "#fff",
                fillColor: a.color.info,
                spotColor: !1,
                minSpotColor: !1,
                maxSpotColor: !1,
                width: "100%",
                height: "150px"
            }
        }, a.largeChart2 = {
            data: [3, 1, 2, 3, 5, 3, 4, 2],
            options: {
                type: "bar",
                barColor: a.color.success,
                barWidth: 10,
                width: "100%",
                height: "150px"
            }
        }, a.largeChart3 = {
            data: [3, 1, 2, 3, 5],
            options: {
                type: "pie",
                sliceColors: [a.color.primary, a.color.success, a.color.info, a.color.infoAlt, a.color.warning, a.color.danger],
                width: "150px",
                height: "150px"
            }
        }
    }
    angular.module("app.chart").controller("chartCtrl", ["$scope", a]).controller("morrisChartCtrl", ["$scope", b]).controller("flotChartCtrl", ["$scope", c]).controller("gaugeChartCtrl", ["$scope", d]).controller("sparklineCtrl", ["$scope", e])
}(),
function () {
    "use strict";

    function a() {
        function a(a, b, c) {
            var d, e, f;
            d = a.data, e = a.options, f = new Gauge(b[0]).setOptions(e), f.maxValue = d.maxValue, f.animationSpeed = d.animationSpeed, f.set(d.val)
        }
        var b = {
            restrict: "A",
            scope: {
                data: "=",
                options: "="
            },
            link: a
        };
        return b
    }

    function b() {
        function a(a, b, c) {
            var d, e, f, g;
            switch (d = a.data, e = a.type) {
                case "line":
                    f = angular.extend({
                        element: b[0],
                        data: d
                    }, a.options), new Morris.Line(f);
                    break;
                case "area":
                    f = angular.extend({
                        element: b[0],
                        data: d
                    }, a.options), new Morris.Area(f);
                    break;
                case "bar":
                    f = angular.extend({
                        element: b[0],
                        data: d
                    }, a.options), new Morris.Bar(f);
                    break;
                case "donut":
                    f = angular.extend({
                        element: b[0],
                        data: d
                    }, a.options), f.formatter && (g = new Function("y", "data", f.formatter), f.formatter = g), new Morris.Donut(f)
            }
        }
        var b = {
            restrict: "A",
            scope: {
                data: "=",
                type: "=",
                options: "="
            },
            link: a
        };
        return b
    }

    function c() {
        function a(a, b, c) {
            var d, e, f;
            d = a.data, e = a.options, f = $.plot(b[0], d, e)
        }
        var b = {
            restrict: "A",
            scope: {
                data: "=",
                options: "="
            },
            link: a
        };
        return b
    }

    function d() {
        function a(a, b, c) {
            var d, e, f, g, h, i, j, k, l;
            d = [], e = [], j = 200, l = 200, h = function (a, b, c) {
                function d() {
                    var d, e, f, g;
                    for (a.length > 0 && (a = a.slice(1)) ; a.length < j;) e = a.length > 0 ? a[a.length - 1] : (b + c) / 2, g = e + 4 * Math.random() - 2, b > g ? g = b : g > c && (g = c), a.push(g);
                    for (f = [], d = 0; d < a.length;) f.push([d, a[d]]), ++d;
                    return f
                }
                return d
            }, f = h(d, 28, 42), g = h(e, 56, 72), k = function () {
                i.setData([f(), g()]), i.draw(), setTimeout(k, l)
            }, i = $.plot(b[0], [f(), g()], {
                series: {
                    lines: {
                        show: !0,
                        fill: !0
                    },
                    shadowSize: 0
                },
                yaxis: {
                    min: 0,
                    max: 100
                },
                xaxis: {
                    show: !1
                },
                grid: {
                    hoverable: !0,
                    borderWidth: 1,
                    borderColor: "#eeeeee"
                },
                colors: ["#40DEC8", "#CDFFFE"]
            }), k()
        }
        var b = {
            restrict: "A",
            link: a
        };
        return b
    }

    function e() {
        function a(a, b, c) {
            var d, e, f, g;
            d = a.data, e = a.options, f = void 0, g = function () {
                b.sparkline(d, e)
            }, $(window).resize(function (a) {
                clearTimeout(f), f = setTimeout(g, 200)
            }), g()
        }
        var b = {
            restrict: "A",
            scope: {
                data: "=",
                options: "="
            },
            link: a
        };
        return b
    }
    angular.module("app.chart").directive("gaugeChart", a).directive("morrisChart", b).directive("flotChart", c).directive("flotChartRealtime", d).directive("sparkline", e)
}(),
function () {
    "use strict";
    angular.module("app.ui.form", [])
}(),
function () {
    "use strict";

    function a(a) {
        a.tags = ["foo", "bar"]
    }

    function b(a) {
        a.today = function () {
            return a.dt = new Date
        }, a.today(), a.showWeeks = !0, a.toggleWeeks = function () {
            a.showWeeks = !a.showWeeks
        }, a.clear = function () {
            a.dt = null
        }, a.disabled = function (a, b) {
            "day" === b && (0 === a.getDay() || 6 === a.getDay())
        }, a.toggleMin = function () {
            var b;
            a.minDate = null != (b = a.minDate) ? b : {
                "null": new Date
            }
        }, a.toggleMin(), a.open = function (b) {
            b.preventDefault(), b.stopPropagation(), a.opened = !0
        }, a.dateOptions = {
            "year-format": "'yy'",
            "starting-day": 1
        }, a.formats = ["dd-MMMM-yyyy", "yyyy/MM/dd", "shortDate"], a.format = a.formats[0]
    }

    function c(a) {
        a.mytime = new Date, a.hstep = 1, a.mstep = 15, a.options = {
            hstep: [1, 2, 3],
            mstep: [1, 5, 10, 15, 25, 30]
        }, a.ismeridian = !0, a.toggleMode = function () {
            return a.ismeridian = !a.ismeridian
        }, a.update = function () {
            var b;
            return b = new Date, b.setHours(14), b.setMinutes(0), a.mytime = b
        }, a.changed = function () { }, a.clear = function () {
            return a.mytime = null
        }
    }

    function d(a) {
        a.selected = void 0, a.states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
    }

    function e(a) {
        a.rate = 7, a.max = 10, a.isReadonly = !1, a.hoveringOver = function (b) {
            return a.overStar = b, a.percent = 100 * (b / a.max)
        }, a.ratingStates = [{
            stateOn: "glyphicon-ok-sign",
            stateOff: "glyphicon-ok-circle"
        }, {
            stateOn: "glyphicon-star",
            stateOff: "glyphicon-star-empty"
        }, {
            stateOn: "glyphicon-heart",
            stateOff: "glyphicon-ban-circle"
        }, {
            stateOn: "glyphicon-heart"
        }, {
            stateOff: "glyphicon-off"
        }]
    }
    angular.module("app.ui.form").controller("TagsDemoCtrl", ["$scope", a]).controller("DatepickerDemoCtrl", ["$scope", b]).controller("TimepickerDemoCtrl", ["$scope", c]).controller("TypeaheadCtrl", ["$scope", d]).controller("RatingDemoCtrl", ["$scope", e])
}(),
function () {
    "use strict";

    function a() {
        return {
            restrict: "A",
            link: function (a, b) {
                b.slider()
            }
        }
    }

    function b() {
        return {
            restrict: "A",
            link: function (a, b) {
                b.bootstrapFileInput()
            }
        }
    }

    function c() {
        return {
            restrict: "A",
            compile: function (a, b) {
                return a.addClass("ui-spinner"), {
                    post: function () {
                        a.spinner()
                    }
                }
            }
        }
    }

    function d() {
        return {
            restrict: "A",
            link: function (a, b) {
                b.steps()
            }
        }
    }
    angular.module("app.ui.form").directive("uiRangeSlider", a).directive("uiFileUpload", b).directive("uiSpinner", c).directive("uiWizardForm", d)
}(),
function () {
    "use strict";
    angular.module("app.ui.form.validation", [])
}(),
function () {
    "use strict";

    function a(a) {
        var b;
        a.form = {
            required: "",
            minlength: "",
            maxlength: "",
            length_rage: "",
            type_something: "",
            confirm_type: "",
            foo: "",
            email: "",
            url: "",
            num: "",
            minVal: "",
            maxVal: "",
            valRange: "",
            pattern: ""
        }, b = angular.copy(a.form), a.revert = function () {
            return a.form = angular.copy(b), a.form_constraints.$setPristine()
        }, a.canRevert = function () {
            return !angular.equals(a.form, b) || !a.form_constraints.$pristine
        }, a.canSubmit = function () {
            return a.form_constraints.$valid && !angular.equals(a.form, b)
        }
    }

    function b(a) {
        var b;
        a.user = {
            email: "",
            password: ""
        }, a.showInfoOnSubmit = !1, b = angular.copy(a.user), a.revert = function () {
            return a.user = angular.copy(b), a.form_signin.$setPristine()
        }, a.canRevert = function () {
            return !angular.equals(a.user, b) || !a.form_signin.$pristine
        }, a.canSubmit = function () {
            return a.form_signin.$valid && !angular.equals(a.user, b)
        }, a.submitForm = function () {
            return a.showInfoOnSubmit = !0, a.revert()
        }
    }

    function c(a) {
        var b;
        a.user = {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            age: ""
        }, a.showInfoOnSubmit = !1, b = angular.copy(a.user), a.revert = function () {
            return a.user = angular.copy(b), a.form_signup.$setPristine(), a.form_signup.confirmPassword.$setPristine()
        }, a.canRevert = function () {
            return !angular.equals(a.user, b) || !a.form_signup.$pristine
        }, a.canSubmit = function () {
            return a.form_signup.$valid && !angular.equals(a.user, b)
        }, a.submitForm = function () {
            return a.showInfoOnSubmit = !0, a.revert()
        }
    }
    angular.module("app.ui.form.validation").controller("formConstraintsCtrl", ["$scope", a]).controller("signinCtrl", ["$scope", b]).controller("signupCtrl", ["$scope", c])
}(),
function () {
    "use strict";

    function a() {
        function a(a, b, c, d) {
            var e;
            e = function (b) {
                var e;
                e = b === a.$eval(c.validateEquals), d.$setValidity("equal", e), "function" == typeof e ? e({
                    value: void 0
                }) : void 0
            }, d.$parsers.push(e), d.$formatters.push(e), a.$watch(c.validateEquals, function (a, b) {
                a !== b && d.$setViewValue(d.$ViewValue)
            })
        }
        var b = {
            require: "ngModel",
            link: a
        };
        return b
    }
    angular.module("app.ui.form.validation").directive("validateEquals", a)
}(),
function () {
    "use strict";
    angular.module("app.nav", [])
}(),
function () {
    "use strict";

    function a(a) {
        function b(b, c, d) {
            var e;
            e = $("#app"), c.on("click", function (b) {
                return e.hasClass("nav-collapsed-min") ? e.removeClass("nav-collapsed-min") : (e.addClass("nav-collapsed-min"), a.$broadcast("nav:reset")), b.preventDefault()
            })
        }
        var c = {
            restrict: "A",
            link: b
        };
        return c
    }

    function b() {
        function a(a, b, c) {
            var d, e, f, g, h, i, j, k, l, m, n;
            m = 250, j = $(window), g = b.find("ul").parent("li"), g.append('<i class="fa fa-caret-down icon-has-ul-h"></i><i class="fa fa-caret-right icon-has-ul"></i>'), d = g.children("a"), h = b.children("li").not(g), e = h.children("a"), f = $("#app"), i = $("#nav-container"), d.on("click", function (a) {
                var b, c;
                return f.hasClass("nav-collapsed-min") || i.hasClass("nav-horizontal") && j.width() >= 768 ? !1 : (c = $(this), b = c.parent("li"), g.not(b).removeClass("open").find("ul").slideUp(m), b.toggleClass("open").find("ul").stop().slideToggle(m), void a.preventDefault())
            }), e.on("click", function (a) {
                g.removeClass("open").find("ul").slideUp(m)
            }), a.$on("nav:reset", function (a) {
                g.removeClass("open").find("ul").slideUp(m)
            }), k = void 0, l = j.width(), n = function () {
                var a;
                a = j.width(), 768 > a && f.removeClass("nav-collapsed-min"), 768 > l && a >= 768 && i.hasClass("nav-horizontal") && g.removeClass("open").find("ul").slideUp(m), l = a
            }, j.resize(function () {
                var a;
                clearTimeout(a), a = setTimeout(n, 300)
            })
        }
        var b = {
            restrict: "A",
            link: a
        };
        return b
    }

    function c() {
        function a(a, b, c, d) {
            var e, f, g;
            f = b.find("a"), g = function () {
                return d.path()
            }, e = function (a, b) {
                return b = "#" + b, angular.forEach(a, function (a) {
                    var c, d, e;
                    return d = angular.element(a), c = d.parent("li"), e = d.attr("href"), c.hasClass("active") && c.removeClass("active"), 0 === b.indexOf(e) ? c.addClass("active") : void 0
                })
            }, e(f, d.path()), a.$watch(g, function (a, b) {
                return a !== b ? e(f, d.path()) : void 0
            })
        }
        var b = {
            restrict: "A",
            controller: ["$scope", "$element", "$attrs", "$location", a]
        };
        return b
    }

    function d() {
        function a(a, b, c) {
            b.on("click", function () {
                return $("#app").toggleClass("on-canvas")
            })
        }
        var b = {
            restrict: "A",
            link: a
        };
        return b
    }
    angular.module("app.nav").directive("toggleNavCollapsedMin", ["$rootScope", a]).directive("collapseNav", b).directive("highlightActive", c).directive("toggleOffCanvas", d)
}(),
function () {
    "use strict";
    angular.module("app.page", [])
}(),
function () {
    "use strict";

    function a(a, b) {
        var c, d, e;
        a.printInvoice = function () {
            c = document.getElementById("invoice").innerHTML, d = document.body.innerHTML, e = window.open(), e.document.open(), e.document.write('<html><head><link rel="stylesheet" type="text/css" href="styles/main.css" /></head><body onload="window.print()">' + c + "</html>"), e.document.close()
        }
    }

    function b(a, b, c) {
        a.login = function () {
            c.url("/")
        }, a.signup = function () {
            c.url("/")
        }, a.reset = function () {
            c.url("/")
        }, a.unlock = function () {
            c.url("/")
        }
    }
    angular.module("app.page").controller("invoiceCtrl", ["$scope", "$window", a]).controller("authCtrl", ["$scope", "$window", "$location", b])
}(),
function () {
    "use strict";

    function a() {
        function a(a, b, c) {
            var d, e;
            e = function () {
                return c.path()
            }, d = function (a) {
                switch (b.removeClass("body-wide body-err body-lock body-auth"), a) {
                    case "/404":
                    case "/pages/404":
                    case "/pages/500":
                        return b.addClass("body-wide body-err");
                    case "/pages/signin":
                    case "/pages/signup":
                    case "/pages/forgot-password":
                        return b.addClass("body-wide body-auth");
                    case "/pages/lock-screen":
                        return b.addClass("body-wide body-lock")
                }
            }, d(c.path()), a.$watch(e, function (a, b) {
                return a !== b ? d(c.path()) : void 0
            })
        }
        var b = {
            restrict: "A",
            controller: ["$scope", "$element", "$location", a]
        };
        return b
    }
    angular.module("app.page").directive("customPage", a)
}(),
function () {
    "use strict";
    angular.module("app.table", [])
}(),
function () {
    "use strict";

    function a(a, b) {
        var c;
        a.stores = [{
            name: "Nijiya Market",
            price: "$$",
            sales: 292,
            rating: 4
        }, {
            name: "Eat On Monday Truck",
            price: "$",
            sales: 119,
            rating: 4.3
        }, {
            name: "Tea Era",
            price: "$",
            sales: 874,
            rating: 4
        }, {
            name: "Rogers Deli",
            price: "$",
            sales: 347,
            rating: 4.2
        }, {
            name: "MoBowl",
            price: "$$$",
            sales: 24,
            rating: 4.6
        }, {
            name: "The Milk Pail Market",
            price: "$",
            sales: 543,
            rating: 4.5
        }, {
            name: "Nob Hill Foods",
            price: "$$",
            sales: 874,
            rating: 4
        }, {
            name: "Scratch",
            price: "$$$",
            sales: 643,
            rating: 3.6
        }, {
            name: "Gochi Japanese Fusion Tapas",
            price: "$$$",
            sales: 56,
            rating: 4.1
        }, {
            name: "Cost Plus World Market",
            price: "$$",
            sales: 79,
            rating: 4
        }, {
            name: "Bumble Bee Health Foods",
            price: "$$",
            sales: 43,
            rating: 4.3
        }, {
            name: "Costco",
            price: "$$",
            sales: 219,
            rating: 3.6
        }, {
            name: "Red Rock Coffee Co",
            price: "$",
            sales: 765,
            rating: 4.1
        }, {
            name: "99 Ranch Market",
            price: "$",
            sales: 181,
            rating: 3.4
        }, {
            name: "Mi Pueblo Food Center",
            price: "$",
            sales: 78,
            rating: 4
        }, {
            name: "Cucina Venti",
            price: "$$",
            sales: 163,
            rating: 3.3
        }, {
            name: "Sufi Coffee Shop",
            price: "$",
            sales: 113,
            rating: 3.3
        }, {
            name: "Dana Street Roasting",
            price: "$",
            sales: 316,
            rating: 4.1
        }, {
            name: "Pearl Cafe",
            price: "$",
            sales: 173,
            rating: 3.4
        }, {
            name: "Posh Bagel",
            price: "$",
            sales: 140,
            rating: 4
        }, {
            name: "Artisan Wine Depot",
            price: "$$",
            sales: 26,
            rating: 4.1
        }, {
            name: "Hong Kong Chinese Bakery",
            price: "$",
            sales: 182,
            rating: 3.4
        }, {
            name: "Starbucks",
            price: "$$",
            sales: 97,
            rating: 3.7
        }, {
            name: "Tapioca Express",
            price: "$",
            sales: 301,
            rating: 3
        }, {
            name: "House of Bagels",
            price: "$",
            sales: 82,
            rating: 4.4
        }], a.searchKeywords = "", a.filteredStores = [], a.row = "", a.select = function (b) {
            var c, d;
            return d = (b - 1) * a.numPerPage, c = d + a.numPerPage, a.currentPageStores = a.filteredStores.slice(d, c)
        }, a.onFilterChange = function () {
            return a.select(1), a.currentPage = 1, a.row = ""
        }, a.onNumPerPageChange = function () {
            return a.select(1), a.currentPage = 1
        }, a.onOrderChange = function () {
            return a.select(1), a.currentPage = 1
        }, a.search = function () {
            return a.filteredStores = b("filter")(a.stores, a.searchKeywords), a.onFilterChange()
        }, a.order = function (c) {
            return a.row !== c ? (a.row = c, a.filteredStores = b("orderBy")(a.stores, c), a.onOrderChange()) : void 0
        }, a.numPerPageOpt = [3, 5, 10, 20], a.numPerPage = a.numPerPageOpt[2], a.currentPage = 1, a.currentPageStores = [], (c = function () {
            return a.search(), a.select(a.currentPage)
        })()
    }
    angular.module("app.table").controller("tableCtrl", ["$scope", "$filter", a])
    .controller("asd", function ($scope) {
        $scope.namer = "namer"
    });
}(),
function () {
    "use strict";
    angular.module("app.task", [])
}(),
function () {
    "use strict";

    function a(a, b, c, d, e) {
        var f;
        f = a.tasks = b.get(), a.newTask = "", a.remainingCount = c(f, {
            completed: !1
        }).length, a.editedTask = null, a.statusFilter = {
            completed: !1
        }, a.filter = function (b) {
            switch (b) {
                case "all":
                    return a.statusFilter = "";
                case "active":
                    return a.statusFilter = {
                        completed: !1
                    };
                case "completed":
                    return a.statusFilter = {
                        completed: !0
                    }
            }
        }, a.add = function () {
            var c;
            c = a.newTask.trim(), 0 !== c.length && (f.push({
                title: c,
                completed: !1
            }), e.logSuccess('New task: "' + c + '" added'), b.put(f), a.newTask = "", a.remainingCount++)
        }, a.edit = function (b) {
            a.editedTask = b
        }, a.doneEditing = function (c) {
            a.editedTask = null, c.title = c.title.trim(), c.title ? e.log("Task updated") : a.remove(c), b.put(f)
        }, a.remove = function (c) {
            var d;
            a.remainingCount -= c.completed ? 0 : 1, d = a.tasks.indexOf(c), a.tasks.splice(d, 1), b.put(f), e.logError("Task removed")
        }, a.completed = function (c) {
            a.remainingCount += c.completed ? -1 : 1, b.put(f), c.completed && (a.remainingCount > 0 ? 1 === a.remainingCount ? e.log("Almost there! Only " + a.remainingCount + " task left") : e.log("Good job! Only " + a.remainingCount + " tasks left") : e.logSuccess("Congrats! All done :)"))
        }, a.clearCompleted = function () {
            a.tasks = f = f.filter(function (a) {
                return !a.completed
            }), b.put(f)
        }, a.markAll = function (c) {
            f.forEach(function (a) {
                a.completed = c
            }), a.remainingCount = c ? 0 : f.length, b.put(f), c && e.logSuccess("Congrats! All done :)")
        }, a.$watch("remainingCount == 0", function (b) {
            a.allChecked = b
        }), a.$watch("remainingCount", function (a, b) {
            d.$broadcast("taskRemaining:changed", a)
        })
    }
    angular.module("app.task").controller("taskCtrl", ["$scope", "taskStorage", "filterFilter", "$rootScope", "logger", a])
}(),
function () {
    "use strict";

    function a(a) {
        function b(b, c, d) {
            b.$watch(d.taskFocus, function (b) {
                b && a(function () {
                    return c[0].focus()
                }, 0, !1)
            })
        }
        var c = {
            link: b
        };
        return c
    }
    angular.module("app.task").directive("taskFocus", ["$timeout", a])
}(),
function () {
    "use strict";

    function a() {
        var a, b;
        return a = "tasks", b = '[ {"title": "Upgrade to Yosemite", "completed": true},{"title": "Finish homework", "completed": false},{"title": "Try Google glass", "completed": false},{"title": "Build a snowman :)", "completed": false},{"title": "Play games with friends", "completed": true},{"title": "Learn Swift", "completed": false},{"title": "Shopping", "completed": true} ]', {
            get: function () {
                return JSON.parse(localStorage.getItem(a) || b)
            },
            put: function (b) {
                return localStorage.setItem(a, JSON.stringify(b))
            }
        }
    }
    angular.module("app.task").factory("taskStorage", a)
}(),
function () {
    "use strict";
    angular.module("app.ui", [])
}(),
function () {
    "use strict";

    function a(a, b) {
        a.start = function () {
            b.start()
        }, a.inc = function () {
            b.inc()
        }, a.set = function () {
            b.set(.3)
        }, a.complete = function () {
            b.complete()
        }
    }

    function b(a, b) {
        a.notify = function (a) {
            switch (a) {
                case "info":
                    return b.log("Heads up! This alert needs your attention, but it's not super important.");
                case "success":
                    return b.logSuccess("Well done! You successfully read this important alert message.");
                case "warning":
                    return b.logWarning("Warning! Best check yo self, you're not looking too good.");
                case "error":
                    return b.logError("Oh snap! Change a few things up and try submitting again.")
            }
        }
    }

    function c(a) {
        a.alerts = [{
            type: "success",
            msg: "Well done! You successfully read this important alert message."
        }, {
            type: "info",
            msg: "Heads up! This alert needs your attention, but it is not super important."
        }, {
            type: "warning",
            msg: "Warning! Best check yo self, you're not looking too good."
        }, {
            type: "danger",
            msg: "Oh snap! Change a few things up and try submitting again."
        }], a.addAlert = function () {
            var b, c;
            switch (b = Math.ceil(4 * Math.random()), c = void 0, b) {
                case 0:
                    c = "info";
                    break;
                case 1:
                    c = "success";
                    break;
                case 2:
                    c = "info";
                    break;
                case 3:
                    c = "warning";
                    break;
                case 4:
                    c = "danger"
            }
            return a.alerts.push({
                type: c,
                msg: "Another alert!"
            })
        }, a.closeAlert = function (b) {
            return a.alerts.splice(b, 1)
        }
    }

    function d(a) {
        a.max = 200, a.random = function () {
            var b, c;
            c = Math.floor(100 * Math.random() + 10), b = void 0, b = 25 > c ? "success" : 50 > c ? "info" : 75 > c ? "warning" : "danger", a.showWarning = "danger" === b || "warning" === b, a.dynamic = c, a.type = b
        }, a.random()
    }

    function e(a) {
        a.oneAtATime = !0, a.groups = [{
            title: "Dynamic Group Header - 1",
            content: "Dynamic Group Body - 1"
        }, {
            title: "Dynamic Group Header - 2",
            content: "Dynamic Group Body - 2"
        }, {
            title: "Dynamic Group Header - 3",
            content: "Dynamic Group Body - 3"
        }], a.items = ["Item 1", "Item 2", "Item 3"], a.status = {
            isFirstOpen: !0,
            isFirstOpen1: !0
        }, a.addItem = function () {
            var b;
            b = a.items.length + 1, a.items.push("Item " + b)
        }
    }

    function f(a) {
        a.isCollapsed = !1
    }

    function g(a, b, c) {
        a.items = ["item1", "item2", "item3"], a.open = function () {
            var d;
            d = b.open({
                templateUrl: "myModalContent.html",
                controller: "ModalInstanceCtrl",
                resolve: {
                    items: function () {
                        return a.items
                    }
                }
            }), d.result.then(function (b) {
                a.selected = b
            }, function () {
                c.info("Modal dismissed at: " + new Date);
            })
        }
    }

    function h(a, b, c) {
        a.items = c, a.selected = {
            item: a.items[0]
        }, a.ok = function () {
            b.close(a.selected.item)
        }, a.cancel = function () {
            b.dismiss("cancel")
        }
    }

    function i(a) {
        a.totalItems = 64, a.currentPage = 4, a.setPage = function (b) {
            a.currentPage = b
        }, a.maxSize = 5, a.bigTotalItems = 175, a.bigCurrentPage = 1
    }

    function j(a) {
        a.tabs = [{
            title: "Dynamic Title 1",
            content: "Dynamic content 1.  Consectetur adipisicing elit. Nihil, quidem, officiis, et ex laudantium sed cupiditate voluptatum libero nobis sit illum voluptates beatae ab. Ad, repellendus non sequi et at."
        }, {
            title: "Disabled",
            content: "Dynamic content 2.  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, quidem, officiis, et ex laudantium sed cupiditate voluptatum libero nobis sit illum voluptates beatae ab. Ad, repellendus non sequi et at.",
            disabled: !0
        }], a.navType = "pills"
    }

    function k(a) {
        a.list = [{
            id: 1,
            title: "Item 1",
            items: []
        }, {
            id: 2,
            title: "Item 2",
            items: [{
                id: 21,
                title: "Item 2.1",
                items: [{
                    id: 211,
                    title: "Item 2.1.1",
                    items: []
                }, {
                    id: 212,
                    title: "Item 2.1.2",
                    items: []
                }]
            }, {
                id: 22,
                title: "Item 2.2",
                items: [{
                    id: 221,
                    title: "Item 2.2.1",
                    items: []
                }, {
                    id: 222,
                    title: "Item 2.2.2",
                    items: []
                }]
            }]
        }, {
            id: 3,
            title: "Item 3",
            items: []
        }, {
            id: 4,
            title: "Item 4",
            items: [{
                id: 41,
                title: "Item 4.1",
                items: []
            }]
        }, {
            id: 5,
            title: "Item 5",
            items: []
        }, {
            id: 6,
            title: "Item 6",
            items: []
        }, {
            id: 7,
            title: "Item 7",
            items: []
        }], a.selectedItem = {}, a.options = {}, a.remove = function (a) {
            a.remove()
        }, a.toggle = function (a) {
            a.toggle()
        }, a.newSubItem = function (a) {
            var b;
            b = a.$modelValue, b.items.push({
                id: 10 * b.id + b.items.length,
                title: b.title + "." + (b.items.length + 1),
                items: []
            })
        }
    }

    function l(a, b, c) {
        var d, e;
        for (e = [], d = 0; 8 > d;) e[d] = new google.maps.Marker({
            title: "Marker: " + d
        }), d++;
        a.GenerateMapMarkers = function () {
            var b, c, f, g, h;
            for (b = new Date, a.date = b.toLocaleString(), h = Math.floor(4 * Math.random()) + 4, d = 0; h > d;) c = 43.66 + Math.random() / 100, f = -79.4103 + Math.random() / 100, g = new google.maps.LatLng(c, f), e[d].setPosition(g), e[d].setMap(a.map), d++
        }, c(a.GenerateMapMarkers, 2e3)
    }
    angular.module("app.ui").controller("LoaderCtrl", ["$scope", "cfpLoadingBar", a]).controller("NotifyCtrl", ["$scope", "logger", b]).controller("AlertDemoCtrl", ["$scope", c]).controller("ProgressDemoCtrl", ["$scope", d]).controller("AccordionDemoCtrl", ["$scope", e]).controller("CollapseDemoCtrl", ["$scope", f]).controller("ModalDemoCtrl", ["$scope", "$modal", "$log", g]).controller("ModalInstanceCtrl", ["$scope", "$modalInstance", "items", h]).controller("PaginationDemoCtrl", ["$scope", i]).controller("TabsDemoCtrl", ["$scope", j]).controller("TreeDemoCtrl", ["$scope", k]).controller("MapDemoCtrl", ["$scope", "$http", "$interval", l])
}(),
function () {
    "use strict";

    function a() {
        function a(a, b) {
            var c, d;
            d = function () {
                var a, e, f, g, h, i;
                return i = new Date, a = i.getHours(), e = i.getMinutes(), f = i.getSeconds(), e = c(e), f = c(f), h = a + ":" + e + ":" + f, b.html(h), g = setTimeout(d, 500)
            }, c = function (a) {
                return 10 > a && (a = "0" + a), a
            }, d()
        }
        var b = {
            restrict: "A",
            link: a
        };
        return b
    }

    function b() {
        return {
            restrict: "A",
            compile: function (a, b) {
                return a.on("click", function (a) {
                    return a.stopPropagation()
                })
            }
        }
    }

    function c() {
        return {
            restrict: "A",
            link: function (a, b, c) {
                return b.slimScroll({
                    height: c.scrollHeight || "100%"
                })
            }
        }
    }

    function d() {
        return {
            restrict: "A",
            link: function (a, b, c) {
                return Holder.run({
                    images: b[0]
                })
            }
        }
    }
    angular.module("app.ui").directive("uiTime", a).directive("uiNotCloseOnClick", b).directive("slimScroll", c).directive("imgHolder", d)
}(),
function () {
    "use strict";

    function a() {
        var a;
        return toastr.options = {
            closeButton: !0,
            positionClass: "toast-bottom-right",
            timeOut: "3000"
        }, a = function (a, b) {
            return toastr[b](a)
        }, {
            log: function (b) {
                a(b, "info")
            },
            logWarning: function (b) {
                a(b, "warning")
            },
            logSuccess: function (b) {
                a(b, "success")
            },
            logError: function (b) {
                a(b, "error")
            }
        }
    }
    angular.module("app.ui").factory("logger", a)
}(),
function () {
    "use strict";
    angular.module("app.ui.map", [])
}(),
function () {
    "use strict";

    function a(a) {
        var b, c, d, e = 0,
            f = Number.MAX_VALUE,
            g = [200, 238, 255],
            h = [0, 100, 145],
            i = {};
        b = {
            af: "16.63",
            al: "11.58",
            dz: "158.97",
            ao: "85.81",
            ag: "1.1",
            ar: "351.02",
            am: "8.83",
            au: "1219.72",
            at: "366.26",
            az: "52.17",
            bs: "7.54",
            bh: "21.73",
            bd: "105.4",
            bb: "3.96",
            by: "52.89",
            be: "461.33",
            bz: "1.43",
            bj: "6.49",
            bt: "1.4",
            bo: "19.18",
            ba: "16.2",
            bw: "12.5",
            br: "2023.53",
            bn: "11.96",
            bg: "44.84",
            bf: "8.67",
            bi: "1.47",
            kh: "11.36",
            cm: "21.88",
            ca: "1563.66",
            cv: "1.57",
            cf: "2.11",
            td: "7.59",
            cl: "199.18",
            cn: "5745.13",
            co: "283.11",
            km: "0.56",
            cd: "12.6",
            cg: "11.88",
            cr: "35.02",
            ci: "22.38",
            hr: "59.92",
            cy: "22.75",
            cz: "195.23",
            dk: "304.56",
            dj: "1.14",
            dm: "0.38",
            "do": "50.87",
            ec: "61.49",
            eg: "216.83",
            sv: "21.8",
            gq: "14.55",
            er: "2.25",
            ee: "19.22",
            et: "30.94",
            fj: "3.15",
            fi: "231.98",
            fr: "2555.44",
            ga: "12.56",
            gm: "1.04",
            ge: "11.23",
            de: "3305.9",
            gh: "18.06",
            gr: "305.01",
            gd: "0.65",
            gt: "40.77",
            gn: "4.34",
            gw: "0.83",
            gy: "2.2",
            ht: "6.5",
            hn: "15.34",
            hk: "226.49",
            hu: "132.28",
            is: "12.77",
            "in": "1430.02",
            id: "695.06",
            ir: "337.9",
            iq: "84.14",
            ie: "204.14",
            il: "201.25",
            it: "2036.69",
            jm: "13.74",
            jp: "5390.9",
            jo: "27.13",
            kz: "129.76",
            ke: "32.42",
            ki: "0.15",
            kr: "986.26",
            undefined: "5.73",
            kw: "117.32",
            kg: "4.44",
            la: "6.34",
            lv: "23.39",
            lb: "39.15",
            ls: "1.8",
            lr: "0.98",
            ly: "77.91",
            lt: "35.73",
            lu: "52.43",
            mk: "9.58",
            mg: "8.33",
            mw: "5.04",
            my: "218.95",
            mv: "1.43",
            ml: "9.08",
            mt: "7.8",
            mr: "3.49",
            mu: "9.43",
            mx: "1004.04",
            md: "5.36",
            mn: "5.81",
            me: "3.88",
            ma: "91.7",
            mz: "10.21",
            mm: "35.65",
            na: "11.45",
            np: "15.11",
            nl: "770.31",
            nz: "138",
            ni: "6.38",
            ne: "5.6",
            ng: "206.66",
            no: "413.51",
            om: "53.78",
            pk: "174.79",
            pa: "27.2",
            pg: "8.81",
            py: "17.17",
            pe: "153.55",
            ph: "189.06",
            pl: "438.88",
            pt: "223.7",
            qa: "126.52",
            ro: "158.39",
            ru: "1476.91",
            rw: "5.69",
            ws: "0.55",
            st: "0.19",
            sa: "434.44",
            sn: "12.66",
            rs: "38.92",
            sc: "0.92",
            sl: "1.9",
            sg: "217.38",
            sk: "86.26",
            si: "46.44",
            sb: "0.67",
            za: "354.41",
            es: "1374.78",
            lk: "48.24",
            kn: "0.56",
            lc: "1",
            vc: "0.58",
            sd: "65.93",
            sr: "3.3",
            sz: "3.17",
            se: "444.59",
            ch: "522.44",
            sy: "59.63",
            tw: "426.98",
            tj: "5.58",
            tz: "22.43",
            th: "312.61",
            tl: "0.62",
            tg: "3.07",
            to: "0.3",
            tt: "21.2",
            tn: "43.86",
            tr: "729.05",
            tm: 0,
            ug: "17.12",
            ua: "136.56",
            ae: "239.65",
            gb: "2258.57",
            us: "14624.18",
            uy: "40.71",
            uz: "37.72",
            vu: "0.72",
            ve: "285.21",
            vn: "101.99",
            ye: "30.02",
            zm: "15.69",
            zw: "5.57"
        };
        for (c in b) parseFloat(b[c]) > e && (e = parseFloat(b[c])), parseFloat(b[c]) < f && (f = parseFloat(b[c]));
        for (c in b)
            if (b[c] > 0) {
                i[c] = "#";
                for (var j = 0; 3 > j; j++) d = Math.round(g[j] + (h[j] - g[j]) * (b[c] / (e - f))).toString(16), 1 == d.length && (d = "0" + d), i[c] += (1 == d.length ? "0" : "") + d
            }
        a.worldMap = {
            map: "world_en",
            colors: i,
            hoverOpacity: .7,
            hoverColor: !1,
            backgroundColor: null
        }, a.USAMap = {
            map: "usa_en",
            backgroundColor: "#a5bfdd",
            borderColor: "#818181",
            borderOpacity: .25,
            borderWidth: 1,
            color: "#f4f3f0",
            enableZoom: !0,
            hoverColor: "#c9dfaf",
            hoverOpacity: null,
            normalizeFunction: "linear",
            scaleColors: ["#b6d6ff", "#005ace"],
            selectedColor: "#c9dfaf",
            selectedRegions: [],
            showTooltip: !0
        }, a.europeMap = {
            map: "europe_en",
            backgroundColor: "#a5bfdd",
            borderColor: "#818181",
            borderOpacity: .25,
            borderWidth: 1,
            color: "#f4f3f0",
            enableZoom: !0,
            hoverColor: "#c9dfaf",
            hoverOpacity: null,
            normalizeFunction: "linear",
            scaleColors: ["#b6d6ff", "#005ace"],
            selectedColor: "#c9dfaf",
            selectedRegions: [],
            showTooltip: !0
        }
    }
    angular.module("app.ui.map").controller("jqvmapCtrl", ["$scope", a])
}(),
function () {
    "use strict";

    function a() {
        return {
            restrict: "A",
            scope: {
                options: "="
            },
            link: function (a, b, c) {
                var d;
                d = a.options, b.vectorMap(d)
            }
        }
    }
    angular.module("app.ui.map").directive("uiJqvmap", a)
}();
