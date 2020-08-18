import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUser } from '../../models/loginUser';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }
 public user:any;

  //Retrieves user token and checks authentication
  authenticate(username, password) {

    return this.httpClient.post<any>('http://localhost:8092/user/authenticate`',
    {username, password}).subscribe(
      userData => {
        sessionStorage.setItem('username', username);
        let tokenStr = 'Bearer' +userData.token;
        sessionStorage.setItem('token', tokenStr);
        return userData;
      }
    );
  }

  // 
  authenticateUser(username, password) {
    return this.httpClient.get('http://localhost:8092/user/authenticate/'+ username);
    /*.subscribe(
     userData => {
         if(userData != null){
            this.user =userData;
            if(password == this.user.userPassword){
              sessionStorage.setItem('username', username);
              return userData;
            }else{
                return null;
            }
      
        }*/
       // let tokenStr = 'Bearer' +userData.token;
       // sessionStorage.setItem('token', tokenStr);
    
  }

  // Checks whether the user is logged in
  isUserLoggedIn():boolean {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }

  // Removes user session(logout)
  logOut() {
    sessionStorage.removeItem('username');
  }

  // Retrives role of user(customer/admin)
  getRole(username:String) {
    return this.httpClient.get('http://localhost:8092/user/role/'+ username);
  }

  // Adds a new User
  signUp(user: LoginUser) {
    return this.httpClient.post('http://localhost:8092/user/signup', user);
  }


}
