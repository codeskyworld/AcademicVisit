using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AcademicVisit.Data
{
    public class SearchInfo
    {
        public int Id { get; set; }
        [Required]
        public string? SearchName { get; set; }
        [Required]
        public string? SearchLinkAddress { get; set; }
        [Required]
        public string? SearchIconAddress { get; set; }
        [Required]
        public DateTime? SearchUpdatingTime { get; set; }
    }
}
