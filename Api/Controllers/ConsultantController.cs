using Api.Dao;
using Api.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConsultantController : ControllerBase
    {
       
        private readonly IConsultantDao _consultantDao;


        public ConsultantController(IConsultantDao consultantDao)
        {
            _consultantDao = consultantDao;

        }

        // GET: api/<ConsultantController>
        [HttpGet]
        public ActionResult<IEnumerable<Consultant>> Get()
        {
            return Ok(_consultantDao.GetAll());
        }

        // GET api/<ConsultantController>/5
        [HttpGet("{id}")]
        public ActionResult<Consultant> Get(int id)
        {
            return Ok(_consultantDao.GetById(id));
        }

        // POST api/<ConsultantController>
        [HttpPost]
        public ActionResult<Consultant> Post(Consultant consultant)
        {
            return _consultantDao.Store(consultant);
        }

        // PUT api/<ConsultantController>/5
        [HttpPut("{id}")]
        public ActionResult<Consultant> Put(int id, Consultant consultant)
        {
            var c = _consultantDao.GetById(id);
            if (c == null)
            {
                return NotFound();
            }
            c.FirstName = consultant.FirstName;
            c.LastName = consultant.LastName;
            c.Email = consultant.Email;
            return _consultantDao.Update(c);
        }

        // DELETE api/<ConsultantController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var c = _consultantDao.GetById(id);
            if (c == null)
            {
                return NotFound();
            }

            if (_consultantDao.Delete(c))
            {
                return NoContent();
            }
            return null;
        }
    }
}
