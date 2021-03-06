const DayCare = require("../dayCare");
const Child = require("../child");

describe("DayCare", () => {
  describe("Initialization", () => {
    it("should create an object with 'children' array, 'capacity' number, and 'ageLimit' number", () => {
      const dayCare = new DayCare();

      // TODO: Add a comment describing the purpose of the following statement
      // wants default values has correct properties
      expect(dayCare).toEqual({ children: [], capacity: 3, ageLimit: 6 });
    });
  });

  describe("addChild", () => {
    it("should add a child to the 'children' array", () => {
      // TODO: Add a comment describing the purpose of the following declarations
      // creating a new child - creates new object
      const child = new Child("Tammy", 1);
      const dayCare = new DayCare();

      // TODO: Add a comment describing the purpose of the following method
      // adding child to daycare
      dayCare.addChild(child);

      // TODO: Add a comment describing the purpose of the following statements
      // expecting not to be added  verify child was added
      expect(dayCare.children.length).toEqual(1);
      expect(dayCare.children[0]).toBe(child);
    });

    it("should not add a child over the 'ageLimit'", () => {
      const child = new Child("Tammy", 8);
      const dayCare = new DayCare();

      dayCare.addChild(child);

      // TODO: Add a comment describing the purpose of the following statement
      // verify child was not added
      expect(dayCare.children.length).toEqual(0);
    });

    it("should not add a child if already at capacity", () => {
      const dayCare = new DayCare();
      const child = new Child("Alice", 4);

      // TODO: Add a comment describing the purpose of the following expression
      //  3 kids added initial objects
      dayCare.children = [
        new Child("Tammy", 1),
        new Child("Mark", 2),
        new Child("Alvin", 1)
      ];

      dayCare.addChild(child);

      // TODO: Add a comment describing the purpose of the following statement
      // make sure the array = certain length - don't add 4th child
      expect(dayCare.children.length).toEqual(3);
    });

    it("should throw an error if not provided a Child object as an argument", () => {
      // TODO: Add a comment describing the purpose of the following declaration
      // define the error message that is expected
      const err = new Error(
        "Expected parameter 'child' to be an instance of Child"
      );

      // TODO: Add a comment describing the purpose of the following expression
      // define the code that will throw an error inside a callback function
      const cb = () => {
        const dayCare = new DayCare();
        dayCare.addChild();
      };

      // TODO: Add a comment describing the purpose of the following statement
      // verify the callback caputred the error
      expect(cb).toThrowError(err);
    });
  });

  describe("pickupChild", () => {
    it("should remove the first child found with a given name from 'children' and return it", () => {
      const dayCare = new DayCare();
      const child1 = new Child("Tammy", 1);
      const child2 = new Child("Mark", 2);
      const child3 = new Child("Alvin", 1);
      dayCare.children = [child1, child2, child3];

      // TODO: Add a comment describing the purpose of the following declaration
      // remove and retun an object from children array
      const removed = dayCare.pickupChild(child2.name);

      expect(removed).toBe(child2);
      expect(dayCare.children.length).toEqual(2);

      // TODO: Add a comment describing the purpose of the following statement
      // verify that child 2 is no longer in array
      expect(
        dayCare.children.some(child => child.name === child2.name)
      ).toEqual(false);
    });

    it("should return undefined and remove no children if child is not in 'children'", () => {
      const dayCare = new DayCare();
      const child1 = new Child("Tammy", 1);
      const child2 = new Child("Mark", 2);
      const child3 = new Child("Alvin", 1);
      dayCare.children = [child1, child2, child3];

      // TODO: Add a comment describing the purpose of the following declaration
      // attempt to pick up child that doesn't existed
      const removed = dayCare.pickupChild("Fred");

      // TODO: Add a comment describing the purpose of the following statement
      // verify that the returned object is undefined 
      expect(typeof removed).toEqual("undefined");

      // TODO: Add a comment describing the purpose of the following statement
      // verify that no object was removed.
      expect(dayCare.children).toEqual([child1, child2, child3]);
    });
  });
});
