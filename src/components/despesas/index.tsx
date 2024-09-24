import React, { useEffect, useState } from "react";
import "./styles.css";  // Importar o CSS

interface Despesa {
  id: number;
  descricao: string;
  valor: number;
}
const Despesas = ({ onTotalChange }: { onTotalChange: (total: number) => void }) => {
  const [despesas, setDespesas] = useState<Despesa[]>([]);
  const [descricao, setDescricao] = useState<string>("");
  const [valor, setValor] = useState<number>(0);

  const adicionarDespesa = () => {
    const novaDespesa: Despesa = {
      id: despesas.length + 1,
      descricao,
      valor,
    };
    setDespesas([...despesas, novaDespesa]);
    setDescricao("");
    setValor(0);
  };

  const excluirDespesa = (id: number) => {
    const despesasFiltradas = despesas.filter(despesa => despesa.id !== id);
    setDespesas(despesasFiltradas);
  };

  useEffect(() => {
    const totalDespesas = despesas.reduce((acc, despesa) => acc + despesa.valor, 0);
    onTotalChange(totalDespesas);
  }, [despesas, onTotalChange]);

  return (
    <div className="despesas-container">
      <div>
        <input
          type="text"
          placeholder="Descrição da Despesa"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <input
          type="number"
          placeholder="Valor da Despesa"
          value={valor}
          onChange={(e) => setValor(Number(e.target.value))}
        />
        <button onClick={adicionarDespesa}>Adicionar</button>
      </div>

      <div>
        <h3>Lista de Despesas</h3>
        {despesas.length === 0 ? (
          <p>Sem despesas cadastradas</p>
        ) : (
          <ul>
            {despesas.map((despesa) => (
              <li key={despesa.id}>
                {despesa.descricao} - R$ {despesa.valor.toFixed(2)}
                <button onClick={() => excluirDespesa(despesa.id)}>X</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="total">
        <h3>Total de Despesas: R$ {despesas.reduce((acc, despesa) => acc + despesa.valor, 0).toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default Despesas;