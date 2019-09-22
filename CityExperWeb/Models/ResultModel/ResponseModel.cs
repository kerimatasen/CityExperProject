using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace CityExperWeb.Models.ResultModel
{

    public class GenericResponse<T>
    {

        public string Message { get; set; }
        public T Data { get; set; }
        public bool Success { get; set; }
    }
}
