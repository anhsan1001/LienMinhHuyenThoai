import { useEffect, useState } from "react";
import Card from "../Card/Card";
const AllChampion = () => {
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
      <div className="grid grid-cols-5 gap-3">
        {dataChampion?.map((champion) => (
          <Card champion={champion} key={champion} />
        ))}
      </div>
    </>
  );
};
export default AllChampion;
