class startEngine {
    constructor (name, mark, color, type) {
        this.name = name;
        this.mark = mark;
        this.color = color;
        this.type = type;
    }
    
}
class car extends startEngine {
    constructor (name, mark, color, type, motor, consumpthion) {
        super(name, mark, color, type);
        this.motor = motor;
        this.consumpthion = consumpthion;
    }
    brend () {
        console.log(`Type: ${this.type}\nMark: ${this.mark}\ncolor: ${this.color}\nName: ${this.name}\nMotor: ${this.motor}\ncruize: ${this.consumpthion}`);
    }
}
class airCar extends startEngine {
    constructor (name, mark, color, type, category, type_flight) {
        super(name, mark, color, type);
        this.category = category;
        this.type_flight = type_flight;
    }
    air_type () {
        console.log(`Type: ${this.type}\nMark: ${this.mark}\ncolor: ${this.color}\nName: ${this.name}\nCategory: ${this.category}\nType of flight: ${this.type_flight}`);
    }
}
const bmw = new car('Lamborghini', 'Lamborghini', 'black', 'Car', 'Centenario', '16,8')
const manas = new airCar('Airbus', 'N425HB', 'white', 'Airplane', 'multi-engine sea class', 'Ballistic')
bmw.brend()
manas.air_type()
