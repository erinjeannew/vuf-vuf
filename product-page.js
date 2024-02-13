"use strict";

// PRODUCT PAGE: display thumbnails in #main-product-img on click
// Declaring variables
const mainProductImg = document.getElementById("main-product-img");
const thmb1 = document.getElementById("thmb-1");
const thmb2 = document.getElementById("thmb-2");
const thmb3 = document.getElementById("thmb-3");
const thmb4 = document.getElementById("thmb-4");
const thmb1Img = document.getElementById("thmb-1-img");
const thmb2Img = document.getElementById("thmb-2-img");
const thmb3Img = document.getElementById("thmb-3-img");
const thmb4Img = document.getElementById("thmb-4-img");

// Adding event listeners to each thumbnail
thmb1.addEventListener("click", function () {
  mainProductImg.src = thmb1Img.src;
});
thmb2.addEventListener("click", function () {
  mainProductImg.src = thmb2Img.src;
});
thmb3.addEventListener("click", function () {
  mainProductImg.src = thmb3Img.src;
});
thmb4.addEventListener("click", function () {
  mainProductImg.src = thmb4Img.src;
});
