using Api.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Dao
{
    public class ProjectDao : IProjectDao
    {
        private readonly AfdtechContext _afdtechContext;
        public ProjectDao(AfdtechContext afdtechContext)
        {
            _afdtechContext = afdtechContext;
        }

        public IEnumerable<Project> GetAll()
        {

            return _afdtechContext.Projects.ToList();
        }

        public Project GetById(int id)
        {
            return _afdtechContext.Projects.FirstOrDefault(p => p.Id == id);
        }

        public Project Store(Project project)
        {
            _afdtechContext.Projects.Add(project);
            _afdtechContext.SaveChanges();
            return project;
        }

        public Project Update(Project project)
        {
            _afdtechContext.Projects.Update(project);
            _afdtechContext.SaveChanges();
            return project;
        }

        public Boolean Delete(Project project)
        {
            _afdtechContext.Projects.Remove(project);
            _afdtechContext.SaveChanges();
            return true;
        }
    }
}
