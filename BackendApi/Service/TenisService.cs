using BackendApi.Data;
using BackendApi.Models;
using Microsoft.EntityFrameworkCore;

namespace BackendApi.Service
{
    public class TenisService : ITenisService
    {
        public readonly AppDbContext _context;

        public TenisService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Tenis>> ObterTenis( )
        {
            return await _context.Tenis.AsNoTracking(). ToListAsync();
        }

        public async Task<Tenis> ObterTenisPorId(Guid Id)
        {
            return await _context.Tenis.FindAsync(Id) ?? null!;
        }
        public async Task AdicionarTenis(Tenis tenis)
        {
            _context.Tenis.Add(tenis);
            await _context.SaveChangesAsync();
        }

        public async Task EditarTenis(Tenis tenis)
        {
            _context.Entry(tenis).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }


        public async Task DeletarTenis(Tenis tenis)
        {
            _context.Tenis.Remove(tenis);
            await _context.SaveChangesAsync();
        }

        
    }
}
