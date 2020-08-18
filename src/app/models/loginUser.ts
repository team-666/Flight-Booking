export class LoginUser{
   userId:string;
   userName: string;
   userPassword:string;
   userPhone:string;
   userEmail:string;
   active:string;
   roles:string;
    constructor( userId:string, userName: string, userPassword:string, userPhone:string,
        userEmail:string, active:string, roles:string){
            this.userId = userId;
            this.userName = userName;
            this.userPassword = userPassword;
            this.userPhone = userPhone;
            this.userEmail = userEmail;
            this.active = active;
            this.roles = roles;

    }

}