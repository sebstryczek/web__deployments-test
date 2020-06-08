"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var deployments_1 = __importDefault(require("./deployments"));
var templates_1 = __importDefault(require("./templates"));
var api = express_1.default.Router();
api.use(deployments_1.default);
api.use(templates_1.default);
api.use(function (req, res) {
    res.status(404).send('Nothing here :(');
});
exports.default = api;
//# sourceMappingURL=index.js.map