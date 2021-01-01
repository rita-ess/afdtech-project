using Api.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Dao
{
    public interface IProjectDao
    {
        public IEnumerable<Project> GetAll();
        public Project GetById(int id);
        public Project Store(Project project);
        public Project Update(Project project);
        public Boolean Delete(Project project);
    }
}
