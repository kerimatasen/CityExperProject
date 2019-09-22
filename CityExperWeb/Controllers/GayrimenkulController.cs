using CityExperWeb.Entity;
using CityExperWeb.Models.Gayrimenkul;
using CityExperWeb.Models.Gayrimenkul.POST;
using CityExperWeb.Models.Response.Parsel;
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
                var tapukadastoPostVievModel = new parsel
                {
                    Aciklama = model.aciklama,
                    Cilt = model.cilt,
                    Nitelik = model.nitelik,
                    //TapuAlan=model.tapuAlani,düzeltilecek decimali nvarchar olcak
                    TespitYapan = model.tespitYapan,
                    TapuKadastroTespitTarih = DateTime.Now,
                    RayicBedel = model.rayicBedel,
                    Gorusler = model.gorusler,
                    AdaNo = model.adaNo,
                    PaftaNo = model.paftaNo,
                    UserId = model.UserId,
                    Hisseli = model.hisseliDurum == "1" ? true : false
                };
                var parsel = db.parsel.Add(tapukadastoPostVievModel);
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

            return
                Json(result);
        }
        public JsonResult ParselMalikEkle(ParselMalikViewModel model)
        {
            var data = new ResultViewModel();
            try
            {
                var parselMalik = new ParselMalik()
                {
                    Adi = model.MalikAd,
                    Soyadi = model.MalikSoyad,
                    BabaAdi = model.MalikBabaAdi,
                    HisseOrani = model.MalikHisseOrani,
                    HisseMiktari = model.MalikHisseMiktari,
                    //Tc=model.MalikTcNo,
                    EdinmeSebebi = model.MalikEdinmeSebebi,
                    ParselEdinmeTarihi = DateTime.Now
                };
                var parselAdded = db.ParselMalik.Add(parselMalik);
                db.SaveChanges();

                var parselMalikRel = new ParselMalikRelation()
                {
                    FkParselId = 10,
                    FkParselMalikId = parselAdded.Id,
                };
                var parselRelAdded = db.ParselMalikRelation.Add(parselMalikRel);
                db.SaveChanges();
                data = new ResultViewModel
                {
                    Message = "malik eklendi!",
                    Success = true
                };

            }
            catch (Exception ex)
            {
                data = new ResultViewModel
                {
                    Message = ex.Message,
                    Success = false
                };
            }

            return Json(data);
        }

        public JsonResult ParselSerhEkle(ParselSerhViewModel model)
        {
            //var data = new ResultViewModel();
            var response = new GenericResponse<ParselSerhResponseModel>();
            try
            {
                var parselSerh = new ParselSerh()
                {
                    ParselSerhAciklama = model.parselSerhAciklama,
                    ParselSerhTarih = DateTime.Now,
                    ParselSerhYevmiyeNo = model.parselSerhNo
                };
                var parselAdded = db.ParselSerh.Add(parselSerh);
                db.SaveChanges();
                response = new GenericResponse<ParselSerhResponseModel>()
                {
                    Message = "Serh Eklendi",
                    Success = true,
                    Data = new ParselSerhResponseModel()
                    {
                        Id = parselAdded.Id,
                        ParselSerhAciklama = parselAdded.ParselSerhAciklama,
                        ParselSerhTarih = Convert.ToDateTime(parselAdded.ParselSerhTarih),
                        ParselSerhNo = parselAdded.ParselSerhYevmiyeNo
                    }
                };
            }
            catch (Exception ex)
            {
                response = new GenericResponse<ParselSerhResponseModel>()
                {
                    Message = ex.Message,
                    Success = false
                };
            }

            return Json(response);
        }

        public JsonResult ParselBeyanEkle(ParselBeyanViewModel model)
        {
            var data = new ResultViewModel();
            try
            {
                var parselBeyan = new ParselBeyan()
                {
                    ParselBeyanYevmiyeNo = model.parselBeyanNo,
                    ParselBeyanAciklama = model.parselBeyanAciklama,
                    ParselBeyanTarih = DateTime.Now

                };
                var parselAdded = db.ParselBeyan.Add(parselBeyan);
                db.SaveChanges();
                data = new ResultViewModel
                {
                    Message = "beyan eklendi!",
                    Success = true
                };

            }
            catch (Exception ex)
            {
                data = new ResultViewModel
                {
                    Message = ex.Message,
                    Success = false
                };
            }

            return Json(data);
        }
    }
}