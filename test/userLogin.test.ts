import { User } from "../src/user";
import { UserLoginService } from "../src/userLoginService";
import { SessionManager } from "../src/sessionManager"


class FacebookSessionManagerDummy implements SessionManager {
    login(userName: string, password: string): boolean {
        //Imaginad que esto en realidad realiza una llamada al API de Facebook
        throw new Error("Should not be used.")
    }
    getSessions(): number {
        //Imaginad que esto en realidad realiza una llamada al API de Facebook
        throw new Error("Should not be used.")
    }
}
class FacebookSessionManagerStub implements SessionManager {
    login(userName: string, password: string): boolean {
        //Imaginad que esto en realidad realiza una llamada al API de Facebook
        throw new Error("Should not be used.")
    }
    getSessions(): number {
        //Imaginad que esto en realidad realiza una llamada al API de Facebook
        return 55
    }
}

describe('User Service Login', () => {
    it('should log a user', () => {
        // Arrange
        const facebookService = new FacebookSessionManagerDummy()
        const ourService = new UserLoginService(facebookService)
        const user = new User('User1')
        // Act
        const response = ourService.manualLogin(user)
        // Assert
        expect(response).toEqual('User succesfully logged in')
    })
    it('should not log an already logged user', () => {
        // Arrange
        const facebookService = new FacebookSessionManagerDummy()
        const ourService = new UserLoginService(facebookService)
        const userLogged = new User('User1')
        const userLoggedAgain = new User('User1')
        // Act
        ourService.manualLogin(userLogged)
        const response2 = ourService.manualLogin(userLoggedAgain)
        // Assert
        expect(response2).toEqual('User already logged in')
    })
    it('should return the LoggedUsers array', () => {
        // Arrange
        const facebookService = new FacebookSessionManagerDummy()
        const ourService = new UserLoginService(facebookService)
        const user1 = new User('User1')
        const user2 = new User('User2')
        const expectedUsers = [user1, user2]
        // Act
        ourService.manualLogin(user1)
        ourService.manualLogin(user2)
        const response = ourService.getLoggedUsers()
        // Assert
        expect(response).toHaveLength(2)
        expect(response).toEqual(expectedUsers)
    })
    it('getExternalSessions returns the active sesions indicated by FacebookSessionManager.getSessions()', () => {
        // Arrange
        const facebookService = new FacebookSessionManagerStub()
        const ourService = new UserLoginService(facebookService)
        // Act
        const activeSessionsFacebook = facebookService.getSessions()
        const activeSessionsReturned = ourService.getExternalSessions()
        // Assert
        expect(activeSessionsReturned).toEqual(activeSessionsFacebook)
    })
})
