const preloaderTemplate = () => {
    return  `
        <div class="loader" data-type="preloader">
            <span class="loader__text">Loading</span>
            <div class="loader__container">
                <div class="loader__dot loader__dot-1"></div>
                <div class="loader__dot loader__dot-2"></div>
                <div class="loader__dot loader__dot-3"></div>
                <div class="loader__dot loader__dot-4"></div>
            </div>
         </div>
    `;
}

export {
    preloaderTemplate
}