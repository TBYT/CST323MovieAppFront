export class User
{   //User Model

    private id : number;
    public get _userId() : number {
        return this.id;
    }
    public set _userId(v : number) {
        this.id = v;
    }
    
    private username : string;
    public get _username() : string {
        return this.username;
    }
    public set _username(v : string) {
        this.username = v;
    }

    private password : string;
    public get _password() : string {
        return this.password;
    }
    public set _password(v : string) {
        this.password = v;
    }
    
    private email : string;
    public get _email() : string {
        return this.email;
    }
    public set _email(v : string) {
        this.email = v;
    }
    
    constructor(userId: number, username: string, password: string, email: string)
    {
        this.id = userId;
        this.email = email;
        this.username = username;
        this.password = password;
    }
}