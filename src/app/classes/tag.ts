export class Tag {
    public url: string;
    public name: string;

    constructor( tag: any = {}) {
        if ( tag ) {
            Object.assign(this, {
                name: tag.name || null,
                url: tag.url || null
            });
        }
    }
}
