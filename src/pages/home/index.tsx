import React from "react";
import "./style.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bem-vindo ao Gerenciador de Orçamento Pessoal</h1>
      <p>
        Nosso objetivo é ajudá-lo a controlar suas finanças de forma simples e
        eficaz. Com o <strong>Gerenciador de Orçamento Pessoal</strong>, você
        pode monitorar suas receitas e despesas mensais, permitindo uma visão
        clara sobre suas finanças.
      </p>
      <h2>Como funciona:</h2>
      <ul>
        <li>
          <strong>Adicionar Receitas:</strong> Registre todas as suas fontes de
          renda, sejam elas salários, investimentos, ou qualquer outra forma de
          ganho.
        </li>
        <li>
          <strong>Adicionar Despesas:</strong> Acompanhe seus gastos diários,
          incluindo despesas fixas como aluguel e variáveis como compras e
          lazer.
        </li>
        <li>
          <strong>Resumo Financeiro:</strong> Visualize um resumo de suas
          finanças, incluindo o total de receitas, despesas e o saldo restante
          para o mês.
        </li>
      </ul>
      <p>
        Com essas informações, você poderá planejar melhor suas finanças e
        alcançar suas metas financeiras de forma eficiente. Não perca o controle
        dos seus gastos, comece a gerenciar seu orçamento hoje mesmo!
      </p>
    </div>
  );
};

export default Home;
