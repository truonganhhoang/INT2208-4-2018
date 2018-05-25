var isSearching = false;

function showHideSearch() {
    if (isSearching) {
        hideSearch();
        isSearching=!isSearching;
    } else {
        showSearch();
        isSearching=!isSearching;
    }
}


function showSearch() {
    $('#nav-home').addClass("d-none d-lg-block");
    $('#nav-create').addClass("d-none d-lg-block");
    $('#nav-profile').addClass("d-none d-lg-block");
    $('#close-search').removeClass("d-none");

    $('#nav-search-mobile').removeClass("d-lg-none d-block");
    $('#nav-search-mobile').addClass("d-none d-lg-block");
    $('#nav-search-pc').removeClass("d-none");
    $('#nav-search-pc').addClass("d-block");
    return true;
}

function hideSearch() {
    $('#nav-home').removeClass("d-none d-lg-block");
    $('#nav-create').removeClass("d-none d-lg-block");
    $('#nav-profile').removeClass("d-none d-lg-block");
    $('#close-search').addClass("d-none");

    $('#nav-search-mobile').removeClass("d-none d-lg-block");
    $('#nav-search-mobile').addClass("d-lg-none d-block");
    $('#nav-search-pc').removeClass("d-block");
    $('#nav-search-pc').addClass("d-none");
}
