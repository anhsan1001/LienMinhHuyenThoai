import InforChampion from "../InforChampion";

const Card = (champion) => {
  const pathImg = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.champion}_0.jpg`;

  return (
    <>
      <div className="bg-gray-900">
        <img src={pathImg} alt="" />
        <div id="name" className="text-white mx-3 my-2 font-bold ">
          {champion?.champion}
        </div>
      </div>

      {/* <InforChampion /> */}
    </>
  );
};

export default Card;
