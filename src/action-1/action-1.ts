const core = require("@actions/core");

export const action1 = async (): Promise<void> => {
    console.log("Inside Action 1");
    const number = core.getInput("number")
    console.log(`Received number = ${number}`);
}

action1();
