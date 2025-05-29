import { useEffect, useState } from "react";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import JoinUs from "./components/JoinUs";
import Navbar from "./components/Navbar";
import TestimonialSection from "./components/TestimonialSection";
import DataComponent from "./components/DataComponent";

const App = () => {
  const [data, setData] = useState([
    {
      firstName: "John",
      lastName: "Doe",
      gender: "male",
      language: ["english"],
      email: "johndow@gmail.com",
      terms: false,
    },
  ]);
  useEffect(() => {
    console.log("data", data);
  }, [data]);
  return (
    <div className="relative w-[100%]">
      <Navbar />
      <Hero data={data} setData={setData} />
      <Features />
      {/* <TestimonialSection /> */}
      <JoinUs />
      <DataComponent data={data} />
      <Footer />
    </div>
  );
};

export default App;
