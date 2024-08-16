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


        [HttpGet]
        public async Task<IActionResult> ObterTenis( )
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
