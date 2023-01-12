using ts_lab_puppiesApi.Models;

namespace ts_lab_puppiesApi.Data;

public interface IPuppyRepository
{
    public IEnumerable<Puppy> GetAll();
    Puppy GetOne(Guid id);
    Puppy Create(string name, string breed, DateTime birthdate);
    Puppy Update(Guid id, string name, string breed, DateTime birthdate);
    void Delete(Guid id);
    bool SaveChanges();
}