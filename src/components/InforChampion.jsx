import { useEffect, useState } from "react";

const InforChampion = () => {
  const [dataChampion, setDataChampion] = useState([]);

  const pathImg = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg`;
  useEffect(() => {
    fetch(
      `https://ddragon.leagueoflegends.com/cdn/14.6.1/data/vi_VN/champion/Aatrox.json`
    )
      .then((res) => res.json())
      .then((res) => {
        setDataChampion(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className=" bg-gray-900 w-full ">
      <img src={pathImg} alt="" />
      <div className="text-white -translate-y-16 rounded-full border-2 border-yellow-100 w-1/4 m-auto py-2">
        <div className="name font-bold text-5xl">
          {dataChampion?.Aatrox?.name}
        </div>
        <div className="title text-xl">{dataChampion?.Aatrox?.title}</div>
      </div>
      <div className="flex flex-1 text-white justify-center  ">
        <div className="basis-1/2 py-6 px-5 ">
          Chất tướng:
          {dataChampion?.Aatrox?.tags.map((tag) => (
            <div className="tag mx-2 inline-block" key={tag}>
              {tag}
            </div>
          ))}
        </div>
        <div className="lore basis-1/2 py-6 px-5">
          {dataChampion?.Aatrox?.lore}
        </div>
      </div>
    </div>
  );
};
export default InforChampion;
