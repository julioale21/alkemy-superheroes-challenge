import Appearance from "./Appearance";
import Biography from "./Biography";
import Connections from "./Connections";
import Image from "./Image";
import Powerstats from "./Popwerstats";
import Work from "./Work";

export default interface Hero {
  id: string;
  name: string;
  powerstats: Powerstats;
  biography: Biography;
  appearance: Appearance;
  work: Work;
  connections: Connections;
  image: Image;
}
