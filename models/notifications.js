module.exports = (sequelize, Sequelize) => {
  const Notifications = sequelize.define(
    'Notifications',
    {
      idNotification: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        field: 'idnotification',
      },
      title: {
        type: Sequelize.STRING,
        field: 'title',
      },
      content: {
        type: Sequelize.STRING,
        field: 'title',
      },
      createDate: {
        type: Sequelize.DATE,
        field: 'createdate',
      },
      toEmployee: {
        type: Sequelize.BOOLEAN,
        field: 'toemployee',
      },
      toLecturer: {
        type: Sequelize.BOOLEAN,
        field: 'tolecturer',
      },
    },
    {
      freezeTableName: true,

      timestamps: false,

      createdAt: false,

      updatedAt: false,
    }
  );

  Notifications.associate = models => {
    Notifications.belongsToMany(models.User, {
      through: models.Noti_Account,
      foreignKey: 'idNotification',
      onDelete: 'SET NULL',
    });
  };
  return Notifications;
};
