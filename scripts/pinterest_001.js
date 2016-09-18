(function() {
    function ready() {
        var menuElement = document.getElementById('category-menu');

        var toggleElement = document.getElementById('category-toggle');

        var fixedLayoutElement = document.getElementById('category-menu');

        var offset = {
            left: 355,
            top: 15
        };

        fixedLayoutElement.addEventListener('click', function(event) {
            event.stopPropagation();
        });


        document.addEventListener('click', function(event) {
            console.log('document click: ' + new Date());
            menuElement.style.display = 'none';
        });


        toggleElement.addEventListener('click', function(event) {
            var action = menuElement.style.display === 'block' ? 'hide' : 'show'

            if (action === 'show') {
                var position = event.currentTarget.getBoundingClientRect();

                menuElement.style.display = 'block';
                menuElement.style.left = (position.left - offset.left) + 'px';
                menuElement.style.top = (position.bottom + offset.top) + 'px';
            } else {
                menuElement.style.display = 'none';
            }

            event.stopPropagation();

        });
    };

    document.addEventListener("DOMContentLoaded", function(event) {
        ready();
    });
})();