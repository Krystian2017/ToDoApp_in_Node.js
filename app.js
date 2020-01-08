const parseArgs = require("minimist");
const colors = require("colors");

const command = parseArgs(process.argv.slice(2, 3));
delete command._;

const handleCommand = ({ add, remove, list }) => {
  if (add) {
    if (typeof add !== "string") {
      return console.log("wpisz nazwę dodawanego zadania (tekst)".red);
    } else if (add.length < 7) {
      return console.log("musi być więcej niż 6 znaków".red);
    }
    handleData();
  } else if (remove) {
    if (typeof remove !== "string" || remove.length < 7) {
      return console.log(
        "wpiszz nazwę usuwanego zadania. To musi być tekst i powinien mieć więcej niż 6 znaków"
          .red
      );
    }
    // handleData();
  } else if (list || list === "") {
    //   handleData();
    console.log("pokazuję listę");
  } else {
    console.log(
      `Nie rozumiem polecenia. Użyj --add="nazwa zadania", --remove="nazwa zadania" lub opcji --list`
    );
  }
};

const handleData = () => {
  console.log("dodaje zadanie");
};
handleCommand(command);
