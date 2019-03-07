export class Music {
    private attr: any;
    private artist: any;
    private duration: any;
    private image: any[];
    private listeners: any;
    private mbid: any;
    private name: any;
    private streamable: any;
    private url: any;

    constructor (value: any = {}) {
        Object.assign(this, {
            attr: value['@attr'] || null,
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
