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
            public void PostLink([FromBody] LinkInfo LinkInfo)
            {
                LinkInfo LinkInfoReceived = LinkInfo;
                DBProcess.AddLink(LinkInfoReceived, dataContext);
            }   
    }
}
