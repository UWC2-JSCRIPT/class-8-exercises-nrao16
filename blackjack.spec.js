describe('Tests for Blackjack', () => {
/*
10, 9 passed in to function should return false
Ace, 6 passed in to function should return true
10, 6, Ace passed in to function should return false
2, 4, 2, 5 passed in should return true
*/
    describe('Test the dealerShouldDraw Method', () => {
        it('Should return true if 10, 9 in dealer hand ', () => {
            const dealerHand = [{suit: 'hearts', val: 10, displayVal: 10},
            {suit: 'hearts', val: 9, displayVal: 9}];
            console.log(dealerHand);
            const expected = false;
            const result = dealerShouldDraw(dealerHand);
            expect(result).toBe(expected);
        });

        it('Should return true if Ace, 6 in dealer hand ', () => {
            const dealerHand = [{suit: 'hearts', val: 11, displayVal: 'Ace'},
            {suit: 'hearts', val: 6, displayVal: 6}];
            console.log(dealerHand);
            const expected = true;
            const result = dealerShouldDraw(dealerHand);
            expect(result).toBe(expected);
        });

        it('Should return false if 10, 6, Ace in dealer hand ', () => {
            const dealerHand = [{suit: 'spades', val: 10, displayVal: 10},
            {suit: 'spades', val: 6, displayVal: 6},
            {suit: 'spades', val: 11, displayVal: 'Ace'},
            ];
            console.log(dealerHand);
            const expected = false;
            const result = dealerShouldDraw(dealerHand);
            expect(result).toBe(expected);
        });

        it('Should return true if 2, 4, 2, 5 in dealer hand ', () => {
            const dealerHand = [{suit: 'clubs', val: 2, displayVal: 2},
            {suit: 'clubs', val: 4, displayVal: 4},
            {suit: 'clubs', val: 2, displayVal: 2},
            {suit: 'clubs', val: 5, displayVal: 5},
            ];
            console.log(dealerHand);
            const expected = true;
            const result = dealerShouldDraw(dealerHand);
            expect(result).toBe(expected);
        });

    });
}

);