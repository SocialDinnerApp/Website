import { HttpService } from "./Http";

export class UserService {
    public static async signup(username, email, faculty, city, university, password) {
        var header = new Headers();
        header.append("Content-Type", "application/json");

        const body = JSON.stringify({
            "username": username,
            "email": email,
            "faculty": faculty,
            "city": city,
            "university": university,
            "password": password
        });

        const route = '/user/register'

        var response = await HttpService.run('POST', header, body, route);
        return response;
    }


    public static async signin(email, password) {
        var header = new Headers();
        header.append("Content-Type", "application/json");
        const body = JSON.stringify({
            "email": email,
            "password": password
        });
        const route = '/user/login'

        const response = await HttpService.run('POST', header, body, route);
        return response;
    }
}