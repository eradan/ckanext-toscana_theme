import ckan.lib.base as base
import jinja2

from ckan.lib.base import BaseController
from ckan.common import request

render = base.render

class CreditsController(BaseController):

    def index(self, context=None):
        data = request.params or {}
        vars = {'data': data}
        return render('credits.html', extra_vars=vars)
