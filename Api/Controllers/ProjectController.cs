using Api.Dao;
using Api.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {

        private readonly IProjectDao _projectDao;

        public ProjectController(IProjectDao projectDao)
        {
            _projectDao = projectDao;
        }

        // GET: api/<ProjectController>
        [HttpGet]
        public ActionResult<IEnumerable<Project>> Get()
        {
            return Ok(_projectDao.GetAll());
        }

        // GET api/<ProjectController>/5
        [HttpGet("{id}")]
        public ActionResult<Project> Get(int id)
        {
            return Ok(_projectDao.GetById(id));
        }

        // POST api/<ProjectController>
        [HttpPost]
        public ActionResult<Project> Post(Project project)
        {
            return _projectDao.Store(project);
        }

        // PUT api/<ProjectController>/5
        [HttpPut("{id}")]
        public ActionResult<Project> Put(int id, Project project)
        {
            var p = _projectDao.GetById(id);
            if (p == null)
            {
                return NotFound();
            }
            p.Name = project.Name;
            p.Description = project.Description;
            return _projectDao.Update(p);
            
        }

        // DELETE api/<ProjectController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var p = _projectDao.GetById(id);
            if (p == null)
            {
                return NotFound();
            }

            if (_projectDao.Delete(p))
            {
                return NoContent();
            }
            return null;
        }
    }
}
