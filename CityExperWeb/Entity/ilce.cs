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
    
    public partial class ilce
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public ilce()
        {
            this.mahalle = new HashSet<mahalle>();
        }
    
        public int ilce_id { get; set; }
        public int il_id { get; set; }
        public string ilceAdi { get; set; }
        public Nullable<decimal> lat { get; set; }
        public Nullable<decimal> @long { get; set; }
    
        public virtual il il { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<mahalle> mahalle { get; set; }
    }
}
