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
    public class AffectationController : ControllerBase
    {


        private readonly IAffectationDao _affectationDao;

        public AffectationController(IAffectationDao affectationDao)
        {
            _affectationDao = affectationDao;
        }

        // GET: api/<AffectationController>
        [HttpGet]
        public ActionResult<IEnumerable<Consultant>> Get()
        {
            return Ok(_affectationDao.GetAll());
        }

        // GET api/<AffectationController>/5
        [HttpGet("{id}")]
        public ActionResult<Project> Get(int id)
        {
            return Ok(_affectationDao.GetById(id));
        }

        // POST api/<AffectationController>
        [HttpPost]
        public ActionResult<Affectation> Post(Affectation affectation)
        {
            return _affectationDao.Store(affectation);
        }

        // PUT api/<AffectationController>/5
        [HttpPut("{id}")]
        public ActionResult<Affectation> Put(int id, Affectation affectation)
        {
            var a = _affectationDao.GetById(id);
            
            if(a==null){
                return NotFound();
            }

            a.ConsultantId = affectation.ConsultantId;
            a.ProjectId = affectation.ProjectId;
            affectation.Datetime = DateTime.Now;
            return _affectationDao.Update(a);
        }

        // DELETE api/<AffectationController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var a = _affectationDao.GetById(id);
            if (a == null)
            {
                return NotFound();
            }

            if (_affectationDao.Delete(a))
            {
                return NoContent();
            }
            return null;
        }
    }
}
