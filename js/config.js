// global scope :)
config = {

	screen_col: 84,
	screen_row: 48,
	sim_px_ratio: window.innerWidth / 180 | 0,
	w: window.innerWidth,
	h: window.innerHeight,
	hw: window.innerWidth / 2,
	hh: window.innerHeight / 2,
	latestKeyCode: 0,
	sim_canvas: document.getElementById('sim_canvas'),
	sim_canvas_ctx: document.getElementById('sim_canvas').getContext('2d'),
	data_table: document.getElementById('data_table'),
	divs: {
		menu: document.getElementById('menu_div'),
		editor: document.getElementById('editor_div'),
		console: document.getElementById('console_div'),
		simulator: document.getElementById('simulator_div'),
		inputs: document.getElementById('inputs_div'),
		data: document.getElementById('data_div')
	},
	buttons: {
		step: document.getElementById('step_bt'),
		run: document.getElementById('run_bt'),
		stop: document.getElementById('stop_bt'),
		save: document.getElementById('save_bt'),
		load: document.getElementById('load_bt'),
		reset: document.getElementById('reset_bt'),
		registers: document.getElementById('registers_bt'),
		io: document.getElementById('io_bt'),
		flash: document.getElementById('flash_bt'),
		eeprom: document.getElementById('eeprom_bt'),
		sram: document.getElementById('sram_bt')
	},
	inputs: {
		left: document.getElementById('left_in'),
		right: document.getElementById('right_in'),
		up: document.getElementById('up_in'),
		down: document.getElementById('down_in'),
		a: document.getElementById('a_in'),
		b: document.getElementById('b_in'),
		c: document.getElementById('c_in')
	},
	sim_in_keyCodes: {
		left: 81, // q
		right: 68, // d
		up: 90, // z
		down: 83, // s
		a: 65, // a
		b: 69, // e
		c: 82 //r
	}
};