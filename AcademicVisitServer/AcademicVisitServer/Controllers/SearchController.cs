using Microsoft.AspNetCore.Mvc;
using AcademicVisit.Data;
using AcademicVisitServer.DataProcess;
using System.Runtime.CompilerServices;

namespace AcademicVisitServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SearchController : Controller
    {
        private IConfiguration config;
        private readonly DataContext dataContext;
        public SearchController(IConfiguration _config, DataContext _dataContext)
        {
            config = _config;
            dataContext = _dataContext;
        }

        [HttpPost]
        public IActionResult PostSearch([FromBody] SearchInfo searchInfo)
        {
            string? accessToken = Request.Headers["Authorization"];
            if (!JWTProcess.checkToken(accessToken, config))
            {
                return Ok("Need to login");
            }
            DBSearchProcess.AddSearch(searchInfo, dataContext);
            return Ok("Token is valid");
        }


        [HttpGet]
        [Route("GetAllId")]
        public IActionResult GetSearches()
        {
            string? accessToken = Request.Headers["Authorization"];
            if ((string.Compare(accessToken, "This is Home page") == 0) || JWTProcess.checkToken(accessToken, config))
            {
                return new JsonResult(DBSearchProcess.ReadSearches(dataContext));
            }
            else
            {
                return Ok("Need to login");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteSearch(int id)
        {
            string? accessToken = Request.Headers["Authorization"];
            if (!JWTProcess.checkToken(accessToken, config))
            {
                return Ok("Need to login");
            }
            DBSearchProcess.RemoveSearch(dataContext, id);
            return Ok("Token is valid");
        }

        [HttpPut]
        public IActionResult EditSearch([FromBody] SearchInfo searchInfo)
        {
            string? accessToken = Request.Headers["Authorization"];
            if (!JWTProcess.checkToken(accessToken, config))
            {
                return Ok("Need to login");
            }
            DBSearchProcess.ModifySearch(searchInfo, dataContext);
            return Ok("Token is valid");
        }

    }


}
