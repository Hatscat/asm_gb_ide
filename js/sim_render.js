function draw () {
	
	config.sim_buffer_ctx.fillRect(0,0,2e3,2e3);
	config.sim_canvas_ctx.drawImage(config.sim_buffer, 0, 0);
}
