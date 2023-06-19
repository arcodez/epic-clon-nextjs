import React from "react";
import ListOfCardsColumns from "../ListOfCardsColumns";

const cardsColumn1 = [
  {
    image:
      "https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/valtall_1200x1600-300d8e4cb9bee9dbb1166b574b3bdc93?h:480&quality:medium&resize=1&w=360",
    title: "Valorant",
    price: "Gratis",
  },
  {
    image:
      "https://cdn1.epicgames.com/offer/9773aa1aa54f4f7b80e44bef04986cea/EGS_RocketLeague_PsyonixLLC_S2_1200x1600-edcc4af1ea991205eb2346c6691cc99c?h=480&quality=medium&resize=1&w=360",
    title: "Rocket League@",
    price: "Gratis",
  },
  {
    image:
      "https://cdn1.epicgames.com/offer/879b0d8776ab46a59a129983ba78f0ce/genshintall_1200x1600-4a5697be3925e8cb1f59725a9830cafc?h=480&quality=medium&resize=1&w=360",
    title: "Genshin Impact",
    price: "Gratis",
  },
  {
    image:
      "https://cdn1.epicgames.com/offer/a2dcbb9e34204bda9da8415f97b3f4ea/v1_1200x1600-fc41913532d45172cbc5fdd866eabf58?h=480&quality=medium&resize=1&w=360",
    title: "Honkai: Star Rail",
    price: "Gratis",
  },
  {
    image:
      "https://cdn1.epicgames.com/offer/fn/25BR_S25_EGS_Launcher_Blade_1200x1600_1200x1600-1127a3b880c3b307cbd13d9fd3dd8495?h=480&quality=medium&resize=1&w=360",
    title: "Fortnite",
    price: "Gratis",
  },
];

const cardsColumn2 = [
  {
    image:
      "https://cdn1.epicgames.com/offer/236c74b4cd2e4e3099cbe2ebdc9686fd/EGS_DeadIsland2_DeepSilverDambusterStudios_S2_1200x1600-efc5201842cf642eb45f73227cd0789b?h=480&quality=medium&resize=1&w=360",
    title: "Dead Island 2",
    price: "44,99 US$",
  },
  {
    image:
      "https://cdn1.epicgames.com/offer/611482b8586142cda48a0786eb8a127c/EGS_DeadbyDaylight_BehaviourInteractive_S2_1200x1600-a1c30209e3b9fb63144daa9b5670f503?h=480&quality=medium&resize=1&w=360",
    title: "Dead by Daylight",
    price: "3,99 us$",
  },
  {
    image:
      "https://cdn1.epicgames.com/spt-assets/14eb3477a6084940b49de5aa73c60f98/mammoth-tfbxg.jpg?h=480&quality=medium&resize=1&w=360",
    title: "PAYDAY 2",
    price: "3,99 us$",
  },
  {
    image:
      "https://cdn1.epicgames.com/offer/f696430be718494fac1d6542cfb22542/EGS_MarvelsSpiderManMilesMorales_InsomniacGamesNixxesSoftware_S2_1200x1600-58989e7116de3f70a2ae6ea56ee202c6?h=480&quality=medium&resize=1&w=360",
    title: "Marvel's Spider-Man: Miles...",
    price: "39,99 IJS$",
  },
  {
    image:
      "https://cdn1.epicgames.com/offer/b7773a08a6fa41e3a0fbc4c1e51c95a4/EGS_F123StandardEdition_Codemasters_S2_1200x1600-9ee0158a6d9f052deb753af836f9bd8d?h=480&quality=medium&resize=1&w=360",
    title: "FIFA 23",
    price: "69,99 us$",
  },
];

const cardsColumn3 = [
  {
    image:
      "https://cdn1.epicgames.com/offer/0c05e0889c3e42a4be1d81077d6e653a/SAB_UCS25474_StorePortrait_1200x1600_1200x1600-e4920dda61e58ace182a0a9c25883138?h=480&quality=medium&resize=1&w=360",
    title: "SKULL AND BONEST",
    price: "Gratis",
  },
  {
    image:
      "https://cdn1.epicgames.com/spt-assets/2ae760629a384d5199cbefc612db7ac8/the-lord-of-the-rings-return-to-moria-36rad.png?h=480&quality=medium&resize=1&w=360",
    title: "The Lord of The Rings Return to...",
    price: "",
  },
  {
    image:
      "https://cdn1.epicgames.com/spt-assets/04d5b86a93514949a3ace614d9e1e417/witchfire-obly4.jpg?h=480&quality=medium&resize=1&w=360",
    title: "Witchfire",
    price: "",
  },
  {
    image:
      "https://cdn1.epicgames.com/offer/ef7baa6ce017413ab33e7f7e3f466a96/EGS_Homeworld3_BlackbirdInteractive_S2_1200x1600-2080e2e3662c285b1c9efcb13f3a8d07?h=480&quality=medium&resize=1&w=360",
    title: "Homeworld 3",
    price: "",
  },
  {
    image:
      "https://cdn1.epicgames.com/offer/c4763f236d08423eb47b4c3008779c84/EGS_AlanWake2_RemedyEntertainment_S2_1200x1600-c7c8091ddac0f9669c8e5905bca88aaa?h=480&quality=medium&resize=1&w=360",
    title: "Alan Wake 2",
    price: "42,99 IJS$",
  },
];

const ListOfColumns = () => {
  return (
    <div className="list-of-columns-section">
      <ListOfCardsColumns cards={cardsColumn1} listTitle={"Mas vendidos"} />
      <ListOfCardsColumns cards={cardsColumn2} listTitle="Mas jugados" />
      <ListOfCardsColumns
        cards={cardsColumn3}
        listTitle="Més deseados que llegaran proximamente"
      />
    </div>
  );
};

export default ListOfColumns;
