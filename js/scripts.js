// backend
var pCost1=200;
var total=0;
var pTitle="";


var data = new Array();
data[0] = "one, a datum";
data[1] = "two, a deer";
function sendData()

// FrontEnd
$(document).ready(function(){
  $(".buyProductButton").click(function(event){
    pTitle=$(this).siblings(".pName").text();
    pCost1=parseInt($(this).siblings(".pPrice").text());
    total+=pCost1;
    $("#summary").append("<li class=\"list-group-item\">"+pTitle+"<span class=\"tag tag-default tag-pill float-xs-right\">"+pCost1+"</span></li>");
    $("#Total").text(total);
    $("#summary2").append("<li class=\"list-group-item\">"+pTitle+"<span class=\"tag tag-default tag-pill float-xs-right\">"+pCost1+"</span></li>");
    $("#Total2").text(total);
    event.preventDefault();
  });
  $("#buyNow").click(function(event){


  });
});
