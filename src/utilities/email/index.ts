export function isValid(email: string): boolean {
  if (!email || typeof email !== 'string') return false;

  return /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
}
