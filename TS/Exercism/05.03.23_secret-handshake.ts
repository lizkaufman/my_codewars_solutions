export function commands(input: number): string[] {
  const actionList: string[] = [
    "wink",
    "double blink",
    "close your eyes",
    "jump",
  ];
  const bits: string[] = input.toString(2).split("");
  const handshake: string[] = [];

  for (let i = 0; i < bits.length; i++) {
    console.log(Number(bits[i]));
    if (Number(bits[i]) > 0) {
      console.log("adding ", actionList[i]);
      handshake.push(actionList[i]);
    }
  }

  return handshake;
}

// Wrong interpretation of the logic! Need to pretty much start over. :(
// Went wrong by writing code that checked each digit of binary number for a 1, and if so, did the next action in the action list.
// Need to instead do specific actions for specific places (ones place vs tens place, etc.) rather than just next in the queue!
