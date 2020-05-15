using System;
using YouLearn.Domain.Arguments.Usuario;
using YouLearn.Domain.Services;

namespace YouLearn.App
{
    class Program
    {
        static void Main(string[] args)
        {
            AdicionarUsuarioResquest request = new AdicionarUsuarioResquest()
            {
                Email = "elissandros667@gmail.com",
                PrimeiroNome = "Elissandro",
                UltimoNome = "Silva",
                Senha = "1234"
            };

            var response = new ServiceUsuario().AdicionarUsuario(request);


            Console.ReadKey();
        }
    }
}
