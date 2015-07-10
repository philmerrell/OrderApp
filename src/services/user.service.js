class UserService {
  constructor() {
    this.currentUser = null;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  setCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUser = user;
  }
}

export default UserService