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
        public JsonResult ParselIsgalciEkle(ParselIsgalciViewModel model)
        {
            var data = new ResultViewModel();
            try
            {
                var parselIsgalci = new ParselIsgalci()
                {
                    ParselIsgalciAciklama = model.parselIsgalciAciklama,
                    ParselIsgalciNo = Convert.ToInt32(model.parselIsgalciNo),
                    ParselIsgalciTarih = DateTime.Now

                };
                var parselAdded = db.ParselIsgalci.Add(parselIsgalci);
                db.SaveChanges();
                data = new ResultViewModel
                {
                    Message = "İşgalci eklendi!",
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
        public JsonResult ParselIrtifakEkle(ParselIrtifakViewModel model)
        {
            var data = new ResultViewModel();
            try
            {
                var parselIrtifak = new ParselIrtifak()
                {
                    ParselIrtifakAciklama = model.parselIrtifakAciklama,
                    ParselIrtifakTarih = DateTime.Now,
                    ParselIrtifakYevmiyeNo = model.parselIrtifakNo
                };
                var parselAdded = db.ParselIrtifak.Add(parselIrtifak);
                db.SaveChanges();
                data = new ResultViewModel
                {
                    Message = "İrtifak eklendi!",
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
        public JsonResult ParselIpotekEkle(ParselIpotekViewModel model)
        {
            var data = new ResultViewModel();
            try
            {
                var parselIpotek = new ParselIpotek()
                {
                   ParselIpotekAciklama=model.parselIpotekAciklama,
                   ParselIpotekTarih=DateTime.Now,
                   ParselIpotekYevmiyeNo=model.parselIpotekNo,
                };
                var parselAdded = db.ParselIpotek.Add(parselIpotek);
                db.SaveChanges();
                data = new ResultViewModel
                {
                    Message = "İpotek eklendi!",
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

        public JsonResult ParselHacizEkle(ParselHacizViewModel model)
        {
            var data = new ResultViewModel();
            try
            {
                var parselHaciz = new ParselHaciz()
                {
                   ParselHacizAciklama=model.parselHacizAciklama,
                    ParselHacizTarih = DateTime.Now,
                    ParselHacizYevmiyeNo = model.parselHacizNo
                };
                var parselAdded = db.ParselHaciz.Add(parselHaciz);
                db.SaveChanges();
                data = new ResultViewModel
                {
                    Message = "Haciz eklendi!",
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