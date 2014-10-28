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
	editor_options: {
		value: ';\n; ********************************************\n; * [Add Project title here] *\n; * [Add more info on software version here] *\n; * (C)20xx by [Add Copyright Info here] *\n; ********************************************\n;\n; Included header file for target AVR type\n.NOLIST\n.INCLUDE "m328def.inc" ; Header for ATMEGA328\n.LIST\n;\n; ============================================\n; H A R D W A R E I N F O R M A T I O N \n; ============================================\n;\n; [Add all hardware information here]\n;\n; ============================================\n; P O R T S A N D P I N S \n; ============================================\n;\n; [Add names for hardware ports and pins here]\n; Format: .EQU Controlportout = PORTA\n; .EQU Controlportin = PINA\n; .EQU LedOutputPin = PORTA2\n;\n; ============================================\n; C O N S T A N T S T O C H A N G E \n; ============================================\n;\n; [Add all constants here that can be subject\n; to change by the user]\n; Format: .EQU const = $ABCD\n;\n; ============================================\n; F I X + D E R I V E D C O N S T A N T S \n; ============================================\n;\n; [Add all constants here that are not subject\n; to change or calculated from constants]\n; Format: .EQU const = $ABCD\n;\n; ============================================\n; R E G I S T E R D E F I N I T I O N S\n; ============================================\n;\n; [Add all register names here, include info on\n; all used registers without specific names]\n; Format: .DEF rmp = R16\n.DEF rmp = R16 ; Multipurpose register\n;\n; ============================================\n; S R A M D E F I N I T I O N S\n; ============================================\n;\n.DSEG\n.ORG 0X0060\n; Format: Label: .BYTE N ; reserve N Bytes from Label:\n;\n; ============================================\n; R E S E T A N D I N T V E C T O R S\n; ============================================\n;\n.CSEG\n.ORG $0000\nrjmp Main ; Reset vector\nreti ; Int vector 1\nreti ; Int vector 2\nreti ; Int vector 3\nreti ; Int vector 4\nreti ; Int vector 5\nreti ; Int vector 6\nreti ; Int vector 7\nreti ; Int vector 8\nreti ; Int vector 9\n;\n; ============================================\n; I N T E R R U P T S E R V I C E S\n; ============================================\n;\n; [Add all interrupt service routines here]\n;\n; ============================================\n; M A I N P R O G R A M I N I T\n; ============================================\n;\nMain:\n; Init stack\nldi rmp, LOW(RAMEND) ; Init LSB stack\nout SPL,rmp\n; Init Port B\nldi rmp,(1<<DDB2)|(1<<DDB1)|(1<<DDB0) ; Direction of Port B\nout DDRB,rmp\n; [Add all other init routines here]\nldi rmp,1<<SE ; enable sleep\nout MCUCR,rmp\nsei\n;\n; ============================================\n; P R O G R A M L O O P\n; ============================================\n;\nLoop:\nsleep ; go to sleep\nnop ; dummy for wake up\nrjmp loop ; go back to loop\n;\n; End of source code\n;',
		mode: "gas",
		theme: "monokai",
		keyMap: "sublime"
	},
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