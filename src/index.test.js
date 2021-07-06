const firstMessage = require('./index.js');


describe("Unit tests for program", () => {
  global.console.log = jest.fn();

  test("Verify if console.log is called", () => {
    firstMessage();
    expect(console.log).toBeCalledTimes(1)
    expect(console.log).toHaveBeenLastCalledWith("tell us your order in this style: Brunch 2 1 3 1")
  })
})
