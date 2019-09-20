using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CityExperWeb.Models.Gayrimenkul.POST
{
    public class TapuKadastroPostViewModel
    {
        public int il { get; set; }
        public int ilce { get; set; }
        public int tapuMahalle { get; set; }
        public string mulkiyet { get; set; }
        public string hisseliDurum { get; set; }
        public string paftaNo { get; set; }
        public string adaNo { get; set; }
        public string parselNo { get; set; }
        public string nitelik { get; set; }
        public string tapuAlani { get; set; }
        public string rayicBedel { get; set; }
        public string zeminTipi { get; set; }
        public string cilt { get; set; }
        public string sayfa { get; set; }
        public string tespitYapan { get; set; }
        public string tespitTarihi { get; set; }
        public string aciklama { get; set; }
        public string gorusler { get; set; }
    }
}