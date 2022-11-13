import { add } from "./myLib.mjs";
import assert from "assert";

console.log("should add 2 numbers");
try {
  assert.strictEqual(add(1, 2), 3);
  console.log("test success");
} catch (e) {
  console.error("test fail");
}
