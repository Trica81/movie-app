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

    constructor ( song: any = {}) {
        if ( song )  {
            Object.assign(this, {
                link: song.link || null,
                mbid: song.mbid || null,
                publishDate: song.publishDate || null,
                songAlbum: song.songAlbum || null,
                songArtist: song.songArtist || null,
                songName: song.songName || null,
                src: song.src || null,
                tags: song.tags || null,
                wiki: song.wiki || null,
            });
        }
    }
}
