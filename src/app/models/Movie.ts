export class Movie
{   //Movie Model

    private id : number;
    public get _movieId() : number {
        return this.id;
    }
    public set _movieId(v : number) {
        this.id = v;
    }

    private title : string;
    public get _title() : string {
        return this.title;
    }
    public set _title(v : string) {
        this.title = v;
    }
    
    private description : string;
    public get _description() : string {
        return this.description;
    }
    public set _description(v : string) {
        this.description = v;
    }
    
    private director : string;
    public get _director() : string {
        return this.director;
    }
    public set _director(v : string) {
        this.director = v;
    }
    
    private length : number;
    public get _length() : number {
        return this.length;
    }
    public set _length(v : number) {
        this.length = v;
    }
    
    constructor(movieId: number, title: string, description: string, director: string, length:number)
    {
        this.id = movieId;
        this.title = title;
        this.description = description;
        this.director = director;
        this.length = length;
     }
}