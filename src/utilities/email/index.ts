const MAX_RECIPIENT_LENGTH = 64;
const MAX_DOMAIN_LENGTH = 253;
const MAX_EMAIL_LENGTH = MAX_RECIPIENT_LENGTH + 1 + MAX_DOMAIN_LENGTH;

const validEmailRegex = /^([!#$%&'*+\-/=?^_`{|}~]{0,1}([a-zA-Z0-9][!#$%&'*+\-/=?^_`{|}~.]{0,1})+)@(([a-zA-Z0-9][-.]{0,1})+)([.]{1}[a-zA-Z0-9]+)$/;

const stringIsBiggerThan = (len: number, ...strs: string[]): boolean =>
  strs.reduce((length, s) => length + s.length, 0) > len;

export function isValid(email: string): boolean {
  if (!email || typeof email !== 'string') return false;

  if (stringIsBiggerThan(MAX_EMAIL_LENGTH, email)) return false;

  const matchedEmail = validEmailRegex.exec(email);

  if (!matchedEmail) return false;

  const [, recipient, , domain, , topLevelDomain] = matchedEmail;

  if (stringIsBiggerThan(MAX_RECIPIENT_LENGTH, recipient)) return false;
  if (stringIsBiggerThan(MAX_DOMAIN_LENGTH, domain, topLevelDomain)) return false;

  return true;
}
