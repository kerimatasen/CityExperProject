using CityExperWeb.Entity;
using CityExperWeb.Models.Gayrimenkul;
using CityExperWeb.Models.Gayrimenkul.POST;
using CityExperWeb.Models.ResultModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CityExperWeb.Controllers
{
    public class GayrimenkulController : Controller
    {
        CityExperDbEntities db = new CityExperDbEntities();
        // GET: Gayrimenkul
        public JsonResult ParselTapuKadastroEkle(TapuKadastroPostViewModel model)
        {
            var result = new ResultViewModel();

            try
            {
                var TapukadastoPostVievModel = new parsel
                {
                    aciklama = model.aciklama,
                    adaNo = model.adaNo,
                    hisseli =model.hisseliDurum,
                    nitelik = model.nitelik,
                    parselNo = model.parselNo,
                    tespitYapan = model.tespitYapan,
                    tespitTarih = Convert.ToDateTime(model.tespitTarihi),
                    //tapuMahalle_id= Convert.ToInt32(model.tapuMahalle),
                    //tapuAlani=Convert.ToDecimal(model.tapuAlani),
                    //zemintipi=model.zeminTipi,
                    //sayfa=model.sayfa,
                    //cilt=model.cilt,
                    //rayicBedel=model.rayicBedel,
                    
                };
                var parsel = db.parsel.Add(TapukadastoPostVievModel);
                db.SaveChanges();
                result = new ResultViewModel
                {
                    Message = "parsel eklendi!",
                    Success = true
                };
            }
            catch (Exception ex)
            {
                result = new ResultViewModel
                {
                    Message = ex.Message,
                    Success = false
                };
            }

            return Json(result);
        }
    }
}