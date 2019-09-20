using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CityExperWeb.Helper
{
    public static class PasswordControlExtension
    {
        public static bool PasswordControl(string password,string rePassword)
        {
            if (password == rePassword)
            {
                return true;
            }
                return false;

        }
    }
}