using CityExperWeb.Entity;
using CityExperWeb.Helper;
using CityExperWeb.Models;
using CityExperWeb.Models.ResultModel;
using CityExperWeb.Models.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Hosting;
using System.Web.Mvc;

namespace CityExperWeb.Controllers
{
    public class UserController : Controller
    {
        CityExperDbEntities db = new CityExperDbEntities();
        public JsonResult Register(UserRegisterViewModel model)
        {
            bool success = false;
            string message = "";
            var emailControl = RegexExtension.EmailRegexControl(model.Email);
            var passwordControl = PasswordControlExtension.PasswordControl(model.Password, model.RePassword);
            var hasEmail = db.Users.FirstOrDefault(x => x.Email == model.Email);

            if (hasEmail != null || !passwordControl || !passwordControl ||
                string.IsNullOrEmpty(model.Email) ||
                string.IsNullOrEmpty(model.Password) ||
                string.IsNullOrEmpty(model.RePassword) ||
                string.IsNullOrEmpty(model.Name) ||
                string.IsNullOrEmpty(model.Surname) ||
                string.IsNullOrEmpty(model.PhoneNumber))
            {
                if (hasEmail != null)
                {
                    success = false;
                    message = "Email adresi sistemimizde kayıtlıdır.";
                }
                if (!emailControl)
                {
                    success = emailControl;
                    message = "Emailinizi kontrol ediniz";
                }
                if (!passwordControl)
                {
                    success = passwordControl;
                    message = "Şifreler eşleşmiyor";
                }
                if (string.IsNullOrEmpty(model.Email) || string.IsNullOrEmpty(model.Password) || string.IsNullOrEmpty(model.RePassword) || string.IsNullOrEmpty(model.Name) || string.IsNullOrEmpty(model.Surname) || string.IsNullOrEmpty(model.PhoneNumber))
                {
                    message = "Boş alanları doldurunuz!";
                }
            }
            else
            {
                var userRegisterModel = new Users
                {
                    Email = model.Email,
                    Password = model.Password,
                    CreatedDate = DateTime.Now,
                    Name = model.Name,
                    Surname = model.Surname,
                    TelNo = model.PhoneNumber
                };
                var user = db.Users.Add(userRegisterModel);

                var userRoleRelationModel = new UserRoleRelation()
                {
                    FkUserId = user.Id,
                    FkUserRoleId = 2,
                    Status = 1,
                    CreatedDate = DateTime.Now,
                };
                db.UserRoleRelation.Add(userRoleRelationModel);
                db.SaveChanges();
                success = true;
                message = $"{user.Name } {user.Surname} Kayıt işlemi başarıyla gerçekleşti.";

            }


            var result = new ResultViewModel()
            {
                Message = message,
                Success = success
            };

            return Json(result);
        }
        public JsonResult Login(UserLoginViewModel model)
        {
            //db ve sayfadan gelen veri kontrol alanı.
            bool succes = false;
            string message = "";
            var userLoginControl = db.Users
                .FirstOrDefault(x =>
                x.Email == model.Email &&
                x.Password == model.Password
                );
            if (userLoginControl != null)
            {
                
                if (Session["UserSessionModel"] == null)
                {
                    var sessionModel = new UserSessionModel
                    {
                        AdSoyad = $"{userLoginControl.Name} {userLoginControl.Surname}",
                        Email = userLoginControl.Email,
                        Id = userLoginControl.Id,
                        RolIds = userLoginControl.UserRoleRelation?.Select(y => new UserSessionRol()
                        {
                            Id = y.FkUserRoleId
                        })?.ToList()
                    };
                    Session["UserSessionModel"] = sessionModel;
                }
                succes = true;
                message = Url.Action("Index", "Home");
            }
            else
            {
                message = "Hatalı Email ve ya Şifre Girdiniz.";
            }
            var result = new ResultViewModel
            {
                Success = succes,
                Message = message
            };
            return Json(result);
        }

        public JsonResult GLogin(UserLoginViewModel model)
        {
            //db ve sayfadan gelen veri kontrol alanı.
            bool succes = false;
            string message = "";
            var userLoginControl = db.Users.FirstOrDefault(x => x.Email == model.Email && x.Password == model.Password &&
            x.UserRoleRelation.FirstOrDefault(y => y.FkUserRoleId == 1 || y.FkUserRoleId == 3) != null);
            if (userLoginControl != null)
            {
                if (Session["UserSessionModel"] == null)
                {
                    var sessionModel = new UserSessionModel
                    {
                        AdSoyad = $"{userLoginControl.Name} {userLoginControl.Surname}",
                        Email = userLoginControl.Email,
                        Id = userLoginControl.Id,
                        RolIds = userLoginControl.UserRoleRelation?.Select(y => new UserSessionRol()
                        {
                            Id = y.FkUserRoleId
                        })?.ToList()
                    };
                    Session["UserSessionModel"] = sessionModel;
                }
                succes = true;
                message = Url.Action("Raporlama", "SatilikTasinmaz");
                //message = "/tasinmaz/raporlama";
            }
            else
            {
                message = "Hatalı Email ve ya Şifre Girdiniz.";
            }
            var result = new ResultViewModel
            {
                Success = succes,
                Message = message
            };
            return Json(result);
        }

        public ActionResult Logout()
        {
            Session.Remove("UserSessionModel");
            return RedirectToAction("Index","Home");
        }

        public ActionResult YetkisizSayfa()
        {
            return View();
        }
    }
}