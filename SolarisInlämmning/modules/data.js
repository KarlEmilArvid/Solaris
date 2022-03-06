/** API variablarna exporterar jag för det krävs inte att ha i main filen då vi inte kommer ändra på den, vi skapar
 *  vår token, tar vår data och sen skickar den vidare. Planet.js importeras för att det ska skickas vidare i planetDataMap.
 */
import Planet from "./Planet.js";

const BASE_URL = "https://fathomless-shelf-54969.herokuapp.com";

const getAPIKey = async () => {
  const keyURL = `${BASE_URL}/keys`;
  const response = await fetch(keyURL, { method: `POST` });
  return response.json();
};

export const getAPIData = async () => {
  const planetDataMap = new Map();

  const bodiesURL = `${BASE_URL}/bodies`;
  const apiKey = (await getAPIKey()).key;

  const response = await fetch(bodiesURL, {
    method: `GET`,
    headers: { "x-zocom": apiKey },
  });
  const data = await response.json();

  data.bodies.forEach((planet) => {
    planetDataMap.set(planet.id, new Planet(planet));
  });

  return Promise.resolve(planetDataMap);
};