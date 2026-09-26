using Microsoft.AspNetCore.Mvc;
using ReactFormWeb.Data;
using ReactFormWeb.Models;

namespace ReactFormWeb.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FormController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public FormController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult Post([FromBody] User user)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            // Corrected the property name to match the DbSet<User> in ApplicationDbContext
            _context.Msg.Add(user);
            _context.SaveChanges();
            return Ok(new { message = "User saved successfully" });
        }
    }
}
