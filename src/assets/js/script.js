//  portfolio......... 

(function() {

    var slidersContainer = document.querySelector('.sliders-container');


    // Initializing the numbers slider
    var msNumbers = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--numbers',
        range: [1, 4],
        rangeContent: function(i) {
            return '0' + i;
        },
        style: {
            transform: [{ scale: [0.4, 1] }],
            opacity: [0, 1]
        },
        interactive: false
    });

    // Initializing the titles slider
    var titles = [
        'Application Services',
        'Oracle',
        'Security',
        'Mobile Application Services',
        'Web Branding'
    ];
    var msTitles = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--titles',
        range: [0, 4],
        rangeContent: function(i) {
            return '<h1 class="text-dark text">' + titles[i] + '</h1>';
        },
        vertical: true,
        reverse: true,
        style: {
            opacity: [0, 1]
        },
        interactive: true
    });

    // Initializing the links slider
    var msLinks = new MomentumSlider({
        el: slidersContainer,
        cssClass: 'ms--links',
        range: [0, 3],
        rangeContent: function() {
            return '<a class="ms-slide__link">View Project</a>';
        },
        vertical: true,
        interactive: false,

    });

    // Get pagination items
    var pagination = document.querySelector('.port-pagination');
    var paginationItems = [].slice.call(pagination.children);

    // Initializing the images slider
    var msImages = new MomentumSlider({
        // Element to append the slider
        el: slidersContainer,
        // CSS class to reference the slider
        cssClass: 'ms--images',
        // Generate the 4 slides required
        range: [0, 4],
        rangeContent: function() {
            return '<div class="ms-slide__image-container"><div class="ms-slide__image"></div></div>';
        },
        // Syncronize the other sliders
        sync: [msNumbers, msTitles, msLinks],
        // Styles to interpolate as we move the slider
        style: {
            '.ms-slide__image': {
                transform: [{ scale: [1.5, 1] }]
            }
        },
        // Update pagination if slider change
        change: function(newIndex, oldIndex) {
            if (typeof oldIndex !== 'undefined') {
                paginationItems[oldIndex].classList.remove('port-pagination__item--active');
            }
            paginationItems[newIndex].classList.add('port-pagination__item--active');
        },
        // autoPlay: function() {
        //     var $alist = $('a', '.port-pagination__button');
        //     var i = 0;
        //     var self = this;
        //     this.interval = setInterval(function() {
        //         var $a = $alist.eq(i++);
        //         i %= $alist.length;
        //         self.moveTo($a);
        //     }, 1000);
        // },
        // init: function() {
        //     this.autoPlay();
        // }

    });

    // Select corresponding slider item when a pagination button is clicked
    pagination.addEventListener('click', function(e) {
        if (e.target.matches('.port-pagination__button')) {
            var index = paginationItems.indexOf(e.target.parentNode);
            msImages.select(index);
        }

    });



    //parallax scroll

})();


// recognitions testimonial slider...