using AcademicVisit.Data;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace AcademicVisitServer.DataProcess
{
    public static class JWTProcess
    {
        public static string Generate(UserInfo userInfo, IConfiguration _config)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config?["Jwt:Key"] ?? string.Empty));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, userInfo.UserName),
            };

            var token = new JwtSecurityToken(_config?["Jwt:Issuer"],
              _config?["Jwt:Audience"],
              claims,
              expires: DateTime.Now.AddMinutes(15),
              signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);
        }


        public static bool IsTokenIsExisting(string? token)
        {
            if (string.IsNullOrEmpty(token))
            {
                return false;
            }
            else if (token == "No token exists")
            {
                return false;
            }
            else
                return true;
        }



        public static bool IsTokenValid(string? token, IConfiguration _config)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config?["Jwt:Key"] ?? string.Empty));

            try
            {
                tokenHandler.ValidateToken(token, new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = securityKey,
                    ValidateIssuer = true,
                    ValidIssuer = _config?["Jwt:Issuer"],
                    ValidateAudience = true,
                    ValidAudience = _config?["Jwt:Audience"],
                    ValidateLifetime = true,
                    ClockSkew = TimeSpan.Zero
                }, out SecurityToken validatedToken);

                return true;
            }
            catch
            {
                return false;
            }
        }

        public static bool checkToken(string? accessToken, IConfiguration _config)
        {
            if (!JWTProcess.IsTokenIsExisting(accessToken))
            {
                return false;
            }

            if (!JWTProcess.IsTokenValid(accessToken, _config))
            {
                return false;
            }
            return true;
        }
    }
}
