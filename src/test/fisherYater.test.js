// import assert from "assert";
import { expect } from "chai";
import { fisherYates } from "../util/fisherYates";

describe("FisherYates", function () {
  it("should return an array of size n", () => {
    const len = fisherYates(10).length;
    expect(len).to.be.equal(10);
  });
  it("should return a shuffled array of size n", () => {
    const arr = fisherYates(5);
    const arr1 = fisherYates(3);
    expect(arr).to.not.deep.equal([1, 2, 3, 4, 5]);
    expect(arr1).to.not.deep.equal([1, 2, 3]);
  });
});
