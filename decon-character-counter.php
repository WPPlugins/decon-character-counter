<?php
/*
Plugin Name: Decon Character Counter
Description: Adds a real-time title, content, and excerpt character counter for posts and pages via the admin screen.
Version: 0.0.3
Author: Michael Tumlad
Author URI: http://michaeltumlad.ph/
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: deconcc
Tags: character, count, counter, seo, title, content, excerpt, post, page, editor, quick edit, admin
*/

/* Prevent direct access to the plugin files. */
defined( 'ABSPATH' ) or die( 'Nope!' );

/**
 * Enqueue scripts and styles on back-end.
 */
function deconcc_admin_scripts($hook) {
	/* Enqueue scripts and styles on either post.php, post-new.php, edit.php, profile.php, user-edit.php, or user-new.php only. */
	if ( 'post.php' == $hook || 'post-new.php' == $hook || 'edit.php' == $hook || 'profile.php' == $hook || 'user-edit.php' == $hook || 'user-new.php' == $hook ) {
		/* Admin styles */
		wp_enqueue_style( 'deconcc-admin-style', plugin_dir_url( __FILE__ ) . 'css/decon-character-counter.css' );

		/* Admin scripts */
		wp_enqueue_script( 'deconcc-admin-script', plugin_dir_url( __FILE__ ) . 'js/decon-character-counter.js' );
	}
	else return;
}
add_action( 'admin_enqueue_scripts', 'deconcc_admin_scripts' );
?>