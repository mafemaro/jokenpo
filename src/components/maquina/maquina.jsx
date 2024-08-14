import React from "react";
import { Scissors, HandFist, Hand } from "@phosphor-icons/react";

const Maquina = ({ computerChoice }) => {
  let icon = null;

  switch (computerChoice) {
    case "pedra":
      icon = <HandFist size={96} weight="fill" />;
      break;
    case "papel":
      icon = <Hand size={96} weight="fill" />;
      break;
    case "tesoura":
      icon = <Scissors size={96} weight="fill" />;
      break;
    default:
      icon = null;
  }

  return (
    <div className="maquina">
      <h2>Escolha da Máquina:</h2>
      {icon}
    </div>
  );
};

export default Maquina;
