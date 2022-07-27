const Reducer = (oldState, action) => {
  switch (action.type) {
    case "dec":
      return { ...oldState, counter: oldState.counter - action.payload };
    case "inc":
      return { ...oldState, counter: oldState.counter + action.payload };
    default:
      return oldState;
  }
};

export { Reducer };
