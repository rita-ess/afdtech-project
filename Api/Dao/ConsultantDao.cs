using Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Dao
{
    public class ConsultantDao : IConsultantDao
    {

        private readonly AfdtechContext _afdtechContext;

        public ConsultantDao(AfdtechContext afdtechContext)
        {
            _afdtechContext = afdtechContext;
        }
        public IEnumerable<Consultant> GetAll()
        {
            return _afdtechContext.Consultants.ToList();
        }

        public Consultant GetById(int id)
        {
            return _afdtechContext.Consultants.FirstOrDefault(c => c.Id == id);

        }

        public Consultant Store(Consultant consultant)
        {
            _afdtechContext.Consultants.Add(consultant);
            _afdtechContext.SaveChanges();
            return consultant;
        }

        public Consultant Update(Consultant consultant)
        {
            _afdtechContext.Consultants.Update(consultant);
            _afdtechContext.SaveChanges();
            return consultant;
        }

        public bool Delete(Consultant consultant)
        {
            _afdtechContext.Consultants.Remove(consultant);
            _afdtechContext.SaveChanges();
            return true;
        }
    }
}
