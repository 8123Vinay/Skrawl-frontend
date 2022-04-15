import React from 'react'

export default function WordPopUp({ words, socket, roomId, setWords, setChoosingWord, drawerId, isDrawer }) {
    if (isDrawer) {
        function displayWords() {
            let array = words.map((word, index) => {
                return (
                    <p key={index} className="text-xl p-2 text-white hover:cursor-pointer bg-blue-600 rounded-lg " onClick={(e) => {
                        socket.emit("chosenWord", word, roomId);
                        setChoosingWord(false);
                        setWords([]);
                    }}>{word}</p>
                )
            })
            return array;
        }
        return (
            <div>
                <div className="w-screen h-screen gap-4 opacity-60 fixed top-0 left-0">
                </div>
                <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center gap-4 ">
                    {displayWords()}
                </div>
            </div>

        )
    }

    else {

        return (
            <div>
                <div className="fixed w-screen h-screen bg-black opacity-60 top-0 left-0">
                </div>
                <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center ">
                    <h1 className="text-4xl text-white">{drawerId} is ChoosingWord</h1>
                </div>
            </div>
        )
    }
}

