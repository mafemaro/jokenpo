import React, { useState } from "react";

const Player = ({ onPlayerSelect }) => {

    const [playerChoice, setPlayerChoice] = useState(null)

    const handleChoice = (choice) => {
        setPlayerChoice(choice)
        onPlayerSelect(choice)
    }

    return (
        <div>
            <h2>
                Escolha do jogador
            </h2>
            <button onClick={() => handleChoice('pedra')}>Pedra</button>
            <button onClick={() => handleChoice('papel')}>Papel</button>
            <button onClick={() => handleChoice('tesoura')}>Tesoura</button>
        </div>
    )

}

export default Player