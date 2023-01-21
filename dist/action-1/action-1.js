"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.action1 = void 0;
const core = require("@actions/core");
const action1 = async () => {
    console.log("Inside Action 1");
    const number = core.getInput("number");
    console.log(`Received number = ${number}`);
};
exports.action1 = action1;
(0, exports.action1)();
