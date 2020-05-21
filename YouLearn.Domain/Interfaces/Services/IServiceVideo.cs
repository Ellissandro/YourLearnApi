using System;
using System.Collections.Generic;
using System.Text;
using YouLearn.Domain.Arguments.Base;
using YouLearn.Domain.Arguments.Canal;
using YouLearn.Domain.Arguments.Usuario;
using YouLearn.Domain.Arguments.Video;
using YouLearn.Domain.Interfaces.Services.Base;

namespace YouLearn.Domain.Interfaces.Services
{
    public interface IServiceVideo : IServiceBase
    {
        AdicionarVideoResponse AdicionarVideo(AdicionarVideoRequest request, Guid idUsuario);
        IEnumerable<VideoReponse> Listar(string tags);
        IEnumerable<VideoReponse> Listar(Guid idPlayList);
    }
}
