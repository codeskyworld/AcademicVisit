using Microsoft.AspNetCore.Mvc;
using AcademicVisit.Data;
using AcademicVisitServer.DataProcess;
using System.Runtime.CompilerServices;

namespace AcademicVisitServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LinkController : Controller
    {
        private readonly DataContext dataContext;

        public LinkController(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }


        [HttpPost]
        public void PostLink([FromBody] LinkInfo LinkInfo)
        {


            LinkInfo LinkInfoReceived = LinkInfo;
            DBProcess.AddLink(LinkInfoReceived, dataContext);
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
        public void EditLink([FromBody] LinkInfo LinkInfo)
        {
            LinkInfo LinkInfoReceived = LinkInfo;
            DBProcess.ModifyLink(LinkInfo, dataContext);
        }
    }
}
