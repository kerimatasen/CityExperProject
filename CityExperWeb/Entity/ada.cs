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
    
    public partial class ada
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public ada()
        {
            this.parsel = new HashSet<parsel>();
            this.tasinmaz = new HashSet<tasinmaz>();
        }
    
        public int ada_id { get; set; }
        public int mahalle_id { get; set; }
        public string adaNo { get; set; }
        public int paftaNo { get; set; }
        public string aciklama { get; set; }
    
        public virtual tapuMahalle tapuMahalle { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<parsel> parsel { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<tasinmaz> tasinmaz { get; set; }
    }
}
