import faker from "faker";
import { Mappable } from "../interfaces/MappableInterface";

export class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  }

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  getMarkerContent(): string {
    return `
      <div>
        <h2>Company Name: ${this.companyName}</h2>
        <h3>About: ${this.catchPhrase}
      </div>
    `;
  }
}