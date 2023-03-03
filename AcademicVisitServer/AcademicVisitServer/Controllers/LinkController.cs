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
        private IConfiguration config;
        private readonly DataContext dataContext;

        public LinkController(IConfiguration _config, DataContext _dataContext)
        {
            config = _config;
            dataContext = _dataContext;
        }


        [HttpPost]
        public IActionResult PostLink([FromBody] LinkInfo linkInfo)
        {
            string? accessToken = Request.Headers["Authorization"];
            if (!JWTProcess.checkToken(accessToken, config))
            {
                return Ok("Need to login");
            }
            DBLinkProcess.AddLink(linkInfo, dataContext);
            return Ok("Token is valid");
        }


        [HttpGet]
        [Route("GetAllId")]
        public IActionResult GetLinks()
        {
            string? accessToken = Request.Headers["Authorization"];
            if (!JWTProcess.checkToken(accessToken, config))
            {
                return Ok("Need to login");
            }
            return new JsonResult(DBLinkProcess.ReadLinks(dataContext));
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteLink(int id)
        {
            string? accessToken = Request.Headers["Authorization"];
            if (!JWTProcess.checkToken(accessToken, config))
            {
                return Ok("Need to login");
            }
            DBLinkProcess.RemoveLink(dataContext, id);
            return Ok("Token is valid");
        }

        [HttpPut]
        public IActionResult EditLink([FromBody] LinkInfo linkInfo)
        {
            string? accessToken = Request.Headers["Authorization"];
            if (!JWTProcess.checkToken(accessToken, config))
            {
                return Ok("Need to login");
            }
            DBLinkProcess.ModifyLink(linkInfo, dataContext);
            return Ok("Token is valid");
        }
    }
}
