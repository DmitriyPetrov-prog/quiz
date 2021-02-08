import {Requester} from "./Requester";

const Fetch = class extends Requester{
    constructor() {
        super();
    }

    get(url) {
        return fetch(url)
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
    Fetch
}