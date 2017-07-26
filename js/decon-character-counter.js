/**
 * decon-character-counter-js
 *
 * deconcc JavaScript file.
 *
 * @package Decon_Character_Counter
 * @since 0.0.3
 */
jQuery(document).ready(function($){

	/**
	 * Existing and New post/page.
	 */
	if( $('.post-php').length || $('.post-new-php').length ) {
		/* setup */
		$('#titlediv > *:first-child').after('<div class="decon-character-counter"><span class="dcc-left">Character count: <span class="dcc-character"></span></span><span class="dcc-right"><i>Recommended&colon;</i> <b><span class="dcc-character"></span> / 50 characters max</b></span></div>');
		$('#postdivrich').append('<div class="decon-character-counter"><span class="dcc-left">Word count: <span class="dcc-word"></span></span><span class="dcc-right"><i>Recommended&colon;</i> <b><span class="dcc-word"></span> / 300 words minimum</b></span></div>');
		$('#postexcerpt').append('<div class="decon-character-counter"><span class="dcc-left">Character count: <span class="dcc-character"></span></span><span class="dcc-right"><i>Recommended&colon;</i> <b><span class="dcc-character"></span> / 150 characters max</b></span></div>');
		$('#wp-word-count').html('Character count&colon; <span class="dcc-character"></span>');

		/* title character count */
		$('#titlediv .dcc-character').html($('#title').val().length);

		/* excerpt character count: check if page excerpt is supported by the active theme before counting. */
		if( $('#postexcerpt').length ) {
			$('#postexcerpt .dcc-character').html($('#excerpt').val().length);
		}

		/* title and excerpt: on keyup character count */
		$('#title, #excerpt').keyup( function() {
			$('#titlediv .dcc-character').html($('#title').val().length);
			$('#postexcerpt .dcc-character').html($('#excerpt').val().length);
		});

		/* content character and word count (for WordPress 4.3.1 TinyMCE) */
		$('#content_ifr').ready(function () {
			setInterval(function(){
				var tinymcebody = $('#content_ifr').contents().find('body');

				/* character count */
				$('#postdivrich .dcc-character').html(tinymcebody.text().length);

				/* word count */
				$(".dcc-word").html(tinymcebody.text().split(/\S+\b[\s,\.\'-:;]*/).length - 1);
			}, 500)
		});
	} /* end Existing or New post/page */

	/**
	 * Profile edit.
	 */
	if( $('.profile-php').length ) {
		/* setup */
		$('#description').after('<div class="decon-character-counter"><span class="dcc-left">Character count: <b><span class="dcc-character"></span> / 150 ( recommended max )</b></span></div>');

		/* character count */
		$('.user-description-wrap .dcc-character').html($('#description').val().length);

		/* on keyup */
		$('#description').keyup( function() {
			$('.user-description-wrap .dcc-character').html($('#description').val().length);
		});
	} /* end Profile edit */

	/**
	 * Quick Edit.
	 */
	if( $('.edit-php').length ) {
		$('input[class=ptitle]').after('<div class="decon-character-counter" style="font-style: italic; line-height: 1.5; padding: 0 0.6em 0.5em;"><span class="dcc-left">Character count: <span class="dcc-character"></span></span><span class="dcc-right"><i>Recommended&colon;</i> <b><span class="dcc-character"></span> / 50 characters max</b></span></div>');

		setInterval(function(){
			$('.dcc-character').html($('input[class=ptitle]').val().length);
		}, 500)
	} /* end Quick Edit */

}); /* end document.ready() */