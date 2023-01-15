using AcademicVisit.Data;

namespace AcademicVisitServer.DataProcess
{
    public static class DBUserProcess
    {
        public static void AddUser(UserInfo userInfo, DataContext dataContext)
        {

            List<UserInfo> userList = new List<UserInfo>();
            userList.Add(new UserInfo()
            {
                UserName = userInfo.UserName,
                UserPassword = userInfo.UserPassword,
                UserType = userInfo.UserType,
                UserUpdatingTime = DateTimeExtensions.SetKindUtcWay(userInfo.UserUpdatingTime)
            });
            dataContext.UserInfos.AddRange(userList);
            dataContext.SaveChanges();
            dataContext.Dispose();
        }
    }
}
