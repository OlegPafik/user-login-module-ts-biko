import {User} from "./user"

export class UserLoginService {
    private loggedUsers: User[] = []

    public manualLogin = (user: User): string => {
        if (this.isUserAlreadyLogged(user)) {
            return 'User already logged in'
        }
        this.loggedUsers.push(user)
        return 'User succesfully logged in'
    }


    private isUserAlreadyLogged = (user: User)=> this.loggedUsers.some(loggedUser => loggedUser.getUserName() === user.getUserName())
}
