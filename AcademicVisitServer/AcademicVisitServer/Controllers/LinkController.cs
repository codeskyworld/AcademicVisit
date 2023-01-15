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
        public void PostLink([FromBody] LinkInfo linkInfo)
        {

            DBLinkProcess.AddLink(linkInfo, dataContext);
        }


        [HttpGet]
        [Route("GetAllId")]
        public JsonResult GetLink()
        {

            return new JsonResult(DBLinkProcess.ReadLink(dataContext));
        }

        [HttpGet]
        [Route("GetOneId/{id}")]
        public JsonResult GetEditLink(int id)
        {
            return new JsonResult(DBLinkProcess.ReadOneLink(dataContext, id));
        }


        [HttpDelete("{id}")]
        public void DeleteLink(int id)
        {
            DBLinkProcess.RemoveLink(dataContext, id);
        }

        [HttpPut]
        public void EditLink([FromBody] LinkInfo linkInfo)
        {
            DBLinkProcess.ModifyLink(linkInfo, dataContext);
        }
    }
}
