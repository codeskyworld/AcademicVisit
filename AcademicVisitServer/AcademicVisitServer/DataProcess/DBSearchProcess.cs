using AcademicVisit.Data;

namespace AcademicVisitServer.DataProcess
{
    public class DBSearchProcess
    {
        public static void AddSearch(SearchInfo searchInfo, DataContext dataContext)
        {

            List<SearchInfo> searchList = new List<SearchInfo>();
            searchList.Add(new SearchInfo()
            {
                SearchName = searchInfo.SearchName,
                SearchLinkAddress = searchInfo.SearchLinkAddress,
                SearchIconAddress = searchInfo.SearchIconAddress,
                SearchUpdatingTime = DateTimeExtensions.SetKindUtcWay(searchInfo.SearchUpdatingTime)
            });

            dataContext.SearchInfos.AddRange(searchList);
            dataContext.SaveChanges();
            dataContext.Dispose();
        }

        public static List<SearchInfo> ReadSearches(DataContext dataContext)
        {
            var searchlist = dataContext.SearchInfos.ToList();
            dataContext.Dispose();
            return searchlist;
        }

        public static void RemoveSearch(DataContext dataContext, int id)
        {
            SearchInfo searchInfo = new SearchInfo() { Id = id };
            dataContext.SearchInfos.Attach(searchInfo);
            dataContext.SearchInfos.Remove(searchInfo);
            dataContext.SaveChanges();
            dataContext.Dispose();
        }

        public static void ModifySearch(SearchInfo searchInfo, DataContext dataContext)
        {
            var result = dataContext.SearchInfos.FirstOrDefault(x => x.Id == searchInfo.Id);
            if (result != null)
            {
                result.SearchName = searchInfo.SearchName;
                result.SearchLinkAddress = searchInfo.SearchLinkAddress;
                result.SearchIconAddress = searchInfo.SearchIconAddress;
                result.SearchUpdatingTime = DateTimeExtensions.SetKindUtcWay(searchInfo.SearchUpdatingTime);
            }
            dataContext.SaveChanges();
            dataContext.Dispose();
        }
    }
}
