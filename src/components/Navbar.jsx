import React from "react"
import { NavList } from "./Navlist"
import { Navprofile } from "./Navprofile"
import { useState,useEffect,useRef } from "react";
import logo from '../assets/logo.png'

export const Navbar=()=>{

    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef();
    const closeBtnRef = useRef();

    const menuBtnChange = () => {
        const closeBtn = closeBtnRef.current;
        if (isOpen) {
            closeBtn.classList.replace('bx-menu', 'bx-menu-alt-right');
        } else {
            closeBtn.classList.replace('bx-menu-alt-right', 'bx-menu');
        }
    };
    useEffect(() => {
        const sidebar = sidebarRef.current;
        const closeBtn = closeBtnRef.current;
        const toggleSidebar = () => {
            setIsOpen(prevState => !prevState);
            menuBtnChange();
        };
        closeBtn.addEventListener('click', toggleSidebar);
        return () => {
            closeBtn.removeEventListener('click', toggleSidebar);
        };
    }, [])
    

    return(
    <div className={`sidebar ${isOpen? 'open' : ''}`} ref={sidebarRef}>
        <div className="logo-details">
            <img className="bx icon logo" src={logo} alt="logo" />
            <i className="bx bx-menu" id="btn" ref={closeBtnRef}></i>
        </div>
        <ul className="nav_list">
            <NavList name="Dashboard" class="bx bx-grid-alt" link="/dashboard" />
            <NavList name="Prediction" class='bx bxs-rocket' link="/formpage"/>
            <NavList name="DataSet" class='bx bxs-data' link="/dataset"/>
            <NavList name="Model Evaluation" class='bx bx-dna' link="/evaluation"/>
            <NavList name="Research Papers" class='bx bx-paperclip' link="/research"/>
            <Navprofile />
        </ul>
    </div>
    )
}