$(function(){

  $('#questions1').click(function (e){
    e.preventDefault();
   if ($("#answers1").is(":hidden")){
     $("#answers1").slideDown("slow");
   } else{
    $("#answers1").hide('slow');
   }
 });

 // $('#questions2').click(function (e){
 //      e.preventDefault();
 //   if ($("#answers2").is(":hidden")) {
 //     $( "#answers2").slideDown("slow");
 //   } else {
 //    $("#answers2").hide('slow');
 //    }
 // });

 // $('#questions3').click(function (e) {
 //      e.preventDefault();
 //   if ($("#answers3").is(":hidden")) {
 //     $("#answers3").slideDown("slow");
 //   } else {
 //    $("#answers3").hide('slow');
 //    }
 // });

});
