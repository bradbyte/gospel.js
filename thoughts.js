const TRUE = 'true',
      HONORABLE = 'honorable',
      JUST = 'just',
      PURE = 'pure',
      LOVELY = 'lovely',
      COMMENDABLE = 'commendable',
      EXCELLENT = 'excellent',
      PRAISEWORTHY = 'praiseworthy';

class Mind {
  constructor(thoughts) {
    this.thoughts = thoughts;
  }
  
  think() {
    this.thoughts
      .filter(thing => this.shouldThink(thing))
      .forEach(thing => thing.think());
  }
}

/**
 * Romans 8:7, ESV
 * For the mind that is set on the flesh is hostile to God, for it does not submit to 
 * God's law; indeed, it cannot.
 */
class FleshlyMind extends Mind {
  shouldThink(thought) {
    return true;
  }
}

/**
 * Philippians 2:5, NKJV
 * Let this mind be in you which was also in Christ Jesus.
 */
class ChristMind extends Mind {
  shouldThink(thought) {
    /**
     * Philippians 4:8-9, ESV
     * Finally, brothers, whatever is true, whatever is honorable, whatever is just, 
     * whatever is pure, whatever is lovely, whatever is commendable, if there is any 
     * excellence, if there is anything worthy of praise, think about these things. 
     * What you have learned and received and heard and seen in me—practice these things, 
     * and the God of peace will be with you.
     */
    return thought.attributes
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
}

class Thought {
  constructor(thing, attributes) {
    this.thing = thing;
    this.attributes = attributes;
  }

  think() {
    console.log(this.thing);
  }
}

exports.Mind = Mind;
exports.FleshlyMind = FleshlyMind;
exports.ChristMind = ChristMind;
exports.Thought = Thought;
