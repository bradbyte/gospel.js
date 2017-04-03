const TRUE = 'true',
      HONORABLE = 'honorable',
      JUST = 'just',
      PURE = 'pure',
      LOVELY = 'lovely',
      COMMENDABLE = 'commendable',
      EXCELLENT = 'excellent',
      PRAISEWORTHY = 'praiseworthy';

class Thoughts extends Mind {
  constructor(thoughts) {
    this.thoughts = thoughts;
  }

  think() {
    this.thoughts
      .filter(thing => thing.shouldThink())
      .forEach(thing => thing.think());
  }

}

class Thing {
  constructor(thing, attributes) {
    this.thing = thing;
    this.attributes = attributes;
  }

  shouldThink() {
    /**
     * Philippianss 4:8-9, ESV
     * Finally, brothers, whatever is true, whatever is honorable, whatever is just, 
     * whatever is pure, whatever is lovely, whatever is commendable, if there is any 
     * excellence, if there is anything worthy of praise, think about these things. 
     * What you have learned and received and heard and seen in me—practice these things, 
     * and the God of peace will be with you.
     */
    return this.attributes
      .filter(attr => attr == TRUE || 
                      attr == HONORABLE ||
                      attr == JUST ||
                      attr == PURE ||
                      attr == LOVELY ||
                      attr == COMMENDABLE ||
                      attr == EXCELLENT ||
                      attr == PRAISEWORTHY)
      .length > 0;
  }

  think() {
    console.log(this.thing);
  }
}

exports.Thoughts = Thoughts;
exports.Thought = Thought;