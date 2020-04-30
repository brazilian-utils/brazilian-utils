import { STATES, STATES_DATA } from '../../common/states';

export interface State {
  code: string;
  name: string;
}

const stateNameComparer = ({ name: nameA }: State, { name: nameB }: State) => nameA.localeCompare(nameB);

const sortByStateName = (states: State[]): State[] => states.sort(stateNameComparer);

export function getStates(): State[] {
  const states = STATES.map((code) => ({
    code,
    name: STATES_DATA[code].name,
  }));

  return sortByStateName(states);
}
