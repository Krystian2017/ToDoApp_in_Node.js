const handleData = require("./handleData");

const handleCommand = ({ add, remove, list }) => {
  if (add) {
    if (typeof add !== "string") {
      return console.log(
        "Enter the name of the task to be added (string type)".red
      );
    } else if (add.length < 7) {
      return console.log("Must be more than 6 characters".red);
    }
    handleData(1, add);
  } else if (remove) {
    if (typeof remove !== "string" || remove.length < 7) {
      return console.log(
        "Write the name of the task to be deleted. It must be text and should be more than 6 characters"
          .red
      );
    }
    handleData(2, remove);
  } else if (list || list === "") {
    handleData(3, null);
  } else {
    console.log(
      `I do not understand the command. Use --add = "task name", --remove = "task name" or the --list option`
        .red
    );
  }
};

module.exports = handleCommand;
