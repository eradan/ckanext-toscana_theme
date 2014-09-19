import ckan.plugins as plugins
import ckan.plugins.toolkit as toolkit

import ckan.model as model
import ckan.lib.helpers as h

from ckan.common import _, g, c

def most_popular_datasets():
    '''Return a sorted list of the dataset with the most views.'''

    # Get a list of all the site's datasets from CKAN, sorted by number of
    # vews.
    context = {'model': model, 'session': model.Session,
	'user': c.user or c.author, 'auth_user_obj': c.userobj}
    data_dict = {
	'q': '*:*',
	'facet.field': g.facets,
	'rows': 5,
	'start': 0,
	'sort': 'views_total desc',
	'fq': 'capacity:"public"'
    }
    query = toolkit.get_action('package_search')(context, data_dict)
    return query['results']

def most_recent_datasets():
    '''Return a sorted list of the dataset recently added.'''
    context = {'model': model, 'session': model.Session,
	'user': c.user or c.author, 'auth_user_obj': c.userobj}
    data_dict = {
	'q': '*:*',
	'facet.field': g.facets,
	'rows': 5,
	'start': 0,
	'sort': 'metadata_created desc',
	'fq': 'capacity:"public"'
    }
    query = toolkit.get_action('package_search')(context, data_dict)
    return query['results']

class DatiToscanaThemePlugin(plugins.SingletonPlugin):
    '''Dati Toscana theme plugin.
    '''
    plugins.implements(plugins.IRoutes, inherit=True)
    plugins.implements(plugins.IConfigurer)
    plugins.implements(plugins.ITemplateHelpers)

    def update_config(self, config):

        # Add this plugin's templates dir to CKAN's extra_template_paths, so
        # that CKAN will use this plugin's custom templates.
        # 'templates' is the path to the templates dir, relative to this
        # plugin.py file.
        toolkit.add_template_directory(config, 'templates')

        # Add this plugin's public dir to CKAN's extra_public_paths, so
        # that CKAN will use this plugin's custom static files.
        toolkit.add_public_directory(config, 'public')

        # Register this plugin's fanstatic directory with CKAN.
        # Here, 'fanstatic' is the path to the fanstatic directory
        # (relative to this plugin.py file), and 'example_theme' is the name
        # that we'll use to refer to this fanstatic directory from CKAN
        # templates.
        toolkit.add_resource('fanstatic', 'rt_theme')

    def before_map(self, map):
        map.connect('credits', '/credits',
            controller='ckanext.toscana_theme.controller:CreditsController',
            action='index')
        return map  

    def get_helpers(self):
        '''Register the most_*_datasets() function above as a template
        helper function.

        '''
        # Template helper function names should begin with the name of the
        # extension they belong to, to avoid clashing with functions from
        # other extensions.
        return {'most_popular_datasets': most_popular_datasets,
		'most_recent_datasets': most_recent_datasets}

