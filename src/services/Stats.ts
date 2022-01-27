import { HttpService } from "./Http";

export class StatService {
    public static async getLastSeven() {
        var header = new Headers();
        const response = await HttpService.run('GET', header, undefined, '/organizer/visuals/partlastsevenevents', true)
        return response
    }
    public static async getMonthlyRev() {
        var header = new Headers();
        const response = await HttpService.run('GET', header, undefined, '/organizer/visuals/revenue', true)
        return response
    }

    public static async getPartsForSingleEvent(eventId: string) {
        var header = new Headers();
        const response = await HttpService.run('GET', header, undefined, `/organizer/visuals/partsingleevent/${eventId}`, true)
        return response
    }
}