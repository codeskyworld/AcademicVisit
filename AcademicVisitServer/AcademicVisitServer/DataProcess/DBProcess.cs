using AcademicVisit.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace AcademicVisitServer.DataProcess
{
    public static class DBProcess
    {
        public static void AddLink(LinkInfo LinkInfo, DataContext dataContext)
        {

            List<LinkInfo> firstLinklist = new List<LinkInfo>();


            firstLinklist.Add(new LinkInfo()
            {
                LinkName = LinkInfo.LinkName,
                LinkAddress = LinkInfo.LinkAddress,
                LinkType = LinkInfo.LinkType,
                LinkUpdatingTime = DateTimeExtensions.SetKindUtcWay(LinkInfo.LinkUpdatingTime)
            });

            dataContext.LinkInfos.AddRange(firstLinklist);

            dataContext.SaveChanges();
            dataContext.Dispose();
        }

        public static List<LinkInfo> ReadLink(DataContext dataContext)
        {
            var linklist = dataContext.LinkInfos.ToList();
            dataContext.Dispose();
            return linklist;
        }

        public static List<LinkInfo> ReadOneLink(DataContext dataContext, int id)
        {
            List<LinkInfo> linklist = new List<LinkInfo>();
            linklist = dataContext.LinkInfos.Where(x => x.Id == id).ToList();
            dataContext.Dispose();
            return linklist;
        }

        public static void RemoveLink(DataContext dataContext, int id)
        {
            LinkInfo LinkInfo = new LinkInfo() { Id = id };
            dataContext.LinkInfos.Attach(LinkInfo);
            dataContext.LinkInfos.Remove(LinkInfo);
            dataContext.SaveChanges();
            dataContext.Dispose();
        }

        public static void ModifyLink(LinkInfo LinkInfo, DataContext dataContext)
        {


            var result = dataContext.LinkInfos.FirstOrDefault(x => x.Id == LinkInfo.Id);
            if (result != null)
            {
                result.LinkName = LinkInfo.LinkName;
                result.LinkAddress = LinkInfo.LinkAddress;
                result.LinkType = LinkInfo.LinkType;
                result.LinkUpdatingTime = DateTimeExtensions.SetKindUtcWay(LinkInfo.LinkUpdatingTime);
            }
            dataContext.SaveChanges();
            dataContext.Dispose();
        }
    }

}
