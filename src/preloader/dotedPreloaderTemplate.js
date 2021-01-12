const dotedPreloaderTemplate = () => {
    return  `
        <div class="doted_loader" data-type="preloader">
            <span class="doted_loader__text">Loading</span>
            <div class="doted_loader__container">
                <div class="doted_loader__dot doted_loader__dot-1"></div>
                <div class="doted_loader__dot doted_loader__dot-2"></div>
                <div class="doted_loader__dot doted_loader__dot-3"></div>
                <div class="doted_loader__dot doted_loader__dot-4"></div>
            </div>
         </div>
    `;
}

export {
    dotedPreloaderTemplate
}