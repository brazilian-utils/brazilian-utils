import { CITIES_DATA } from '../../common/cities';

import { getStates } from '../states';

import { getCities } from '.';

/**
 * https://cidades.ibge.gov.br/brasil/panorama
 */
const NUMBER_OF_BRAZILIAN_CITIES = 5570;

describe('getCities', () => {
  it('should return cities of all states', () => {
    expect(getCities().length).toEqual(NUMBER_OF_BRAZILIAN_CITIES);
  });

  describe('return cities from states', () => {
    const states = getStates();

    states.forEach(({ code, name }) => {
      it(`should return cities from code ${code}/${name}`, () => {
        const stateCities = CITIES_DATA[code];
        expect(getCities({ state: { code } })).toMatchObject(stateCities);
        expect(getCities({ state: { name } })).toMatchObject(stateCities);
      });
    });
  });
});
