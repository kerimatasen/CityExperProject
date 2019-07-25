using System.Collections.Generic;

namespace CityExperWeb.Models
{
    public class MahalleViewModel
    {
        public List<Features> features { get; set; }
    }
    public class Features
    {
        public Attributes attributes { get; set; }
    }
    public class Attributes
    {
        public string KADASTRO_MAHALLE_ADI { get; set; }
    }
}