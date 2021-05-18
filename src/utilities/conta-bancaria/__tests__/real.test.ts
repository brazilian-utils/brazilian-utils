import { isValidAccount } from '..';

describe("isValid", ()=>{
  describe("valid accounts",()=>{
    it("returns true", ()=>{
      expect(isValidAccount("356", '5711460-9', "1835")).toBe(true);
    })
  })
  describe("invalid accounts",()=>{
    it("returns false", ()=>{
      expect(isValidAccount("356", '5711460-0', "1835")).toBe(false);
    })
  })
  describe("wrong format",()=>{
    it("returns false", ()=>{
      expect(isValidAccount("356", '', "")).toBe(false);
      expect(isValidAccount("356", '123456789-0', "")).toBe(false);
      expect(isValidAccount("356", 'asdfasdf', "")).toBe(false);
    })
  })
})
