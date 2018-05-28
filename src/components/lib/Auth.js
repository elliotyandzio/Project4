class Auth {
  static setToken(token){
    localStorage.setItem('token', token);
  }

  static getToken() {
    return localStorage.getItem('token');
  }

  static logout() {
    localStorage.removeItem('token');
  }

  static getPayLoad(){
    //get token
    const token = this.getToken();
    //if no token in localStorage
    if(!token) return null;
    //split the token into its three parts using split on the points
    const parts = token.split('.');
    if(parts.length < 3 ) return null;
    //decrypt
    return JSON.parse(atob(parts[1]));
  }

  static isAuthenticated () {
    const payload = this.getPayLoad();
    if(!payload) return false;
    //get time in seconds
    const now = Math.round(Date.now() / 1000);
    return now < payload.exp;
  }

  static isCurrentUser(user) {
    return this.isAuthenticated() && user._id === this.getPayLoad().sub;
  }
}

export default Auth;
