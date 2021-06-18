import { isValidAccount } from '..';

describe("isValid", ()=>{
  describe("valid accounts",()=>{
    it("returns true", ()=>{
      expect(isValidAccount("033", '01017417-9', "0189")).toBe(true);
    })
  })
  describe("invalid accounts",()=>{
    it("returns false", ()=>{
      expect(isValidAccount("033", '01017417-1', "0189")).toBe(false);
    })
  })
  describe("wrong format",()=>{
    it("returns false", ()=>{
      expect(isValidAccount("001", '', "")).toBe(false);
      expect(isValidAccount("001", '123456789-0', "")).toBe(false);
      expect(isValidAccount("001", 'asdfasdf', "")).toBe(false);
    })
  })
})
