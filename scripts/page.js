window.onload = function(){



    var theater = new TheaterJS();

    theater
        .describe("who", 2, '.who')

        .write("who:undefined", 3000)
        .write("who:NaN", 1400)
        .write("who:display: ", 1000, "none", 400)
        .write("who:chak_zefir", 1400)
        .write("who:front-end", 1400);
};