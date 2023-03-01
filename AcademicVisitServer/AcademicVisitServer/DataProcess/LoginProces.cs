using AcademicVisit.Data;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace AcademicVisitServer.DataProcess
{
    public static class LoginProces
    {
        public static bool CheckloginUserName(UserInfo userInfo, DataContext dataContext)
        {
            var result = dataContext.UserInfos.FirstOrDefault(x => x.UserName == userInfo.UserName);
            if (result == null)
            {
                return false;
            }
            return true;
        }

        public static bool CheckloginPassword(UserInfo userInfo, DataContext dataContext)
        {
            var result = dataContext.UserInfos.FirstOrDefault(x => x.UserPassword == PasswordProcess.EncodePasswordToBase64(userInfo.UserPassword));
            if (result == null)
            {
                return false;
            }
            return true;
        }
    }
}
