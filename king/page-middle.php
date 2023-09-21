<?php
/**
 * Template Name: Without Sidebar Middle
 *
 * @package king
 */

// Prevent direct script access.
if ( ! defined( 'ABSPATH' ) ) {
	 exit;
}
get_header(); ?>
<?php get_template_part( 'template-parts/king-header-nav' ); ?>
	<div id="primary" class="content-area king-middle kflex lr-padding">
		<main id="main" class="site-main-middle">

			<?php
			while ( have_posts() ) : the_post();

				get_template_part( 'template-parts/content', 'page' );

				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;

			endwhile; // End of the loop.
			?>
				
			</main><!-- #main -->
	</div><!-- #primary -->

<?php get_footer(); ?>
