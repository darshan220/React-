import React, { useState } from "react";
import show from "./Show";



function Studentinfo() {
    const [student, setStudent] = useState({
        firstName: "",
        lastName: "",
        country: "",
        email: "",
        number: "",
  });
  return (
    <div>
      <div class="container">
        <form>

          <label for="fname">FirstName:</label>

          <input
            type="text"
            id="fname"
            value={student.firstName}
            onChange={(e) =>
              setStudent({ ...student, firstName: e.target.value })
            }
          ></input>

          <label for="lname">LastName:</label>
          <input
            type="text"
            id="lname"
            value={student.lastName}
            onChange={(e) =>
              setStudent({ ...student, lastName: e.target.value })
            }
          ></input>

          <label for="country">Country</label>
          <select
            name="country"
            id="country"
            value={student.country}
            onChange={(e) =>
              setStudent({ ...student, country: e.target.value })
            }
          >
            <option value="India">India</option>
            <option value="Canada">Canada</option>
            <option value="Usa">USA</option>
          </select>

          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            value={student.email}
            onChange={(e) => setStudent({ ...student, email: e.target.value })}
          ></input>

          <label for="num">Number:</label>
          <input
            type="number"
            id="num"
            value={student.number}
            onChange={(e) => setStudent({ ...student, number: e.target.value })}
          ></input>

          <button id="btn" onClick={(e) => show(e, student)}>
            Submit
          </button>
          <h2 id="info"></h2>
        </form>
      </div>
    </div>
  );
}

export default Studentinfo;
