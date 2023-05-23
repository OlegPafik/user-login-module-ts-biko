import {User} from "./user"

export class UserLoginService {
    private loggedUsers: User[] = []

    public manualLogin = (user: string): string => {
        if (user === "Oleg") {
            return "user logged"
        } else {
            return "user not logged"
        }
    }


    private isUserAlreadyLogged = (user: User)=> this.loggedUsers.some(loggedUser => loggedUser.getUserName() === user.getUserName())
}
