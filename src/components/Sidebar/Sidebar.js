import React, { useState } from 'react';
import '../Sidebar/Sidebar.css';
import {
    FaHome,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaPersonBooth,
    FaIdeal,
    FaMoneyBillWave
}from "react-icons/fa";

import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<FaHome/>
        },
        
        {
            path:"/login",
            name:"Login",
            icon:<FaUserAlt/>
        },
        {
            path:"/signup",
            name:"Sign Up",
            icon:<FaPersonBooth/>
        },
        {
            path:"/entrepreneur",
            name:"Become An Entrepreneur",
            icon:<FaIdeal/>
        },
        {
            path:"/investor",
            name:"Become a Investor",
            icon:<FaMoneyBillWave/>
        },
        {
            path:"/entrepreneurs",
            name:"Entrepreneurs",
            icon:<FaThList/>
        }
    ]
    return (
        <div className="container-sidebar">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">IDEAX</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link-sidebar" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;
