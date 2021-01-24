export function getNameInitials(name: string): string {
  const [firstName, secondName] = name.split(" ");
  let initials = firstName[0];
  if (secondName) {
    initials = `${firstName[0]}${secondName[0]}`;
  }
  return initials.toUpperCase();
}
