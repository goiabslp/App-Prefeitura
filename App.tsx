import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="text-center space-y-4 animate-fade-in">
        <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-violet-700 tracking-tighter">
          Olá Mundo
        </h1>
        <div className="h-1 w-24 bg-indigo-600 mx-auto rounded-full opacity-20"></div>
        <p className="text-slate-400 font-medium text-lg uppercase tracking-widest">
          Aplicação Simplificada
        </p>
      </div>
    </div>
  );
};

export default App;
