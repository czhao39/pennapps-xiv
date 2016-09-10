$(document).ready(function() {
    $window = $(window);
    $btn_collapse = $(".button-collapse");
    $(".timeago").timeago();

    var sr = ScrollReveal();
    sr.reveal(".property-img, .map, .card");
    $btn_collapse.sideNav({
        menuWidth: 200
    });
    $("#slide-out").click(function() {
        if ($window.width() <= 992)
            $btn_collapse.sideNav("hide");
    });
    $(".scrollspy").scrollSpy({
        scrollOffset: 80
    });
    var chart_data = JSON.parse($("#school-data").text());
    $.each(["math", "science", "english"], function(k, v) {
        new Chart($("#chart-" + v)[0].getContext("2d"), {
            type: "pie",
            data: {
                labels: ["Advanced", "Proficient", "Basic", "Failing"],
                datasets: [
                    {
                        data: chart_data[v],
                        backgroundColor: [
                            "#66BB6A",
                            "#36A2EB",
                            "#FFCE56",
                            "#FF6384"
                        ]
                    }
                ]
            },
            options: {
                maintainAspectRatio: true
            }
        });
    });
});
