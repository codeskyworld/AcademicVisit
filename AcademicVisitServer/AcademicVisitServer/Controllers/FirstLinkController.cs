using Microsoft.AspNetCore.Mvc;
using AcademicVisit.Data;

namespace AcademicVisitServer.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FirstLinkController : Controller
    {
        private readonly DataContext dataContext;

        public FirstLinkController(DataContext dataContext)
        {
            this.dataContext = dataContext;
        }


        [HttpPost]
        public void PostLink([FromBody] FirstLinkInfo firstLinkInfo)
        {


            FirstLinkInfo firstLinkInfoReceived = firstLinkInfo;

        }


        public void AddLink(FirstLinkInfo firstLinkInfo)
        {

                List<FirstLinkInfo> firstLinklist = new List<FirstLinkInfo>();


            firstLinklist.Add(new FirstLinkInfo()
                    {
                LinkName = firstLinkInfo.LinkName,
                LinkAddress = firstLinkInfo.LinkAddress,
                LinkUpdatingTime = DateTimeExtensions.SetKindUtcWay(DateTime.Now)
                    });

                _dbContext.BtcHistory.AddRange(btclist);

                _dbContext.SaveChanges();


        }
    }
}
