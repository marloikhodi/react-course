// function Filho({ approved }) {
//   return (
//     <>
//       {approved ? (
//           <p>Aprovado</p>
//       ) : (
//           <p>Reprovado</p>
//       )}
//     </>
//   );
// }

// export default function App() {
//   return <Filho approved={null} />;
// }
// function Filho({ onAlert }) {
//   return <button onClick={onAlert}>Receba seu alert </button>;
// }

// export default function App() {
//   const handleAlert = () => alert("Receba seu doce")
//   return <Filho onAlert={handleAlert} />;
// }

// function Saudacao({ nome = 'marlo' }) {
//   return <h1>Ola, {nome}!</h1>
// }

// export default function App() {
//   return <Saudacao nome="Pedro" />
// }

import Home from "./pages/home";

export default function App() {
  return (
    <>
      <Home />
    </>
  );
}
