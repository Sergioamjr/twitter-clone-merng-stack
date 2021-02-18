import { LoggedUser } from "~graphql/generated/graphql";
const KEY = "TWITTER:CLONE";

export function getNameInitials(userName: string): string {
  const [firstName, secondName] = userName.replace("_", " ").split(" ");
  let initials = firstName[0];
  if (secondName) {
    initials = `${firstName[0]}${secondName[0]}`;
  }
  return initials.toUpperCase();
}

export function setOnLocalStorage(data: Partial<LoggedUser>): void {
  window.localStorage.setItem(KEY, JSON.stringify(data));
}

export function getFromLocalStorage(): Partial<LoggedUser> {
  const store = window.localStorage.getItem(KEY);
  return JSON.parse(store);
}

export function mergeOnLocalStorage(data: Partial<LoggedUser>): void {
  const store = getFromLocalStorage();
  window.localStorage.setItem(KEY, JSON.stringify({ ...store, ...data }));
}
