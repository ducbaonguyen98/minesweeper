import React from "react"; 
import { Content } from "../components/commons"; 
import { Dropdown } from "../components/Home"; 

const Home = () => {
    return (
      <Content>
        <div className="bg-info rounded w-[400px] h-[400px] flex flex-col justify-center text-center space-y-10 border">
          <h3 className="text-white text-2xl font-semibold text-center">Welcom to Minesweeper</h3> 
          <Dropdown/> 
        </div>
      </Content>
    )
};

export default Home;
