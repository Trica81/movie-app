import { Tag } from './tag';

export class Song {
    public link: string;
    public mbid: string;
    public publishDate: string;
    public songAlbum: string;
    public songArtist: string;
    public songName: string;
    public src: string;
    public tags: Tag[];
    public wiki: string;

    constructor ( value: any = {}) {
        Object.assign(this, {
            link: value.link || null,
            mbid: value.mbid || null,
            publishDate: value.publishDate || null,
            songAlbum: value.songAlbum || null,
            songArtist: value.songArtist || null,
            songName: value.songName || null,
            src: value.src || null,
            tags: value.tags || null,
            wiki: value.wiki || null,
        });
    }
}
