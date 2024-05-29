import { Client, Databases, ID, Storage, Query } from "appwrite";
import conf from "../conf/conf";

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async getPost(slug) {
        try {
            await this.databases.getDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug);
        } catch (error) {
            throw Error("Appwrite service :: getPost() :: ", error);
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            this.databases.listDocuments(conf.appwriteDatabaseId, conf.appwriteCollectionId, queries);
        } catch (error) {
            throw Error("Appwrite service :: getPosts() :: ", error);
        }
    }

    async createPost({ title, slug, content, featuredImage, status, userId }){
        try {
            return await this.databases.createDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, { title, content, featuredImage, status, userId });
        } catch (error) {
            throw Error("Appwrite service :: createPost() :: ", error);
        }
    }

    async updatePost( slug, { title, content, featuredImage, status } ) {
        try {
            return await this.databases.updateDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, { title, content, featuredImage, status });
        } catch (error) {
            throw Error("Appwrite service :: updatePost() :: ", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(conf.appwriteDatabaseId, conf.appwriteCollectionId, slug);
            return true;
        } catch (error) {
            throw Error("Appwrite service :: deletePost() :: ", error);
        }
    }

    // storage services

    async uploadFile(file) {
        try {
            return await this.bucket.createFile(conf.appwriteBucketId, ID.unique(), file);
        } catch (error) {
            throw Error("Appwrite service :: uploadFile() :: ", error);
        }
    }

    async deleteFile(fileId) {
        try {
            return await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
        } catch (error) {
            throw Error("Appwrite service :: deleteFile() :: ", error);
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(conf.appwriteBucketId, fileId).href;
    }
}

const service = new Service();
export default service;