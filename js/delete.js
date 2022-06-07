jQuery( document ).ready( function( $ ) {
    // document.addEventListener('DOMContentLoaded', function (event) {
    //     const lightbox = document.createElement('div');
    //     lightbox.id = 'lightbox';
    //     document.body.appendChild(lightbox);
    //
    //     const images = document.querySelectorAll('img');
    //
    //     images.forEach(image => {
    //         image.addEventListener('click', e => {
    //             lightbox.classList.add('active')
    //             const img = document.createElement('img');
    //             img.src = image.src
    //             while (lightbox.firstChild) {
    //                 lightbox.removeChild(lightbox.firstChild);
    //             }
    //             lightbox.appendChild(img)
    //         })
    //     })
    //
    //     lightbox.addEventListener('click', e => {
    //         if (e.target !== e.currentTarget) return
    //         lightbox.classList.remove('active');
    //     })


        $("#wpsl-radius select.wpsl-dropdown").on('change', function (e) {
            console.log("A changed")

            var radiusSelected = parseInt($("#wpsl-radius-dropdown").val())
            var isSearch = $("#wpsl-search-input").val();

            if ((radiusSelected !== 0) && isSearch && !checkMobileUserAgent()) {
                $("#wpsl-results span.wpsl-selected-item").click();
            } else if ((radiusSelected !== 0) && isSearch && checkMobileUserAgent()) {
                $("body").click()
                $("#wpsl-results select.wpsl-dropdown").focus();
            }
        })
})


document.querySelector("#wpsl-radius select.wpsl-dropdown").addEventListener('change', function (e) {
    console.log("A changed")

    var radiusSelected = parseInt(document.querySelector("#wpsl-radius-dropdown").value)
    var isSearch = document.querySelector("#wpsl-search-input").value;

    if ((radiusSelected !== 0) && isSearch) {
        document.querySelector("#wpsl-results select.wpsl-dropdown").focus();
    }
})
