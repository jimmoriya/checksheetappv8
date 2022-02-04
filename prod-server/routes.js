"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerRoutes = registerRoutes;

var _tasksRoutes = _interopRequireDefault(require("./api/task/tasks-routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function registerRoutes(app) {
  app.use('/api', _tasksRoutes.default);
}