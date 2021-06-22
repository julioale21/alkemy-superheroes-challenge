import Hero from "../models/Hero";

export class HeroService {
  static getHeroesFromLocalStorage(arrayName: string) {
    return JSON.parse(localStorage.getItem(arrayName) || "[]");
  }

  static setHeroesToLocalStorage(arrayName: string, heroes: Hero[]) {
    localStorage.setItem(arrayName, JSON.stringify(heroes));
  }

  static getItemFromLocalStorage(itemName: string) {
    return localStorage.getItem(itemName);
  }

  static setItemToLocalStorage(itemName: string, item: string) {
    localStorage.setItem(itemName, item);
  }

  static removeItemFromLocalStorage(itemName: string) {
    localStorage.removeItem(itemName);
  }
}
