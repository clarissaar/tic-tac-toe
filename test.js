describe('tic tac toe', function () {
    var elements = {};
    var lastMsg = "";

    beforeEach(function () {
        elements = {};
        getById = function (id) {
            if (elements[id]) {
                return elements[id];
            }
            else {
                elements[id] = {textContent: ""};
                return elements[id];
            }
        };
        playAgain();
        msg = function (s) {
            lastMsg = s;
        }
    });

    it('can play one turn for X', function (done) {
        assert.equal(getById("c11").textContent, "");
        move("c11");
        assert.equal(getById("c11").textContent, "X");
        done();
    });

    it('can play one turn for O', function (done) {
        move("c11");
        assert.equal(getById("c12").textContent, "");
        move("c12");
        assert.equal(getById("c12").textContent, "O");
        done();
    });

    it('cant overwrite other player', function (done) {
        assert.equal(getById("c11").textContent, "");
        move("c11");
        assert.equal(getById("c11").textContent, "X");
        move("c11");
        assert.equal(getById("c11").textContent, "X");
        assert.equal(lastMsg, "Oops, this box has been selected!");
        done();
    });

    it('should say X winnner', function (done) {
        move("c11");
        move("c12");
        move("c21");
        move("c22");
        move("c31");
        assert.equal(lastMsg, "The winner is 'X'");
        done()
    });

    it('should say O winnner', function (done) {
        move("c11");
        move("c12");
        move("c13");
        move("c22");
        move("c21");
        move("c32");
        assert.equal(lastMsg, "The winner is 'O'");
        done()
    });

    it('should say no winnner', function (done) {
        move("c11");
        move("c33");
        move("c21");
        move("c31");
        move("c32");
        move("c22");
        move("c13");
        move("c12");
        move("c23");
        assert.equal(lastMsg, "There wasn't winner");
        done()
    });
});