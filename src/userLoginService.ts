import { User } from './user'
import { FacebookSessionManager } from './facebookSessionManager'
import { SessionManager } from './sessionManager'

export class UserLoginService {
  private loggedUsers: User[] = []

  public manualLogin = (user: User): string => {
    if (this.isUserAlreadyLogged(user)) {
      return 'User already logged in'
    }

    this.loggedUsers.push(user)
    return 'User successfully logged in'
  }

  public getLoggedUsers = (): User[] => this.loggedUsers

  public getExternalSessions = (): number => {
    const sessionManager: SessionManager = new FacebookSessionManager()

    return sessionManager.getSessions()
  }

  private isUserAlreadyLogged = (user: User) =>
    this.loggedUsers.some(loggedUser => loggedUser.getUserName() === user.getUserName())
}
