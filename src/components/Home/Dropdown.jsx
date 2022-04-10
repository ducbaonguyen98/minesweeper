import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from "../commons";
import { chooseLevel, newGame } from "../../redux/slice/game"; 

const Item = ({ handleClickItemDropdown, text, index }) => (<span onClick={() => handleClickItemDropdown(index)} className={`py-3 cursor-pointer hover:bg-white-500 text-sm ${ index % 2 === 0 ? "border-b" : ""} ${index === 0 ? "rounded-tl rounded-tr" : "rounded-bl rounded-br"}`}>{text}</span>);

export const Dropdown = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [ active, setActive ] = useState(false);



    useEffect(() => {

        const handleEventClick = (e) => {
            if(!e.target.closest(".dropdown")) { 
                setActive(false);
            }
        }
        document.addEventListener("click", handleEventClick);

        return () => document.removeEventListener("click", handleEventClick);

    },[]);

    const handleClickDropdown = () => setActive(!active);

    const handleClickItemDropdown = (index) => {
        setActive(false);
        dispatch(chooseLevel(index));
        dispatch(newGame());
        navigate("/game");
    }
    
  return (
    <div className="dropdown w-36 m-auto relative">
        <Button onClick={handleClickDropdown} text="Start" className="bg-white hover:bg-white-500 text-xl font-medium shadow"/>
        <div className={`${!active ? "opacity-0" : "opacity-100"} transition-all duration-100 absolute top-1/4 left-1/2 translate-y-1/2 -translate-x-1/2 flex flex-col bg-white shadow text-black w-full rounded`}>
            {
                ["Beginner", "Advantage"].map((text, index) => <Item handleClickItemDropdown={handleClickItemDropdown} key={index.toString()} text={text} index={index}  />)
            }
        </div>
    </div>
  )
}
