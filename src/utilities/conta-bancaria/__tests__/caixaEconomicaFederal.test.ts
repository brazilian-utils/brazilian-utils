import { isValidAccount } from '..';

describe("isValid", ()=>{
  describe("valid accounts",()=>{
    it("returns true", ()=>{
      expect(isValidAccount("104", '00100000448-6', "2004")).toBe(true);
    })
  })
  describe("invalid accounts",()=>{
    it("returns false", ()=>{
      expect(isValidAccount("104", '00100000448-7', "0189")).toBe(false);
    })
  })
  describe("wrong format",()=>{
    it("returns false", ()=>{
      expect(isValidAccount("104", '', "")).toBe(false);
      expect(isValidAccount("104", '123456789-0', "")).toBe(false);
      expect(isValidAccount("104", 'asdfasdf', "")).toBe(false);
    })
  })
})
