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
	[Authorize (Roles = "Admin")]
	public class ProductController : ApiController
	{
		IProductService _productService;

		public ProductController (IProductService productService)
		{
			_productService = productService;
		}

		[HttpPost]
		[Route("api/product")]
		public Product CreateProduct (Product prod)
		{
			_productService.Update (prod);

			return prod;
		}

		[HttpDelete]
		[Route ("api/product/deleteimage/{imageId}")]
		public IHttpActionResult DeleteImage (int imageId)
		{
			try {
				_productService.RemoveImage (imageId);
				return Ok ();
			} catch (StaleStateException ex) {
				return NotFound ();
			}
		}

		[HttpGet]
		[Route("api/product")]
		public Product GetBySku([FromUri]string sku)
		{
			return _productService.FindBySku (sku);
		}

		[HttpGet]
		[Route ("api/product")]
		[Authorize]
		public IEnumerable<Product> GetAll ([FromUri]string term = null)
		{
			IEnumerable<Product> products = _productService.GetAll (term);
			return products;
		}

		[HttpPost]
		[Route ("api/product/{productId}/image")]
		public Task<List<int>> AddImagesToProduct (int productId, bool isThumbnail = false)
		{
			if (!Request.Content.IsMimeMultipartContent ()) {
				throw new HttpResponseException (HttpStatusCode.UnsupportedMediaType);
			}
			List<int> imageIds = new List<int> ();
			string root = "/tmp/daidakaram";
			if (!Directory.Exists (root)) Directory.CreateDirectory (root);

			var streamProvider = new MultipartFormDataStreamProvider (root);

			var task = Request.Content.ReadAsMultipartAsync (streamProvider).
			  ContinueWith (srTask => {
				  if (srTask.IsFaulted || srTask.IsCanceled) {
					  Request.CreateErrorResponse (HttpStatusCode.InternalServerError, srTask.Exception);
				  }

				  if (isThumbnail) {
					  _productService.SetThumbnail (productId, new Image () {
						  Bytes = File.ReadAllBytes (srTask.Result.FileData.FirstOrDefault ().LocalFileName)
					  });
				  }

				  foreach (MultipartFileData f in srTask.Result.FileData) {
					  var image = new Image () { Bytes = File.ReadAllBytes (f.LocalFileName) };
					  _productService.AddImage (productId, image);
					  imageIds.Add (image.Id);
				  }

				  return imageIds;
			  });

			return task;
		}

		[HttpPut]
		[Route ("api/product/{productId}/ChangeThumbnail/photoIndex")]
		public void ChangeThumbnail (int productId, int photoIndex)
		{
			_productService.ChangeThumbnail (productId, photoIndex);
		}

		[HttpPut]
		[Route ("api/product")]
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