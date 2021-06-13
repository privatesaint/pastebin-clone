import app from "./app";
import connection from "./config/database";

// app port
const PORT = process.env.PORT || 4500;

const start = async () => {
  try {
    await connection();
    console.log("connected");
  } catch (err) {
    console.log(err);
  }

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

start();

// handle app tasks
import "./tasks/AutoDeleteBin";

process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err.message}`);
  process.exit(1);
});
