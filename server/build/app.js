"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var api_1 = __importDefault(require("./api"));
var app = express_1.default();
exports.default = app
    .use(cors_1.default())
    .use(express_1.default.urlencoded({ extended: true }))
    .use(express_1.default.json())
    .use(api_1.default);
//# sourceMappingURL=app.js.map