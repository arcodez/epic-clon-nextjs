import React from "react";
import CardFreeGame from "../CardFreeGame";

const cardsgamesfree = [
  {
    name: "MORDAHU",
    image:
      "https://cdn1.epicgames.com/offer/2bda08f9230144a19e98373cc4a6ac2d/EGS_MORDHAU_Triterniondoo_S2_1200x1600-3c795e67d44f02e4127ed4df435560f3?h=480&quality=medium&resize=1&w=360",
    price: "Gratis hasta el 20 abr a las 11:00",
  },
  {
    name: "Idle Champions de Forgotten Realms",
    image:
      "https://cdn1.epicgames.com/offer/7e508f543b05465abe3a935960eb70ac/IdleChampions_FreeGamesPromo_2560x14401_2560x1440-8ce28f11dab0dcafa37bfedfac54931d?h=480&quality=medium&resize=1&w=854",
    price: "Gratis hasta el 29 jun a la(s) 11:00",
  },
  {
    name: "theHunter: Call of the WildT",
    image:
      "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_theHunterCalloftheWild_ExpansiveWorlds_S1_2560x1440-69120885e0b3acfb87f34ac0bad68ec6?h=480&quality=medium&resize=1&w=854",
    price: "Gratis hasta el 29 jun a la(s) 11:00",
  },
  {
    name: "The Dungeon of Naheulbeuk",
    image:
      "https://cdn1.epicgames.com/456d95ca54814c8d98db2f52346ff5de/offer/EGS_TheDungeonOfNaheulbeukTheAmuletOfChaos_ArtefactsStudio_S1-2560x1440-b9f0201b134b1a6a57fe46bc43fdf859.jpg?h=480&quality=medium&resize=1&w=854",
    price: "Gratis del 29 jun al 06 jul",
  },
];

const ListOfCardsFree = () => {
  return (
    <div className="games-free-cards">
      {cardsgamesfree.map((card, index) => (
        <CardFreeGame {...card} key={index} />
      ))}
    </div>
  );
};

export default ListOfCardsFree;
