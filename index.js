
/**
 * Expose `toolkit` component.
 */

module.exports = toolkit;

/**
 * container
 */

function toolkit() {
  if (!(this instanceof toolkit)) return new toolkit;
  this.tool = {};

  return this;
}

/**
 * Add a component
 *
 * @param {String} component component number
 */

toolkit.prototype.add= function(cmp){
  this.tool[cmp] = require(cmp);
  return this;
};
