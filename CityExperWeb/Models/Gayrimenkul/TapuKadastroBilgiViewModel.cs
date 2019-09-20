using CityExperWeb.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CityExperWeb.Models.Gayrimenkul
{
    public class TapuKadastroBilgiViewModel
    {
        public List<IlViewModel> Iller { get; set; }
        public List<tapuMahalle> TapuMahalleler { get; set; }
        public int HisseliDurum { get; set; }
        public string PaftaNo { get; set; }
        public string AdaNo { get; set; }
        public string ParselNo { get; set; }
        public string Cilt { get; set; }
        public string Sayfa { get; set; }
        public string TespitYapan { get; set; }
        public DateTime TespitTarihi { get; set; }
        public string Aciklama{ get; set; }
        public string Gorusler{ get; set; }
    }
}