// Factory pattern falls under the creational patterns category. Creational patterns are all about object creation
// mechanism that promote reuability and flexibility

class Developer {
    constructor(name) {
        this.name = name;
        this.type = "Developer";
    }
}

class Tester {
    constructor(name) {
        this.name = name;
        this.type = "Tester";
    }
}

// Employee Factory
// The factory method allows us to create multiple instances of our classes without having to extend or call them seperately
// centralised creation of classes
class EmployeeFactory {
    constructor() {
        this.create = (name, type) => {
            switch (type) {
                case "Developer":
                    return new Developer(name);
                case "Tester":
                    return new Tester(name);
            }

        };
    }
}

const factory = new EmployeeFactory();
const  employees = [];

employees.push(factory.create('Joseph', "Developer"))
employees.push(factory.create("Stalin", "Tester"))

employees.forEach((employee) => {
    console.log(employee)
})