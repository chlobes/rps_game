/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".index.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"./pkg/rps_game_client_bg.wasm": function() {
/******/ 			return {
/******/ 				"./rps_game_client.js": {
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_cb_forget": function(p0i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__wbindgen_cb_forget"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__wbg_error_4bb6c2a97407129a": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__wbg_error_4bb6c2a97407129a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_59cb74e423758ede": function() {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__wbg_new_59cb74e423758ede"]();
/******/ 					},
/******/ 					"__wbg_stack_558ba5917b466edd": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__wbg_stack_558ba5917b466edd"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_get_element_by_id_Document": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_get_element_by_id_Document"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__widl_f_body_Document": function(p0i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_body_Document"](p0i32);
/******/ 					},
/******/ 					"__widl_f_remove_attribute_Element": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_remove_attribute_Element"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__widl_f_set_attribute_Element": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_set_attribute_Element"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__widl_f_client_width_Element": function(p0i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_client_width_Element"](p0i32);
/******/ 					},
/******/ 					"__widl_f_client_height_Element": function(p0i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_client_height_Element"](p0i32);
/******/ 					},
/******/ 					"__widl_f_set_inner_html_Element": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_set_inner_html_Element"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__widl_f_message_ErrorEvent": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_message_ErrorEvent"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_add_event_listener_with_callback_EventTarget": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_add_event_listener_with_callback_EventTarget"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__widl_f_new_FileReader": function() {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_new_FileReader"]();
/******/ 					},
/******/ 					"__widl_f_read_as_array_buffer_FileReader": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_read_as_array_buffer_FileReader"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_result_FileReader": function(p0i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_result_FileReader"](p0i32);
/******/ 					},
/******/ 					"__widl_instanceof_HTMLCanvasElement": function(p0i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_instanceof_HTMLCanvasElement"](p0i32);
/******/ 					},
/******/ 					"__widl_f_get_context_HTMLCanvasElement": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_get_context_HTMLCanvasElement"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__widl_f_set_onclick_HTMLElement": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_set_onclick_HTMLElement"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_set_onload_HTMLElement": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_set_onload_HTMLElement"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_set_onmousedown_HTMLElement": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_set_onmousedown_HTMLElement"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_set_onmousemove_HTMLElement": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_set_onmousemove_HTMLElement"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_set_onmouseup_HTMLElement": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_set_onmouseup_HTMLElement"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_new_Image": function() {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_new_Image"]();
/******/ 					},
/******/ 					"__widl_f_set_src_HTMLImageElement": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_set_src_HTMLImageElement"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__widl_instanceof_HTMLInputElement": function(p0i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_instanceof_HTMLInputElement"](p0i32);
/******/ 					},
/******/ 					"__widl_f_checked_HTMLInputElement": function(p0i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_checked_HTMLInputElement"](p0i32);
/******/ 					},
/******/ 					"__widl_f_value_HTMLInputElement": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_value_HTMLInputElement"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_href_Location": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_href_Location"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_data_MessageEvent": function(p0i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_data_MessageEvent"](p0i32);
/******/ 					},
/******/ 					"__widl_f_client_x_MouseEvent": function(p0i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_client_x_MouseEvent"](p0i32);
/******/ 					},
/******/ 					"__widl_f_client_y_MouseEvent": function(p0i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_client_y_MouseEvent"](p0i32);
/******/ 					},
/******/ 					"__widl_f_button_MouseEvent": function(p0i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_button_MouseEvent"](p0i32);
/******/ 					},
/******/ 					"__widl_f_movement_x_MouseEvent": function(p0i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_movement_x_MouseEvent"](p0i32);
/******/ 					},
/******/ 					"__widl_f_movement_y_MouseEvent": function(p0i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_movement_y_MouseEvent"](p0i32);
/******/ 					},
/******/ 					"__widl_f_remove_child_Node": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_remove_child_Node"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_parent_node_Node": function(p0i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_parent_node_Node"](p0i32);
/******/ 					},
/******/ 					"__widl_instanceof_WebGLRenderingContext": function(p0i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_instanceof_WebGLRenderingContext"](p0i32);
/******/ 					},
/******/ 					"__widl_f_buffer_data_with_array_buffer_view_WebGLRenderingContext": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_buffer_data_with_array_buffer_view_WebGLRenderingContext"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__widl_f_tex_image_2d_with_u32_and_u32_and_image_WebGLRenderingContext": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5i32,p6i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_tex_image_2d_with_u32_and_u32_and_image_WebGLRenderingContext"](p0i32,p1i32,p2i32,p3i32,p4i32,p5i32,p6i32);
/******/ 					},
/******/ 					"__widl_f_active_texture_WebGLRenderingContext": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_active_texture_WebGLRenderingContext"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_attach_shader_WebGLRenderingContext": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_attach_shader_WebGLRenderingContext"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__widl_f_bind_buffer_WebGLRenderingContext": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_bind_buffer_WebGLRenderingContext"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__widl_f_bind_texture_WebGLRenderingContext": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_bind_texture_WebGLRenderingContext"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__widl_f_blend_func_WebGLRenderingContext": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_blend_func_WebGLRenderingContext"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__widl_f_clear_WebGLRenderingContext": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_clear_WebGLRenderingContext"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_clear_color_WebGLRenderingContext": function(p0i32,p1f32,p2f32,p3f32,p4f32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_clear_color_WebGLRenderingContext"](p0i32,p1f32,p2f32,p3f32,p4f32);
/******/ 					},
/******/ 					"__widl_f_clear_depth_WebGLRenderingContext": function(p0i32,p1f32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_clear_depth_WebGLRenderingContext"](p0i32,p1f32);
/******/ 					},
/******/ 					"__widl_f_compile_shader_WebGLRenderingContext": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_compile_shader_WebGLRenderingContext"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_create_buffer_WebGLRenderingContext": function(p0i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_create_buffer_WebGLRenderingContext"](p0i32);
/******/ 					},
/******/ 					"__widl_f_create_program_WebGLRenderingContext": function(p0i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_create_program_WebGLRenderingContext"](p0i32);
/******/ 					},
/******/ 					"__widl_f_create_shader_WebGLRenderingContext": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_create_shader_WebGLRenderingContext"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_create_texture_WebGLRenderingContext": function(p0i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_create_texture_WebGLRenderingContext"](p0i32);
/******/ 					},
/******/ 					"__widl_f_depth_func_WebGLRenderingContext": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_depth_func_WebGLRenderingContext"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_draw_arrays_WebGLRenderingContext": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_draw_arrays_WebGLRenderingContext"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__widl_f_enable_WebGLRenderingContext": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_enable_WebGLRenderingContext"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_enable_vertex_attrib_array_WebGLRenderingContext": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_enable_vertex_attrib_array_WebGLRenderingContext"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_get_program_info_log_WebGLRenderingContext": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_get_program_info_log_WebGLRenderingContext"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__widl_f_get_program_parameter_WebGLRenderingContext": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_get_program_parameter_WebGLRenderingContext"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__widl_f_get_shader_info_log_WebGLRenderingContext": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_get_shader_info_log_WebGLRenderingContext"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__widl_f_get_shader_parameter_WebGLRenderingContext": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_get_shader_parameter_WebGLRenderingContext"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__widl_f_get_uniform_location_WebGLRenderingContext": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_get_uniform_location_WebGLRenderingContext"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__widl_f_link_program_WebGLRenderingContext": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_link_program_WebGLRenderingContext"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_pixel_storei_WebGLRenderingContext": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_pixel_storei_WebGLRenderingContext"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__widl_f_shader_source_WebGLRenderingContext": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_shader_source_WebGLRenderingContext"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__widl_f_tex_parameteri_WebGLRenderingContext": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_tex_parameteri_WebGLRenderingContext"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__widl_f_uniform1f_WebGLRenderingContext": function(p0i32,p1i32,p2f32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_uniform1f_WebGLRenderingContext"](p0i32,p1i32,p2f32);
/******/ 					},
/******/ 					"__widl_f_use_program_WebGLRenderingContext": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_use_program_WebGLRenderingContext"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_vertex_attrib_pointer_with_i32_WebGLRenderingContext": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5i32,p6i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_vertex_attrib_pointer_with_i32_WebGLRenderingContext"](p0i32,p1i32,p2i32,p3i32,p4i32,p5i32,p6i32);
/******/ 					},
/******/ 					"__widl_f_viewport_WebGLRenderingContext": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_viewport_WebGLRenderingContext"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__widl_f_new_WebSocket": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_new_WebSocket"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_send_with_array_buffer_view_WebSocket": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_send_with_array_buffer_view_WebSocket"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_set_onerror_WebSocket": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_set_onerror_WebSocket"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_set_onmessage_WebSocket": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_set_onmessage_WebSocket"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_instanceof_Window": function(p0i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_instanceof_Window"](p0i32);
/******/ 					},
/******/ 					"__widl_f_request_animation_frame_Window": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_request_animation_frame_Window"](p0i32,p1i32);
/******/ 					},
/******/ 					"__widl_f_document_Window": function(p0i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_document_Window"](p0i32);
/******/ 					},
/******/ 					"__widl_f_location_Window": function(p0i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_location_Window"](p0i32);
/******/ 					},
/******/ 					"__widl_f_log_1_": function(p0i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__widl_f_log_1_"](p0i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_368b05293a3f44de": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__wbg_newnoargs_368b05293a3f44de"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_1fc553129cb17c3c": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__wbg_call_1fc553129cb17c3c"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_globalThis_8df2c73db5eac245": function() {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__wbg_globalThis_8df2c73db5eac245"]();
/******/ 					},
/******/ 					"__wbg_self_937dd9f384d2384a": function() {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__wbg_self_937dd9f384d2384a"]();
/******/ 					},
/******/ 					"__wbg_window_425d3fa09c43ece4": function() {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__wbg_window_425d3fa09c43ece4"]();
/******/ 					},
/******/ 					"__wbg_global_2c090b42ef2744b9": function() {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__wbg_global_2c090b42ef2744b9"]();
/******/ 					},
/******/ 					"__wbg_new_53cc250b997ac2e3": function(p0i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__wbg_new_53cc250b997ac2e3"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithbyteoffsetandlength_3e607c21646a8aef": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__wbg_newwithbyteoffsetandlength_3e607c21646a8aef"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_length_e9352df84d100be9": function(p0i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__wbg_length_e9352df84d100be9"](p0i32);
/******/ 					},
/******/ 					"__wbg_set_94d3324b75849a73": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__wbg_set_94d3324b75849a73"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_newwithbyteoffsetandlength_09420223e29d5cef": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__wbg_newwithbyteoffsetandlength_09420223e29d5cef"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_buffer_aa8ebea80955a01a": function(p0i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__wbg_buffer_aa8ebea80955a01a"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_boolean_get": function(p0i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__wbindgen_boolean_get"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_rethrow": function(p0i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__wbindgen_rethrow"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_memory": function() {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__wbindgen_memory"]();
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper1955": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__wbindgen_closure_wrapper1955"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper1947": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__wbindgen_closure_wrapper1947"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper1951": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__wbindgen_closure_wrapper1951"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper1953": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__wbindgen_closure_wrapper1953"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper1949": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__wbindgen_closure_wrapper1949"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper1945": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./pkg/rps_game_client.js"].exports["__wbindgen_closure_wrapper1945"](p0i32,p1i32,p2i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"1":["./pkg/rps_game_client_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"./pkg/rps_game_client_bg.wasm":"af15406edf67891141ca"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// For more comments about what's going on here, check out the `hello_world`\n// example.\nPromise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./pkg/rps_game_client */ \"./pkg/rps_game_client.js\"))\n  .catch(console.error);\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });