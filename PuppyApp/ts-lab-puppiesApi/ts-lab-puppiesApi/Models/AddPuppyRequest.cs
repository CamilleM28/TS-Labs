using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Runtime.CompilerServices;

namespace ts_lab_puppiesApi.Models;

public class AddPuppyRequest
{
    public string Name { get; set; }
    public string Breed { get; set; }

    [DisplayFormat(DataFormatString = "{0:dd MM yyyy}")]
    [DataType(DataType.Date)]
    public DateTime BirthDate { get; set; }
}