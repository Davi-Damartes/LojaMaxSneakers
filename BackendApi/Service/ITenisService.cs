using BackendApi.Models;

namespace BackendApi.Service
{
    public interface ITenisService
    {
        Task<Tenis> ObterTenisPorId(Guid Id);
        Task<IEnumerable<Tenis>> ObterTenis();
        Task AdicionarTenis(Tenis tenis);
        Task EditarTenis(Tenis tenis);
        Task DeletarTenis(Tenis tenis);

    }
}
