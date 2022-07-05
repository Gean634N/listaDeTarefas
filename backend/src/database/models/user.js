const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  User.associate = ({Tasks}) => {
    User.hasMany(Tasks, {
      foreignKey: 'id',
      as: 'tasks',
    })
  };

  return User;
};

module.exports = User;