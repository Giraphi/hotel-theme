<?php
$post_id = get_the_ID(); // Get the current post ID
$num_beds = get_post_meta($post_id, 'number of beds', true);
$price = get_post_meta($post_id, 'price per night', true);
?>

<div class="htl-room-info">
    <h3 class="htl-room-info__headline">Basic info </h3>
    <div class="htl-room-info__table">

        <div>Number of beds: </div>
        <div>
            <?php echo $num_beds;?>
        </div>
        <div>Price per night: </div>
        <div>
            <?php echo $price;?> €
        </div>
    </div>
</div>