// ==UserScript==
// @name        CALM Codes For FC Menu
// @match       https://fcmenu-dub-regionalized.corp.amazon.com/*/laborTrackingKiosk*
// @match       http://fcmenu-dub-regionalized.corp.amazon.com/*/laborTrackingKiosk*
// @author      @aakalkri
// @grant       GM_xmlhttpRequest
// @grant GM_getValue
// @grant GM_setValue
// @version 1.2
// @updateURL    https://raw.githubusercontent.com/kreeztoph/CALM-Codes/refs/heads/main/Calm_codes_Script.js
// @downloadURL  https://raw.githubusercontent.com/kreeztoph/CALM-Codes/refs/heads/main/Calm_codes_Script.js

// ==/UserScript==

var css = document.createElement("style");
css.innerHTML = `
* {
    box-sizing: border-box;
}
#body {
    display: flex;
    flex-flow: row nowrap;
    align-content: space-around;
    justify-content: space-around;
    padding-top: 3%;
}
#body > .login {
    margin-right: 5%;
    margin-left: 5%;
    max-width: 15%;
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
#body > #toolbox {
    width: 75%;
    flex-grow: 2;
    font-size: 150%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    margin-right: 5%;
}
details {
    margin-bottom: 8px;
    background: rgba(255,255,255,0.8);
    padding: 8px;
    border-radius: 8px;
    border: 1px solid #ddd;
}
summary {
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    padding: 10px;
    background: #3498db;
    color: white;
    border-radius: 5px;
}
.roles {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    padding: 10px;
}
select {
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ddd;
    width:20%
}
.roles button {
    background: #3498db;
    border-radius: 13px;
    border: 1px solid black;
    color: #ffffff;
    font-size: 18px;
    padding: 10px;
    cursor: pointer;
}
.roles button:hover {
    background: #3cb0fd;
}
`;
document.head.appendChild(css);

function movebox() {
    let waitForIt;
    if (waitForIt = document.querySelector('#body > .login')) {
        waitForIt.style = '';
    } else {
        setTimeout(movebox, 500);
    }
}
movebox();

var codes = [
  {
    title: "HR",
    roles: [
      { name: "HR GROUP EVENTS", code: "HRGROUP" },
      { name: "HR ALL HANDS MEETING", code: "HRAHM" },
      { name: "ADMIN MEETINGS", code: "HRMTN" },
      { name: "HR SITE ACCOMM", code: "HRACCOM" },
    ],
  },
  {
    title: "Tour Guide",
    roles: [{ name: "HR FC TOUR", code: "HRFCTOUR" }],
  },
  {
    title: "Learning",
    roles: [
      { name: "LN AMB CLASSROOM TRAINING", code: "LNAMB" },
      { name: "LN FC TRAINING EVENTS", code: "LNTRAIN" },
    ],
  },
  {
    title: "Safety",
    roles: [
      { name: "SFT AMCARE NONOCC IN", code: "SFTAMNO" },
      { name: "SFT ASSOC SFTY COMM", code: "SFTASC" },
      { name: "WW HUDDLE", code: "WWHUDDLE" },
    ],
  },

  {
    title: "Operations",
    roles: [
      { name: "OPS EMP ENGAGEMENT", code: "OPSEMPENG" },
      { name: "OPERATION APPRENTICE", code: "OPSAPR" },
      { name: "CULTURE ACTIVITY", code: "CULACT" },
      { name: "OPS REGIONAL/3P", code: "OPSREG" },
    ],
  },
  {
    title: "Facilities",
    roles: [
      { name: "FACILITY 5S", code: "FC5S" },
      { name: "TOTE PREP", code: "TOTEPREP" },
    ],
  },
  {
    title: "On Boarding",
    roles: [{ name: "ORIENTATION", code: "TROR" }],
  },
  {
    title: "Inbound Receive Dock",
    roles: [
      { name: "INBOUND DOCK CLERK", code: "RSVDC" },
      { name: "RECEIVE DOCK CREW", code: "RSVCRW" },
      { name: "RECEIVE LINE LOADER", code: "RSVLD" },
      { name: "DOCK PROCESS GUIDE", code: "DCKPG" },
      { name: "INBOUND YARD DRIVER", code: "RSVIYD" },
    ],
  },
  {
    title: "Receive Support",
    roles: [
      { name: "IB TOTE REPLEN", code: "RSVRPL" },
      { name: "RCV WATERSPIDER", code: "WATER" },
      { name: "RECEIVE AMBASSADOR", code: "RAMB" },
      { name: "PROCESS GUIDE REC", code: "PRGREC" },
    ],
  },
  {
    title: "Inbound Leads",
    roles: [
      { name: "DOCK LEAD/PA", code: "LDOCK" },
      { name: "RECEIVE LEAD/PA", code: "RSLR" },
      { name: "RSR LEAD/PA", code: "LRSR" },
      { name: "STOW TO PRIME LEAD/PA", code: "SLSP" },
    ],
  },
  {
    title: "Inbound Problemm Solve",
    roles: [
      { name: "IB SWEEPER", code: "LPSWEEP" },
      { name: "RECEIVE PROBLEM SOLVE", code: "IBPS" },
      { name: "STOW TO PRIME SOLVE", code: "RECON" },
    ],
  },
  {
    title: "Transfer In Support",
    roles: [
      { name: "CART/PALLET BUILDER", code: "PLTBLD" },
      { name: "TRANSFERIN TRANSPORT", code: "TSHPTP" },
      { name: "CART RUNNER TRANS", code: "CRNTRA" },
      { name: "TRANSFERIN DOCK CREW", code: "TRFICR" },
      { name: "PROCESS GUIDE TRANS", code: "PRGTRA" },
      { name: "LINE LOAD INJECTION", code: "LINLINJT" },
    ],
  },
  {
    title: "Stow To Prime Support",
    roles: [
      { name: "CART RUNNER STOW", code: "CRNSTO" },
      { name: "STOW AMBASSADOR", code: "SPSA" },
      { name: "STOW PRIME TRAINING", code: "STWTR" },
    ],
  },
  {
    title: "RSR Support",
    roles: [
      { name: "AR FLOOR CLEANING", code: "ARFLRCLN" },
      { name: "ECR/FFP TESTING", code: "ECRFFPS" },
    ],
  },
  {
    title: "Pick Support",
    roles: [
      { name: "PICK AMBASSADOR", code: "PAMB" },
      { name: "PICK TRAINING", code: "PIKTR" },
      { name: "PROCESS GUIDE PICK", code: "PGPICK" },
      { name: "TOTE REPLENISHMENT", code: "PIKREP" },
    ],
  },
  {
    title: "Sort Support",
    roles: [
      { name: "PROCESS GUIDE SORT", code: "PRGSORT" },
      { name: "SORT AMBASSADOR", code: "STAMB" },
      { name: "SORT AMBASSADOR", code: "ASAMB" },
      { name: "SORT TRAINING", code: "SRTTR" },
      { name: "WATER SPIDER", code: "SRTWS" },
    ],
  },
  {
    title: "Pack Support",
    roles: [
      { name: "AFE WATER SPIDER", code: "AFEWS" },
      { name: "WATER SPIDER PACK", code: "PACKWS" },
      { name: "PICK TO REBIN (P2R) WATER SPIDER", code: "PTRWS" },
      { name: "PACK AMBASSADOR", code: "PACKAM" },
      { name: "PACK SINGLES WATER SPIDER", code: "SNGWS" },
      { name: "SLAM OPERATOR", code: "PMSO" },
      { name: "PACK SLAM SUPPORT", code: "PACKSS" },
      { name: "PACK 5S", code: "PACK5S" },
    ],
  },
  {
    title: "Outbound Leads",
    roles: [
      { name: "PICK LEAD/PA", code: "LPICK" },
      { name: "PACK LEAD/PA", code: "PAKLPA" },
      { name: "SHIP LEAD/PA", code: "LSHIP" },
      { name: "SORT LEAD/PA", code: "SLPS" },
      { name: "OB PROB SOLVE LEAD/PA", code: "OBPSLPA" },
    ],
  },
  {
    title: "Ship Dock",
    roles: [
      { name: "SHIP DOCK SUPPORT 5S", code: "SHP5S" },
      { name: "FSRI OPERATOR", code: "FSRIOP" },
      { name: "MANUAL CONTAINER BUILDER (DOCK PALLETIZE)", code: "BOX CHUTER" },
      { name: "BAG WATERSPIDER", code: "BAG CHUTER" },
      { name: "CONTAINER MOVE FLAT WATERSPIDER", code: "FLINSD" },
      { name: "CONTAINER MOVE SHIP WATERSPIDER", code: "FLINSD" },
    ],
  },
    {
    title: "Process End",
    roles: [
      { name: "ISTOP", code: "ISTOP" },
      { name: "MSTOP", code: "MSTOP" },
    ],
  },
];

let toolbox = document.createElement("div");
toolbox.id = "toolbox";

toolbox.innerHTML = `<select id="titleDropdown">
    <option value="" selected disabled>Select a Process</option>
    ${codes
      .map((c) => `<option value="${c.title}">${c.title}</option>`)
      .join("")}
</select>
<div class="roles" id="rolesContainer"></div>`;

document.querySelector("#body").appendChild(toolbox);

document
  .getElementById("titleDropdown")
  .addEventListener("change", function () {
    let selectedTitle = this.value;
    let rolesContainer = document.getElementById("rolesContainer");
    rolesContainer.innerHTML = "";
    let selectedCategory = codes.find((c) => c.title === selectedTitle);
    if (selectedCategory) {
      selectedCategory.roles.forEach((role) => {
        let button = document.createElement("button");
        button.textContent = role.name;
        button.value = role.code;
        button.title = role.code;
        button.addEventListener("click", function () {
          document.getElementById("calmCode").value = this.value;
          document.forms[0].submit();
        });
        rolesContainer.appendChild(button);
      });
    }
  });

