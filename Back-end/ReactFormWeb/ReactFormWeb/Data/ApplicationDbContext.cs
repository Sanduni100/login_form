using Microsoft.EntityFrameworkCore;
using ReactFormWeb.Models;

namespace ReactFormWeb.Data
{
    public class ApplicationDbContext : DbContext
    {
        internal object Users;

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<FormDataModel> FormData { get; set; }
        public DbSet<User> Msg { get; set; }

       
    }
}

