## Photo service

This project uses the webcomponents of the other 3 microservices and generates on site out of it a.k.a the stitching layer.

The microserivces that are used:
1. [photo-service][1] a service for storing photos
1. [like-service][2] a service to add likes to photos
1. [query-service][3] query what photo is most liked per category

These service are microservices and have their own db schema.
Communitcation is done by sending events on the vertx eventbus.
The webcomponets are build with vue and used in this react app to make one single page app.

## Available Scripts

After starting all the microservices you can start this project by running:

### `yarn start`

[1]: https://github.com/edewit/photo-gallery-photo/tree/front-end
[2]: https://github.com/edewit/photo-gallery-like/tree/front-end
[3]: https://github.com/edewit/photo-gallery-query/tree/front-end
