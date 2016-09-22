window.onload = function () {
    $(document).ready(function(){
        function update(event) {
            var pages     = event.item.count;
            var page      = event.item.index + 1;
            $('.owl-carousel-counter .page').text(page);
            $('.owl-carousel-counter .pages').text(pages);
        }
        $('.owl-carousel').owlCarousel({
            items: 1,
            onDragged: update,
            onInitialized: update
        });
    });
}