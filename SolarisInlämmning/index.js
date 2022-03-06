import { getAPIData } from "./modules/data.js";

let planetDataMap = new Map();

export const selectPlanet = (e) => {
  planetDataMap.get(Number(e.currentTarget.id))?.showPlanetInfoOverlay();
};

export const closeOverlay = () => {
  document.querySelector(`.overlay`).style.display = `none`;
};

const loadData = async () => {
  planetDataMap = await getAPIData();
};

loadData().catch((err) => console.error(err));