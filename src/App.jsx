import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";

function App() {
  const [dataChampion, setDataChampion] = useState([]);
  useEffect(() => {
    fetch(
      "https://ddragon.leagueoflegends.com/cdn/14.6.1/data/vi_VN/champion.json"
    ).then((res) =>
      res
        .json()
        .then((res) => {
          setDataChampion(Object.keys(res.data));
        })
        .catch((err) => console.log(err))
    );
  }, []);
  return (
    <>
      {dataChampion?.map((champion) => (
        <Cart champion={champion} key={champion} />
      ))}
    </>
  );
}

export default App;
