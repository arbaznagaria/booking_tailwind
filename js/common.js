var array = [{
        "link": "https://cf.bstatic.com/xdata/images/xphoto/300x240/140018305.jpg?k=e65be1a66c483f1e67604884f62a78c9e338e73e052287edf17aa9a50166b6db&o=",
        "h1": "Daman",
        "desc": "5,352"
    },
    {
        "link": "https://cf.bstatic.com/xdata/images/xphoto/300x240/140018183.jpg?k=9c5c044264eeae74e558133f082a3449c14b23c4114d26a08a158c515f92f041&o=",
        "h1": "Rishīkesh",
        "desc": "5,352"
    },
    {
        "link": "https://cf.bstatic.com/xdata/images/xphoto/300x240/140018232.jpg?k=50884e9d87f49e83187be934dc300c1157b78774cdd7c8abeffca013b01f4e6a&o=",
        "h1": "Malvan",
        "desc": "5,352"
    },
    {
        "link": "https://cf.bstatic.com/xdata/images/xphoto/300x240/140018352.jpg?k=357c43ce88f013731c1c293b3bd8b3a2f41388481e1f7614b0af357edf838c67&o=",
        "h1": "Arambol",
        "desc": "5,352"
    },
    {
        "link": "https://cf.bstatic.com/xdata/images/xphoto/300x240/140018219.jpg?k=8245599b888d741f853b57797bd73064df95dd2efea9729de2d4c1fbb858295e&o=",
        "h1": "Mandrem",
        "desc": "5,352"
    },
    {
        "link": "https://cf.bstatic.com/xdata/images/xphoto/300x240/140018227.jpg?k=65616f26b5dd96602e5d345969f1b0e63b33eb842a639f7afa9a912bb2db2a65&o=",
        "h1": "Morjim",
        "desc": "5,352"
    }, {
        "link": "https://cf.bstatic.com/xdata/images/xphoto/300x240/140018305.jpg?k=e65be1a66c483f1e67604884f62a78c9e338e73e052287edf17aa9a50166b6db&o=",
        "h1": "Daman",
        "desc": "5,352"
    },
    {
        "link": "https://cf.bstatic.com/xdata/images/xphoto/300x240/140018183.jpg?k=9c5c044264eeae74e558133f082a3449c14b23c4114d26a08a158c515f92f041&o=",
        "h1": "Rishīkesh",
        "desc": "5,352"
    },
    {
        "link": "https://cf.bstatic.com/xdata/images/xphoto/300x240/140018232.jpg?k=50884e9d87f49e83187be934dc300c1157b78774cdd7c8abeffca013b01f4e6a&o=",
        "h1": "Malvan",
        "desc": "5,352"
    },
    {
        "link": "https://cf.bstatic.com/xdata/images/xphoto/300x240/140018352.jpg?k=357c43ce88f013731c1c293b3bd8b3a2f41388481e1f7614b0af357edf838c67&o=",
        "h1": "Arambol",
        "desc": "5,352"
    },
    {
        "link": "https://cf.bstatic.com/xdata/images/xphoto/300x240/140018219.jpg?k=8245599b888d741f853b57797bd73064df95dd2efea9729de2d4c1fbb858295e&o=",
        "h1": "Mandrem",
        "desc": "5,352"
    },
    {
        "link": "https://cf.bstatic.com/xdata/images/xphoto/300x240/140018227.jpg?k=65616f26b5dd96602e5d345969f1b0e63b33eb842a639f7afa9a912bb2db2a65&o=",
        "h1": "Morjim",
        "desc": "5,352"
    }
];

$(document).ready(function () {

    $($('.nav_tabs li a')).click(function (e) {
        $('.nav_tabs li a').removeClass('active');
        $(this).addClass('active');
    });

    $('#checkin').datepicker();
    $('#checkout').datepicker();

    for (var i in array) {
        var str = `
        <div class="item">
            <div class="d-block">
                <img src="${array[i].link}"
                    class="" alt="">
                <h1 class="text-base font-bold mt-3 mb-1">${array[i].h1}</h1>
                <p class="text-base font-normal text-[#6b6b6b]">${array[i].desc} Properties</p>
            </div>
        </div>
        `
        $('.places-carousel').append(str)
        $('.property-carousel').append(str)
        $('.beach-carousel').append(str)
        $('.outdoors-carousel').append(str)
        $('.relax-carousel').append(str)
        $('.city-carousel').append(str)
        $('.home-carousel').append(str)
    }


    owlcarousel('offers-carousel', 10, 1, 2, 2)
    owlcarousel('places-carousel', 10, 2, 3, 6, 25)
    owlcarousel('beach-carousel', 10, 2, 3, 6, 25)
    owlcarousel('outdoors-carousel', 10, 2, 3, 6, 25)
    owlcarousel('relax-carousel', 10, 2, 3, 6, 25)
    owlcarousel('city-carousel', 10, 2, 3, 6, 25)
    owlcarousel('property-carousel', 10, 2, 3, 4, 25)
    owlcarousel('home-carousel', 10, 2, 3, 4, 25)

    tabs('destination_tabs')
    tabs('travel_tabs')

    $('.open-modal').click(function () {
        $('.modal').addClass('flex')
        $('.modal').removeClass('hidden')
        $('body').toggleClass('modal-opened')
    })

    $('.close-btn').click(function () {
        $('.modal').removeClass('flex')
        $('.modal').addClass('hidden')
        $('body').toggleClass('modal-opened')
    })
});


function owlcarousel(classname, margin, items_0, items_600, items_1000, stagepad) {
    $('.' + classname).owlCarousel({
        loop: false,
        margin: margin,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: items_0,
                stagePadding: stagepad
            },
            600: {
                items: items_600,
                stagePadding: stagepad
            },
            1000: {
                items: items_1000,
                mouseDrag: false,
            }
        },
    })
}

function tabs(classname) {
    if ($('.' + classname + ' .tabs li a').hasClass('active')) {
        var id = $('.' + classname + ' .tabs li a.active').attr('data-id')
        $('.' + classname + ' .tabs-pane').removeClass('active')
        $('#' + id).addClass('active')
    }
    $('.' + classname + ' .tabs li a').click(function () {
        $('.' + classname + ' .tabs li a').removeClass('active')
        $(this).addClass('active')
        var id = $(this).attr('data-id')
        $('.' + classname + ' .tabs-pane').removeClass('active')
        $('#' + id).addClass('active')
    })
}

function togglemodal() {
    $('.modal').toggleClass('hidden')
    $('.modal').toggleClass('flex')
}