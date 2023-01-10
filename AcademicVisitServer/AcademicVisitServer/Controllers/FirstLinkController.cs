using Microsoft.AspNetCore.Mvc;
using AcademicVisit.Data;
using AcademicVisitServer.DataProcess;
using System.Runtime.CompilerServices;

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
        [Route("GetAllId")]
        public JsonResult GetLink()
        {

            return new JsonResult(DBProcess.ReadLink(dataContext));
        }

        [HttpGet]
        [Route("GetOneId/{id}")]
        public JsonResult GetEditLink(int id)
        {
            return new JsonResult(DBProcess.ReadOneLink(dataContext, id));
        }


        [HttpDelete("{id}")]
        public void DeleteLink(int id)
        {
            DBProcess.RemoveLink(dataContext, id);
        }

        [HttpPut]
        public void EditLink([FromBody] FirstLinkInfo firstLinkInfo)
        {
            FirstLinkInfo firstLinkInfoReceived = firstLinkInfo;
            DBProcess.ModifyLink(firstLinkInfo, dataContext);
        }
    }
}
