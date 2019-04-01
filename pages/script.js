'use strict'

console.log("hello world");

function pageLoad(){
  const submit = document.getElementById('buttonSave');
  submit.addEventListener("click", fetchInfo);
}
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
