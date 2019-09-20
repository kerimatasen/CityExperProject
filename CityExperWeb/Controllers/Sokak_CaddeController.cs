using CityExperWeb.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CityExperWeb.Controllers
{
    
    public class Sokak_CaddeController : Controller
    {
        CityExperDbEntities entity = new CityExperDbEntities();

        public JsonResult caddeSokakBymahalleid(int mahalleid)
        {
            var sokaklar = entity.caddeSokak.Where(x => x.mahalle_id == mahalleid).ToList(); // 

            var jsonModel = sokaklar.Select(x => new
            {
                caddeSokak_id = x.caddeSokak_id,
                caddeSokakAdi = x.caddeSokakAdi
            });
            return Json(jsonModel, JsonRequestBehavior.AllowGet);
        }
    }
}