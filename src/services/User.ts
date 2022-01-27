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

        const route = '/organizer/register'

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
        const route = '/organizer/login'

        const response = await HttpService.run('POST', header, body, route);
        return response;
    }


    // Catchen of  all the information about the user
    public static async getuser() {
        var header = new Headers();
        const route = '/organizer'

        const response = await HttpService.run('Get', header, undefined, route, true)
        //console.log(HttpService.run('Get', header, undefined, route, true))
       console.log(response)
        return response
 
    }

    // Update the data of the user in the backend if changes happen
    public static async update(username, email, faculty, city, university, password) {
        var header = new Headers();
        header.append("Content-Type", "application/json");
        // if password is not changed update the date without password
        if(password===undefined){ 
            //console.log('PW was not changed' + password)
            var body =  JSON.stringify({
           
            "username": username,
            "email": email,
            "faculty": faculty,
            "city": city,
            "university": university
           
        });}
        else{  
            //if the password was changed update all data 
            //console.log('change PW')
            var body = JSON.stringify({
                "username": username,
                "email": email,
                "faculty": faculty,
                "city": city,
                "university": university,
                "password": password
               
            })}
     

        const response = await HttpService.run('PUT', header, body, '/organizer',true);
        return response;
    }
}


