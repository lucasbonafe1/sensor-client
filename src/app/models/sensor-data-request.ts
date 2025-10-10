export class SensorDataRequest{
    state!: string;
    temperatureLimit!: number;
    humidityLimit!: number;

    constructor(data: any){
        this.state = data.state;
        this.temperatureLimit = data.temperatureLimit;
        this.humidityLimit = data.humidityLimit;
    }
}