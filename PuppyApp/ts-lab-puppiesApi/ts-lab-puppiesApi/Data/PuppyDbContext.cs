using Microsoft.EntityFrameworkCore;
using ts_lab_puppiesApi.Models;

namespace ts_lab_puppiesApi.Data;

public class PuppyDbContext : DbContext
{
    
    public PuppyDbContext(DbContextOptions<PuppyDbContext> options) : base(options)
    {
    }

    public DbSet<Puppy> Puppies { get; set; }
    
}