import React from "react";
import Landingpage from "./pages/landingpage";
export default function App() {
  return (
    <main className="bg-[#FDF6EC]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap');
        .font-montserrat { 
          font-family: 'Montserrat', sans-serif;
          font-thin: 100;
          font-extralight: 200;
          font-light: 300;
          font-normal: 400;
          font-medium: 500;
          font-semibold: 600;
          font-bold: 700;
          font-extrabold: 800;
          font-black: 900;       
        }
        .font-inter { 
          font-family: 'Inter', sans-serif; 
          font-thin: 100;
          font-extralight: 200;
          font-light: 300;
          font-normal: 400;
          font-medium: 500;
          font-semibold: 600;
          font-bold: 700;
          font-extrabold: 800;
          font-black: 900; }
        .font-poppins { 
        font-family: 'Poppins', sans-serif;
          font-thin: 100;
          font-extralight: 200;
          font-light: 300;
          font-normal: 400;
          font-medium: 500;
          font-semibold: 600;
          font-bold: 700;
          font-extrabold: 800;
          font-black: 900; }
      `}</style>
      <Landingpage></Landingpage>
    </main>
  );
}
