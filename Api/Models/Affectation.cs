using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Models
{
    public class Affectation
    {
        public int Id { get; set; }
        public int ProjectId { get; set; }
        public int ConsultantId { get; set; }
        public DateTime Datetime { get; set; }
    }
}
