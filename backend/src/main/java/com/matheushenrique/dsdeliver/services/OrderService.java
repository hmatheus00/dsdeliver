package com.matheushenrique.dsdeliver.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.matheushenrique.dsdeliver.dto.OrderDTO;
import com.matheushenrique.dsdeliver.entities.Order;
import com.matheushenrique.dsdeliver.repositories.OrderRepository;

@Service
public class OrderService {

	@Autowired
	OrderRepository orderRepository;
	
	@Transactional(readOnly = true)
	public List<OrderDTO > findAll(){
		List<Order> orders = orderRepository.findOrdersWithProducts();
		
		//products.sort((p1,p2) -> p1.getName().compareTo(p2.getName()));;
		
		return orders.stream().map(order -> new OrderDTO(order)).collect(Collectors.toList());
	}
}
