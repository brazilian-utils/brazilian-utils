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

export function capitalize(value: string, ignoredWords: string[] = []): string {
  return value
    .split(' ')
    .filter((word) => !!word)
    .map((word, index) => {
      if (word.length === 1) return index === 0 ? word.toUpperCase() : word.toLowerCase();
      if (ignoredWords.includes(word)) return word;
      const lower = word.toLowerCase();
      if (PREPOSITIONS.includes(lower)) return lower;
      let result = '';
      let found = false;
      for (let i = 0; i < lower.length; i++) {
        const lowerChar = lower.charAt(i);
        if (!found) {
          const upperChar = lowerChar.toUpperCase();
          if (lowerChar !== upperChar) {
            found = true;
            result += upperChar;
            continue;
          }
        }
        result += lowerChar;
      }
      return result;
    })
    .join(' ');
}
