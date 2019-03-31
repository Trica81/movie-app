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

    constructor (music: any = {}) {
        if (music) {
            Object.assign(this, {
                attr: music.attr || null,
                artist: music.artist || null,
                duration: music.duration || null,
                image: music.image || null,
                listeners: music.listeners || null,
                mbid: music.mbid || null,
                name: music.name || null,
                streamable: music.streamable || null,
                url: music.url || null
            });
        }
    }



    public getId() {
        return this.mbid;
    }

}
