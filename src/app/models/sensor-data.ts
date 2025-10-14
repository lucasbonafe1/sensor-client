export class SensorData {
    id?: string;
    state!: string;
    normalizedState!: string;
    temperature!: number;
    maxTemperature!: number;
    minTemperature!: number;
    humidity!: number;
    maxHumidity!: number;
    precipitation!: number;
    maxPrecipitation!: number;
    wind!: number;
    maxWind!: number;
    alertDate!: Date;

    constructor(data: any) {
        this.id = data.id;
        this.state = data.state;
        this.normalizedState = data.normalizedState;
        this.temperature = data.temperature;
        this.maxTemperature = data.maxTemperature;
        this.minTemperature = data.minTemperature;
        this.humidity = data.humidity;
        this.maxHumidity = data.maxHumidity;
        this.precipitation = data.preciptation;       
        this.maxPrecipitation = data.maxPreciptation;
        this.wind = data.wind;
        this.maxWind = data.maxWind;
        this.alertDate = new Date(data.alertDate);
    }
}
