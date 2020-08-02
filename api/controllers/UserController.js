const User = require('../models/users');
const Friend = require('../models/friends');


const UserController = () => {
  const getUsers = async (req, res) => {
    try {
      // Parse offset and limit from URL query string
      const offset = parseInt(req.query.offset) || 0;
      const limit = parseInt(req.query.limit) || 10;

      // Find all users with given offset and limits
      const users = await User.findAll({
        offset: offset,
        limit: limit,
      });
      return res.status(200).json({ users });
    } catch (err) {
      // console.log error and return 500
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  };

  const getFriends = async (req, res) => {
    try {
      //get array of friend id's for user
      const userid = req.params.id;
      const friends_id = await Friend.findAll({
        where: {
          UserId: userid
        },
        attributes: ['data']
      });
      //get User info for friends 
      const getFriends = await User.findAll({
        where: {
          id: friends_id[0].data.ids
        }
      });
      //return getfriends results
      return res.status(200).json({ getFriends });
    } catch (err) {
      //console.log error and return 500
      console.log(err);
      return res.status(500).json({ msg: 'Internal server error' });
    }
  }
  return {
    getUsers,
    getFriends
  };
};
module.exports = UserController;
