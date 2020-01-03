const Car = require('../Car');
const chai = require('chai');

const should = chai.should();
const machFive = new Car('red', true);
const jalopy = new Car('brown', false);

describe('a new car', ()=>{
    it('should have a given color', ()=>{
        machFive.color.should.be.eql('red');
        jalopy.color.should.be.eql('brown');
    })
    it('should be defined as a convertible or not', ()=>{
        machFive.convertible.should.be.eql(true);
        jalopy.convertible.should.be.eql(false);
    })
    it('should start with 0 speed', ()=>{
        machFive.speed.should.be.eql(0);
        jalopy.speed.should.be.eql(0);
    })
    it('should be able to accelerate by a given amount', ()=>{
        machFive.accelerate(25);
        machFive.speed.should.be.eql(25);
        machFive.accelerate(10);
        machFive.speed.should.be.eql(35);
        jalopy.accelerate(5);
        jalopy.speed.should.be.eql(5);
    })
    it('should be able to decelerate by a given amount', ()=>{
        machFive.decelerate(10);
        machFive.speed.should.be.eql(25);
        jalopy.decelerate(5);
        jalopy.speed.should.be.eql(0);
    })
})