import { Artist } from './artist';

export class Music {
    public attr: string;
    public artist: Artist;
    public duration: string;
    public image: string;
    public listeners: string;
    public mbid: string;
    public name: string;
    public streamable: string;
    public url: string;

    constructor (value: any = {}) {
        Object.assign(this, {
            attr: value.attr || null,
            artist: value.artist || null,
            duration: value.duration || null,
            image: value.image || null,
            listeners: value.listeners || null,
            mbid: value.mbid || null,
            name: value.name || null,
            streamable: value.streamable || null,
            url: value.url || null
        });
    }



    public getId() {
        return this.mbid;
    }

}
