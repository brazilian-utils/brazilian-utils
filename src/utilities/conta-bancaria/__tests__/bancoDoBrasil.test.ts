import { isValidAccount } from '..';

describe("isValid", ()=>{
  describe("valid accounts",()=>{
    it("returns true", ()=>{
      expect(isValidAccount("001", '00210169-6')).toBe(true);
      expect(isValidAccount("001", '1171032-2')).toBe(true);
      expect(isValidAccount("001", '19932-X')).toBe(true);
      expect(isValidAccount("001", '1050769-8')).toBe(true);
      expect(isValidAccount("001", '87889-8')).toBe(true);
    })
  })
  describe("wrong format",()=>{
    it("returns false", ()=>{
      expect(isValidAccount("001", '')).toBe(false);
      expect(isValidAccount("001", '123456789-0')).toBe(false);
      expect(isValidAccount("001", 'asdfasdf')).toBe(false);
    })
  })
})
