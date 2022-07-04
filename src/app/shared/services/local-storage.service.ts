import { Injectable } from '@angular/core';

abstract class LocalStorage {
  abstract get(key: string): any;
  abstract set(key: string, value: any): void;
  abstract remove(key: string): void;
  abstract clear(): void;
}

@Injectable({ providedIn: 'root' })
export class LocalStorageService extends LocalStorage {
  constructor() {
    super();
  }

  get(key: string): any {
    return JSON.parse(localStorage.getItem(key) as string);
  }

  set(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key: string | string[]): void {
    const keys: string[] = (Array.isArray(key) ? key : [key]) as string[];

    keys.forEach((key) => localStorage.removeItem(key));
  }

  clear(): void {
    localStorage.clear();
  }
}
