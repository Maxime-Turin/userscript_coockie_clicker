// ==UserScript==
// @name         userscript_coockie_clicker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automate coockie clicker
// @author       Max
// @match        *://orteil.dashnet.org/cookieclicker/*
// @match        *://orteil.dashnet.org/cookieclicker/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

let autoClickStatus;

const bigCookieClick = () => {
  if (!autoClickStatus) {
    document.querySelector('.autoClickButton').style.backgroundColor = 'green';
    autoClickStatus = setInterval(() => Game.ClickCookie(), 25);
  } else {
    document.querySelector('.autoClickButton').style.backgroundColor = 'red';
    clearInterval(autoClickStatus);
    autoClickStatus = null;
  }
};

let autoBuyStatus;

const autoBuy = () => {
  if (autoBuyStatus) {
    const ratioCpsPrice = Game.ObjectsById.map(
      (element) => (element.storedTotalCps + element.storedCps) / element.bulkPrice,
    );
    const index = ratioCpsPrice.indexOf(Math.max(...ratioCpsPrice));
    if (Game.ObjectsById[index].bulkPrice > Game.cookies) {
      setTimeout(autoBuy, 1000);
    }
    if (Game.ObjectsById[index].bulkPrice <= Game.cookies) {
      Game.ObjectsById[index].buy(1);
      setTimeout(autoBuy, 1000);
    }
  } else {
    return null;
  }
};

const autoBuySwitch = () => {
  if (!autoBuyStatus) {
    document.querySelector('.autoBuyButton').style.backgroundColor = 'green';
    autoBuyStatus = 1;
    autoBuy();
  } else {
    document.querySelector('.autoBuyButton').style.backgroundColor = 'red';
    autoBuyStatus = null;
    autoBuy();
  }
};

const drawPanel = () => {
  const panel = document.createElement('div');
  panel.style.position = 'absolute';
  panel.style.bottom = '1px';
  panel.style.left = '150px';
  panel.style.zIndex = '30';
  panel.style.display = 'flex';
  panel.style.backgroundColor = 'blue';
  document.body.appendChild(panel);
  // Auto Click button
  const autoClickButton = document.createElement('button');
  autoClickButton.classList.add('autoClickButton');
  autoClickButton.textContent = 'autoClick';
  autoClickButton.style.backgroundColor = 'red';
  autoClickButton.style.margin = '3px';
  panel.appendChild(autoClickButton);
  // Auto Game button
  const autoBuyButton = document.createElement('button');
  autoBuyButton.classList.add('autoBuyButton');
  autoBuyButton.textContent = 'autoBuy';
  autoBuyButton.style.backgroundColor = 'red';
  autoBuyButton.style.margin = '3px';
  panel.appendChild(autoBuyButton);
};

drawPanel();
document.querySelector('.autoClickButton').addEventListener('click', bigCookieClick);
document.querySelector('.autoBuyButton').addEventListener('click', autoBuySwitch);
