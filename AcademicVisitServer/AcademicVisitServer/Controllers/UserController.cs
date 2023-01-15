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
            UserInfo UserInfoReceived = userInfo;
            DBUserProcess.AddUser(userInfo, dataContext);

        }
    }
}
