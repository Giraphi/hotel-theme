<div class="hotel-list">
    <?php
        $homepagePosts = new WP_Query(array(
        'posts_per_page' => 20
        ));

        while ($homepagePosts->have_posts()) :
            $homepagePosts->the_post();
    ?>


    <a class="hotel-list__item" href="<?php the_permalink(); ?>">

        <div class="hotel-list__item-image">
            <?php the_post_thumbnail("medium"); ?>
        </div>

        <div class="hotel-list__item-title">
            <?php the_title(); ?>
        </div>

        <div class="hotel-list__item-excerpt">
            <?php the_excerpt(); ?>
        </div>
    </a>

    <?php 
        endwhile;
        wp_reset_postdata();
    ?>
</div>