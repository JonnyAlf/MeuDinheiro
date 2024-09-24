import React, { useEffect, useState } from "react";
import "./styles.css";  // Importar o CSS

interface Receita {
  id: number;
  descricao: string;
  valor: number;
}
const Receitas = ({ onTotalChange }: { onTotalChange: (total: number) => void }) => {
  const [receitas, setReceitas] = useState<Receita[]>([]);
  const [descricao, setDescricao] = useState<string>("");
  const [valor, setValor] = useState<number>(0);

  const adicionarReceita = () => {
    const novaReceita: Receita = {
      id: receitas.length + 1,
      descricao,
      valor,
    };
    setReceitas([...receitas, novaReceita]);
    setDescricao(""); 
    setValor(0);
  };

  const excluirReceita = (id: number) => {
    const receitasFiltradas = receitas.filter(receita => receita.id !== id);
    setReceitas(receitasFiltradas);
  };

  useEffect(() => {
    const totalReceitas = receitas.reduce((acc, receita) => acc + receita.valor, 0);
    onTotalChange(totalReceitas);
  }, [receitas, onTotalChange]);

  return (
    <div className="receitas-container">
      <div>
        <input
          type="text"
          placeholder="Descrição da Receita"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor da Receita"
          value={valor}
          onChange={(e) => setValor(Number(e.target.value))}
        />
        <button onClick={adicionarReceita}>Adicionar</button>
      </div>

      <div>
        <h3>Lista de Receitas</h3>
        {receitas.length === 0 ? (
          <p>Sem receitas cadastradas</p>
        ) : (
          <ul>
            {receitas.map((receita) => (
              <li key={receita.id}>
                {receita.descricao} - R$ {receita.valor.toFixed(2)}
                <button onClick={() => excluirReceita(receita.id)}>X</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="total">
        <h3>Total de Receitas: R$ {receitas.reduce((acc, receita) => acc + receita.valor, 0).toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Receitas;