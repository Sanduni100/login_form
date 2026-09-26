//using System.ComponentModel.DataAnnotations;

//namespace ReactFormWeb.Models
//{
//    public class User
//    {
//        [Key]
//        public int Id { get; set; }

//        [Required]
//        [MaxLength(50)]
//        public string Name { get; set; }

//        [Required]
//        [EmailAddress]
//        public string Email { get; set; }

//        [Required]
//        public string Message { get; set; }
//    }
//}

using System.ComponentModel.DataAnnotations;

namespace ReactFormWeb.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Username { get; set; }

        [Required]
        public string Password { get; set; }
    }
}
//             _context.Users.Add(user);