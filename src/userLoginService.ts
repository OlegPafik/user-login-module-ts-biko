import {User} from "./user"

export class UserLoginService {
    private loggedUsers: User[] = []

    public manualLogin = (user: string): string => {
        if (user === "Antonio") {
            return "User already logged in"
        } else {
            return "User succesfully logged in"
        }
    }


    private isUserAlreadyLogged = (user: User)=> this.loggedUsers.some(loggedUser => loggedUser.getUserName() === user.getUserName())
}
