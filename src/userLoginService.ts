import { FacebookSessionManager } from "./facebookSessionManager"
import {User} from "./user"
import {SessionManager} from "./sessionManager"

export class UserLoginService {
    private loggedUsers: User[] = []
    private service: SessionManager

    constructor(service: SessionManager) {
        this.service = service;
    }

    public manualLogin = (user: User): string => {
        if (this.isUserAlreadyLogged(user)) {
            return 'User already logged in'
        }
        this.loggedUsers.push(user)
        return 'User succesfully logged in'
    }

    public login(userName: string, password: string): boolean {
        return this.service.login(userName, password);
    }
    
    public getLoggedUsers = (): User[] => {
        return this.loggedUsers
    }
    public getExternalSessions = (): number => {
        return this.service.getSessions()
    }

    private isUserAlreadyLogged = (user: User)=> this.loggedUsers.some(loggedUser => loggedUser.getUserName() === user.getUserName())
}
