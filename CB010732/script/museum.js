
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var thumbnail = document.getElementsByClassName("thumbnail");
var sec1 = document.getElementById("sec1")

var backgroundImg = new Array(
    "../images/1.jpg",
    "../images/45.jpg",
    "../images/46.jpg",
    "../images/47.jpg",
);
let i=0;
next.onclick = function(){
    if(i < 3){
        sec1.style.backgroundImage= 'url("'+backgroundImg[i+1]+'")';
        thumbnail[i+1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i++;
    }
}

prev.onclick = function(){
    if(i > 0){
        sec1.style.backgroundImage= 'url("'+backgroundImg[i-1]+'")';
        thumbnail[i-1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i--;
    }
}


const ovOrders = [];
var orderC = 0;

var localAdultPassUser =0;
var localChildPassUser1 = 0;
var localChildPassUser2=0;
var foreignAdultPassUser=0;
var foreignChildPassUser=0;
var pricelocalAdultPassUser=0;
var pricelocalChildPassUser1=0;
var pricelocalChildPassUser2=0;
var priceforeignAdultPassUser=0;
var priceforeignChildPassUser=0;
var annPrice=0;
var foodPrice=0;
var cTot=0;

function displayOrders(){
  var localAdultPassUser = document.getElementById('aPassValue').value;
  var localChildPassUser1 = document.getElementById('cPassValue1').value;
  var localChildPassUser2 = document.getElementById('cPassValue2').value;
  var foreignAdultPassUser = document.getElementById('fAdPassValue').value;
  var foreignChildPassUser = document.getElementById('fclPassValue').value;

  if(localAdultPassUser < 0 || localChildPassUser1 < 0 || localChildPassUser2 < 0 || foreignAdultPassUser < 0 || foreignChildPassUser < 0){
    alert('You cannot enter negative values');
    return false;
  }

  var annPass = document.getElementById('anPass');
  var foodToken = document.getElementById('foodPass');

  var duration1 = document.getElementById('hours3');
  var duration2 = document.getElementById('hoursHalfDay');
  var duration3 = document.getElementById('hoursFullDay');
  var duration4 = document.getElementById('hours2Day');

  var pricelocalAdultPassUser     = 2500;
  var pricelocalChildPassUser1    = 1000;
  var pricelocalChildPassUser2    = 500;
  var priceforeignAdultPassUser    = 5000;
  var priceforeignChildPassUser    = 2500;

  if(duration1.checked){
    pricelocalAdultPassUser     += 0;
    pricelocalChildPassUser1    += 0;
    pricelocalChildPassUser2    += 0;
    priceforeignAdultPassUser    += 1000;
    priceforeignChildPassUser    += 1000;
  }
  else if(duration2.checked){
    pricelocalAdultPassUser     += 250;
    pricelocalChildPassUser1    += 250;
    pricelocalChildPassUser2    += 250;
    priceforeignAdultPassUser    += 500;
    priceforeignChildPassUser    += 500;
  }
  else if(duration3.checked){
    pricelocalAdultPassUser     += 500;
    pricelocalChildPassUser1    += 500;
    pricelocalChildPassUser2    += 500;
    priceforeignAdultPassUser    += 1000;
    priceforeignChildPassUser    += 1000;
  }
  else if(duration4.checked){
    pricelocalAdultPassUser     += 0;
    pricelocalChildPassUser1    += 0;
    pricelocalChildPassUser2    += 0;
    priceforeignAdultPassUser    += 0;
    priceforeignChildPassUser    += 0;
  }


  document.getElementById('lapq').innerHTML = localAdultPassUser;
  document.getElementById('lcpq1').innerHTML = localChildPassUser1;
  document.getElementById('lcpq2').innerHTML = localChildPassUser2;
  document.getElementById('fapq').innerHTML = foreignAdultPassUser;
  document.getElementById('fcpq').innerHTML = foreignChildPassUser;

  document.getElementById('lapp').innerHTML = localAdultPassUser * pricelocalAdultPassUser;
  document.getElementById('lcpp1').innerHTML = localChildPassUser1 * pricelocalChildPassUser1;
  document.getElementById('lcpp2').innerHTML = localChildPassUser2 * pricelocalChildPassUser2;
  document.getElementById('fapp').innerHTML = foreignAdultPassUser * priceforeignAdultPassUser;
  document.getElementById('fcpp').innerHTML = foreignChildPassUser * priceforeignChildPassUser;

  if(annPass.value > 0){
    var annPrice = 5000 * annPass.value;
    // annPrice = (localAdultPassUser + localChildPassUser1 + localChildPassUser2 + foreignAdultPassUser + foreignChildPassUser);
  document.getElementById('annPass').innerHTML = annPrice;
  }
  else {
    document.getElementById('annPass').innerHTML = 0;
    var annPrice = 0;
  }

  if(foodToken.value > 0){
    var foodPrice = 500 * foodToken.value;
    // foodPrice = (localAdultPassUser + localChildPassUser1 + localChildPassUser2 + foreignAdultPassUser + foreignChildPassUser);
  document.getElementById('foodPassval').innerHTML = foodPrice;
  }
  else {
    document.getElementById('foodPassval').innerHTML = 0;
    var foodPrice = 0;
  }



  var cTot = (localAdultPassUser * pricelocalAdultPassUser)
            + (localChildPassUser1 * pricelocalChildPassUser1)
            + (localChildPassUser2 * pricelocalChildPassUser2)
            + (foreignAdultPassUser * priceforeignAdultPassUser)
            + (foreignChildPassUser * priceforeignChildPassUser) +annPrice + foodPrice;

  document.getElementById('cTot').innerHTML= cTot;

  ovOrders[0 + orderC] = localAdultPassUser;
  ovOrders[1 + orderC] = localChildPassUser1;
  ovOrders[2 + orderC] = localChildPassUser2;
  ovOrders[3 + orderC] = foreignAdultPassUser;
  ovOrders[4 + orderC] = foreignChildPassUser;
  ovOrders[5 + orderC] = pricelocalAdultPassUser;
  ovOrders[6 + orderC] = pricelocalChildPassUser1;
  ovOrders[7 + orderC] = pricelocalChildPassUser2;
  ovOrders[8 + orderC] = priceforeignAdultPassUser;
  ovOrders[9 + orderC] = priceforeignChildPassUser;
  ovOrders[10 + orderC] = annPrice;
  ovOrders[11 + orderC] = foodPrice;
  ovOrders[12 + orderC] = cTot;

}

function showAnnPrice(){

  orderC+=13;
  var ov_Tot = parseInt(document.getElementById('ov_Tot').innerHTML);


  var cTot = parseInt(document.getElementById('cTot').innerHTML);


  ov_Tot = ov_Tot + cTot;

  document.getElementById('ov_Tot').innerHTML = ov_Tot;

  var lapq = parseInt(document.getElementById('lapq').innerHTML);
  var lcpq1 = parseInt(document.getElementById('lcpq1').innerHTML);
  var lcpq2 = parseInt(document.getElementById('lcpq2').innerHTML);
  var fapq = parseInt(document.getElementById('fapq').innerHTML);
  var fcpq = parseInt(document.getElementById('fcpq').innerHTML);
  var annPass = parseInt(document.getElementById('annPass').innerHTML);
  var foodPassval = parseInt(document.getElementById('foodPassval').innerHTML);


  if(!lapq){
    lapq = 0;
  }

  if(!lcpq1){
    lcpq1 = 0;
  }
  if(!lcpq2){
    lcpq2 = 0;
  }
  if(!fapq){
    fapq = 0;
  }
  if(!fcpq){
    fcpq = 0;
  }
  if(!annPass){
    annPass = 0;
  }
  if(!foodPassval){
    foodPassval = 0;
  }


  var lapp = parseInt(document.getElementById('lapp').innerHTML);
  var lcpp1 = parseInt(document.getElementById('lcpp1').innerHTML);
  var lcpp2 = parseInt(document.getElementById('lcpp2').innerHTML);
  var fapp = parseInt(document.getElementById('fapp').innerHTML);
  var fcpp = parseInt(document.getElementById('fcpp').innerHTML);

  if(!lapp){
    lapp = 0;
  }

  if(!lcpp1){
    lcpp1 = 0;
  }
  if(!lcpp2){
    lcpp2 = 0;
  }
  if(!fapp){
    fapp = 0;
  }
  if(!fcpp){
    fcpp = 0;
  }

  var lapq_ = parseInt(document.getElementById('lapq_').innerHTML);
  var lcpq1_ = parseInt(document.getElementById('lcpq1_').innerHTML);
  var lcpq2_ = parseInt(document.getElementById('lcpq2_').innerHTML);
  var fapq_ = parseInt(document.getElementById('fapq_').innerHTML);
  var fcpq_ = parseInt(document.getElementById('fcpq_').innerHTML);

  var lapp_ = parseInt(document.getElementById('lapp_').innerHTML);
  var lcpp1_ = parseInt(document.getElementById('lcpp1_').innerHTML);
  var lcpp2_ = parseInt(document.getElementById('lcpp2_').innerHTML);
  var fapp_ = parseInt(document.getElementById('fapp_').innerHTML);
  var fcpp_ = parseInt(document.getElementById('fcpp_').innerHTML);


  var annPass_ = parseInt(document.getElementById('annPass_').innerHTML);
  var foodPassval_ = parseInt(document.getElementById('foodPassval_').innerHTML);

  document.getElementById('lapq_').innerHTML =lapq+lapq_;
  document.getElementById('lcpq1_').innerHTML =lcpq1+lcpq1_;
  document.getElementById('lcpq2_').innerHTML =lcpq2+lcpq2_;
  document.getElementById('fapq_').innerHTML =fapq+fapq_;
  document.getElementById('fcpq_').innerHTML =fcpq+fcpq_;

  document.getElementById('lapp_').innerHTML =lapp+lapp_;
  document.getElementById('lcpp1_').innerHTML =lcpp1+lcpp1_;
  document.getElementById('lcpp2_').innerHTML =lcpp2+lcpp2_;
  document.getElementById('fapp_').innerHTML =fapp+fapp_;
  document.getElementById('fcpp_').innerHTML =fcpp+fcpp_;

  document.getElementById('annPass_').innerHTML =annPass+annPass_;
  document.getElementById('foodPassval_').innerHTML =foodPassval+foodPassval_;

  document.getElementById('lapq').innerHTML ="";
  document.getElementById('lcpq1').innerHTML ="";
  document.getElementById('lcpq2').innerHTML ="";
  document.getElementById('fapq').innerHTML ="";
  document.getElementById('fcpq').innerHTML ="";

  document.getElementById('lapp').innerHTML ="";
  document.getElementById('lcpp1').innerHTML ="";
  document.getElementById('lcpp2').innerHTML ="";
  document.getElementById('fapp').innerHTML ="";
  document.getElementById('fcpp').innerHTML = "";

  document.getElementById('annPass').innerHTML = "";

  document.getElementById('foodPassval').innerHTML = "";
  document.getElementById('cTot').innerHTML= "";
  console.log(ovOrders.length);

  document.getElementById("formBoooking").reset();

}


function placeOrder(){

  document.getElementById('showAlert').style.display = "block";
  document.getElementById('lapq_').innerHTML =0;
  document.getElementById('lcpq1_').innerHTML =0;
  document.getElementById('lcpq2_').innerHTML =0;
  document.getElementById('fapq_').innerHTML =0;
  document.getElementById('fcpq_').innerHTML =0;
  document.getElementById('annPass_').innerHTML =0;
  document.getElementById('lapp_').innerHTML =0;
  document.getElementById('lcpp1_').innerHTML =0;
  document.getElementById('lcpp2_').innerHTML =0;
  document.getElementById('fapp_').innerHTML =0;
  document.getElementById('fcpp_').innerHTML =0;
  document.getElementById('foodPassval_').innerHTML =0;
  document.getElementById('ov_Tot').innerHTML =0;

}

function showMessage(){
  let cvv = document.getElementById('cvv').value;
  let card = document.getElementById('card_number').value;

  if(cvv.length != 3){
    document.getElementById('display_err').innerHTML = "Invalid CVV Number";
    document.getElementById('display_err').style.display = "block";
    return false;
  }
  else {
    if(card.length != 16){
      document.getElementById('display_err').innerHTML = "Invalid Card Number";
      document.getElementById('display_err').style.display = "block";
      return false;
    }
    else {
      document.getElementById('showAlert').style.display = "block";
      document.getElementById('display_err').style.display = "none";
      alert('Thank you for donating');
    }

  }


}
