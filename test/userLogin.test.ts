import { FacebookSessionManager } from "../src/facebookSessionManager";
import { User } from "../src/user";
import { UserLoginService } from "../src/userLoginService";


describe('User Service Login', () => {
    it('should log a user', () => {
        // Arrange
        const service = new UserLoginService()
        const user = new User('User1')
        // Act
        const response = service.manualLogin(user)
        // Assert
        expect(response).toEqual('User succesfully logged in')
    })
    it('should not log an already logged user', () => {
        // Arrange
        const service = new UserLoginService()
        const userLogged = new User('User1')
        const userLoggedAgain = new User('User1')
        // Act
        service.manualLogin(userLogged)
        const response2 = service.manualLogin(userLoggedAgain)
        // Assert
        expect(response2).toEqual('User already logged in')
    })
    it('should return the LoggedUsers array', () => {
        // Arrange
        const service = new UserLoginService()
        const user1 = new User('User1')
        const user2 = new User('User2')
        const expectedUsers = [user1, user2]
        // Act
        service.manualLogin(user1)
        service.manualLogin(user2)
        const response = service.getLoggedUsers()
        // Assert
        expect(response).toHaveLength(2)
        expect(response).toEqual(expectedUsers)
    })
    it('getExternalSessions returns the active sesions indicated by FacebookSessionManager.getSessions()', () => {
        // Arrange
        const ourService = new UserLoginService()
        const facebook = new FacebookSessionManager()
        // Act
        const activeSessionsFacebook = facebook.getSessions()
        const activeSessionsReturned = ourService.getExternalSessions()
        // Assert
        expect(activeSessionsReturned).toEqual(activeSessionsFacebook)
    })
})
