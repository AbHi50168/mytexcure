<?php
/*
Plugin Name: Custom Elementor Enhancements
Description: Custom enhancements for Elementor Pro, including menu JavaScript.
Version: 1.0
Author: Your Name
*/

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

function custom_elementor_enqueue_scripts() {
    // Enqueue menu1.js from the Elementor Pro assets directory
    $script_url = plugins_url('/elementor-pro/assets/menu1.js', __FILE__);
    wp_enqueue_script(
        'custom-elementor-menu', // Handle
        $script_url, // URL to the script
        array('jquery'), // Dependencies (e.g., jQuery)
        '1.0', // Version number
        true // Load in footer
    );
}

add_action('wp_enqueue_scripts', 'custom_elementor_enqueue_scripts');