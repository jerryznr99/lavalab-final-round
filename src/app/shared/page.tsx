import Navbar from "../components/Navbar";

export default function Shared() {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex justify-center items-center bg-white flex-grow ">
        <div className="text-black">Shared with you</div>
      </div>
    </div>
  );
}
