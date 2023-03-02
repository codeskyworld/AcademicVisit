using AcademicVisit.Data;
using AcademicVisitServer.DataProcess;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AcademicVisitServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {

        private IConfiguration config;
        private readonly DataContext dataContext;

        public UserController(IConfiguration _config, DataContext dataContext)
        {
            config = _config;
            this.dataContext = dataContext;
        }

        [HttpPost]
        public IActionResult PostUser([FromBody] UserInfo userInfo)
        {
            string? accessToken = Request.Headers["Authorization"];
            if (!JWTProcess.checkToken(accessToken, config))
            {
                return Ok("Need to login");
            }
            DBUserProcess.AddUser(userInfo, dataContext);
            return Ok("Token is valid");
        }

        [HttpGet]
        [Route("GetAllId")]
        public IActionResult GetUsers()
        {
            string? accessToken = Request.Headers["Authorization"];
            if (!JWTProcess.checkToken(accessToken, config))
            {
                return Ok("Need to login");
            }
            return new JsonResult(DBUserProcess.ReadUsers(dataContext));
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteUser(int id)
        {
            string? accessToken = Request.Headers["Authorization"];
            if (!JWTProcess.checkToken(accessToken, config))
            {
                return Ok("Need to login");
            }
            DBUserProcess.RemoveUser(dataContext, id);
            return Ok("Token is valid");
        }

        [HttpPut]
        public IActionResult EditUser([FromBody] UserInfo userInfo)
        {
            string? accessToken = Request.Headers["Authorization"];
            if (!JWTProcess.checkToken(accessToken, config))
            {
                return Ok("Need to login");
            }
            DBUserProcess.ModifyUser(userInfo, dataContext);
            return Ok("Token is valid");
        }
    }
}
