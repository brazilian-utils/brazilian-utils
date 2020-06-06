import { CITIES_DATA } from '../../common/cities';

import { State, getStates } from '../states';

const sortAlphabetically = (cityA: string, cityB: string) => cityA.localeCompare(cityB);

export function getCities({ state: stateFilter }: { state?: Partial<State> } = {}): string[] {
  if (stateFilter) {
    const states = getStates();

    const state = (() => {
      if (stateFilter.code) {
        return states.find(({ code }) => code === stateFilter.code);
      }
      return states.find(({ name }) => name === stateFilter.name);
    })();

    if (state) {
      return CITIES_DATA[state.code].sort(sortAlphabetically);
    }
  }

  return Object.values(CITIES_DATA).flat().sort(sortAlphabetically);
}
