## Wordpress Hotel Theme

This simple demo-theme is based on custom blocks to be used with the WordPress
Gutenberg Editor Full Site Editing). It was developed for WordPress 6.4.3 and PHP
8.1.23. It does not use any plugins.

<h2>Install the theme</h2>

-   Start with a fresh new wordpress site.
-   Download the theme from this repo
-   Copy it into your wordpress theme folder
-   Activate it in your wordpress appearance settings

<h2>Add some rooms</h2>

-   In the admin bar on the left click on Rooms, then “Add new room”
-   In the gutenberg Editor, enable the view of Custom fields, by clicking on the 3 dots in
    the top right, preferences, panels, custom fields, show & reload page.
-   Adjust title, featured image, excerpt, and the custom fields “number of beds”
    and “price per night”.
-   Add image slides to the slider block: In the Gutenberg editor select the “IMAGE
    SLIDE BLOCK”, then select an image by clicking on “Select image” on the
    right. Use the Gutenberg editor to add more slides. Note that we see an
    editing-view of the slider here, not how it will actually be rendered on the site
-   The room should then show up as an entry on the index page. If you click on the entry it should lead you to a detail page with an image slider
    and a contact form.

<h2>Contact Form</h2>

-   Each room detail page automatically renders a contact form
-   If the form is filled out an e-mail will be sent to the administrator e-mail address
-   For this to work, the server needs to be configured properly to send mails through
    php (function `wp_mail()`).
-   So far, the implementation of the form is very rudimentary, e.g. it’s missing security
    features (ajax nonces), form validation (valid e-mail address etc.) and of course
    styling.

<h2>Working with the code</h2>

-   Besides some html files (templates and parts) and the wordpress `functions.php` file,
    the main work of this theme has been done in the `assets/` folder
-   All blocks that are used in the theme have been coded here. Each of them has a
    folder in the `src/` directory
-   Each block comes with different js, scss and php files. See the <a href="https://developer.wordpress.org/block-editor/getting-started/tutorial/">wordpress tutorial</a> for
    more information about this structure.
-   To compile the code, first install the node modules with `npm install`, then execute
    `npm run start`
