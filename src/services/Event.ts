import { HttpService } from "./Http";

export class EventService {
    public static async create(name, description, date, time_starter, time_main, time_dessert, city, zip_code, fee, max_participants, registration_deadline) {
        var header = new Headers();
        header.append("Content-Type", "application/json");
        const body = JSON.stringify({
            "name": name,
            "description": description,
            "date": date,
            "time_starter": time_starter,
            "time_main": time_main,
            "time_dessert": time_dessert,
            "city": city,
            "zip_code": zip_code,
            "fee": fee,
            "max_participants": max_participants,
            "registration_deadline": registration_deadline
        });
        const route = '/organizer/create/event'

        const response = await HttpService.run('POST', header, body, route, true);
        return response;
    }

    public static async getAll() {
        var header = new Headers();
        const response = await HttpService.run('GET', header, undefined, '/organizer/allevents', true)
        return response
    }

    public static async getSingle(eventId: string) {
        var header = new Headers();
        const response = await HttpService.run('GET', header, undefined, `/organizer/event/${eventId}`, true)
        return response
    }
}