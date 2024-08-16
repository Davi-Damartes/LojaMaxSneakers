namespace BackendApi.Models
{
    public class Marca
    {
        public string NomeMarca { get; set; } = string.Empty;
        public List<Tenis> Tenis { get; set; } = new();
    }
}
