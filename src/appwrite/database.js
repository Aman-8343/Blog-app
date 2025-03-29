import config from "../config/config";

import { Client,ID,Databases,Storage,Query} from 'appwrite';

export class Service {
    client=new Client();
    Databases;
    bucket;
    constructor(){
        this.client
        setEndPoint(config.appwriteurl)
        setProject(config.appwriteProjectId);
    }
}

const service=new service()
export default service