const dataLoader = async (loader, requester) => {
    loader.render();
    const data = await requester.getData();
    loader.clear();
    return data;
}

export {
    dataLoader
}