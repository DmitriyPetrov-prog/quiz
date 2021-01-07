const DataRequester = class {
    constructor(url) {
        this.url = url;
    }

    async getData() {
        return fetch(this.url)
            .then(res => {
                if(res.ok) {
                    return res.json();
                } else {
                    throw new Error(`Network response was not ok: status - ${res.status}, status text - ${res.statusText}`);
                }
            })
            .then(data => data)
            .catch(error => console.error(error));
    }
}

export {
    DataRequester
}