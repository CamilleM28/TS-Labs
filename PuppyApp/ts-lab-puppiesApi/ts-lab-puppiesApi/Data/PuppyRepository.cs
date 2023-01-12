using ts_lab_puppiesApi.Models;

namespace ts_lab_puppiesApi.Data;

public class PuppyRepository : IPuppyRepository
{
    private readonly PuppyDbContext _context;

    public PuppyRepository(PuppyDbContext context)
    {
        _context = context;   
    }
    
    public IEnumerable<Puppy> GetAll() => _context.Puppies.ToList();

    public Puppy GetOne(Guid id) =>
        _context.Puppies.Where(c => c.Id == id)
            .SingleOrDefault();
    
    public Puppy Create(string name, string breed, DateTime birthdate)
    {
        var puppy = new Puppy
        {
            Id = Guid.NewGuid(),
            Name = name,
            Breed = breed,
            BirthDate = birthdate
        };

        _context.Puppies.Add(puppy);
        SaveChanges();
        return puppy;
    }

    public Puppy Update(Guid id, string name, string breed, DateTime birthdate)
    {
        var puppy = GetOne(id);

        puppy.Name = name;
        puppy.Breed = breed;
        puppy.BirthDate = birthdate;

        var updatedPuppy = _context.Puppies.Update(puppy);
        _context.SaveChanges();
        return updatedPuppy.Entity;
    }

    public void Delete(Guid id)
    {
        var puppy = GetOne(id);
        if (puppy == null)
            return;

        _context.Puppies.Remove(puppy);
        SaveChanges();
    }
    
    public bool SaveChanges() => (_context.SaveChanges() >= 0);
}

