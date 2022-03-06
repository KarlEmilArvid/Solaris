/** Classen exporterar jag för att det är en class som inte blir påverkad av resterande kod, 
 *  sen importeras den i min data modulen där den används.
 */
export default class Planet {
  constructor(
    {
      id,
      name,
      latinName,
      circumference,
      distance,
      desc,
      temp,
      rotation,
      moons,
      orbitalPeriod,
      type,
    }
  ) {
      this.id = id;
      this.name = name;
      this.latinName = latinName;
      this.circumference = circumference;
      this.distance = distance;
      this.desc = desc;
      this.temp = temp;
      this.rotation = rotation;
      this.moons = moons;
      this.orbitalPeriod = orbitalPeriod;
      this.type = type;
  }

  #loadPlanetDataToOverlay() {
    document.querySelector(`#p-name`).innerHTML = this.name;
    document.querySelector(`#p-latin-name`).innerHTML = this.latinName;
    document.querySelector(`#p-description`).innerHTML = this.desc;
    document.querySelector(`#p-circumference`).innerHTML = this.circumference;
    document.querySelector(`#p-distance`).innerHTML = this.distance;
    document.querySelector(`#p-max-temp`).innerHTML = this.temp.day;
    document.querySelector(`#p-min-temp`).innerHTML = this.temp.night;
    document.querySelector(`#p-moons`).innerHTML = this.moons.join(`, `);
  }

  showPlanetInfoOverlay() {
    this.#loadPlanetDataToOverlay();
    document.querySelector(`.overlay`).style.display = `flex`;
  }
};