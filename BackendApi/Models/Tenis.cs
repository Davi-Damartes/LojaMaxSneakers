using System.ComponentModel.DataAnnotations;

namespace BackendApi.Models
{
    public class Tenis : Entity
    {
        [Required]
        [StringLength(80, ErrorMessage = "Limite de 80 caracteres")]
        public string Nome { get; set; } = string.Empty;

        [Required]
        [Range(0, 10000, ErrorMessage = "O preço deve ser um valor positivo.")]
        public decimal Preco { get; set; }

    }
}
