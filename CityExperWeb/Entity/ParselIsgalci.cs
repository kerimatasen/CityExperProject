//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace CityExperWeb.Entity
{
    using System;
    using System.Collections.Generic;
    
    public partial class ParselIsgalci
    {
        public int Id { get; set; }
        public int FkParselId { get; set; }
        public Nullable<int> ParselIsgalciNo { get; set; }
        public string ParselIsgalciAciklama { get; set; }
        public Nullable<System.DateTime> ParselIsgalciTarih { get; set; }
    
        public virtual parsel parsel { get; set; }
    }
}