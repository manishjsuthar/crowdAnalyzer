import React, { useState } from 'react'
import Excel from '../excel/Excel.jsx'
import VideoEle from "../videoEle/VideoEle.js"


function UserList() {

  var people = [
    { id: "1", name: "Lokesh", rollNo: "19eskcs127", img: "/my_profile.JPG" },
    { id: "2", name: "Manish", rollNo: "19eskcs132", img: "/manish.jpeg" },
    // { id: "3", name: "Kshtij", rollNo: "19eskcs121", img: "/kshtij.jpeg" },
    // { id: "3", name: "Kshtij", rollNo: "19eskcs121", img: "/kshtij1.jpeg" },
    // { id: "3", name: "Kshtij", rollNo: "19eskcs121", img: "/kshtij2.jpeg" },
    { id: "3", name: "Kshtij", rollNo: "19eskcs121", img: "/kshtij3.jpeg" },
  ]

  const [attendance, addToAttendance] = useState([])
  const [peopleCountState,setPeopleCount] = useState(0);
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <VideoEle style={{ flexDirection: "column" }} attendance={attendance} addToAttendance={addToAttendance} people={people} setPeopleCount={setPeopleCount}
          />

          <div style={{ marginLeft: "10px", width: "300px", flexDirection: "column" }}>
            <h2 style={{ textAlign: "center", }}>People Count: </h2>

            <div style={{ overflowY: "auto" }}>
{peopleCountState}
{/* 
              {attendance.map((user) => {
                return (<div className="user" style={{ fontSize: "20px", borderBottom: "1px solid #ddd" }}>{user.name} {user.isPresent ? "P" : "A"}
                </div>)
              }
              )} */}
            </div>

          </div>


        </div>
        <div className='heading' style={{ display: "flex", flexDirection: "row", }}>
          <Excel attendance={attendance} />

        </div>
      </div>










    </>

  )
}

export default UserList
