"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.action2 = void 0;
const core = require("@actions/core");
const action2 = async () => {
    console.log("Inside Action 2");
    const name = core.getInput("name");
    console.log(`Received name = ${name}`);
};
exports.action2 = action2;
(0, exports.action2)();
