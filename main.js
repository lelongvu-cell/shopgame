import './style.css'

import Navigo from "navigo";
import home from './pages/home';
import about from './pages/about';
import product from './pages/product';

const myApp = document.querySelector("#app");

const router = new Navigo("/");

const print = (content) =>{
  myApp.innerHTML = content;
};
router.on({
  "/":() =>{
    print(home.render());
  },
  "/about":() =>{
    print(about.render());
  },
  "/product":() =>{
    print(product.render());
  }
})
router.resolve();
