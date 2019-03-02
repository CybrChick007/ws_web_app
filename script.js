'use strict'

function laneList() {


  for (let i = 1; 1<27; i++) {
    let newLi = document.createElement(li);
    let newLane = document.createTextNode("Lane " + i + ":");

    let list = document.getElementById("laneList");

    newli.appendChild(newLane);


    // let newLane  = ("Lane " + i + ":");
    // document.lanes.appendChild(newLane);
    // let expandingList = document.createElement('ul', { is : 'expanding-list' })

  }

}



// // Create a class for the element
// class ExpandingList extends HTMLUListElement {
//   constructor() {
//     // Always call super first in constructor
//     super();
//
//     // constructor definition left out for brevity
//     ...
//   }
// }
//
// // Define the new element
// customElements.define('expanding-list', ExpandingList, { extends: "ul" });
