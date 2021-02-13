export function getNameInitials(userName: string): string {
  const [firstName, secondName] = userName.replace("_", " ").split(" ");
  let initials = firstName[0];
  if (secondName) {
    initials = `${firstName[0]}${secondName[0]}`;
  }
  return initials.toUpperCase();
}
