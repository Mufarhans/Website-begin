import Image from "next/image";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import LinkedInButton from "./components/linkedinButton";

export default function Home() {
  return (
    <main className="flex vh 100 min-h-screen flex-col items-center justify-between">
      {/* <header>
        <Navbar/>        
      </header>
      <h1>Farhan</h1> */}
      <div className="flex mx-10 p-10  ">
        <Button  title="Farhan"/>
        <LinkedInButton/>
      </div>

    </main>
  );
}
