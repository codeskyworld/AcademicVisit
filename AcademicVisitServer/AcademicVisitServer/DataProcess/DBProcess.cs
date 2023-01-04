using AcademicVisit.Data;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace AcademicVisitServer.DataProcess
{
    public static class DBProcess
    {
        public static void AddLink(FirstLinkInfo firstLinkInfo, DataContext dataContext)
        {

            List<FirstLinkInfo> firstLinklist = new List<FirstLinkInfo>();


            firstLinklist.Add(new FirstLinkInfo()
            {
                LinkName = firstLinkInfo.LinkName,
                LinkAddress = firstLinkInfo.LinkAddress,
                LinkUpdatingTime = DateTimeExtensions.SetKindUtcWay(firstLinkInfo.LinkUpdatingTime)
            });

            dataContext.FirstLinkInfos.AddRange(firstLinklist);

            dataContext.SaveChanges();
            dataContext.Dispose();
        }

        public static List<FirstLinkInfo> ReadLink(DataContext dataContext)
        {
            List <FirstLinkInfo> linklist = new List<FirstLinkInfo>();
            linklist= dataContext.FirstLinkInfos.ToList();
            dataContext.Dispose();
            return linklist;
        }

        public static void RemoveLink(DataContext dataContext, int id)
        {
            FirstLinkInfo firstLinkInfo = new FirstLinkInfo() { Id = id };
            dataContext.FirstLinkInfos.Attach(firstLinkInfo);
            dataContext.FirstLinkInfos.Remove(firstLinkInfo);
            dataContext.SaveChanges();
            dataContext.Dispose();
        }
    }

}
