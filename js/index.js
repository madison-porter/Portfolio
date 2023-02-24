console.log (hi);

$("#about").on({mouseenter: function (){
    $("#about").css({
        "font-weight":"bold"
    });
},
    mouseleave: function () {
        $ ("#about").css ({
            "font-weight":"normal"
        });
    }

});

$("#resume").on({mouseenter: function (){
    $("#resume").css({
        "font-weight":"bold"
    });
},
    mouseleave: function () {
        $ ("#resume").css ({
            "font-weight":"normal"
        });
    }

});

$("#linkedin").on({mouseenter: function (){
    $("#linkedin").css({
        "font-weight":"bold"
    });
},
    mouseleave: function () {
        $ ("#linkedin").css ({
            "font-weight":"normal"
        });
    }

});

$(".btn").on({mouseenter: function (){
    $(".btn").css({
        "font-weight":"bold"
    });
},
    mouseleave: function () {
        $ (".btn").css ({
            "font-weight":"normal"
        });
    }

});


$(".navbar-brand").on({mouseenter: function (){
    $(".navbar-brand").css({
        "font-weight":"bold"
    });
},
    mouseleave: function () {
        $ (".navbar-brand").css ({
            "font-weight":"normal"
        });
    }

});
