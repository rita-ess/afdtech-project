using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;


namespace Api.Models
{
    public class AfdtechContext : DbContext
    {
        public AfdtechContext(DbContextOptions<AfdtechContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {}

        public DbSet<Project> Projects { get; set; }
        public DbSet<Consultant> Consultants { get; set; }
        public DbSet<Affectation> Affectations { get; set; }
    }
}
