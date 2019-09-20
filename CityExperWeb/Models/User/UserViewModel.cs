using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CityExperWeb.Models.User
{
    public class UserViewModel
    {
        public UserRegisterViewModel UserRegisterViewModel { get; set; }
        public UserLoginViewModel UserLoginViewModel { get; set; }
    }
}