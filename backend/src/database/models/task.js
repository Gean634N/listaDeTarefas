const Task = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define("Task", {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    content: DataTypes.STRING,
    userId: { 
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    timestamps: false,
  });

  Task.associate = ({User}) => {
    Task.belongsTo(User, {
      foreignKey: 'userId',
      as: 'user'
    })
};

  return Task;
};

module.exports = Task;
