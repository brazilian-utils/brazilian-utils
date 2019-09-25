
import isValidIE from '..';

describe('Service Factory', () => {
  describe('should throw exception when does not find state', () => {
    test('exception', () => {
      try {
        isValidIE('SS', '0108368143106')
      } catch(error) {
        expect(error.message).toEqual('State not found');
      }
    });
  });
});
