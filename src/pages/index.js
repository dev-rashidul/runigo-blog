import Header from "@/components/Header/Header";
import Home from "@/components/Home/Home";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function App() {
  return (
    <>
      <Header></Header>
      <Home></Home>
    </>
  );
}
