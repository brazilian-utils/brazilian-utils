export const ACRONYMS = ['cia', 'cnpj', 'cpf', 'ltda', 'me', 'rg'];

export const PREPOSITIONS = [
  'a',
  'com',
  'da',
  'das',
  'de',
  'do',
  'dos',
  'e',
  'em',
  'na',
  'nas',
  'no',
  'nos',
  'o',
  'por',
  'sem',
];

type CapitalizeOptions = {
  lowerCaseWords?: string[];
  upperCaseWords?: string[];
};

export function capitalize(
  value: string,
  { lowerCaseWords = PREPOSITIONS, upperCaseWords = ACRONYMS }: CapitalizeOptions = {}
): string {
  return value
    .split(' ')
    .filter((word) => !!word)
    .map((word, index) => {
      const lowerCaseWord = word.toLocaleLowerCase();
      if (index > 0 && lowerCaseWords.indexOf(lowerCaseWord) !== -1) return lowerCaseWord;
      const upperCaseWord = word.toLocaleUpperCase();
      if (upperCaseWords.indexOf(upperCaseWord) !== -1) return upperCaseWord;
      return upperCaseWord.charAt(0) + lowerCaseWord.substr(1);
    })
    .join(' ');
}
