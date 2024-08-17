using BackendApi.Models;
using BackendApi.Service;
using Microsoft.AspNetCore.Mvc;


namespace BackendApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TenisController : ControllerBase
    {
        private readonly ITenisService _tenisService;
        public TenisController(ITenisService tenisService)
        {
            _tenisService = tenisService;
        }


        [HttpGet("{Id:Guid}")]
        public async Task<ActionResult<Tenis>> ObterUmTenis(Guid Id)
        {
            var tenis = await _tenisService.ObterTenisPorId(Id);
            if(tenis == null)
            {
                return NotFound("Tênis não encontrado");
            }
            return Ok(tenis);
        }
        
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tenis>>> ObterTenis()
        {
            var tenis = await _tenisService.ObterTenis();
            if(tenis == null)
            {
                return NotFound();
            }
            return Ok(tenis);
        }



    }
}
