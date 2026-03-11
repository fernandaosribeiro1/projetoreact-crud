export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center p-10 w-full">
      {/* Círculo que gira (Spinner) */}
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600 border-opacity-50 border-r-transparent"></div>
      
      {/* Texto com efeito de pulsar */}
      <p className="mt-4 text-gray-500 font-medium animate-pulse">
     Carregando dados dos veículos...
      </p>
    </div>
  );
}