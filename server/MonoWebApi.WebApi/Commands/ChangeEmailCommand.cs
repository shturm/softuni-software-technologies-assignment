using System;
using System.ComponentModel.DataAnnotations;

namespace MonoWebApi.Infrastructure.WebApi
{
	public class ChangeEmailCommand
	{
		[Required]
		[EmailAddress]
		public string Email { get; set; }
	}
}

