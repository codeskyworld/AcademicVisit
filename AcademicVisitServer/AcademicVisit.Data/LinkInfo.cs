using System.ComponentModel.DataAnnotations;

namespace AcademicVisit.Data
{
    public class LinkInfo
    {
        public int Id { get; set; }
        [Required]
        public string? LinkName { get; set; }
        [Required]
        public string? LinkAddress { get; set; }
        [Required]
        public string? LinkType { get; set; }
        [Required]
        public DateTime? LinkUpdatingTime { get; set; }
    }
}