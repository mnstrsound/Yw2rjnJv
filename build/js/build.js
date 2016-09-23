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

    var onSuccess = function(result) {
        console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
        console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
    };

    var onError = function(msg) {
        console.log("Sharing failed with message: " + msg);
    };

    $('.card__share a').click(function (e) {
        e.preventDefault();
        e.stopPropagation();

        var $link = $(this);
        var options = {
            message: 'Share It!',
            subject: 'Share!',
            files: $link.attr('href')
        }
        console.log(options);
        window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
    })
});
