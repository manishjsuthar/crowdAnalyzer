import React from 'react'
import './detail.css'
import TablePaginationActions from '../TeacherInfo/teacherinfo'

function detial() {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    };
    return (

        <div className="widgetLg" style={{width:"100%",height:"100%"}}>

            <div className='teacherImage center' >
                <img
                    src={"https://businessakhbar.com/wp-content/uploads/2021/07/Arabic-Media-Monitoring-Platform-Blog-Image.jpg"}
                    alt=""
                    id="demo"

                />
            </div>
            <h3 className="widgetLgTitle" style={{ marginTop: "30px", marginBottom: "30px"}}>Crowd Anlyzer</h3>
            <div className='row' style={{width:"50rem",height:"40rem"}}>
               <TablePaginationActions/>
                
            </div>

        </div>

    );
}


export default detial;