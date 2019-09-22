using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CityExperWeb.Models.Response.Parsel
{
    public class ParselSerhResponseModel
    {
        public int Id { get; set; }
        public string ParselSerhAciklama { get; set; }
        public DateTime ParselSerhTarih { get; set; }
        public string ParselSerhNo { get; set; }
    }
}