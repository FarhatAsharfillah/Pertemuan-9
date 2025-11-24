const db = require('../models');

async function connectDatabase() {
  console.log("STEP 1: Memulai connectDatabase...");
  try {
    console.log("STEP 2: Authenticate...");
    await db.sequelize.authenticate();
    console.log('STEP 3: Database connected successfully');

    console.log("STEP 4: Sync...");
    await db.sequelize.sync({ alter: true });
    console.log('STEP 5: Database synchronized');
  } catch (err) {
    console.error("Database connection failed: ", err);
    process.exit(1);
  }
}

module.exports = connectDatabase;
