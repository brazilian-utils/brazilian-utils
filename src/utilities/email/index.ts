export function isValid(email: string): boolean {
  if (!email || typeof email !== 'string') return false;

  const maxRecipientLength = 64;
  const maxDomainLength = 253;
  const maxEmailLength = maxRecipientLength + 1 + maxDomainLength;

  if (email.length > maxEmailLength) return false;

  const validEmailRegex = /^([!#$%&'*+\-/=?^_`{|}~]{0,1}([a-zA-Z0-9][!#$%&'*+\-/=?^_`{|}~.]{0,1})+)@(([a-zA-Z0-9][-.]{0,1})+)([.]{1}[a-zA-Z0-9]+)$/;

  const matchedEmail = validEmailRegex.exec(email);

  if (!matchedEmail) return false;

  const [, recipient, , domain, , topLevelDomain] = matchedEmail;

  if (recipient.length > maxRecipientLength) return false;
  if (domain.length + topLevelDomain.length > maxDomainLength) return false;

  return true;
}
