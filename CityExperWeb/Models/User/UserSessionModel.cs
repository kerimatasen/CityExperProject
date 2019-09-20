using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CityExperWeb.Models.User
{
    public class UserSessionModel
    {
        public int Id { get; set; }
        public string AdSoyad { get; set; }
        public string Email { get; set; }
        public List<UserSessionRol> RolIds { get; set; }
    }
    public class UserSessionRol
    {
        public int? Id { get; set; }
    }
}