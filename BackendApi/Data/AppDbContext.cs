using BackendApi.Models;
using Microsoft.EntityFrameworkCore;

namespace BackendApi.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<Tenis> Tenis { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Tenis>().HasData(
                new Tenis
                {
                    Nome = "AirMax",
                    Preco = 899.99M
                },
                new Tenis
                {
                    Nome = "Puma Disk",
                    Preco = 1299.99M
                });
        }
    }
}
