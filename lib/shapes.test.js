// import classes from the shapes.js folder
const {Circle, Triangle, Square} = require('./shapes.js');

// Test for Circle
describe('Circle', () => {
    test('circle with blue background', () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="125" cy="175" r="120" fill="blue" />');
    })
});

// Test for Triangle



// Test for Square

