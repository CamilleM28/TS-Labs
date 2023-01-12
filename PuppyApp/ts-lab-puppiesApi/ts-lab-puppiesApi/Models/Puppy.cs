using System.ComponentModel.DataAnnotations;
using Microsoft.VisualBasic;

namespace ts_lab_puppiesApi.Models;

public class Puppy

{
    public Guid Id { get; set; }
    public string Name { get; set; }
    public string Breed  { get; set; }
    
    [DisplayFormat(DataFormatString = "{0:dd MM yyyy}")]
    [DataType(DataType.Date)]
    public DateTime BirthDate { get; set; }
}