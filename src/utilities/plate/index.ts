export type Options = {
  mercosul?: boolean;
  motorcycle?: boolean;
};

export function isValid(input: string, options?: Options) {
  if (!input || typeof input !== 'string') return false;

  const plate = input.replace('-', '');

  if (options?.mercosul && options?.motorcycle) {
    return /^[a-zA-Z]{3}[0-9]{2}[a-zA-Z]{1}[0-9]{1}$/.test(plate);
  } else if (options?.mercosul) {
    return /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/.test(plate);
  } else {
    return /^[a-zA-Z]{3}[0-9]{4}$/.test(plate);
  }
}
