using Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Dao
{
    public interface IConsultantDao
    {
        public IEnumerable<Consultant> GetAll();
        public Consultant GetById(int id);
        public Consultant Store(Consultant consultant);
        public Consultant Update(Consultant consultant);
        public Boolean Delete(Consultant consultant);
    }
}
