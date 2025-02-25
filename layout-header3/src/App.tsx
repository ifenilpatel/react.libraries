import Header from "./components/Header";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-bold">Welcome to My App</h1>
        <p className="text-gray-700 mt-2">This is a basic layout with a header.</p>
      </main>
    </div>
  );
};

export default App;
