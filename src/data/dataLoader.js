const dataLoader = async (preloader, requester) => {
    preloader.show();
    const data = await requester.get();
    preloader.hide();
    return data;
}

export {
    dataLoader
}