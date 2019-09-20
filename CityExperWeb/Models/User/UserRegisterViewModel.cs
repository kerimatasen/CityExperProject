using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CityExperWeb.Models.User
{
    public class UserRegisterViewModel
    {
        [Required(ErrorMessage = "Lütfen Email Alanını Doldurunuz")]
        [DataType(DataType.EmailAddress)]
        [EmailAddress(ErrorMessage = "Email türünde birşeyler giriniz!")]
        public string Email { get; set; }
        [Required(ErrorMessage = "Lütfen şifrenizi giriniz!")]
        public string Password { get; set; }
        [Compare("Password", ErrorMessage = "Şifre alanları eşleşmiyor!   ")]
        [Required(ErrorMessage = "Lütfen Şifre tekrar alanını boş geçmeyiniz!")]
        public string RePassword { get; set; }
        [Required(ErrorMessage = "Lütfen Adınızı giriniz")]
        public string Name { get; set; }
        [Required(ErrorMessage = "Lütfen Soyadınızı giriniz")]
        public string Surname { get; set; }
        [Required(ErrorMessage = "Lütfen TelNo Alanını Doldurunuz")]
        public string PhoneNumber { get; set; }
    }
}