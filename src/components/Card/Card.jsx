import { useEffect, useState } from "react";

const Cart = (champion) => {
  const [dataChampion, setDataChampion] = useState({});
  const pathImg = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.champion}_0.jpg`;

  useEffect(() => {
    fetch(
      `https://ddragon.leagueoflegends.com/cdn/14.6.1/data/vi_VN/champion/${champion.champion}.json`
    )
      .then((res) => res.json())
      .then((res) => {
        setDataChampion(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="inline-block">
        <img src={pathImg} alt="" />
        <div id="name" className="text-gray-900">
          {champion.champion}
        </div>
      </div>
    </>
  );
};

export default Cart;
