const DataLoader = class {
    constructor(preloader, requester, url) {
        this.preloader = preloader;
        this.requester = requester;
        this.url = url;
    }

    async getData() {
        this.preloader.show();

        let data;
        try {
            data =  await this.requester.get(this.url);
        } catch(error) {
            console.error(error);
        }

        this.preloader.hide();
        return data;
    }
}
export {
    DataLoader
}