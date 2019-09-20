using CityExperWeb.Entity;
using CityExperWeb.Helper.Filter;
using CityExperWeb.Models;
using CityExperWeb.Models.Gayrimenkul;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CityExperWeb.Controllers
{
    [GayrimenkulFilter]
    public class YonetimController : Controller
    {

        CityExperDbEntities db = new CityExperDbEntities();
        //Bir action 2 tane aynı adda olabilir biri http get yani getirdiğin diğeri httppost yanipost ettiğin
        [HttpGet]
        public ActionResult Tasinmaz()
        {
            var iller = db.il.Select(x => new IlViewModel()
            {
                Id = x.il_id,
                Adi = x.ilAdi
            }).ToList();
            var resultModel = new GayrimenkulViewModel()
            {
                ParselViewModel = new ParselViewModel
                {
                    TapuKadastroBilgiViewModel = new TapuKadastroBilgiViewModel
                    {
                        Iller = iller,
                    }
                }
            };

            return View(resultModel);
        }
        [HttpPost]
        public ActionResult Tasinmaz(string name)
        {

            return View();
        }

        public JsonResult IlceListele(int ilId)
        {
            var ilceler = db.ilce.Where(x => x.il_id == ilId).Select(y => new IlceViewModel
            {
                Id = y.ilce_id,
                Adi = y.ilceAdi
            }).ToList();

            return Json(ilceler, JsonRequestBehavior.AllowGet);
        }
    }
}