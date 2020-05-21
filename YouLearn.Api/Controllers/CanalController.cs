using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using YouLearn.Domain.Arguments.Canal;
using YouLearn.Domain.Arguments.Usuario;
using YouLearn.Domain.Entities;
using YouLearn.Domain.Interfaces.Services;
using YouLearn.Infra.Persistence.EF;
using YouLearn.Infra.Transactions;

namespace YouLearn.Api.Controllers
{
    public class CanalController : Base.ControllerBase
    {
        private readonly YouLearnContext _context;
        private readonly IServiceCanal _serviceCanal;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public CanalController(IHttpContextAccessor httpContextAccessor, IUnitOfWork unityOfWork, IServiceCanal serviceCanal, YouLearnContext context) : base(unityOfWork)
        {
            _serviceCanal = serviceCanal;
            _httpContextAccessor = httpContextAccessor;
            _context = context;
        }
      
        [HttpGet]
        [Route("api/v1/Canal/Listar")]
        public async Task<IActionResult> Listar()
        {
            try
            {
                var usuarioClaims = _httpContextAccessor.HttpContext.User.FindFirst("Usuario").Value;
                var result = JsonConvert.DeserializeObject<AutenticarUsuarioResponse>(usuarioClaims);
                var response = _serviceCanal.Listar(result.Id);

                return await ResponseAsync(response, _serviceCanal);
            }
            catch (Exception ex)
            {
                return await ResponseExceptionAsync(ex);

            }
        }

        [HttpPost]
        [Route("api/v1/Canal/Adicionar")]
        public async Task<IActionResult> Adicionar([FromBody]AdicionarCanalRequest request)
        {
            try
            {
                string usuarioClaims = _httpContextAccessor.HttpContext.User.FindFirst("Usuario").Value;
                AutenticarUsuarioResponse usuarioResponse = JsonConvert.DeserializeObject<AutenticarUsuarioResponse>(usuarioClaims);

                var response = _serviceCanal.AdicionarCanal(request, usuarioResponse.Id);

                return await ResponseAsync(response, _serviceCanal);
            }
            catch (Exception ex)
            {
                return await ResponseExceptionAsync(ex);
            }
        }

        [HttpDelete]
        [Route("api/v1/Canal/Excluir/{id:Guid}")]
        public async Task<IActionResult> Excluir(Guid id)
        {
            try
            {
                var response = _serviceCanal.ExcluirCanal(id);

                return await ResponseAsync(response, _serviceCanal);
            }
            catch (Exception ex)
            {
                return await ResponseExceptionAsync(ex);
            }
        }
    }
}
