import Image from "next/image";
import styles from './page.module.css'
import Header from "./components/Header/Header";
import SeachBox from "./components/Header/Search/Seach";

export default function Home() {
  return (
    <>
      <Header>
        <SeachBox />
      </Header>
    </>
  );
}
