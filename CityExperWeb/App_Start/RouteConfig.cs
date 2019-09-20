using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace CityExperWeb
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");
            routes.MapRoute(
               name: "Raporlama",
               url: "tasinmaz/raporlama",
               defaults: new { controller = "SatilikTasinmaz", action = "Raporlama", id = UrlParameter.Optional }
           );
            routes.MapRoute(
                name: "HomePage",
                url: "giris",
                defaults: new { controller = "Home", action = "Homepage", id = UrlParameter.Optional }
            );
            routes.MapRoute(
               name: "Anasayfa",
               url: "anasayfa",
               defaults: new { controller = "Home", action = "Index" }
           );
            routes.MapRoute(
                name: "Default",
                url: "{controller}/{action}/{id}",
                defaults: new { controller = "Home", action = "Homepage", id = UrlParameter.Optional }
            );
        }
    }
}
