using AcademicVisit.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;

namespace AcademicVisitServer.DataProcess
{
    public static class DBLinkProcess
    {
        public static void AddLink(LinkInfo linkInfo, DataContext dataContext)
        {

            List<LinkInfo> linkList = new List<LinkInfo>();
            linkList.Add(new LinkInfo()
            {
                LinkName = linkInfo.LinkName,
                LinkAddress = linkInfo.LinkAddress,
                LinkType = linkInfo.LinkType,
                LinkUpdatingTime = DateTimeExtensions.SetKindUtcWay(linkInfo.LinkUpdatingTime)
            });

            dataContext.LinkInfos.AddRange(linkList);
            dataContext.SaveChanges();
            dataContext.Dispose();
        }

        public static List<LinkInfo> ReadLinks(DataContext dataContext)
        {
            //var linklist = dataContext.LinkInfos.ToList();
            //dataContext.Dispose();
            //return linklist;
            return null;
        }

        public static void RemoveLink(DataContext dataContext, int id)
        {
            LinkInfo linkInfo = new LinkInfo() { Id = id };
            dataContext.LinkInfos.Attach(linkInfo);
            dataContext.LinkInfos.Remove(linkInfo);
            dataContext.SaveChanges();
            dataContext.Dispose();
        }

        public static void ModifyLink(LinkInfo linkInfo, DataContext dataContext)
        {
            var result = dataContext.LinkInfos.FirstOrDefault(x => x.Id == linkInfo.Id);
            if (result != null)
            {
                result.LinkName = linkInfo.LinkName;
                result.LinkAddress = linkInfo.LinkAddress;
                result.LinkType = linkInfo.LinkType;
                result.LinkUpdatingTime = DateTimeExtensions.SetKindUtcWay(linkInfo.LinkUpdatingTime);
            }
            dataContext.SaveChanges();
            dataContext.Dispose();
        }
    }

}
