import { STATES, STATES_DATA, StateCode, StateName } from '../../common/states';

export interface State {
  code: StateCode;
  name: StateName;
}

const stateNameComparer = ({ name: nameA }: State, { name: nameB }: State) => nameA.localeCompare(nameB);

const sortByStateName = (states: State[]): State[] => states.sort(stateNameComparer);

export function getStates(): State[] {
  const states = STATES.map((code) => ({
    code,
    name: STATES_DATA[code].name as StateName,
  }));

  return sortByStateName(states);
}
