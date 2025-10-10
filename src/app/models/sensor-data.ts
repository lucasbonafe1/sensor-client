export class SensorData{
    id?: number;
    state!: string;
    normalizedState!: string;
    temperature!: number;
    temperatureLimit!: number;
    humidity!: number;
    humidityLimit!: number;
    alertDate!: Date;

    constructor(data: any){
        this.id = data.id;
        this.state = data.state;
        this.normalizedState = data.normalizedState;
        this.temperature = data.temperature;
        this.temperatureLimit = data.temperatureLimit;
        this.humidity = data.humidity;
        this.humidityLimit = data.humidityLimit;
        this.alertDate = new Date(data.alertDate);
    }
}