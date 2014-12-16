# Deleted

_Currently under development._

Deleted provides a slightly different experience for hard deletes. Clicking a delete button
creates a dropdown with a confirmation and cancel button. This requires two click actions from
the user, helping to prevent accidental deletions.

See it in action on [codepen.io](http://codepen.io/johno/full/xbVeEv).

## Installation

Via Bower:

```
bower install --save deleted
```

Via npm:

```
npm install --save deleted
```

## Usage

Link the javascript and CSS files:

```html
<!DOCTYPE html>
<html>
<head>
  <!-- ... -->
  <link rel="stylesheet" href="/path/to/deleted/css/deleted.min.css">
  <!-- ... -->
</head>
<body>
  <!-- ... -->
  <script src="/path/to/deleted/js/deleted.min.js"></script>
</body>
</html>
```

Then, you can use deleted with the following link and data attributes:

```html
<a href="/some-link/for/deletion"
   class="btn--red"
   data-delete=true
   data-delete-prompt="Are you sure you want to delete this?"
   data-delete-text="Confirm"
   data-cancel-text="Cancel">
  Delete
</a>
```

## License

MIT

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

Crafted with <3 by [John Otander](http://johnotander.com) ([@4lpine](https://twitter.com/4lpine)).
