using AcademicVisit.Data;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace AcademicVisitServer.DataProcess
{
    public static class JWTProces
    {
        public static string AuthenticateLoginInfo(UserInfo userLogin)
        {
            var currentUser = new UserInfo();

        //If user name doesn't exist in the database
            if (currentUser == null)
            {
                return "user name doesn't exist in the database";
            }
            
            if (currentUser != null)
            {

            }

            return null;
        }

        public static string Generate(UserInfo user, IConfiguration _config)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config?["Jwt:Key"] ?? string.Empty));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.UserName),
            };

            var token = new JwtSecurityToken(_config?["Jwt:Issuer"],
              _config?["Jwt:Audience"],
              claims,
              expires: DateTime.Now.AddMinutes(15),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public static bool CheckloginUserName()
        {
            return false;
        }

        public static bool CheckloginPassword()
        {
            return false;
        }

        public static bool CheckTokenExistance() 
        {
            return false;
        }

        public static bool CheckTokenValidation()
        {
            return false;
        }

        public static bool GenerateNewToken()
        {
            return false;
        }

        public static bool EncryptPassword()
        {
            return false;
        }

        public static bool DecryptPassword()
        {
            return false;
        }
    }
}
