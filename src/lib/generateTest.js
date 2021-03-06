export const generateDummyTest = () => cb => {
  const delay = 7000 + Math.random() * 7000;
  const testPassed = Math.random() > 0.5;

  setTimeout(() => {
    cb(testPassed);
  }, delay);
};

export const tests = [
  { description: "commas are rotated properly",          run: generateDummyTest() },
  { description: "exclamation points stand up straight", run: generateDummyTest() },
  { description: "run-on sentences don't run forever",   run: generateDummyTest() },
  { description: "question marks curl down, not up",     run: generateDummyTest() },
  { description: "semicolons are adequately waterproof", run: generateDummyTest() },
  { description: "capital letters can do yoga",          run: generateDummyTest() }
];