import { useState } from 'react';
import Player from './components/player/player';
import Maquina from './components/maquina/maquina';
import './App.css';

const App = () => {
  const choices = ['pedra', 'papel', 'tesoura'];
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [empate, setEmpate] = useState(0);
  const [gameActive, setGameActive] = useState(true); // Estado do jogo (ativo ou inativo)

  const generateComputerChoice = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const determineWinner = (player, computer) => {
    if (player === computer) {
      setEmpate(empate + 1)
      return 'Empate'
    };
    if (
      (player === 'pedra' && computer === 'tesoura') ||
      (player === 'papel' && computer === 'pedra') ||
      (player === 'tesoura' && computer === 'papel')
    ) {
      setPlayerScore(playerScore + 1);
      return 'Jogador vence!';
    } else {
      setComputerScore(computerScore + 1);
      return 'Computador vence!';
    }
  };

  const handlePlayerSelect = (choice) => {
    if (!gameActive) return; // Não permita que o jogador faça escolhas quando o jogo estiver encerrado
    const computerChoice = generateComputerChoice();
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    const winner = determineWinner(choice, computerChoice);
    setResult(winner);
  };

  const restartGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult('');
    setGameActive(true);
    if (playerScore === 3) {
      setPlayerScore(0);
      setComputerScore(0);
      setEmpate(0);
      return 'Jogador venceu';
    } else if (computerScore === 3) {
      setPlayerScore(0);
      setComputerScore(0);
      setEmpate(0);
      return 'Maquina venceu';
    } else if (empate === 3) {
      setPlayerScore(0);
      setComputerScore(0);
      setEmpate(0);
      return 'Jogo empatado';
    }
  };
  

  return (
    <div>
      <div className='flex'>
        <h2>Pontuação:</h2>
        <p>Jogador: {playerScore}</p>
        <p>Computador: {computerScore}</p>
        <p>Empate : {empate}</p>
      </div>
      <Player onPlayerSelect={handlePlayerSelect} />
      {gameActive && (
        <>
          <Maquina computerChoice={computerChoice} />
          {playerChoice && (
            <>
              <h2>Resultado: {result}</h2>
              <button onClick={restartGame}>Jogar Novamente</button>
            </>
          )}
        </>
      )}

    </div>
  );
};

export default App;
