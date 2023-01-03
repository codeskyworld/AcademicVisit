using AcademicVisit.Data;
using Microsoft.EntityFrameworkCore;

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
        }

        public static List<FirstLinkInfo> ReadLink(DataContext dataContext)
        {
            return dataContext.FirstLinkInfos.ToList();
        }

    }
}
