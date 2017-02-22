import ckan.lib.base as base
import ckan.plugins.toolkit as t
import jinja2

from ckan.lib.base import BaseController
from ckan.common import request

from ckanext.report.controllers import ReportController as BasicReportController

render = base.render

class CreditsController(BaseController):

    def index(self, context=None):
        data = request.params or {}
        vars = {'data': data}
        return render('credits.html', extra_vars=vars)

class ReportController(BasicReportController):

    def index(self):
        try:
            reports = t.get_action('report_list')({}, {})
        except t.NotAuthorized:
            t.abort(401)
        return t.render('report.html', extra_vars={'reports': reports})

