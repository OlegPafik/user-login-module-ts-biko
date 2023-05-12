import { UserLoginService } from '../src/userLoginService'
import { User } from '../src/user'

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

  it('should get logged users', () => {
    const service = new UserLoginService()
    const user1 = new User('User1')
    const user2 = new User('User2')
    const expectedUsers = [user1, user2]
    service.manualLogin(user1)
    service.manualLogin(user2)

    const loggedUsers = service.getLoggedUsers()

    expect(loggedUsers).toHaveLength(2)
    expect(loggedUsers).toEqual(expectedUsers)
  })

  it('should get sessions from external service', () => {
    const service = new UserLoginService()

    const externalSessions = service.getExternalSessions()

    expect(externalSessions).toEqual(7)
  })
})
