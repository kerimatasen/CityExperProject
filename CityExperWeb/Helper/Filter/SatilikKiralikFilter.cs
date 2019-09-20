using CityExperWeb.Helper.Enum;
using CityExperWeb.Models.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace CityExperWeb.Helper.Filter
{
    public class GayrimenkulFilter : FilterAttribute, IActionFilter
    {
        public void OnActionExecuted(ActionExecutedContext filterContext)
        {
            var user = (UserSessionModel)filterContext.HttpContext.Session["UserSessionModel"];
            if (user == null)
            {
                filterContext.Result = new RedirectToRouteResult(
                   new RouteValueDictionary { { "controller", "Home" }, { "action", "HomePage" } }
                   );
            }
            else
            {
                var rolControl = user.RolIds?.Where(x => x.Id == (int)UserRole.Admin || x.Id == (int)UserRole.GayrimenkulRole)?.ToList();
                if (rolControl.Count() == 0 || rolControl == null)
                {
                    filterContext.Result = new RedirectToRouteResult(
                  new RouteValueDictionary { { "controller", "User" }, { "action", "YetkisizSayfa" } }
                  );
                }
            }
        }

        public void OnActionExecuting(ActionExecutingContext filterContext)
        {

        }
    }
}