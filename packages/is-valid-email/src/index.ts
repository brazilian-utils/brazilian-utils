export default function isValidEmail(email: string) {
  if (!email) return false;

  return /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
}
