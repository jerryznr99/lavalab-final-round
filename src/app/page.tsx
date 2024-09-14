import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Navbar />
      <Dashboard />
    </div>
  );
}
