import Navbar from "../components/Navbar";

export default function Trash() {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex justify-center items-center bg-white flex-grow ">
        <div className="text-black">Trash</div>
      </div>
    </div>
  );
}
