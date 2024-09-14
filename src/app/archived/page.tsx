import Navbar from "../components/Navbar";

export default function Archived() {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex justify-center items-center bg-white flex-grow ">
        <div className="text-black">Archived</div>
      </div>
    </div>
  );
}
