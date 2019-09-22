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
    
    public partial class parsel
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public parsel()
        {
            this.ParselBeyan = new HashSet<ParselBeyan>();
            this.ParselHaciz = new HashSet<ParselHaciz>();
            this.ParselIpotek = new HashSet<ParselIpotek>();
            this.ParselIrtifak = new HashSet<ParselIrtifak>();
            this.ParselIsgalci = new HashSet<ParselIsgalci>();
            this.ParselMalikRelation = new HashSet<ParselMalikRelation>();
            this.ParselSerh = new HashSet<ParselSerh>();
        }
    
        public int Id { get; set; }
        public int TapuMahalleId { get; set; }
        public Nullable<int> AdaId { get; set; }
        public Nullable<int> MulkiyetId { get; set; }
        public Nullable<int> UserId { get; set; }
        public Nullable<bool> Hisseli { get; set; }
        public string PaftaNo { get; set; }
        public string ParselNo { get; set; }
        public string Nitelik { get; set; }
        public Nullable<decimal> TapuAlan { get; set; }
        public string RayicBedel { get; set; }
        public string ZeminTipi { get; set; }
        public string Cilt { get; set; }
        public string Sayfa { get; set; }
        public string TespitYapan { get; set; }
        public Nullable<System.DateTime> TapuKadastroTespitTarih { get; set; }
        public string Aciklama { get; set; }
        public string Gorusler { get; set; }
        public string PlanFonksiyonu { get; set; }
        public string Emsal { get; set; }
        public Nullable<decimal> İnsaatAlani { get; set; }
        public Nullable<decimal> Hmax { get; set; }
        public string Kaks { get; set; }
        public string Taks { get; set; }
        public string PlanAdi { get; set; }
        public string PlanaGöreİnsaatAlani { get; set; }
        public string BelediyeTespitTarih { get; set; }
        public string KurumId { get; set; }
        public string DigerKurumAlinanTarih { get; set; }
        public string BelgeNo { get; set; }
        public string DigerKurumBelgeTarih { get; set; }
        public string AdaNo { get; set; }
    
        public virtual Users Users { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ParselBeyan> ParselBeyan { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ParselHaciz> ParselHaciz { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ParselIpotek> ParselIpotek { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ParselIrtifak> ParselIrtifak { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ParselIsgalci> ParselIsgalci { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ParselMalikRelation> ParselMalikRelation { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ParselSerh> ParselSerh { get; set; }
    }
}
