import { isValidAccount } from '..';

describe("isValid", ()=>{
  describe("valid accounts",()=>{
    it("returns true", ()=>{
      expect(isValidAccount("237", '0238069-2')).toBe(true);
      expect(isValidAccount("237", '0301357-P')).toBe(true);
      expect(isValidAccount("237", '0325620-0')).toBe(true);
      expect(isValidAccount("237", '0284025-1')).toBe(true);
      expect(isValidAccount("237", '0195470-9')).toBe(true);
    })
  })
  describe("wrong format",()=>{
    it("returns false", ()=>{
      expect(isValidAccount("237", '')).toBe(false);
      expect(isValidAccount("237", '123456789-0')).toBe(false);
      expect(isValidAccount("237", 'asdfasdf')).toBe(false);
    })
  })
  describe("invalid account",()=>{
    it("returns false", ()=>{
      expect(isValidAccount("237", '0195470-1')).toBe(false);
      expect(isValidAccount("237", '0195471-P')).toBe(false);
      expect(isValidAccount("237", '0195491-0')).toBe(false);
    })
  })
})
