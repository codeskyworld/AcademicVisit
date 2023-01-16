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

        public static List<UserInfo> ReadUsers(DataContext dataContext)
        {
            var userlist = dataContext.UserInfos.ToList();
            dataContext.Dispose();
            return userlist;
        }

        public static void RemoveUser(DataContext dataContext, int id)
        {
            UserInfo userInfo = new UserInfo() { Id = id };
            dataContext.UserInfos.Attach(userInfo);
            dataContext.UserInfos.Remove(userInfo);
            dataContext.SaveChanges();
            dataContext.Dispose();
        }
    }
}
