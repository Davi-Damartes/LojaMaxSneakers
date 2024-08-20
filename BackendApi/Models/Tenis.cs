using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackendApi.Models
{
    public class Tenis : BaseEntity
    {

        [Required]
        [StringLength(80, ErrorMessage = "Limite de 80 caracteres")]
        public string Nome { get; set; } = string.Empty;

        [Required]
        [StringLength(300, ErrorMessage = "Limite de 300 caracteres")]
        public string Descricao { get; set; } = string.Empty;

        [Required]
        [Column(TypeName = "decimal(18,2)")]
        public decimal Preco { get; set; }

    }
}
