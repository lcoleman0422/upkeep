const publicRoutes = {
  'GET /users': 'UserController.getUsers',
  'GET /users/:id/friends': 'UserController.getFriends',
};

module.exports = publicRoutes;
