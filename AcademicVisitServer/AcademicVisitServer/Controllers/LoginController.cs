using AcademicVisit.Data;
using AcademicVisitServer.DataProcess;
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

namespace JwtApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : Controller
    {
        private IConfiguration _config;

        public LoginController(IConfiguration config)
        {
            _config = config;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login([FromBody] UserInfo userInfo)
        {
            var user = JWTProces.AuthenticateLoginInfo(userInfo);

            if (user != null)
            {
                var token = JWTProces.Generate(userInfo, _config);
                return Ok(token);
            }

            return NotFound("User not found");
        }


    }
}
