export class Movie {
    private id: Number;
    private title: String;
    private description: String;
    private year: String;
    private imageSource: String;
    private actors: String[];
    private director: String;
    private rating: Number;

    constructor (value: any = {}) {
        Object.assign(this, {
            id: value.id || null,
            title: value.title || null,
            description: value.description || null,
            year: value.year || null,
            imageSource: value.imageSource || null,
            actors: value.actors || [],
            director: value.director || null,
            rating: value.rating || null
        });
    }

    public logActors() {
        console.log(`Actors who played in ' ${this.title} ' are ${this.actors}.`);
    }

    public getActors() {
        return this.actors;
    }

    public getId() {
        return this.id;
    }

}
