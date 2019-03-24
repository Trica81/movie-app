import { Tag } from './tag';

export class Artist {
    public name: string;
    public bio: string;
    public img: string;
    public tag: Tag[];
    public url: string;
    public id: string;


    constructor (value: any = {}) {
        Object.assign(this, {
            name: value.name || null,
            bio: value.bio || null,
            img: value.image || null,
            tag: value.tag || null,
            url: value.url || null,
            id: value.mbid || null
        });
    }
}
