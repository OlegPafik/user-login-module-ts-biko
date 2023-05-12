import { UserLoginService } from '../src/userLoginService'
import { User } from '../src/user'
import { DummySessionManager } from '../src/sessionManager/_doubles/DummySessionManager'
import { StubSessionManager } from '../src/sessionManager/_doubles/StubSessionManager'
import { FacebookSessionManager } from '../src/sessionManager/facebookSessionManager'

describe('User Service Login', () => {
  it('should log a user', () => {
    const service = new UserLoginService(new DummySessionManager())
    const user = new User('User1')

    const response = service.manualLogin(user)

    expect(response).toEqual('User successfully logged in')
  })

  it('should check if user is already logged', () => {
    const service = new UserLoginService(new DummySessionManager())
    const user = new User('User1')
    service.manualLogin(user)

    const response = service.manualLogin(user)

    expect(response).toEqual('User already logged in')
  })

  it('should get logged users', () => {
    const service = new UserLoginService(new DummySessionManager())
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
    const service = new UserLoginService(new StubSessionManager())

    const externalSessions = service.getExternalSessions()

    expect(externalSessions).toEqual(44)
  })

  it('should log a user if username and password are correct', () => {
    const service = new UserLoginService(new FacebookSessionManager())

    const loginResponse = service.login('user1Name', 'user1Password')

    expect(loginResponse).toEqual('Login correcto')
  })

  it('should not log a user if username or password are not correct', () => {
    const service = new UserLoginService(new FacebookSessionManager())

    const loginResponse = service.login('user1Name', 'user1Password')

    expect(loginResponse).toEqual('Login incorrecto')
  })
})
