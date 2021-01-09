package com.matheushenrique.dsdeliver.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.matheushenrique.dsdeliver.dto.ProductDTO;
import com.matheushenrique.dsdeliver.entities.Product;
import com.matheushenrique.dsdeliver.repositories.ProductRepository;

@Service
public class ProductService {

	@Autowired
	ProductRepository productRepository;
	
	@Transactional(readOnly = true)
	public List<ProductDTO > findAll(){
		List<Product> products = productRepository.findAllByOrderByNameAsc();
		
		//products.sort((p1,p2) -> p1.getName().compareTo(p2.getName()));;
		
		return products.stream().map(product -> new ProductDTO(product)).collect(Collectors.toList());
	}
}
