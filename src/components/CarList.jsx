import { useState, useEffect } from "react";

export default function CarList({ carros, onDelete, onEdit }) {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (carros.length === 0) {
    return (
      <div className="car-card">
        <div className="car-info">
          <p>Nenhum veículo cadastrado no sistema.</p>
        </div>
      </div>
    );
  }

  return (
    <div>

      {carros.map((carro) => (
        <div key={carro.id} className="car-card">

          <div className="car-info">
            <h3>{carro.modelo}</h3>

            <p>
              {carro.marca} • {carro.ano}
            </p>

            <p className="price">
              R$ {Number(carro.preco).toLocaleString("pt-BR", {
                minimumFractionDigits: 2
              })}
            </p>
          </div>

          <div className="car-actions">

            <button onClick={() => onEdit(carro)}>
              Editar
            </button>

            <button
              className="btn-delete"
              onClick={() => onDelete(carro.id)}
            >
              Excluir
            </button>

          </div>

        </div>
      ))}

    </div>
  );
}