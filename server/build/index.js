"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var db_1 = __importDefault(require("./db"));
var app_1 = __importDefault(require("./app"));
dotenv_1.default.config();
var dbUri = process.env.DB_URI || '';
var appPort = parseInt(process.env.APP_PORT || '');
db_1.default.setup(dbUri);
app_1.default.listen(appPort, function (err) {
    if (err) {
        // eslint-disable-next-line no-console
        return console.error(err);
    }
    // eslint-disable-next-line no-console
    return console.log("server is listening on " + appPort);
});
//# sourceMappingURL=index.js.map