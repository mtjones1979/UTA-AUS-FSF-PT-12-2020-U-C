const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
  it ("should give a reversed version of the string", => () {
      const str = "Hello World";
      const 
      expect  (result).toEqual(reversed) 
  })
  });

  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
  it("should return true if a string is a palindrome", () => {
    const str = "racecar";
    const result = new Algo().isPalindrome(str);
    expect (result).toEqual(true);
  });
  it ("should return false if a string is not a palindrome", => {
    
  });

  });

  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
  });
});



    it("should return an object containing a 'number' property when called with the 'new' keyword", () => {
      const obj = new Arithmetic();

      expect("number" in obj).toEqual(true);
    });

    it("should set 'number' when created", () => {
      const num = 108;

      const obj = new Arithmetic(num);

      expect(obj.number).toEqual(num);
    });

    it("should default 'number' to 0", () => {
      const obj = new Arithmetic();

      expect(obj.number).toEqual(0);
    });


  