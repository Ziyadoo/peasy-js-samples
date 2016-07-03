var NotFoundError = require("../business_logic/shared/notFoundError");
var _ = require('lodash');
var OK = 200;
var CREATED = 201;
var NO_CONTENT = 204;
var BAD_REQUEST = 400;
var NOT_FOUND = 404;

function createController(route, app, service) {

  // GET
  app.get(`${route}`, (req, res) => {
    var command = service.getAllCommand();
    command.execute((err, result) => {
      if (result.success) {
        res.status(OK).json(result.value);
      } else {
        res.status(BAD_REQUEST).json(result.errors);
      }
    });
  });

  addGetRouteHandler(app, `${route}/:id`, function(request) {
    return service.getByIdCommand(request.params.id);
  });

  // POST
  addPostRouteHandler(app, `${route}`, function(request) {
    return service.insertCommand(request.body);
  });

  // PUT
  app.put(`${route}/:id`, (req, res) => {
    req.body.id = req.params.id;
    var command = service.updateCommand(req.body).execute((err, result) => {
      if (err) {
        if (err instanceof NotFoundError) {
          return res.status(NOT_FOUND).json(err.message)
        }
        // LOG ERROR
        return res.status(BAD_REQUEST).json(err.message);
      }
      if (result.success) {
        res.status(OK).json(result.value);
      } else {
        res.status(BAD_REQUEST).json(result.errors);
      }
    });
  });

  // DELETE
  app.delete(`${route}/:id`, (req, res) => {
    var command = service.destroyCommand(req.params.id);
    command.execute((err, result) => {
      if (result.success) {
        res.status(NO_CONTENT).end();
      } else {
        res.status(BAD_REQUEST).json(result.errors);
      }
    });
  });

};

function addGetRouteHandler(app, route, commandFactory) {
  app.get(route, (req, res) => {
    var command = commandFactory(req);
    command.execute((err, result) => {
      if (err) {
        // LOG ERROR
        return res.status(BAD_REQUEST).json(err.message);
      }
      if (result.success) {
        if (result.value) {
          res.status(OK).json(result.value);
        } else {
          res.status(NOT_FOUND).end();
        }
      } else {
        res.status(BAD_REQUEST).json(result.errors);
      }
    });
  });
}

function addPostRouteHandler(app, route, commandFactory) {
  app.post(route, (req, res) => {
    var command = commandFactory(req);
    command.execute((err, result) => {
      if (err) {
        if (err instanceof NotFoundError) {
          return res.status(NOT_FOUND).json(err.message)
        }
        // LOG ERROR
        return res.status(BAD_REQUEST).json(err.message);
      }
      if (result.success) {
        res.status(CREATED).json(result.value);
      } else {
        res.status(BAD_REQUEST).json(result.errors);
      }
    });
  });
}

module.exports = {
  createController: createController,
  addGetRouteHandler: addGetRouteHandler,
  addPostRouteHandler: addPostRouteHandler
};
