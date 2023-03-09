using Microsoft.EntityFrameworkCore;

namespace AcademicVisit.Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseSerialColumns();
        }

        public DbSet<LinkInfo> LinkInfos { get; set; }
        public DbSet<UserInfo> UserInfos { get; set; }
        public DbSet<SearchInfo> SearchInfos { get; set; }
    }
}
