import { isValidAccount } from '..';

describe("isValid", ()=>{
  describe("valid accounts",()=>{
    it("returns true", ()=>{
      expect(isValidAccount("399", '853838-6', "0007")).toBe(true);
    })
  })
  describe("invalid accounts",()=>{
    it("returns false", ()=>{
      expect(isValidAccount("399", '853838-5', "0007")).toBe(false);
    })
  })
  describe("wrong format",()=>{
    it("returns false", ()=>{
      expect(isValidAccount("399", '', "")).toBe(false);
      expect(isValidAccount("399", '123456789-0', "")).toBe(false);
      expect(isValidAccount("399", 'asdfasdf', "")).toBe(false);
    })
  })
})
