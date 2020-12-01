$("#error-page-mobile").hide();
$("#mobile-notice").hide();
$("#shop-enterance").hide();
$("#cash-register").hide();
$("#aisle-create").hide();

const el = document.querySelector("#title-screen");
const shop_ent = document.querySelector("#shop-enterance");
const cash_reg = document.querySelector("#cash-register");
const aisle_crt = document.querySelector("#aisle-create");
const body = document.querySelector("body");

el.addEventListener("mousemove", (e) => {
  el.style.backgroundPositionX = -e.offsetX + "px";
  el.style.backgroundPositionY = -e.offsetY + "px";
});

shop_ent.addEventListener("mousemove", (e) => {
  shop_ent.style.backgroundPositionX = -e.offsetX + "px";
  shop_ent.style.backgroundPositionY = -e.offsetY + "px";
});

cash_reg.addEventListener("mousemove", (e) => {
  cash_reg.style.backgroundPositionX = -e.offsetX + "px";
  cash_reg.style.backgroundPositionY = -e.offsetY + "px";
});

aisle_crt.addEventListener("mousemove", (e) => {
  aisle_crt.style.backgroundPositionX = -e.offsetX + "px";
  aisle_crt.style.backgroundPositionY = -e.offsetY + "px";
});

function titleScreenFade (div) {
  body.style.backgroundColor = "black";

  $("#title-screen").fadeOut(2000);

  setTimeout(function () {
    $("#" + div).hide();

    $("#" + div).fadeIn(2000);
  }, 2000);

  setTimeout(function () {
    body.style.backgroundColor = "beige";
  }, 2000);
}

function enteranceScreenFade (div) {
  body.style.backgroundColor = "black";

  $("#shop-enterance").fadeOut(2000);

  setTimeout(function () {
    $("#" + div).hide();

    $("#" + div).fadeIn(2000);
  }, 2000);

  setTimeout(function () {
    body.style.backgroundColor = "beige";
  }, 2000);
}

function cashRegisterScreenFade (div) {
  body.style.backgroundColor = "black";

  $("#cash-register").fadeOut(2000);

  setTimeout(function () {
    $("#" + div).hide();

    $("#" + div).fadeIn(2000);
  }, 2000);

  setTimeout(function () {
    body.style.backgroundColor = "beige";
  }, 2000);
}

function aisleCreateScreenFade (div) {
  body.style.backgroundColor = "black";

  $("#aisle-create").fadeOut(2000);

  setTimeout(function () {
    $("#" + div).hide();

    $("#" + div).fadeIn(2000);
  }, 2000);

  setTimeout(function () {
    body.style.backgroundColor = "beige";
  }, 2000);
}

$("#title-screen").click(function () {
  titleScreenFade("shop-enterance");

  document.getElementById("kmartRadio").play();
});

$("#feedback").click(function () {
  enteranceScreenFade("cash-register");
});

$("#return-to-store-ent-from-cr").click(function () {
  cashRegisterScreenFade("shop-enterance");
});

$("#create-aisle").click(function () {
  enteranceScreenFade("aisle-create");
});

$("#return-to-store-ent-from-ca").click(function () {
  aisleCreateScreenFade("shop-enterance");
});

$("#aisle-creation-form").click(function () {
  event.preventDefault();
});

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});