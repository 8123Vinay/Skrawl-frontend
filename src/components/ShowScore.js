import React, { useContext } from 'react';
import { gameContext } from '../App'
export default function ShowScore({roundScore}) {
    const { wordToGuess} = useContext(gameContext);
    function displayScores(roundScore){
        let array=[];

       array=roundScore.map((user,i)=>{
           let textColor='text-red-600';
           if(user[1].score>0){
               textColor='text-green-600'
           }
            return(
                <h1 className={`${textColor} text-2xl`} key={i}>
                    {user[1].userName}:+{user[1].score}
                </h1>
            )
        })
        return array;
    }

    return (
        <div>
          <div className="w-full h-full fixed top-0 left-0 fixed bg-black opacity-60 ">
        </div>
        <div className="fixed top-0 left-0 flex flex-col justify-center items-center w-screen h-screen">
            <h1 className="text-white text-2xl">
               The word is <span className="bold">{wordToGuess}</span>
            </h1>
            <h2 className="text-2xl text-white">Players Scores</h2>
         <div className="">
              {displayScores(roundScore)}
        </div>
         </div>
        </div>
    )
}