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
})
