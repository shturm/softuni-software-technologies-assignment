using System;
using System.Configuration;
using System.IO;
using System.Threading.Tasks;
using System.Diagnostics;
using System.Net;

using System.Net.Http;
using System.Web;
using System.Linq;
using System.Web.Http;
using MonoWebApi.Domain;
using MonoWebApi.Domain.Entities;
using NHibernate;
using System.Collections.Generic;

namespace MonoWebApi.Infrastructure.WebApi.Controllers
{
	[Authorize ()]
	public class ProductController : ApiController
	{
		IProductService _productService;

		public ProductController (IProductService productService)
		{
			_productService = productService;
		}

		[HttpPost]
		[Route("api/product")]
		[Authorize(Roles = "Admin")]
		public Product CreateProduct (Product prod)
		{
			_productService.Update (prod);

			return prod;
		}


		[HttpGet]
		[Route ("api/product")]
		public IEnumerable<Product> GetAll ([FromUri]string term = null)
		{
			IEnumerable<Product> products = _productService.GetAll (term);
			return products;
		}

		[HttpDelete]
		[Route ("api/product")]
		[Authorize(Roles="Admin")]
		public IHttpActionResult DeleteProduct([FromUri]int productId)
		{
			_productService.DeleteById (productId);
			return Ok ();
		}


		[HttpPut]
		[Route ("api/product")]
		[Authorize (Roles = "Admin")]
		public void UpdateProduct (Product p)
		{
			_productService.Update (p);

			// NHibernate automapping wont work because SKU is not PK
			// and its not worth doing automatic mapping for 2 properties
			//var product = _productService.FindBySku (p.SKU);
			//product.Name = p.Name;
			//product.Price = p.Price;
			//_productService.Update (product);
		}
	}
}