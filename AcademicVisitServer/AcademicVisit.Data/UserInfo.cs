using System.ComponentModel.DataAnnotations;

namespace AcademicVisit.Data
{
    public class UserInfo
    {
        public int Id { get; set; }
        [Required]
        public string UserName { get; set; } = "default UserName";
        [Required]
        public string UserPassword { get; set; } = "default UserPassword";
        [Required]
        public string UserType { get; set; } = "General";
        [Required]
        public DateTime? UserUpdatingTime { get; set; }
    }
}
