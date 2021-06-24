import Hero from "../models/Hero";

export class HeroService {
  static getHeros(arrayName: string) {
    return JSON.parse(localStorage.getItem(arrayName) || "[]");
  }

  static setHeros(arrayName: string, heros: Hero[]) {
    localStorage.setItem(arrayName, JSON.stringify(heros));
  }

  static getItem(itemName: string) {
    return localStorage.getItem(itemName);
  }

  static setItem(itemName: string, item: string) {
    localStorage.setItem(itemName, item);
  }

  static removeItem(itemName: string) {
    localStorage.removeItem(itemName);
  }
}
