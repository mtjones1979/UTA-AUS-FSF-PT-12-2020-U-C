const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
    it ("should give a reversed version of the string", ( )=> {
      const str = "Hello World";
      const reversed = "!dlroW olleH";
      const result = new Algo().reverse(str);
      expect (result).toEqual(reversed) 
    })
  });

  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
    it("should return true if a string is a palindrome", () => {
      const str = "racecar";
      const result = new Algo().isPalindrome(str);
      expect (result).toEqual(true);
    });
    it ("should return false if a string is not a palindrome",() => {
      const str = "neon";
      const result = new Algo ().isPalindrome(str);

      expect(result).toEqual(false);
    });
  });

  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that sho;uld take a string as an argument and return a new string with the first letter of each word capitalized
    it("should take a string and return a capital letter for each word in the sentence", () => {
    const str = "capitalize every first letter of each word."
    const capitalized = "Capitalize Every First Letter Of Each Word.";
    const result = new Algo().capitalize(str);

    expect(result).toEqual(capitalized);
    });
  });
});



    