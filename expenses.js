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