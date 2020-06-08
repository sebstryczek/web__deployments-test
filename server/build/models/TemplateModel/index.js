"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var TemplateSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    versions: [{ type: String, required: true }],
});
var TemplateModel = mongoose_1.model('Template', TemplateSchema);
exports.default = TemplateModel;
//# sourceMappingURL=index.js.map