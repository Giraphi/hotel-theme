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
	register_block_type( get_theme_file_path( '/assets/build/blocks/contact-form' ));	
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

// Set default content for the room custom post type
add_filter( 'default_content', function ( $content, $post ) {
    if ( 'room' !== $post->post_type ) {
		return $content;
	}
	
	return <<<EOT
	<!-- wp:hotel-theme/slider -->
	<div class="wp-block-hotel-theme-slider htl-slider"><div class="swiper"><div class="swiper-wrapper"><!-- wp:hotel-theme/image-slide -->
	<div class="wp-block-hotel-theme-image-slide swiper-slide htl-image-slide"><p>No image selected</p></div>
	<!-- /wp:hotel-theme/image-slide --></div><div class="swiper-pagination"></div><div class="swiper-button-prev"></div><div class="swiper-button-next"></div></div></div>
	<!-- /wp:hotel-theme/slider -->
	EOT;
}, 10, 2 );


add_action('wp_ajax_nopriv_mail_before_submit', 'mail_before_submit');
add_action('wp_ajax_mail_before_submit', 'mail_before_submit');
function mail_before_submit() {
    $to = $_POST['to'];
   	$title = $_POST['title'];
    $text = $_POST['text'];

    wp_mail($to, $title, 'body text');
    return 'email sent';
}