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


        private readonly DataContext dataContext;

        public UserController(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }

        [HttpPost]
        public void PostUser([FromBody] UserInfo userInfo)
        {
            DBUserProcess.AddUser(userInfo, dataContext);

        }

        [HttpGet]
        [Route("GetAllId")]
        public JsonResult GetUsers()
        {

            return new JsonResult(DBUserProcess.ReadUsers(dataContext));
        }

        [HttpDelete("{id}")]
        public void DeleteUser(int id)
        {
            DBUserProcess.RemoveUser(dataContext, id);
        }

        [HttpPut]
        public void EditUser([FromBody] UserInfo userInfo)
        {
            DBUserProcess.ModifyUser(userInfo, dataContext);
        }
    }
}
