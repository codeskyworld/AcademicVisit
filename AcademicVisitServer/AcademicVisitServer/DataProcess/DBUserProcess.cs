﻿using AcademicVisit.Data;

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
                UserPassword = PasswordProcess.EncodePasswordToBase64(userInfo.UserPassword),
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

        public static void ModifyUser(UserInfo userInfo, DataContext dataContext)
        {
            var result = dataContext.UserInfos.FirstOrDefault(x => x.Id == userInfo.Id);
            if (result != null)
            {
                result.UserName = userInfo.UserName;
                result.UserPassword = PasswordProcess.EncodePasswordToBase64(userInfo.UserPassword);
                result.UserType = userInfo.UserType;
                result.UserUpdatingTime = DateTimeExtensions.SetKindUtcWay(userInfo.UserUpdatingTime);
            }
            dataContext.SaveChanges();
            dataContext.Dispose();
        }

        public static string? GetUserType(UserInfo userInfo, DataContext dataContext)
        {
            var result = dataContext.UserInfos.FirstOrDefault(x => x.UserName == userInfo.UserName);
            if (result != null)
            {
                return result.UserType;
            }
            else
                return null;
        }
    }
}
