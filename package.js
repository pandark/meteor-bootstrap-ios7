Package.describe({
  name: 'pandark:bootstrap-ios7',
  summary: 'Twitter Bootstrap 3 fork with iOS7 look and feel.',
  version: '1.0.0',
  git: 'https://github.com/pandark/meteor-bootstrap-ios7.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('jquery');

  var path = Npm.require('path');
  var asset_path = path.join('bootstrap-ios7');
  api.addFiles(path.join(asset_path, 'css', 'bootstrap.css'), 'client');
  api.addFiles(path.join(asset_path, 'js', 'bootstrap.js'), 'client');

  // fonts
  api.addFiles(path.join(asset_path, 'fonts', 'ratchicons.eot'), 'client');
  api.addFiles(path.join(asset_path, 'fonts', 'ratchicons.ttf'), 'client');
  api.addFiles(path.join(asset_path, 'fonts', 'ratchicons.svg'), 'client');
  api.addFiles(path.join(asset_path, 'fonts', 'ratchicons.woff'), 'client');

  // XXX this makes the paths to the icon sets absolute. it needs
  // to be included _after_ the standard bootstrap css so
  // that its styles take precedence.

  // If this file is not added, browsers using the icon fonts will not be able
  // to load them if the page is initially accessed at an url other than /.
  api.addFiles(path.join('bootstrap-override.css'), 'client');
});
