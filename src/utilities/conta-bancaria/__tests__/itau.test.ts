import { isValidAccount } from '..';

describe("isValid", ()=>{
  describe("valid accounts",()=>{
    it("returns true", ()=>{
      expect(isValidAccount("341", '02366-1', "2545")).toBe(true);
      expect(isValidAccount("341", '98197-0', "0031")).toBe(true);
      expect(isValidAccount("341", '11745-6', "4102")).toBe(true);
    })
  })
  describe("invalid accounts",()=>{
    it("returns false", ()=>{
      expect(isValidAccount("341", '11745-6', "0031")).toBe(false);
    })
  })
  describe("wrong format",()=>{
    it("returns false", ()=>{
      expect(isValidAccount("341", '', "")).toBe(false);
      expect(isValidAccount("341", '123456789-0', "")).toBe(false);
      expect(isValidAccount("341", 'asdfasdf', "")).toBe(false);
    })
  })
})
