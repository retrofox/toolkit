
/**
 * Expose `boxTool` component.
 */

module.exports = boxTool;

/**
 * container
 */

function boxTool() {
  if (!(this instanceof boxTool)) return new boxTool;
  this.tool = {};

  return this;
}

/**
 * Add a component
 *
 * @param {String} component component number
 */

boxTool.prototype.add= function(cmp){
  this.tool[cmp] = require(cmp);
  return this;
};
