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
    
    public partial class bina
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public bina()
        {
            this.bagimsiz = new HashSet<bagimsiz>();
            this.malik = new HashSet<malik>();
        }
    
        public int bina_id { get; set; }
        public Nullable<int> caddeSokak_id { get; set; }
        public Nullable<int> ada_id { get; set; }
        public Nullable<int> parsel_id { get; set; }
        public string uavt { get; set; }
        public string koav { get; set; }
        public string kapiNo { get; set; }
        public Nullable<decimal> tabanAlani { get; set; }
        public string nitelik { get; set; }
        public Nullable<decimal> insaatAlani { get; set; }
        public string yapıNizami { get; set; }
        public Nullable<int> katAdedi { get; set; }
        public Nullable<int> isYeriAdadi { get; set; }
        public Nullable<int> konutAdedi { get; set; }
        public Nullable<int> bagimsizAdedi { get; set; }
        public Nullable<int> binaYasi { get; set; }
        public Nullable<int> otopark { get; set; }
        public string kullanımAmacı { get; set; }
        public string binaYüksekligi { get; set; }
        public Nullable<decimal> metreKareBirimFiyat { get; set; }
        public string binaDegeri { get; set; }
        public Nullable<int> bodrum { get; set; }
        public Nullable<int> zemin { get; set; }
        public Nullable<int> asmaKat { get; set; }
        public Nullable<int> normalKat { get; set; }
        public Nullable<int> catiKat { get; set; }
        public Nullable<int> toplamKatAdedi { get; set; }
        public Nullable<int> tespitDurum { get; set; }
        public string tespitYapan { get; set; }
        public Nullable<System.DateTime> tespitTarih { get; set; }
        public string aciklama { get; set; }
        public string görüsler { get; set; }
        public Nullable<int> iskan { get; set; }
        public Nullable<System.DateTime> iskanTarih { get; set; }
        public string iskanNo { get; set; }
        public string yapiRuhsat { get; set; }
        public Nullable<System.DateTime> yapiRuhsatTarihi { get; set; }
        public string yapiRuhsatNo { get; set; }
        public Nullable<int> proje { get; set; }
        public Nullable<System.DateTime> projeTarih { get; set; }
        public Nullable<int> yapiKayit { get; set; }
        public Nullable<System.DateTime> yapiKayitTarih { get; set; }
        public string yapiKayitNo { get; set; }
        public string degerleme { get; set; }
        public string catiTip { get; set; }
        public string asansor { get; set; }
        public string muhit { get; set; }
        public string durum { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<bagimsiz> bagimsiz { get; set; }
        public virtual parsel parsel { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<malik> malik { get; set; }
    }
}