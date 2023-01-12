using System.ComponentModel.DataAnnotations;

namespace ts_lab_puppiesApi.Models;

public class UpdatePuppyRequest
{
    public string Name { get; set; }
    public string Breed  { get; set; }
    
    [DisplayFormat(DataFormatString = "{0:dd MMM yyyy}")]
    [DataType(DataType.Date)]
    public DateTime BirthDate { get; set; }
}