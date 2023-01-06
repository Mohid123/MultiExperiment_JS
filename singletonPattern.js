// Singleton pattern is also creational and limits the instance of objects to one only

// Manage processes program

// We will have only ONE manager to manage multiple processes

class Process {
    constructor(state) {
        this.state = state;
    }
}
// To create our singleton we create and IIFE and place our object in it
const Singleton = (
    function() {
        // define our manager
        class Manager {
            constructor() {
                this.numProcesses = 0;
            }
        }

        let manager; //the only instance of our Manager class

        function createManager() { //create that instance
            manager = new Manager();
            return manager;
        }
        // return our manager
        return {
            getManager: () => {
                if(!manager) {
                    manager = createManager();
                    return manager
                }
                else {
                    return manager
                }
            }
        }
    }
)();

const processMnager = Singleton.getManager();
const pm2 = Singleton.getManager();
console.log(processMnager === pm2) // wil return true bcs both will be same