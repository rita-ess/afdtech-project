using Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Dao
{
   public interface IAffectationDao
    {
        public IEnumerable<Affectation> GetAll();
        public Affectation GetById(int id);
        public Affectation Store(Affectation affectation);
        public Affectation Update(Affectation affectation);
        public Boolean Delete(Affectation affectation);
    }
}
