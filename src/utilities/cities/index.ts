import { CITIES_DATA } from '../../common/cities';

import { StateCode, StateName, getStates } from '../states';

const sortAlphabetically = (cityA: string, cityB: string) => cityA.localeCompare(cityB);

export function getCities(state?: StateName | StateCode): string[] {
  if (state) {
    const states = getStates();

    const foundState = states.find(({ name, code }) => name === state || code === state);

    if (!foundState) {
      return [];
    }

    return CITIES_DATA[foundState.code].sort(sortAlphabetically);
  }

  return Object.values(CITIES_DATA).flat().sort(sortAlphabetically);
}
