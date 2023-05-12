import {UserLoginService} from "../src/userLoginService";
import {User} from "../src/user";


describe('User Service Login', () => {
    it('should log a user', () => {
        const service = new UserLoginService()
        const user = new User('User1')

        const response = service.manualLogin(user)

        expect(response).toEqual('User successfully logged in')
    })

    it('should check if user is already logged', () => {
        const service = new UserLoginService()
        const user = new User('User1')
        service.manualLogin(user)

       const response = service.manualLogin(user)

        expect(response).toEqual('User already logged in')
    })

})
