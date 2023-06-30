// Змініть код методів up, down і showStep таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад: ladder.up().up().down().showStep(); // 1

let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this;
    },
    down: function () {
        this.step--;
        return this;
    },
    showStep: function () { // показує теперішню сходинку
        alert(this.step);
        return this;
    }
};

ladder.up().up().down().showStep();