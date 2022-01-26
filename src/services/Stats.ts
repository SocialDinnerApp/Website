import { HttpService } from "./Http";

export class StatService {
    public static async getLastSeven() {
        var header = new Headers();
        const response = await HttpService.run('GET', header, undefined, '/api/visuals/lastseven', true)
        return response
    }
    public static async getMonthlyRev() {
        var header = new Headers();
        const response = await HttpService.run('GET', header, undefined, '/api/visuals/revenue', true)
        return response
    }
}