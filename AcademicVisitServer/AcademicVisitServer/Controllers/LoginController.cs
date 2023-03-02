using AcademicVisit.Data;
using AcademicVisitServer.DataProcess;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;


namespace AcademicVisitServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : Controller
    {
        private IConfiguration config;
        private readonly DataContext dataContext;

        public LoginController(IConfiguration _config, DataContext _dataContext)
        {
            config = _config;
            dataContext = _dataContext;
        }

        [HttpPost]
        public IActionResult Login([FromBody] UserInfo userInfo)
        {
            bool resultCheckUserName = LoginProces.CheckloginUserName(userInfo, dataContext);

            if (!resultCheckUserName) {
                return Ok("User not found");
            }

            bool resultCheckPassword = LoginProces.CheckloginPassword(userInfo, dataContext);

            if (!resultCheckPassword)
            {
                return Ok("Password is incorrect");
            }

            string token = JWTProcess.Generate(userInfo, config);
            return Ok(token);
        }
    }
}
