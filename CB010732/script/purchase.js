let productName;
let productprice;
let p_image;



if(localStorage.hasOwnProperty('loyalty_points') == false){
  localStorage.setItem("loyalty_points", 0);
}


if(localStorage.hasOwnProperty('productName') == true){

  document.getElementById("pName").innerHTML = localStorage.productName;
  document.getElementById("price").innerHTML = localStorage.productPrice;
  document.getElementById("p_image").src = localStorage.pimage;
}

if (localStorage.getItem("orderProducts") === null) {
  var orderProducts = [];
  localStorage.orderProducts = JSON.stringify(orderProducts);
}

var inc = 1;
function orderFav(){
  parseInt(localStorage.loyalty_points) + 20;
  if(localStorage.orderProducts){
    var orderProducts = JSON.parse(localStorage.orderProducts);
  }else{
    var orderProducts = [];
  }
  if (localStorage.getItem("orderName") === null) {
    if(localStorage.productName){
      localStorage.setItem("orderName", localStorage.productName);
      localStorage.setItem("orderPrice", localStorage.productPrice);
      orderProducts.push(localStorage.productPrice);
      orderProducts.push(localStorage.productName);
      orderProducts.push(localStorage.pimage);
      localStorage.orderProducts = JSON.stringify(orderProducts);

      alert("Order Successfully Placed");
    }else{
      alert("Please add a product to favourites");
    }

  }
  else {
    localStorage.orderName = localStorage.productName;
    localStorage.orderPrice = localStorage.productPrice;
    var orderProduct = localStorage.orderName;
    var orderPrice = localStorage.orderName;
    orderProducts.push(localStorage.productName);
    localStorage.orderProducts = JSON.stringify(orderProducts);

    alert("Order Successfully Placed");

  }
  var card_div = document.createElement("div");
  card_div.className ="card-my";
  card_div.id ="card-my" + inc;
  document.getElementById('cards-my').appendChild(card_div);
  var h_text = document.createElement("h3");
  h_text.innerHTML =localStorage.productName;

  var img_card = document.createElement("img");
  img_card.className='my_ord_img';
  img_card.setAttribute("src", localStorage.pimage);

  var price_txt = document.createElement("div");
  price_txt.className='price';
  price_txt.innerHTML =localStorage.productPrice;;


  document.getElementById('card-my'+inc).appendChild(img_card);
  document.getElementById('card-my'+inc).appendChild(h_text);
  document.getElementById('card-my'+inc).appendChild(price_txt);
  inc++;


  document.getElementById('display_curr_orders').style.display = "block";
  var st_point = parseInt(localStorage.loyalty_points) + 20;
  localStorage.loyalty_points = st_point;
}
function clearOrders(){
  localStorage.clear();
  alert("Orders Cleared");
  document.getElementById('fav_item').style.display = "none";
  document.getElementById('display_curr_orders').style.display = "none";
  window.location.reload();
}

function loyalty(){

  if (localStorage.loyalty_points >= 60){
    alert("You have "+ localStorage.loyalty_points +" loyalty points");
  }else{
    alert("You need to have a minimum of three orders");
  }
}

function currentOrders(){
  if(localStorage.orderProducts){
    var orderProducts = JSON.parse(localStorage.orderProducts);
  }else{
    var orderProducts = [];
  }
  if (orderProducts.length >= 1){
    alert(orderProducts.join("\n"));;
  }else{
    alert("Please Place an order");
  }

}



// Store
// localStorage.setItem("lastname", "Smith");

// Retrieve
// document.getElementById("result").innerHTML = localStorage.getItem("lastname");

function addToFavourite(p_id){

  if(p_id == 1){
    productName  = "2 Cat Tea Mug";
    productprice = "$7.89";
    p_image = "../images/39.png";
  }
  else if (p_id == 2) {
    productName  = "Antique Copper Teapot";
    productprice = "$7.89";
    p_image = "../images/34.png";
  }
  else if (p_id == 3) {
    productName  = "Teapot, Milk Jar & Sugur Bowl";
    productprice = "$18.99";
    p_image = "../images/38.png";
  }
  else if (p_id == 4) {
    productName  = "Glass Teapot";
    productprice = "$10.99";
    p_image = "../images/37.png";
  }
  else if (p_id == 5) {
    productName  = "Wooden Tea Spoon";
    productprice = "$4.99";
    p_image = "../images/35.png";
  }
  else if (p_id == 6) {
    productName  = "Set of 4 Multicolor Teacups";
    productprice = "$14.99";
    p_image = "../images/36.png";
  }
  else if (p_id == 7) {
    productName  = "Copper Tea Kettle";
    productprice = "$12.59";
    p_image = "../images/33.png";
  }
  else if (p_id == 8) {
    productName  = "Red Clay Tea Set";
    productprice = "$17.99";
    p_image = "../images/32.png";
  }
  else if (p_id == 9) {
    productName  = "Tea Cup Set";
    productprice = "$15.99";
    p_image = "../images/31.png";
  }
  else {
    productName  = "Something Went Wrong";
    productprice = "Something Went Wrong";
    p_image = "error.jpg";
  }



    if (localStorage.getItem("productName") === null) {
      localStorage.setItem("productName", productName);
      alert(productName + " Added to Favourite");
    }
    else {
      localStorage.productName = productName;
      alert("You Have Changed The Favourite To " + productName);
    }
    // product_name
    if (localStorage.getItem("productPrice") === null) {
      localStorage.setItem("productPrice", productprice);
    }
    else {
      localStorage.productPrice = productprice;
    }
    // product_price
    if (localStorage.getItem("pimage") === null) {
      localStorage.setItem("pimage", p_image);
    }
    else {
      localStorage.pimage = p_image;
    }
    // product_image

    document.getElementById("pName").innerHTML = localStorage.productName;
    document.getElementById("price").innerHTML = localStorage.productPrice;
    document.getElementById("p_image").src = localStorage.pimage;

    document.getElementById('fav_item').style.display = "block";

}

// var element = document.createElement("span");
// element.setAttribute("style", "color: red");
// document.body.appendChild(element);

// div.className = "div1";
// localStorage.productName;
// document.getElementById("price").innerHTML = localStorage.productPrice;
// document.getElementById("p_image").src = localStorage.pimage;
