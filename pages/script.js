'use strict'

const ws = new WebSocket("ws://" + window.location.hostname + ":" + (window.location.port || 80) + "/" );


console.log("hello world");



//Send anything typed into a section of the control to a new line of the issues section of the dashboard

//Set up two placeholder elements, one for type and one for read. Autofocus on type and have read as read only (see index.html in socket examples)

//Display date

//event listeners from an to Server
//---------------------------------------------------------//

//
// function fetchInfo(){
//   console.log("Fetched info")
//   let json_issue = machineIssues.value();
//   obj = JSON.parse(json_issue);
//
//   console.log(obj);
// }

function date(){
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();

  today = mm + '/' + dd + '/' + yyyy;
  window.write(today);
}

function lanes(laneNo) {
  let lane = "lane"+laneNo;
  let text = lane.textContent;

  return text;
}

function issues(req, res){

}

function parts(req, res){

}

function leagues(req, res){

}
