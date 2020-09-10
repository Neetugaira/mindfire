$(document).ready(function () {
  // initiating html input range plugin
  // htmlInputrange.default();
  // if you want to customize html input range plugin
  htmlInputRange.options({
    tooltip: true,
    max: 10,
    labels: true,
    labelsData: {
      one: '1',
      two: '2'
    }
  });
  $(".hir-tracker-thumb").css("width","10%");
$(".tooltip").css("left","10%");
$(".tooltip").text("1");
});
