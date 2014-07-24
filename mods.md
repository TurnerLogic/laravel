## Turner Logic Laravel Mods

### To use this fork, download the zip and then do the following:

```
# extract archive and cd to folder
composer install
git init
```

### To download and update front-end dependencies, run:

```
npm install
bower install
gulp
```

### New Additions

- Added master layout.
- Added partials.
- Added sample page and setup route.
- Added env-template.
- Added a BaseModel class with local timezone handling.
- Added packages.json, bower.json, and gulpfile.js.

### bootstrap/start.php

- Modified environment detection. Use `$_SERVER['LARAVEL_ENV']` to set.
- Set log files for daily rotation.
- Updated application error handling code. Full stack trace for debug, only exception message otherwise. Also added custom error views.

### app/start/global.php

- Added custom folder to autoloaded directories.

### app/filters.php

- Registered CustomValidator class.

### app/config/local/app.php

- Added Way generators to autoloaded service providers.

### app/config/local/database.php

- Removed this file.

### app/config/database.php

- Added $_ENV vars references.

### app/config/mail.php

- Added $_ENV vars references.

### composer.json

- Added faker.
- Added phpunit for dev.
- Added Way generators for dev.

### .gitignore

- Ignored bower_components.
- Ignored node_modules.

