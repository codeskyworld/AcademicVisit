﻿using AcademicVisit.Data;
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
using System.Xml.Linq;


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
            if (LoginProcess.CheckUserInfo(userInfo))
            {
                string? resultTempToken = "This is token";
                string? userTempType = "Administrator";
                string? tempToken = JWTProcess.Generate(userInfo, config);

                return new JsonResult(new { result = resultTempToken, userType = userTempType, token = tempToken });
            }

            bool resultCheckUserName = LoginProcess.CheckloginUserName(userInfo, dataContext);
            if (!resultCheckUserName)
            {
                string resultName = "User not found";
                return new JsonResult(new { result = resultName });
            }
            bool resultCheckPassword = LoginProcess.CheckloginPassword(userInfo, dataContext);
            if (!resultCheckPassword)
            {
                string resultPassword = "Password is incorrect";
                return new JsonResult(new { result = resultPassword });
            }
            if (string.IsNullOrWhiteSpace(DBUserProcess.GetUserType(userInfo, dataContext)))
            {
                string resultUserType = "Error happened, the user type is wrong";
                return new JsonResult(new { result = resultUserType });
            }

            string? resultToken = "This is token";
            string? userType = DBUserProcess.GetUserType(userInfo, dataContext);
            string? token = JWTProcess.Generate(userInfo, config);

            return new JsonResult(new { result = resultToken, userType = userType, token = token });
        }
    }
}
