# ckanext-toscana_theme
CKAN extension that customize CKAN look and feel, labels and some minor behaviour for dati.toscana.it

## Contents

- [Overview](#overview)
- [License](#license)
- [Requirements](#requirements)
- [Installation](#installation)
- [Development Installation](#development-installation)
- [Contributing](#contributing)
- [Support, Communication and Credits](#support-communication-and-credits)


## License

**ckanext-toscana_theme** is Free and Open Source software and is licensed under the GNU Affero General Public License (AGPL) v3.0 whose full text may be found at:

http://www.fsf.org/licensing/licenses/agpl-3.0.html

## Overview 

This extension provides the UI customization for dati.toscana.it

## Requirements

The ckanext-toscana_theme extension has been developed for CKAN 2.5 or later.

## Installation

1. Go into your CKAN path for extension (like /usr/lib/ckan/default/src):
 
    `git clone https://github.com/eradan/ckanext-toscana_theme.git`

    `cd ckanext-toscana-theme`

    `pip install -e .`

2. Add ``datitoscana_theme`` to the ``ckan.plugins`` setting in your CKAN
   config file (by default the config file is located at ``/etc/ckan/default/production.ini``).

3. Restart CKAN. For example if you've deployed CKAN with Apache on Ubuntu:

     `sudo service apache2 reload`
  
## Contributing

We welcome contributions in any form:

* pull requests for new features
* pull requests for bug fixes
* pull requests for documentation
* funding for any combination of the above

## Support, Communication and Credits

This work has been performed by [Hyperborea](http://www.hyperborea.com) with funding provided by Regione Toscana.

The work is provided as is and no warranty whatsoever is provided. 

