import { useState } from "react";
import "./Sorteio.css";

const TEAM_COLORS = [
  { name: "Azul", color: "#1e90ff", bgColor: "#e6f2ff" },
  { name: "Vermelho", color: "#ff4444", bgColor: "#ffe6e6" },
  { name: "Verde", color: "#22c55e", bgColor: "#e6ffe6" },
  { name: "Amarelo", color: "#eab308", bgColor: "#fffff0" },
];

export default function Sorteio() {
  const [pessoasPorTime, setPessoasPorTime] = useState("");
  const [totalPessoas, setTotalPessoas] = useState("");
  const [pessoas, setPessoas] = useState([]);
  const [times, setTimes] = useState([]);
  const [erroMsg, setErroMsg] = useState("");
  const [showInput, setShowInput] = useState(true);
  const [nomesPessoas, setNomesPessoas] = useState("");

  const handleSortear = (e) => {
    e.preventDefault();
    setErroMsg("");

    if (!pessoasPorTime || !totalPessoas || !nomesPessoas.trim()) {
      setErroMsg("Por favor, preencha todos os campos");
      return;
    }

    const numPessoasPorTime = parseInt(pessoasPorTime);
    const numTotalPessoas = parseInt(totalPessoas);

    if (numPessoasPorTime <= 0 || numTotalPessoas <= 0) {
      setErroMsg("Os valores devem ser maiores que 0");
      return;
    }

    const listaPessoas = nomesPessoas
      .split("\n")
      .map((p) => p.trim())
      .filter((p) => p);

    if (listaPessoas.length !== numTotalPessoas) {
      setErroMsg(
        `Você informou ${numTotalPessoas} pessoas, mas forneceu ${listaPessoas.length} nomes`
      );
      return;
    }

    const numTimes = Math.ceil(numTotalPessoas / numPessoasPorTime);

    if (numTimes > TEAM_COLORS.length) {
      setErroMsg(
        `Máximo de ${TEAM_COLORS.length} times suportados. Aumente pessoas por time.`
      );
      return;
    }

    // Embaralhar pessoas
    const pessoasEmbaralhadas = [...listaPessoas].sort(
      () => Math.random() - 0.5
    );

    // Criar times
    const temsNewTimes = [];
    for (let i = 0; i < numTimes; i++) {
      temsNewTimes.push({
        id: i,
        nome: TEAM_COLORS[i].name,
        color: TEAM_COLORS[i].color,
        bgColor: TEAM_COLORS[i].bgColor,
        membros: [],
      });
    }

    // Distribuir pessoas nos times
    pessoasEmbaralhadas.forEach((pessoa, index) => {
      temsNewTimes[index % numTimes].membros.push(pessoa);
    });

    setTimes(temsNewTimes);
    setPessoas(pessoasEmbaralhadas);
    setShowInput(false);
  };

  const handleNovoSorteio = () => {
    setPessoasPorTime("");
    setTotalPessoas("");
    setPessoas([]);
    setTimes([]);
    setErroMsg("");
    setShowInput(true);
    setNomesPessoas("");
  };

  return (
    <div className="sorteio-container">
      <h1 className="sorteio-title">⚽ Sorteio de Times</h1>

      {showInput ? (
        <form className="sorteio-form" onSubmit={handleSortear}>
          <div className="form-group">
            <label htmlFor="nomesPessoas">
              Digite os nomes das pessoas (um por linha)
            </label>
            <textarea
              id="nomesPessoas"
              value={nomesPessoas}
              onChange={(e) => setNomesPessoas(e.target.value)}
              placeholder="João&#10;Maria&#10;Pedro&#10;Ana..."
              rows={8}
              className="input-textarea"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="totalPessoas">Total de Pessoas</label>
              <input
                id="totalPessoas"
                type="number"
                value={totalPessoas}
                onChange={(e) => setTotalPessoas(e.target.value)}
                placeholder="Ex: 12"
                min="1"
                className="input-field"
              />
            </div>

            <div className="form-group">
              <label htmlFor="pessoasPorTime">Pessoas por Time</label>
              <input
                id="pessoasPorTime"
                type="number"
                value={pessoasPorTime}
                onChange={(e) => setPessoasPorTime(e.target.value)}
                placeholder="Ex: 6"
                min="1"
                className="input-field"
              />
            </div>
          </div>

          {erroMsg && <div className="error-message">{erroMsg}</div>}

          <button type="submit" className="btn-sortear">
            🎲 Realizar Sorteio
          </button>
        </form>
      ) : (
        <div className="resultado-sorteio">
          <div className="teams-grid">
            {times.map((time) => (
              <div
                key={time.id}
                className="time-card"
                style={{ backgroundColor: time.bgColor }}
              >
                <h2 style={{ color: time.color }}>
                  Time {time.nome}
                  <span style={{ fontSize: "0.8em" }}>
                    ({time.membros.length})
                  </span>
                </h2>
                <ul className="membros-list">
                  {time.membros.map((membro, idx) => (
                    <li key={idx} style={{ borderLeftColor: time.color }}>
                      {membro}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <button onClick={handleNovoSorteio} className="btn-novo-sorteio">
            🎲 Novo Sorteio
          </button>
        </div>
      )}
    </div>
  );
}
