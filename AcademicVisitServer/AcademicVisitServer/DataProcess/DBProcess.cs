using AcademicVisit.Data;
using Microsoft.EntityFrameworkCore;
using System;
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
                LinkType = firstLinkInfo.LinkType,
                LinkUpdatingTime = DateTimeExtensions.SetKindUtcWay(firstLinkInfo.LinkUpdatingTime)
            });

            dataContext.FirstLinkInfos.AddRange(firstLinklist);

            dataContext.SaveChanges();
            dataContext.Dispose();
        }

        public static List<FirstLinkInfo> ReadLink(DataContext dataContext)
        {
            var linklist = dataContext.FirstLinkInfos.ToList();
            dataContext.Dispose();
            return linklist;
        }

        public static List<FirstLinkInfo> ReadOneLink(DataContext dataContext, int id)
        {
            List<FirstLinkInfo> linklist = new List<FirstLinkInfo>();
            linklist = dataContext.FirstLinkInfos.Where(x => x.Id == id).ToList();
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

        public static void ModifyLink(FirstLinkInfo firstLinkInfo, DataContext dataContext)
        {


            var result = dataContext.FirstLinkInfos.FirstOrDefault(x => x.Id == firstLinkInfo.Id);
            if (result != null)
            {
                result.LinkName = firstLinkInfo.LinkName;
                result.LinkAddress = firstLinkInfo.LinkAddress;
                result.LinkType = firstLinkInfo.LinkType;
                result.LinkUpdatingTime = DateTimeExtensions.SetKindUtcWay(firstLinkInfo.LinkUpdatingTime);
            }
            dataContext.SaveChanges();
            dataContext.Dispose();
        }
    }

}
