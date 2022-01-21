import { get } from "svelte/store";
import { backendUrl, user } from "../store";

export class HttpService {
    public static async run(method: string, headers: Headers, body, route: string, isAuth: boolean = false) {
        if(isAuth) {
            headers.append("Authorization", `Bearer ${get(user)['token']}`);
        }
        var requestOptions: RequestInit = {
            method: method,
            headers: headers,
            body: body,
        };
        var url = `${get(backendUrl)}${route}`
        var response = await fetch(url, requestOptions)
            .then(async (response) => {
                // console.log(`Statuscode ${response.status}`);
                // console.log(response.json());
                if (response.status >= 200 && response.status < 300) {
                    const response_json = await response.json()
                    // console.log('Response 1')
                    // console.log(response_json)
                    return response_json;
                }
                return;
            })
            .catch((error) => {
                // console.log(error);
                return error;
            });

        // console.log('Response 2')
        // console.log(response)
        return response;
    }
}