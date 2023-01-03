using Microsoft.AspNetCore.Mvc;
using AcademicVisit.Data;
using AcademicVisitServer.DataProcess;

namespace AcademicVisitServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FirstLinkController : Controller
    {
        private readonly DataContext dataContext;

        public FirstLinkController(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }


        [HttpPost]
        public void PostLink([FromBody] FirstLinkInfo firstLinkInfo)
        {


            FirstLinkInfo firstLinkInfoReceived = firstLinkInfo;
            DBProcess.AddLink(firstLinkInfoReceived, dataContext);
        }


        [HttpGet]
        public JsonResult GetLink()
        {

            return new JsonResult(DBProcess.ReadLink(dataContext));
        }
    }
}
