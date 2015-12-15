# deleted

Deleted provides a slightly different experience for hard deletes. Clicking a delete button
creates a dropdown with a confirmation and cancel button. This requires two click actions from
the user, helping to prevent accidental deletions.

It's dependency-free and delightfully lightweight:

```
deleted.min.js 711 B (gzipped)
deleted.min.css 490 B (gzipped)
```

See it in action: <http://johnotander.com/deleted>.

## Installation

```
npm install --save deleted
```

Or with git

```
git clone https://github.com/johnotander/deleted.git
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
   data-deleted=true
   data-deleted-prompt="Are you sure you want to delete this?"
   data-deleted-text="Confirm"
   data-cancel-text="Cancel">
  Delete
</a>
```

#### A custom example

```html
<a href="javascript:alert('custom deleted!')"
   class="btn--red"
   data-deleted=true
   data-deleted-prompt="Look out, there be dragons."
   data-deleted-text="Go ahead, delete it"
   data-cancel-text="Nevermind">
  Custom Delete
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

***

> Crafted with <3 by [John Otander](http://johnotander.com) ([@4lpine](https://twitter.com/4lpine)).
