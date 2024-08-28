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


        [HttpGet("BuscarPorId/{Id:Guid}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Tenis>> ObterUmTenis(Guid Id)
        {
            var tenis = await _tenisService.ObterTenisPorId(Id);
            if(tenis == null)
            {
                return NotFound("Tênis não encontrado!");
            }

            return Ok(tenis);
        }
        
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<IEnumerable<Tenis>>> ObterTenis()
        {
            var tenis = await _tenisService.ObterTenis();
            if(tenis == null)
            {
                return NotFound("Tênis não encontrado!");
            }

            return Ok(tenis);
        }


        [HttpPost("AdicionarTenis")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Tenis>> AddTenis(Tenis tenis)
        {
            Tenis tenisCadastrado = await _tenisService.ObterTenisPorId(tenis.Id);

            if (tenisCadastrado != null)
            {
                return BadRequest("Tênis já cadastrado!");
            }

            await _tenisService.AdicionarTenis(tenis);
            return Created($"Tenis Adicionado com sucesso!", tenis);
        } 
        
        [HttpPut("Editar/{Id:Guid}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult> EditarTenis(Guid Id, Tenis tenis)
        {
            Tenis tenisCadastrado = await _tenisService.ObterTenisPorId(Id);

            if (tenisCadastrado == null)
            {
                return NotFound("Tênis não encontrado!");
            }
            tenisCadastrado.Nome = tenis.Nome;
            tenisCadastrado.Preco = tenis.Preco;
            tenisCadastrado.Descricao = tenis.Descricao;

            await _tenisService.EditarTenis(tenisCadastrado);
            return Ok($"Tenis com id={tenis.Id} foi atualizado com sucesso!");
        }


        [HttpDelete("ExcluirTenis/{Id:Guid}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult> ExcluitTenisPorId(Guid Id)
        {
            Tenis tenisCadastrado = await _tenisService.ObterTenisPorId(Id);

            if (tenisCadastrado == null)
            {
                return NotFound("Tênis não encontrado!");
            }

            await _tenisService.DeletarTenis(tenisCadastrado);
            return Ok($"Tenis com id={tenisCadastrado.Id} foi excluído com sucesso!");
        }
    }
}
