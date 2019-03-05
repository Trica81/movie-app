export class Music {
    private attr: Object;
    private artist: Object;
    private duration: String;
    private image: Object[];
    private listeners: String;
    private mbid: String;
    private name: String;
    private streamable: Object;
    private url: String;
    private helper = '@attr';

    constructor (value: any = {}) {
        Object.assign(this, {
            attr: value[this.helper] || null,
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
