
class Validation  {
    static NameRegx = /^[A-Za-z\s.:\\-]+$/;

    
  isStrongPassword(str) {
      return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(str);
  }

  isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // check if username is validate
  // username shouldn't be less than 4 and can only contain dot(.) and hyphen(-)
  isValidUsername(username) {
      return /^[a-zA-Z0-9.-]+$/.test(username);
  }

  // set token
  setToken(token) {
      const expirationDate = new Date();
      expirationDate.setTime(expirationDate.getTime() + 24 * 60 * 60 * 1000); // 24 hours
      localStorage.setItem('token', token);
      localStorage.setItem('tokenExpiration', expirationDate.getTime().toString());
  }

  // Get token
  getToken(){
      const currentTimestamp = new Date().getTime();
      const tokenExpiration = parseInt(localStorage.getItem('tokenExpiration'), 10);
  
      if (!tokenExpiration || currentTimestamp > tokenExpiration) {
          // Token has expired or doesn't exist
          localStorage.removeItem('token');
          localStorage.removeItem('tokenExpiration');
          return null;
      }
  
      return localStorage.getItem('token');
  }

  // If user still has token
  stillHasToken() {
      return this.getToken() !== null;
  }
  // save user data to local storage
  setData(data){
      localStorage.setItem('data', JSON.stringify(data));
  }

  // get user data from local storage
  getData(){
      // check if data is in local storage
      if(localStorage.getItem('data')){
          return JSON.parse(localStorage.getItem('data'));
      }
      return null;
  }

  getDataByKey(key){
      // Check if data is in local storage
      if(localStorage.getItem('data')){
          let data = JSON.parse(localStorage.getItem('data'));
          return data[key];
      }
  }

  getName(){
      if(localStorage.getItem('data')){
          let data = JSON.parse(localStorage.getItem('data'));
          return this.capitalize(data.first_name+' '+data.last_name);
      }
  }

  // tralslate first character in a string to uppercase
  capitalize(str){
      return str.charAt(0).toUpperCase() + str.slice(1);
  }

  // remove token from local storage
  removeToken(){
      localStorage.removeItem('token');
  }

  // remove user data from local storage
  removeData(){
      localStorage.removeItem('data');
  }

  // check if user is logged in
  isLoggedIn(){
      return localStorage.getItem('token') !== null;
  }

  // Get first character of each word in a sentece or name
  initials(name){
      return name.match(/\b\w/g).join('').toUpperCase();
  }

  // Capitalize first character of a word
  ucfirst(word){
      return word.charAt(0).toUpperCase() + word.slice(1);
  }
  
}
  
  export default Validation
  
 
 
 


