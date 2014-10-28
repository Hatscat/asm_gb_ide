window.addEventListener('load', function () {

	var editor = CodeMirror(config.divs.editor, config.editor_options);
	bloc_size();

	config.sim_buffer = config.sim_canvas.cloneNode(false);
	config.sim_buffer_ctx = config.sim_buffer.getContext('2d');



	set_dom_events();
	draw();
});

function bloc_size () {

	config.divs.editor.childNodes[1].style.height = config.divs.editor.style.height = config.h * .8 + 'px';
	config.sim_canvas.width = config.screen_col * config.sim_px_ratio;
	config.sim_canvas.height = config.screen_row * config.sim_px_ratio;

	// config.divs.menu
	// config.divs.console
	// config.divs.simulator
	// config.divs.inputs
	// config.divs.data

}