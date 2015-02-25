var theater = new TheaterJS();

theater
    .describe("who", 2, '.who')

    .write("who:undefined", 3000)
    .write("who:NaN", 1400)
    .write("who:display: ", 1000, "none", 400)
    .write("who:Chak Zefir", 1400)
    .write("who:Sergey Chikirev", 1400);