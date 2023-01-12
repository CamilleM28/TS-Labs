using ts_lab_puppiesApi.Models;

namespace ts_lab_puppiesApi.Data;

public class SeedDatabase
{
    public void PrepPopulation(IApplicationBuilder app)
    {
        using (var serviceScope = app.ApplicationServices.CreateScope())
        {
            SeedData(serviceScope.ServiceProvider.GetService<PuppyDbContext>());
        }
    }

    private void SeedData(PuppyDbContext context)
    {
        if (!context.Puppies.Any())
        {
            addPuppies(context);
        }

        context.SaveChanges();
    }

    private void addPuppies(PuppyDbContext context)
    {
        Console.WriteLine("### Adding products to the empty database");

        context.Puppies.AddRange(
            new Puppy
            {
                Id = new Guid(),
                Name = "Roscoe",
                Breed = "Bulldog",
                BirthDate = new DateTime(2023, 01, 01)
            },
            new Puppy
            {
                Id = new Guid(),
                Name = "Luna",
                Breed = "Flat-coated Retriever",
                BirthDate = new DateTime(2022, 09, 05)
            },
            new Puppy
            {
                Id = new Guid(),
                Name = "Mac",
                Breed = "Labrador Retriever",
                BirthDate = new DateTime(2019, 05, 06)
            },
            new Puppy
            {
                Id = new Guid(),
                Name = "Buster",
                Breed = "Poodle",
                BirthDate = new DateTime(2012, 07, 25)
            },
            new Puppy
            {
                Id = new Guid(),
                Name = "Lucy",
                Breed = "Alaskan Malamute",
                BirthDate = new DateTime(2015, 11, 21)
            },
            new Puppy
            {
                Id = new Guid(),
                Name = "Bruce",
                Breed = "Airedale Terrier",
                BirthDate = new DateTime(2023, 01, 10)
            }
        );
    }
}