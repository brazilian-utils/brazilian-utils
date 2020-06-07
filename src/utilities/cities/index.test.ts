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

  it('should return empty array if state does not exist', () => {
    expect(getCities('ACC' as any)).toEqual([]);
  });

  describe('return cities from states', () => {
    const states = getStates();

    states.forEach(({ code, name }) => {
      it(`should return cities from code ${code}/${name}`, () => {
        const stateCities = CITIES_DATA[code];
        expect(getCities(code)).toMatchObject(stateCities);
        expect(getCities(name)).toMatchObject(stateCities);
      });
    });
  });
});
