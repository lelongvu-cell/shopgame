import './style.css'

import Navigo from "navigo";

const myApp = document.querySelector("#app");

const router = new Navigo("/");

const print = (content) =>{
  myApp.innerHTML = content;
};
router.on({
  "/":() =>{
    print()
  },
  "/about":() =>{
    console.log("About page");
  },
  "/product":() =>{
    
  }
})
router.resolve();