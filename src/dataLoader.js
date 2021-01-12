const dataLoader = async (preloader, requester) => {
    preloader.show();
    const data = await requester.getData();
    preloader.hide();
    return data;
}

export {
    dataLoader
}