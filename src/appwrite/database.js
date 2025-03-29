import config from "../config/config";

import { Client,ID,Databases,Storage,Query} from 'appwrite';

export class Service {
    client=new Client();
    databases;
    bucket;
    constructor(){
        this.client
        setEndPoint(config.appwriteurl)
        setProject(config.appwriteProjectId);
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
return await this.databases.createDocument(
    config.appwriteDatabaseId,
    config.appwriteCollectionId,
    slug,
    {
        title,
        content,
        featuredImage,
        status,
        userId,
    }

)
        } catch (error) {
            console.log("appwrite error",error)
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
return await this.databases.updateDocument(
    config.appwriteDatabaseId,
    config.appwriteCollectionId,
    slug,
    {
        title,
        content,
        featuredImage,
        status,
    }

)
        } catch (error) {
            console.log("appwrite error",error)
        }
    }


    async deletePost(slug){
        try {
     await this.databases.deleteDocument(
    config.appwriteDatabaseId,
    config.appwriteCollectionId,
    slug
)
    return true
        } catch (error) {
            console.log("appwrite error",error);
            return false
        }
    }
}

const service=new service()
export default service