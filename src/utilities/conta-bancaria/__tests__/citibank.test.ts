import { isValidAccount } from '..';

describe("isValid", ()=>{
  describe("valid accounts",()=>{
    it("returns true", ()=>{
      expect(isValidAccount("745", '0007500465-8', "0075")).toBe(true);
      expect(isValidAccount("745", '1420412612-0', "0013")).toBe(true);
    })
  })
  describe("invalid accounts",()=>{
    it("returns false", ()=>{
      expect(isValidAccount("745", '1420412612-1', "0013")).toBe(false);
    })
  })
  describe("wrong format",()=>{
    it("returns false", ()=>{
      expect(isValidAccount("745", '', "")).toBe(false);
      expect(isValidAccount("745", '123456789-0', "")).toBe(false);
      expect(isValidAccount("745", 'asdfasdf', "")).toBe(false);
    })
  })
})
