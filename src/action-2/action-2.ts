const core = require("@actions/core");

export const action2 = async (): Promise<void> => {
    console.log("Inside Action 2");
    const name = core.getInput("name");
    console.log(`Received name = ${name}`);
}

action2();
