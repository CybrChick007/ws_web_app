'use static';

const express = require('express');
const app = express();

app.get('/', );

app.post('/', );

window.addEventListener('load', initalize);
const AUTOREFRESH_INTERVAL = 1000; // 1s

async function initalize(req, res){
  const submit = window.querySelectorAll('button');
  submit.addEventListener("click", collectInfo);
}


//
//
// function lanes(req, res, laneNo) {
//   let laneID = "laneC"+laneNo;
//   let lane = querySelector(laneID);
//
//   let text = lane.textContent;
//
//   return text;
// }
//
// function issues(req, res){
//   let
// }
//
// function parts(req, res){
//
// }
//
// function leagues(req, res){
//
// }
