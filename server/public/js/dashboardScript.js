function listLogs() {
  $.ajax({
        url: "/notification",
        type: 'get',

        success: function (notifyLogs) {
            LogRes=notifyLogs.notifyLoglist
             $('.logging').empty();
             $('.footer').empty();
             $('.header').text("No optimizer alerts");
            for(let i=0; i<LogRes.length; i++){
              if(LogRes[i].instanceId){
                var optimizeUrl="/network/"+LogRes[i].networkId+"?"+LogRes[i].instanceId;
              }
              else{
                var optimizeUrl="/network/"+LogRes[i].networkId;
              }

             $(".logLength").text(LogRes.length);
             $('.logging').append($('<div></div>').addClass('logs'+i));
             $('.logs'+i).append('<i class="fa fa-superpowers faOptimize"></i> '+ LogRes[i].msg +"<button class='btnoptimize'><a href="+optimizeUrl+">Optimize</a></button>");
             //  $('#warning').append(warnRes[i].msg);
            }
        },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
             console.log('error', errorThrown);
          }
    });
  }


listLogs();

  


// function copySSH() {
//   var copyText = document.getElementById("mySsh");
//   copyText.select();
//   document.execCommand("copy");
//   $("#copied-status").show().delay(3000).fadeOut();
// }
