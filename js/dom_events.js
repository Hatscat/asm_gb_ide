function set_dom_events () {

	var bt_events = {
		step: function () {
			console.log('step !');
		},
		run: function () {
			console.log('run !');
		},
		stop: function () {
			console.log('stop !');
		},
		save: function () {
			console.log('save !');
		},
		load: function () {
			console.log('load !');
		},
		reset: function () {
			console.log('reset !');
		},
		registers: function () {
			console.log('registers !');
		},
		io: function () {
			console.log('io !');
		},
		flash: function () {
			console.log('flash !');
		},
		eeprom: function () {
			console.log('eeprom !');
		},
		sram: function () {
			console.log('sram !');
		}
	};

	for (var i in config.buttons) {

		if (config.buttons.hasOwnProperty(i)) {
			config.buttons[i].addEventListener('click', bt_events[i]);
		}
	}

	for (var i in config.inputs) {

		if (config.inputs.hasOwnProperty(i)) {

			config.inputs[i].in_input = function (e) {

				var bt_name = this.id.slice(0, -3);
				var duplicate = false;

				for (var i in config.sim_in_keyCodes) {
					if (i != bt_name && config.sim_in_keyCodes[i] == config.latestKeyCode) {
						duplicate = i;
						break;
					}
				}
				if (duplicate) {
					config.sim_in_keyCodes[duplicate] = null;
					config.inputs[duplicate].value = null;
				}

				config.sim_in_keyCodes[bt_name] = config.latestKeyCode;
				config.inputs[bt_name].value = config.inputs[bt_name].value.slice(-1);
				// console.log(config.sim_in_keyCodes);
			}

			config.inputs[i].addEventListener('input', config.inputs[i].in_input);
		}
	}

	window.addEventListener('keydown', function (e) {

		config.latestKeyCode = e.keyCode;
	});
}