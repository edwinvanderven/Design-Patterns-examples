enum CarType {
    MICRO = 'Micro',
    MINI = 'Mini',
    LUXURY = 'Luxury',
}

enum CarLocation {
    DEFAULT = 'Default',
    USA = 'USA',
    INDIA = 'India',
}

abstract class Car {
    constructor(model: CarType, location: CarLocation) {
        this.model = model;
        this.location = location;
    }

    private model: CarType;
    private location: CarLocation;

    getModel(): CarType {
        return this.model;
    }

    setModel(model: CarType): void {
        this.model = model;
    }

    getLocation(): CarLocation {
        return this.location;
    }

    setLocation(location: CarLocation): void {
        this.location = location;
    }

    public toString(): String {
        return 'CarModel - ' + this.model + ' located in ' + this.location;
    }
}

class LuxuryCar extends Car {
    constructor(location: CarLocation) {
        super(CarType.LUXURY, location);
        console.log('Connecting to Luxury car');
    }
}

class MicroCar extends Car {
    constructor(location: CarLocation) {
        super(CarType.MICRO, location);
        console.log('Connecting to Micro car');
    }
}

class MiniCar extends Car {
    constructor(location: CarLocation) {
        super(CarType.MINI, location);
        console.log('Connecting to Mini car');
    }
}

class IndiaCarFactory {
    static buildCar(model: CarType): Car {
        let car: Car;
        switch (model) {
            case CarType.MICRO:
                car = new MicroCar(CarLocation.INDIA);
                break;

            case CarType.MINI:
                car = new MiniCar(CarLocation.INDIA);
                break;

            case CarType.LUXURY:
                car = new LuxuryCar(CarLocation.INDIA);
                break;

            default:
                break;
        }
        return car;
    }
}

class DefaultCarFactory {
    public static buildCar(model: CarType): Car {
        let car: Car;
        switch (model) {
            case CarType.MICRO:
                car = new MicroCar(CarLocation.DEFAULT);
                break;

            case CarType.MINI:
                car = new MiniCar(CarLocation.DEFAULT);
                break;

            case CarType.LUXURY:
                car = new LuxuryCar(CarLocation.DEFAULT);
                break;

            default:
                break;
        }
        return car;
    }
}

class USACarFactory {
    public static buildCar(model: CarType): Car {
        let car: Car;
        switch (model) {
            case CarType.MICRO:
                car = new MicroCar(CarLocation.USA);
                break;

            case CarType.MINI:
                car = new MiniCar(CarLocation.USA);
                break;

            case CarType.LUXURY:
                car = new LuxuryCar(CarLocation.USA);
                break;

            default:
                break;
        }
        return car;
    }
}

class CarFactory {
    public static buildCar(type: CarType): Car {
        let car: Car;
        const location: CarLocation = CarLocation.INDIA || CarLocation.USA;

        switch (location) {
            case CarLocation.INDIA:
                car = IndiaCarFactory.buildCar(type);
                break;

            case CarLocation.USA:
                car = USACarFactory.buildCar(type);
                break;

            default:
                car = DefaultCarFactory.buildCar(type);
                break;
        }

        return car;
    }
}

console.log(CarFactory.buildCar(CarType.MICRO));
console.log(CarFactory.buildCar(CarType.MINI));
console.log(CarFactory.buildCar(CarType.LUXURY));
