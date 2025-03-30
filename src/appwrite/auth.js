import config from "../config/config";

import { Client, Account,ID} from 'appwrite';

export class AuthService{
    client= new Client();
    Account;

    constructor(){
        this.client
        setEndPoint(config.appwriteurl)
        setProject(config.appwriteProjectId);
        this.Account=new Account(this.Account)
    }
    async createAccount({email,password,name}){
        try {
       const userAccount=   await this.Account.create(ID.unique(),email,password,name)  ;
       if (userAccount) {
         return this.login({email,password});
       } else {
        return userAccount;
       }
        } catch (error) {
            throw error;
        }
    }
    async login({email,password}){
        try {
           return await this.Account.createEmailSession(email,password);
        } catch (error) {
           throw error 
        }
    }

    async getCurrentUser(){
        try {
             return await this.Account.get();
        } catch (error) {
            throw error
        }
        return null;
    }

    async Logout(){
        try {
            await this.Account.deleteSessions();
        } catch (error) {
            console.log("appwritebservice :: Logout :: error",error);
        }
    }
}

const AuthService=new AuthService();

export default AuthService