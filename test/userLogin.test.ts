import { User } from "../src/user";
import {UserLoginService} from "../src/userLoginService";


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
        const response1 = service.manualLogin(userLogged)
        const response2 = service.manualLogin(userLoggedAgain)
        // Assert
        expect(response2).toEqual('User already logged in')
    })
})
