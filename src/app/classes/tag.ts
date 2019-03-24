export class Tag {
    public url: string;
    public name: string;

    constructor( value: any = {}) {
        Object.assign(this, {
            name: value.name || null,
            url: value.url || null
        });
    }
}
