class Electronics {
    constructor(batteryVoltage) {
        this.batteryVoltage = batteryVoltage;
    }
    printBattery() {
        return 'I have a battery with ' + this.batteryVoltage;
    }
}

class Mac extends Electronics {
    constructor(brand, batteryVoltage) {
        super(batteryVoltage);
        this.brand = brand;
    }
    show() {
        return this.printBattery() + ', the brand is ' + this.brand;
    }
}

module.exports = {Electronics, Mac};
