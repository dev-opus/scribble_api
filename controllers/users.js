const User = require('../models/Users');
const serverErrors = require('../utils/errorHandler');

const getUsers = async (req, res) => {
  try {
    if (req.query.pageSize) {
      const { pageSize } = req.query;

      const users = await User.find({})
        .select('-__v -login_details')
        .limit(+pageSize)
        .lean();

      res.json({
        message: 'Welcome to the users endpoint',
        users,
      });
    } else {
      const users = await User.find({})
        .select('-__v -login_details')
        .limit(10)
        .lean();

      res.json({
        message: 'Welcome to the users endpoint',
        users,
      });
    }
  } catch (error) {
    serverErrors(res, error);
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .select('-__v -login_details')
      .lean();

    if (!user) {
      return res.status(404).json({
        notice: 'nothing found',
        reason: `no user with the id of '${req.params.id}' in the database`,
      });
    }

    res.json({
      message: 'user found',
      user,
    });
  } catch (error) {
    serverErrors(res, error);
  }
};

const updateUser = async (req, res) => {
  try {
    const { username } = req.body;
    const { id } = req.params;

    const result = await User.updateOne({ _id: id }, { username });

    if (result.nModified < 1) {
      const user = await User.findOne({ _id: id })
        .select('-__v -login_details')
        .lean();

      if (!user) {
        return res.status(400).json({
          notice: 'operation failed',
          reason: `no user with id of '${id}' found`,
        });
      }

      return res.json(user);
    }

    res.json({
      message: `user with '${id}' username updated`,
    });
  } catch (error) {
    serverErrors(res, error);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  const result = await User.deleteOne({ _id: id });

  if (result.deletedCount !== 1) {
    return res.status(400).json({
      notice: 'operation failed',
      reason: `no user with the id of '${id}' found `,
    });
  }

  res.json({
    message: `deleted one user with the id of '${id}' `,
  });
};

module.exports = { getUsers, getUserById, updateUser, deleteUser };
