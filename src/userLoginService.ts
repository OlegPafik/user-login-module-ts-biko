import { User } from './user'
import { SessionManager } from './sessionManager/sessionManager'

export class UserLoginService {
  private loggedUsers: User[] = []
  private sessionManager: SessionManager

  constructor(sessionManager: SessionManager) {
    this.sessionManager = sessionManager
  }

  public manualLogin = (user: User): string => {
    if (this.isUserAlreadyLogged(user)) {
      return 'User already logged in'
    }

    this.loggedUsers.push(user)
    return 'User successfully logged in'
  }

  public getLoggedUsers = (): User[] => this.loggedUsers

  public getExternalSessions = (): number => this.sessionManager.getSessions()

  public login = (userName: string, password: string): string => {
    const isUserLogged = this.sessionManager.login(userName, password)

    if (!isUserLogged) {
      return 'Login incorrecto'
    }

    return 'Login correcto'
  }

  private isUserAlreadyLogged = (user: User) =>
    this.loggedUsers.some(loggedUser => loggedUser.getUserName() === user.getUserName())
}
