package com.matheushenrique.dsdeliver.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.matheushenrique.dsdeliver.dto.OrderDTO;
import com.matheushenrique.dsdeliver.dto.ProductDTO;
import com.matheushenrique.dsdeliver.entities.Order;
import com.matheushenrique.dsdeliver.entities.OrderStatus;
import com.matheushenrique.dsdeliver.entities.Product;
import com.matheushenrique.dsdeliver.repositories.OrderRepository;
import com.matheushenrique.dsdeliver.repositories.ProductRepository;

@Service
public class OrderService {

	@Autowired
	ProductRepository productRepository;
	
	@Autowired
	OrderRepository orderRepository;
	
	
	@Transactional(readOnly = true)
	public List<OrderDTO > findAll(){
		List<Order> orders = orderRepository.findOrdersWithProducts();		
		return orders.stream().map(order -> new OrderDTO(order)).collect(Collectors.toList());
	}
	
	@Transactional
	public OrderDTO insert(OrderDTO dto) {
		
		Order order = new Order(null, dto.getAddress(), dto.getLatitude(), dto.getLongitude(), Instant.now(), OrderStatus.PENDING);
		
		for(ProductDTO p : dto.getProducts()) {
			Product prod = productRepository.getOne(p.getId());
			order.getProducts().add(prod);
		}
		
		order = orderRepository.save(order);
		
		return new OrderDTO(order);
	
	}
}
