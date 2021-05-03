import slash from "./slash/slash.js"

logTest();

function make(command) {
  if(command.slash === true) {
    return slash(command.args);
  }
}

function test() {
  let command = {"slash": true, "args": {"lang": 0, "name": "poggers", "description": "poggers v2 electric boogaloo", "options": [{"name": "cool", "description": "coolio", "type": 3, "require": true}, {"name": "cooler", "description": "coolioer", "type": 3, "require": true}, {"name": "coolest", "description": "coolioest", "type": 3, "require": true}]}}
  return make(command);
}

function logTest() {
  console.log(test());
}