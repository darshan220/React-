import React, { useState } from "react";
import Studentinfo from "./StudentInfo";

function Show(e, student) {
  e.preventDefault();
  console.log(student);
  JSON.stringify(student);
  document.getElementById(
    "info"
  ).innerHTML = ` Your First Name: ${student?.firstName} <br/> Your Last Name: ${student?.lastName} <br/>  Your Country: ${student?.country} <br/> Your Email: ${student?.email} <br/> Your Number: ${student?.number}`;

//   document.getElementById(
//     "info"
//   ).innerHTML = ` Your First Name: test <br/> Your Last Name: test <br/>  Your Country: test <br/> Your Email: test <br/> Your Number: test`;
}

export default Show;
