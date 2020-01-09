# RESTful Routes to CRUD Mapping

> Example resource: **posts**

| HTTP Method<br>(Verb) | URI (endpoint) | CRUD Operation          | Typical<br>Controller Action | Has Data<br>Payload |
| --------------------- | -------------- | ----------------------- | :--------------------------: | :-----------------: |
| GET                   | /posts         | Read all _posts_        |            index             |         No          |
| GET                   | /posts/:id     | Read a specific _post_  |             show             |         No          |
| POST                  | /posts         | Create a new _post_     |            create            |         Yes         |
| PUT/PATCH             | /posts/:id     | Update specified _post_ |            update            |         Yes         |
| DELETE                | /posts/:id     | Delete specified _post_ |            delete            |         No          |

# Additional Common Non-RESTful (CRUD-less) Routes

| HTTP Method<br>(Verb) | URI (endpoint)  | Purpose                                | Typical<br>Controller Action | Has Data<br>Payload |
| --------------------- | --------------- | -------------------------------------- | :--------------------------: | :-----------------: |
| GET                   | /posts/new      | Return view (form) to add a new _post_ |             new              |         No          |
| GET                   | /posts/:id/edit | Return view (form) to edit a _post_    |             edit             |         No          |

# Routing for Nested Resources (One:Many & Many:Many Relationships)

| HTTP Method<br>(Verb) | URI (endpoint)          | CRUD Operation<br>or Purpose     |                                 Note                                 |
| --------------------- | ----------------------- | -------------------------------- | :------------------------------------------------------------------: |
| GET                   | /posts/:id/comments     | Read all _comments_ for a _post_ |                              No payload                              |
| GET                   | /comments/:id           | Read one _comment_ for a _post_  |                     "Shallow" route / No payload                     |
| GET                   | /posts/:id/comments/new | n/a (Non-RESTful)                | OPTIONALLY display a dedicated form used to create a nested resource |
| POST                  | /posts/:id/comments     | Create a _comment_ for a _post_  |                            Needs Payload                             |
| PUT/PATCH             | /comments/:id           | Update specified _comment_       |                   "Shallow" route / Needs payload                    |
| DELETE                | /comments/:id           | Delete specified _comment_       |                     "Shallow" route / No payload                     |

> "Shallow routes are for CRUD operations where the parent's `id` is not needed. For example,
> you do not need the `id` of the _post_ route to delete a specific _comment_ - you only
> need that particular _comment's_ `id`.
