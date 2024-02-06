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

// Set default values for hotel room custom fields
add_action('wp_insert_post', function($post_ID) {
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
});

// Register hotel room custom post type
add_action('init', function() {
	register_post_type('hotel_room',
		array(
			'labels' => array(
				'name'          => __('Hotel Rooms', 'textdomain'),
				'singular_name' => __('Hotel Room', 'textdomain'),
				'add_new'       => __( 'Add New Hotel Room', 'textdomain' ),			
			),
			'supports' => array('title', 'excerpt', 'thumbnail', 'custom-fields', 'editor'),
			'menu_icon' => 'dashicons-admin-home',
			'public' => true,
			'has_archive' => true,
			'show_in_rest' => true,
		)
	);
});

function add_default_block( $content, $post ) {
    if ( 'hotel_room' === $post->post_type ) {
        $content = <<<EOT
		<!-- wp:hotel-theme/slider -->
		<div class="wp-block-hotel-theme-slider slider">
			<div class="glide">
				<div data-glide-el="track" class="glide__track">
					<ul class="glide__slides">
						<!-- wp:hotel-theme/image-slide -->
						<li class="wp-block-hotel-theme-image-slide glide__slide">
							<p>No image selected</p>
						</li>
						<!-- /wp:hotel-theme/image-slide -->
					</ul>
				</div>
			</div>
		</div>
		<!-- /wp:hotel-theme/slider -->
		EOT;
	}

    return $content;
}
add_filter( 'default_content', 'add_default_block', 10, 2 );