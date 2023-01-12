using Microsoft.AspNetCore.Mvc;
using ts_lab_puppiesApi.Data;
using ts_lab_puppiesApi.Models;

namespace ts_lab_puppiesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PuppiesController : ControllerBase
    {
        private readonly IPuppyRepository _repo;  
        
        public PuppiesController(IPuppyRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Puppy>> GetPuppies()
        {
            return Ok(_repo.GetAll());
        }

        [HttpGet("{id}")]
        public ActionResult<Puppy> GetPuppy(Guid id)
        {
            return _repo.GetOne(id) == null ? NotFound() : Ok(_repo.GetOne(id));
          
        }
        
        [HttpPost]
        public ActionResult<Puppy> PostPuppy(AddPuppyRequest addPuppyRequest)
        {
            var name = addPuppyRequest.Name;
            var breed = addPuppyRequest.Breed;
            var birthdate = addPuppyRequest.BirthDate;

            if (DateTime.TryParse($"{birthdate}", out DateTime result ))
            {
                var puppy = _repo.Create(name, breed, birthdate);
               return CreatedAtAction(nameof(GetPuppy), new { id = puppy.Id }, puppy);
            }
            
            return StatusCode(422, "Invalid date format. Required format YYYY/MM/DD.");
            
        }
        
        [HttpPut("{id}")]
        public IActionResult PutPuppy(Guid id, UpdatePuppyRequest updatePuppyRequest)
        {
            if (_repo.GetOne(id) == null)
            {
                return NotFound();
            }
            
            var name = updatePuppyRequest.Name;
            var breed = updatePuppyRequest.Breed;
            var birthdate = updatePuppyRequest.BirthDate;
            
            return DateTime.TryParse($"{birthdate}", out DateTime result)
                ? Ok(_repo.Update(id, name, breed, birthdate))
                : StatusCode(422, "Invalid date format. Required format YYYY.");
        }
        
        [HttpDelete("{id}")]
        public IActionResult DeletePuppy(Guid id)
        {
            _repo.Delete(id);
            return NoContent();
            
        }
    }
}
