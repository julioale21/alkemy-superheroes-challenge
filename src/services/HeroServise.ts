import Hero from "../models/Hero";

export class HeroService {
  static getHeroesFromLocal() {
    return JSON.parse(localStorage.getItem("heroes") || "[]");
  }

  static setHeroesToLocal(heroes: Hero[]) {
    localStorage.setItem("heroes", JSON.stringify(heroes));
  }

  static getTokenFromLocal() {
    return localStorage.getItem("token");
  }

  static setTokenToLocal(token: string) {
    localStorage.setItem("token", token);
  }

  static removeTokenFromLocal() {
    localStorage.removeItem("token");
  }
}
