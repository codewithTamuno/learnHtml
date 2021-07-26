var item;
var price;

// Note - the save us not saving the data into a database
// rather it disable the input so the user can't add a word
// or number
// the edit on the other hand is used to undisable the input for
// the entry of data.

function save(){
  // for item.1
  item = document.getElementById("item1").disabled = "disabled";
  price = document.getElementById("price1").disabled = "disabled";
}

function edit(){
  // for item1
  item = document.getElementById("item1").disabled = null;
  price = document.getElementById("price1").disabled = null;
}

function save2(){
  // for item2
  item = document.getElementById("item2").disabled = "disabled";
  price = document.getElementById("price2").disabled = "disabled";
}

function edit2(){
  // for item2
  item = document.getElementById("item2").disabled = null;
  price = document.getElementById("price2").disabled = null;
  
}

function save3(){
  item = document.getElementById("item3").disabled = "disabled";
  price = document.getElementById("price3").disabled = "disabled";
}

function edit3(){
  // for item 3.
  item = document.getElementById("item3").disabled = null;
  price = document.getElementById("price3").disabled = null;
}



function save4() {
  item = document.getElementById("item4").disabled = "disabled";
  price = document.getElementById("price4").disabled = "disabled";
}

function edit4() {
  // for item 4.
  item = document.getElementById("item4").disabled = null;
  price = document.getElementById("price4").disabled = null;
}


function save5() {
  item = document.getElementById("item5").disabled = "disabled";
  price = document.getElementById("price5").disabled = "disabled";
}

function edit5() {
  // for item 5.
  item = document.getElementById("item5").disabled = null;
  price = document.getElementById("price5").disabled = null;
}

function save6() {
  item = document.getElementById("item6").disabled = "disabled";
  price = document.getElementById("price6").disabled = "disabled";
}

function edit6() {
  // for item 6.
  item = document.getElementById("item6").disabled = null;
  price = document.getElementById("price6").disabled = null;
}

function save7() {
  item = document.getElementById("item7").disabled = "disabled";
  price = document.getElementById("price7").disabled = "disabled";
}

function edit7() {
  // for item 7.
  item = document.getElementById("item7").disabled = null;
  price = document.getElementById("price7").disabled = null;
}

function save8() {
  item = document.getElementById("item8").disabled = "disabled";
  price = document.getElementById("price8").disabled = "disabled";
}

function edit8() {
  // for item 8.
  item = document.getElementById("item8").disabled = null;
  price = document.getElementById("price8").disabled = null;
}

function save9() {
  item = document.getElementById("item9").disabled = "disabled";
  price = document.getElementById("price9").disabled = "disabled";
}

function edit9() {
  // for item 9.
  item = document.getElementById("item9").disabled = null;
  price = document.getElementById("price9").disabled = null;
}


var price1;
var price2;
var price3;
var price4;
var price5;
var price6;
var price7;
var price8;
var price9;

function total_price(){
  price1 = document.getElementById("price1").value;
  price2 = document.getElementById("price2").value;
  price3 = document.getElementById("price3").value;
  price4 = document.getElementById("price4").value;
  price5 = document.getElementById("price5").value;
  price6 = document.getElementById("price6").value;
  price7 = document.getElementById("price7").value;
  price8 = document.getElementById("price8").value;
  price9 = document.getElementById("price9").value;
  
  var total = [price1, price2, price3, price4, price5, price6, price7, price8, price9];
  for (prices in total){
    var price = parseInt(prices) + parseInt(prices);
  }
  
  document.getElementById("total_price").value = parseInt(price);
  
}
