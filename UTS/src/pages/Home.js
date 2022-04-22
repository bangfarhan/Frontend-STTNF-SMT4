import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero/Hero";
import Global from "../components/Global/Global";
import global from "../utils/constants/indonesia";
import { useState } from "react";
import Provinsi from "../components/Provinsi/Provinsi";
import provinces from "../utils/constants/provinces";
import FormCovid from "../components/Form_Covid/Form_Covid";

function Main() {
  const [globaldata, setglobaldata]=useState(global.indonesia)
  const [provinsidata, setprovinsidata]=useState(provinces.provinces)
  return (
    <main>
      <Hero />
      <Global globaldata={globaldata} />
      <Provinsi provinsidata={provinsidata} setprovinsidata={setprovinsidata} />
      <FormCovid provinsidata={provinsidata} setprovinsidata={setprovinsidata} />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
