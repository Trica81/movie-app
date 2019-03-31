export class InfoMessage {
    private message: string;
    private msgClass: string;

    constructor(info: any = {}) {
        if (info) {
            Object.assign(this, {
                message: info.message,
                msgClass: info.class
            });
        }
    }
}
