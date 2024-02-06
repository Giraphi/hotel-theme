<?php

// Add global style to the site rendered in the gutenberg editor
add_action( 'after_setup_theme', function() {
	add_editor_style( get_theme_file_uri("/assets/build/global/style-index.css") );
} );

// Add <script> and <link rel="stylesheet"> to the frontend DOM
add_action( 'wp_enqueue_scripts', function() {
	wp_enqueue_style( 'main-css', get_theme_file_uri("/assets/build/global/style-index.css"));
    wp_enqueue_script( 'main-js', get_theme_file_uri("/assets/build/global/index.js"));
} );

// Register all custom blocks from assets/src/blocks
add_action( 'init', function() {
	register_block_type( get_theme_file_path( '/assets/build/blocks/hotel-list' ));
	register_block_type( get_theme_file_path( '/assets/build/blocks/intro-banner' ));	
	register_block_type( get_theme_file_path( '/assets/build/blocks/room-info' ));	
	register_block_type( get_theme_file_path( '/assets/build/blocks/slider' ));	
	register_block_type( get_theme_file_path( '/assets/build/blocks/image-slide' ));	
} );

// Register custom post type: room
add_action('init', function() {
	register_post_type('room',
		array(
			'labels' => array(
				'name'          => __('Rooms', 'textdomain'),
				'singular_name' => __('Room', 'textdomain'),
				'add_new'       => __( 'Add New Room', 'textdomain' ),			
			),
			'supports' => array('title', 'excerpt', 'thumbnail', 'custom-fields', 'editor'),
			'menu_icon' => 'dashicons-admin-home',
			'public' => true,
			'has_archive' => true,
			'show_in_rest' => true,
		)
	);
});

// For the room custom post type, set default values for custom fields
add_action('wp_insert_post', function($post_ID, $post) {
    if (  $post->post_type !== 'room') {
		return $post_ID;	
	}

	$hotelRoomDefaults = array(
		"number of beds" => "2",
		"price per night" => "99",
	);
	
	foreach ($hotelRoomDefaults as $key => $value) {	
		$current_field_value = get_post_meta($post_ID,$key,true);
		
		if ($current_field_value == '' && !wp_is_post_revision($post_ID)){
			add_post_meta($post_ID, $key, $value, true);
		}
	}	
	return $post_ID;	
}, 10, 2);


// For the room custom post type, set the default content to a slider block
// add_filter( 'default_content', function ( $content, $post ) {
//     if ( 'room' !== $post->post_type ) {
// 		return $content;
// 	}
	
// 	return <<<EOT
// 	<!-- wp:hotel-theme/slider -->
// 	<div class="wp-block-hotel-theme-slider slider">
// 		<div class="glide">
// 			<div data-glide-el="track" class="glide__track">
// 				<ul class="glide__slides">
// 					<!-- wp:hotel-theme/image-slide -->
// 					<li class="wp-block-hotel-theme-image-slide glide__slide">
// 						<p>No image selected</p>
// 					</li>
// 					<!-- /wp:hotel-theme/image-slide -->
// 				</ul>
// 			</div>
// 		</div>
// 	</div>
// 	<!-- /wp:hotel-theme/slider -->
// 	EOT;
// }, 10, 2 );