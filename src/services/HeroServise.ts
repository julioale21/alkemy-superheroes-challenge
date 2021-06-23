import Hero from "../models/Hero";

export class HeroService {
  static getHeroes(arrayName: string) {
    return JSON.parse(localStorage.getItem(arrayName) || "[]");
  }

  static setHeroes(arrayName: string, heroes: Hero[]) {
    localStorage.setItem(arrayName, JSON.stringify(heroes));
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
