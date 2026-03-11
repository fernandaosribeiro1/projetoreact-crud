import { useEffect, useState } from "react";

export default function CarForm({ onAdd, onUpdate, editandoCarro, isPending }) {

  const [formData, setFormData] = useState({
    modelo: "",
    marca: "",
    ano: "",
    preco: ""
  });

  // Quando selecionar um carro para editar, preenche o formulário
  useEffect(() => {
    if (editandoCarro) {
      setFormData(editandoCarro);
    } else {
      setFormData({
        modelo: "",
        marca: "",
        ano: "",
        preco: ""
      });
    }
  }, [editandoCarro]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editandoCarro) {
      onUpdate(formData);
    } else {
      onAdd(formData);
    }

    setFormData({
      modelo: "",
      marca: "",
      ano: "",
      preco: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">

      <div className="form-header">
        <h2>
          {editandoCarro ? "Editar" : "Cadastro de veículo"}
        </h2>

        <p>
          {editandoCarro
            ? "Atualize as informações do veículo selecionado."
            : "Preencha os campos abaixo para cadastrar um novo veículo no sistema."}
        </p>
      </div>

      <div className="form-grid">

        <div className="form-group">
          <label>Modelo</label>
          <input
            type="text"
            value={formData.modelo}
            onChange={(e) =>
              setFormData({ ...formData, modelo: e.target.value })
            }
            placeholder="Ex: Corolla"
            required
          />
        </div>

        <div className="form-group">
          <label>Marca</label>
          <input
            type="text"
            value={formData.marca}
            onChange={(e) =>
              setFormData({ ...formData, marca: e.target.value })
            }
            placeholder="Ex: Toyota"
            required
          />
        </div>

        <div className="form-group">
          <label>Ano</label>
          <input
            type="number"
            value={formData.ano}
            onChange={(e) =>
              setFormData({ ...formData, ano: e.target.value })
            }
            placeholder="Ex: 2024"
            required
          />
        </div>

        <div className="form-group">
          <label>Preço (R$)</label>
          <input
            type="number"
            value={formData.preco}
            onChange={(e) =>
              setFormData({ ...formData, preco: e.target.value })
            }
            placeholder="Ex: 95000"
            required
          />
        </div>

      </div>

      <div className="form-actions">

        <button
          type="submit"
          disabled={isPending}
          className="btn-primary"
        >
          {isPending
            ? "Salvando..."
            : editandoCarro
            ? "Editar "
            : "Cadastrar veículo"}
        </button>

        {editandoCarro && (
          <button
            type="button"
            className="btn-secondary"
            onClick={() =>
              setFormData({
                modelo: "",
                marca: "",
                ano: "",
                preco: ""
              })
            }
          >
            Cancelar
          </button>
        )}

      </div>

    </form>
  );
}