import "./JogosTable.css";

export default function JogosTable() {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Hora</th>
            <th>Local</th>
            <th>Confirmados</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>14/12/2024</td>
            <td>16:00</td>
            <td>Campo Centro Esportivo</td>
            <td className="confirmed">12/22</td>
            <td>
              <button className="btn-edit">Editar</button>
              <button className="btn-delete">Excluir</button>
            </td>
          </tr>

          <tr>
            <td>21/12/2024</td>
            <td>16:00</td>
            <td>Quadra Coberta</td>
            <td className="confirmed">8/20</td>
            <td>
              <button className="btn-edit">Editar</button>
              <button className="btn-delete">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
