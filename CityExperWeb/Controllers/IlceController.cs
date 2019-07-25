using CityExperWeb.Entity;
using CityExperWeb.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CityExperWeb.Controllers
{
    public class IlceController : Controller
    {
        CityExperDb2Entities entity = new CityExperDb2Entities();
        // GET: Ilce
        public JsonResult ilcelerbyilId(int ilid)
        {
            var ilceler = entity.ilce.Where(x => x.il_id == ilid).ToList(); // 

            var jsonModel = ilceler.Select(x => new
            {
                ilce_id=x.ilce_id,
                ilceAdi=x.ilceAdi
            });


            return Json(jsonModel, JsonRequestBehavior.AllowGet);
        }
        // GET: Ilce
        //public JsonResult PoligonGetir(int plaka)
        //{
        //    //Modelden nesne al
        //    PoligonViewModel jsonModel = new PoligonViewModel();
        //    //Json datasını oku kodu
        //    using (System.IO.StreamReader _StreamReader = new System.IO.StreamReader(@"E:\CityExperProject\CityExperWeb\JSON\il.json"))
        //    {
        //        string jsonData = _StreamReader.ReadToEnd();
        //        object Data = Newtonsoft.Json.JsonConvert.DeserializeObject(jsonData);
        //        //datayı okudu
        //    }


        //    //Jsondakı plaka numarası 45 olan kordınatları al
        //    //aldıgın kordınatlarlamodeldekılısteyıdoldur


        //    //ModeliDon
        //    return Json(jsonModel, JsonRequestBehavior.AllowGet);
        //}

    }
}