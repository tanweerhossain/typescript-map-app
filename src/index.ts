import { User } from "./models/User";
import { Company } from "./models/Company";
import { CustomMap } from "./models/CustomMap";

const customMap = new CustomMap('map');
const user = new User();
const company = new Company();

// add user Marker
customMap.addMarker(user);

// add company marker
customMap.addMarker(company);