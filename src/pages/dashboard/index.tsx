import React, { useState } from "react";
import Receitas from "../../components/receitas";
import Despesas from "../../components/despesas";
import "./styles.css";

const Dashboard = () => {
  const [totalReceitas, setTotalReceitas] = useState(0);
  const [totalDespesas, setTotalDespesas] = useState(0);

  const handleTotalReceitasChange = (total: number) => {
    setTotalReceitas(total);
  };

  const handleTotalDespesasChange = (total: number) => {
    setTotalDespesas(total);
  };

  return (
    <div className="container">
      <h1>Gerenciador de Orçamento Pessoal</h1>
      <div className="coluna-container">

        <div className="coluna">
          <h2>Receitas</h2>
          <Receitas onTotalChange={handleTotalReceitasChange} />
        </div>

        <div className="coluna">
          <h2>Despesas</h2>
          <Despesas onTotalChange={handleTotalDespesasChange} />
        </div>
      </div>

      <div className="total">
        <h3>Total: R$ {(totalReceitas - totalDespesas).toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Dashboard;
