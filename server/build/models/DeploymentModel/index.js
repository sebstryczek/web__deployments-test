"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var DeploymentSchema = new mongoose_1.Schema({
    url: { type: String, required: true },
    templateName: { type: String, required: true },
    version: { type: String, required: true },
    deployedAt: { type: Date, required: true },
});
var DeploymentModel = mongoose_1.model('Deployment', DeploymentSchema);
exports.default = DeploymentModel;
//# sourceMappingURL=index.js.map