const wait = async (duration: number = 1000) =>
  await new Promise((resolve) => setTimeout(resolve, duration));

export { wait };
