import React, {useContext} from 'react'
import {gameContext} from '../App.js';

export default function EndGame(){
    const {usersInfo}=useContext(gameContext);
    function showScores(usersInfo){
        let array=[];
        array=usersInfo.map((user,i)=>{
              return(
                <div key={user[0]} className='flex justify-between text-2xl text-white w-60 bg-gray-600 items-center h-20'>
                  <p className="">#{i+1}</p>  
                  <p className="">{user[1].userName}</p>
                  <img src={`https://robohash.org/${i}`} className={` w-16 h-16 mt-0`} alt='this is avatar'/>
                </div>
              )
           }
           
        )
        return array;
    }


    return(
        <div>
         <div className="fixed bg-black opacity-60 top-0 left-0 flex flex-col justify-center items-center text-bold w-full h-full z-1">
        </div>
        <div className="fixed top-0 left-0 flex flex-col justify-center items-center w-full h-full">
         <p className="text-white text-4xl text-bold">Game Result</p>
         <div>
           {showScores(usersInfo)}
         </div>
           
         </div>
        </div>
    )
}