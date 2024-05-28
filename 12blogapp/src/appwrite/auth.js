import conf from '../conf/conf'
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client.setEndpoint(conf.appwriteUrl).setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                return this.login({ email, password });
            } else {
                return Error("From auth.js/createAccount/ifelse");
            }
        } catch (error) {
            throw Error("from auth.js/createAccount :: ", error);
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw Error("from auth.js/login :: ", error);
        }
    }

    async logout() {
        try {
            await this.account.deleteSessions();
        } catch (error) {
            throw Error("Appwrite service :: logout() :: ", error);
        }
    }
    
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            throw Error("Appwrite service :: getCurrentUser() :: ", error);
        }
    }
}

const authService = new AuthService();

export default authService;