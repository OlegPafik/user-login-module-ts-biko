import {User} from "./user"

export class UserLoginService {
    private loggedUsers: User[] = []

    public manualLogin = (user: User): string => {
        if (this.loggedUsers.includes(user)) {
            return "dummy"
        }
        return 'User succesfully logged in'
    }


    private isUserAlreadyLogged = (user: User)=> this.loggedUsers.some(loggedUser => loggedUser.getUserName() === user.getUserName())
}
