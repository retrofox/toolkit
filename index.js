
/**
 * Expose `toolkit` component.
 */

module.exports = toolkit;

/**
 * Toolkit container
 *
 * @param {Function} require parent require function
 * @param {Array} components components collections (optional)
 * @api public
 */

function toolkit(require, components) {
  if (!(this instanceof toolkit)) return new toolkit(require, components);
  this._require = require;
  this.tool = {};

  if (components) {
    for (var i = 0; i < components.length; i++) {
      this.add(components[i]);
    }
  }

  return this;
}

/**
 * Add a component
 *
 * @param {String} component component name
 * @api public
 */

toolkit.prototype.add= function(cmp){
  if (this.tool[cmp]) return;
  this.tool[cmp] = this._require(cmp);
  return this;
};
