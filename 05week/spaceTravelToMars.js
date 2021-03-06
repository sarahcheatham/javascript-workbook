'use strict';

let assert = require('assert');

let jobTypes = {
  pilot: 'MAV',
  mechanic: 'Repair Ship',
  commander: 'Main Ship',
  programmer: 'Any Ship!'
};

// Your code here

//CrewMember class will have a name, job, special skill and ship
class CrewMember {
  constructor(name, job, specialSkill, ship){
    this.name = name,
    this.job = job,
    this.specialSkill = specialSkill,
    this.ship = null
  }
  enterShip(newShip){
    newShip.addCrew(this);
    this.ship = newShip
  }
}

// enterShip(ship) {
//   this.ship = ship;
//   ship.crew.push(this)
// }

//once you assign a crew member to the Ship class it will add the crew member to the crew array
//ship that the crew

//Ship class will pass into the CrewMember class
//Ship class will take in a name, type, ability, and empty crew[]
class Ship{
  constructor(name, type, ability){
    this.name = name,
    this.type = type,
    this.ability = ability,
    this.crew = []
  }
  addCrew(crewMember){
    this.crew.push(crewMember)
  }
  missionStatement(){
    if(this.crew.length > 0){
      return this.ability
    }else{
      return 'Can\'t perform a mission yet.'
    }
  }
}

//missionStatement function
//a crew member cannot start a mission until you assign it to a ship 
//once you assign it to a ship it should return the ship's mission statement

let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');

let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');

let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');

let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');

crewMember1.enterShip(mav)
crewMember2.enterShip(hermes)
console.log(mav)
console.log(hermes)


//tests
//build a class called CrewMember
if (typeof describe === 'function'){
  describe('CrewMember', function(){
    it('should have a name, a job, a specialSkill and ship upon instantiation', function(){
      var crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
    });

    //method enterShip() in the CrewMember class
    it('can enter a ship', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });
//build a class called Ship
//constructor(name, type, ability) this.crew = []
  describe('Ship', function(){
    it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    });
    //method missionStatement() in the Ship class 
    //calls method by ship names mav and hermes
    it('can return a mission statement correctly', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      let crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
      let crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit");

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });
}
