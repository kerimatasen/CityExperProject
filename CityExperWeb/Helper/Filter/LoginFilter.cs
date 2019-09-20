using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace CityExperWeb.Helper.Filter
{
    public class LoginFilter : FilterAttribute, IActionFilter
    {
        public void OnActionExecuted(ActionExecutedContext filterContext)
        {
            var user = filterContext.HttpContext.Session["UserSessionModel"];
            if (user == null)
            {
                filterContext.Result = new RedirectToRouteResult(
                   new RouteValueDictionary { { "controller", "Home" }, { "action", "HomePage" } }
                   );
            }
        }

        public void OnActionExecuting(ActionExecutingContext filterContext)
        {
        }
    }
}