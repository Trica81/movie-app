import { Tag } from './tag';

export class Artist {
    private name: string;
    private bio: string;
    private img: string;
    private tag: Tag[];
    private url: string;
    private id: string;


    constructor (artist: any = {}) {
        if ( artist ) {
            Object.assign(this, {
                name: artist.name || null,
                bio: artist.bio || null,
                img: artist.img || null,
                tag: artist.tag || null,
                url: artist.url || null,
                id: artist.id || null
            });
        }
    }

    getName (): string {
        return this.name;
    }
}
