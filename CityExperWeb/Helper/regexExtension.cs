using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Text.RegularExpressions;
using System.Web;

namespace CityExperWeb.Helper
{
    public static class RegexExtension
    {

        public static bool EmailRegexControl(string txtemail)
        {
            try
            {
                string email = txtemail;
                MailAddress m = new MailAddress(email);
                Regex regex = new Regex(@"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$");
                Match match = regex.Match(email);
                if (match.Success)
                    return true;
                else
                    return false;
            }
            catch (FormatException)
            {
                return false;
            }
          
        }
    }
}