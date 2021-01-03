using Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Dao
{
    public class AffectationDao : IAffectationDao
    {
        private readonly AfdtechContext _afdtechContext;

        public AffectationDao(AfdtechContext afdtechContext)
        {
            _afdtechContext = afdtechContext;
        }

        public IEnumerable<Affectation> GetAll()
        {
            return _afdtechContext.Affectations.ToList();
        }

        public Affectation GetById(int id)
        {
            return _afdtechContext.Affectations.FirstOrDefault(a => a.Id == id );
        }

        public Affectation Store(Affectation affectation)
        {
            affectation.Datetime = DateTime.Now;
            _afdtechContext.Affectations.Add(affectation);
            _afdtechContext.SaveChanges();
            return affectation;
        }
      

        public Affectation Update(Affectation affectation)
        {
            _afdtechContext.Affectations.Update(affectation);
            _afdtechContext.SaveChanges();
            return affectation;
        }

        public bool Delete(Affectation affectation)
        {
            _afdtechContext.Affectations.Remove(affectation);
            _afdtechContext.SaveChanges();
            return true;
        }
    }
}
