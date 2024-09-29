import Component from './component.js'
import { assign, config, customEvents } from './utils'

let installed = false

const vue3Touch = { config, customEvents }

// Plugin API
// *********
vue3Touch.install = function install(app, opts = {}) {
	const name = opts.name || 'vue3-touch'
	app.component(name, assign(Component, { name }))
	installed = true
}.bind(vue3Touch)

vue3Touch.registerCustomEvent = function registerCustomEvent(event, options = {}) {
	if (installed) {
		console.warn(`
      [vue3-touch]: Custom Event '${event}' couldn't be added to vue3-touch.
      Custom Events have to be registered before installing the plugin.
      `)
		return
	}
	options.event = event
	customEvents[event] = options
	Component.props[`${event}Options`] = {
		type: Object,
		default() {
			return {}
		},
	}
}.bind(vue3Touch)

vue3Touch.component = Component

export default vue3Touch
