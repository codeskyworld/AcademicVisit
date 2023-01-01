using System.ComponentModel.DataAnnotations;

namespace AcademicVisit.Data
{
    public class FirstLinkInfo
    {
        public int Id { get; set; }
        [Required]
        public string LinkName { get; set; } = "default LinkName";
        [Required]
        public string LinkAddress { get; set; } = "default LinkAddress";
        [Required]
        public DateTime LinkUpdatingTime { get; set; }
    }
}