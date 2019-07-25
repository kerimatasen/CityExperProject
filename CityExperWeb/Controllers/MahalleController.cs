using CityExperWeb.Entity;
using CityExperWeb.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CityExperWeb.Controllers
{
    public class MahalleController : Controller
    {
        CityExperDb2Entities entity = new CityExperDb2Entities();
        public JsonResult mahallebyilceid(int ilceid)
        {
            var mahalleler = entity.mahalle.Where(x => x.ilce_id == ilceid).ToList(); // 

            var jsonModel = mahalleler.Select(x => new
            {
                mahalle_id = x.mahalle_id,
                mahalleAdi = x.mahalleAdi
            });
            return Json(jsonModel, JsonRequestBehavior.AllowGet);
        }
    }
}