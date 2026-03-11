import { useState, useEffect, Suspense, useTransition } from "react";
import { carroActions, fetchCarros } from "./api/api";
import CarList from "@/components/CarList";
import CarForm from "@/components/CarForm";
import Loading from "@/components/Loading";

function GaragemContent() {

  const [lista, setLista] = useState([]);
  const [editandoCarro, setEditandoCarro] = useState(null);
  const [isPending, startTransition] = useTransition();
  const [loading, setLoading] = useState(true);

  // Carrega os carros quando a página abre
  useEffect(() => {
    carregarCarros();
  }, []);

  const carregarCarros = async () => {
    try {
      const dados = await fetchCarros();
      setLista(dados);
    } catch (erro) {
      console.error("Erro ao buscar carros:", erro);
    } finally {
      setLoading(false);
    }
  };

  const atualizarInterface = async () => {
    const novosDados = await fetchCarros();
    setLista(novosDados);
    setEditandoCarro(null);
  };

  const handleAdd = async (carro) => {
    await carroActions.create(carro);
    startTransition(atualizarInterface);
  };

  const handleUpdate = async (carro) => {
    await carroActions.update(carro);
    startTransition(atualizarInterface);
  };

  const handleDelete = async (id) => {
    if (confirm("Tem certeza que deseja remover este veículo?")) {
      await carroActions.delete(id);
      startTransition(atualizarInterface);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">

      <header className="text-center py-4">
        <h1 className="text-3xl font-bold text-slate-900">
          Gestão de Veículos
        </h1>

        <p className="text-slate-500 text-sm">
          Sistema de cadastro e controle de veículos
        </p>
      </header>

      <CarForm
        onAdd={handleAdd}
        onUpdate={handleUpdate}
        editandoCarro={editandoCarro}
        isPending={isPending}
      />

      <hr />

      <section>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-slate-800">
            Veículos Disponíveis
          </h2>

          <span className="bg-slate-200 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full">
            {lista.length} veículo{lista.length !== 1 ? "s" : ""}
          </span>
        </div>

        <CarList
          carros={lista}
          onDelete={handleDelete}
          onEdit={setEditandoCarro}
        />

      </section>

    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 py-10">
      <Suspense fallback={<Loading />}>
        <GaragemContent />
      </Suspense>
    </main>
  );
}